import { useEffect, useRef, useCallback, useReducer } from 'react';
import Editor, { EditorContext, TextArea } from '../Editor';
import { useTimer, useCache } from '../../hooks';

function startTimer(state, payload) {
    const {
        nextIter,
        dispatch,
        create
    } = payload;

    const repeat = () => {
        dispatch({
            type: 'timer',
            payload});
    };

    const initial =
        {...state, end: false}

    nextIter({
        type: 'clear',
        payload: initial});

    create({repeat});
    return {pause: false};
}

function handleAction(state, action) {
    const { type, payload }   = action;
    const { nextIter, clear } = payload;
    let   newState  = {};

    const update = (type, flag) => {
        const { nextIter } = payload;

        if (flag)
            clear();

        const result
            = nextIter({
                type});

        return {
            ...result,
            select: null};
    };

    switch (type) {
        case 'run':
            newState = startTimer(
                state, payload);
            break;
        case 'timer':
            const newType = state.end
                ? 'stop' : 'next';

            payload.dispatch({
                type: newType,
                payload});
            break;
        case 'stop':
            newState.pause = true;
            clear();
            break;
        case 'reset':
            const {
                start
            } = payload;

            clear();

            newState = nextIter({
                type: 'clear',
                payload: {
                    ...state,
                    ...start}});
            newState.pause = true;
            break;
        case 'prev':
            newState = update(
                'prev', true);
            newState.pause = true;
            break;
        case 'next':
            newState = update(
                'next', false);
            break;
        case 'ff':
            do {
                newState = update(
                    'next', false);
            } while (!newState.end);
            newState.pause = true;
            break;
        case 'edit':
            const {
                newText,
                clean
            } = payload;

            newState = {
                ...state,
                text: newText,
                code: clean(
                    newText)
            };

            clear();
            nextIter({
                type: 'clear',
                payload: newState});
            newState.pause = true;
            break;
        default:
            break;
    }

    return {
        ...state,
        ...newState
    };
}

export default function TextEditor(props) {
    const {create, clear} = useTimer(200);

    const {
        runner,
        clean,
        name,
        start,
        tape,
        output,
        register
    } = props;

    const nextIter  = useCache(runner);
    const container = useRef(null);

    const initial = {
        ...start,
        pause: true,
        text: '',
        code: ''};

    const [state, dispatch]
        = useReducer(
            handleAction,
            initial);

    const handleChange
        = useCallback(
            event => {
                const newText
                    = event.target.value;

                dispatch({
                    type: 'edit',
                    payload: {
                        nextIter,
                        newText,
                        clean,
                        clear}
                });
            }, [nextIter,
                dispatch,
                clean,
                clear]);

    useEffect(() => {
        document.title = name 
            + ' Interpreter | Bangyen';
    }, [name]);

    const wrapDispatch = useCallback(
        type => () => {
            const payload = {
                start,
                nextIter,
                dispatch,
                create,
                clear
            };

            dispatch({type, payload});
        }, [start,
            nextIter,
            create,
            clear]);

    const context = {
        name,
        ...state,
        handleChange,
        dispatch: wrapDispatch,
        fastForward: true,
        tapeFlag: tape,
        outFlag:  output,
        regFlag:  register,
        pause:    state.pause,
        container
    };

    return (
        <EditorContext.Provider
                value={context}>
            <Editor>
                <TextArea />
            </Editor>
        </EditorContext.Provider>
    );
}