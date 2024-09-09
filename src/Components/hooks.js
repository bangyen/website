import { useState, useEffect, useRef, useCallback } from 'react';

function getWindow() {
    const {
        innerWidth: width,
        innerHeight: height
    } = window;

    return {width, height};
}

function containerHandler(container) {
    container ||= {};

    return () => {
        const {current} = container;

        if (current) {
            return {
                width: current.offsetWidth,
                height: current.offsetHeight
            };
        }

        return getWindow();
    };
}

function useSize(getSize) {
    const [size, setSize]
        = useState(getSize());

    useEffect(() => {
        function handleResize() {
            setSize(getSize());
        }

        window.addEventListener(
            'resize', handleResize
        );

        return () => window.removeEventListener(
            'resize', handleResize
        );
    }, [getSize]);

    return {size, setSize};
}

export function useContainer(container) {
    const getContainer
        = containerHandler(container);

    const {size, setSize}
        = useSize(getContainer);

    useEffect(() => {
        setSize(getContainer());
    }, [getContainer, setSize]);

    return size;
}

export function useWindow() {
    const {size}
        = useSize(getWindow);

    return size;
}

export function useTimer(delay) {
    const repeat = useRef(null);
    const timer  = useRef(null);
    const speed  = useRef(delay);

    const create = useCallback(
        ({repeat: newRepeat, speed: newSpeed}) => {
            repeat.current = newRepeat || repeat.current;
            speed.current  = newSpeed  || speed.current;

            timer.current
                = setInterval(
                    repeat.current,
                    speed.current);
        }, []);

    const clear  = useCallback(() => {
        clearInterval(timer.current);
    }, []);

    useEffect(() => {
        return () =>
            clearInterval(
                timer.current);
    }, []);

    return {create, clear};
}

export function useKeys() {
    const oldHandler = useRef(null);

    const create = useCallback(
        handler => {
            oldHandler.current = handler;

            document.addEventListener(
                'keydown', handler);
        }, []);

    const clear  = useCallback(
        handler => {
            handler ||= oldHandler.current;

            document.removeEventListener(
                'keydown', handler);
        }, []);

    useEffect(() => {
        return () =>
            document.removeEventListener(
                'keydown', oldHandler.current);
    }, []);

    return {create, clear};
}
