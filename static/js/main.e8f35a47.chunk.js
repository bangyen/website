(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var r=n(24),c=n.n(r),s=n(1),i=n.n(s),a=n(8),l=n(15),o=n(16),u=n(9),h=n(18),d=n(17),b=n(10),j=n(7),f=n(0);function p(){var t=window.innerHeight,e=window.innerWidth;t=Math.round(t/50),e=Math.round(e/50);var n=Object(b.a)(Array(t)).map((function(t){return Array(e).fill(0)})),r=Math.floor(Math.random()*t),c=Math.floor(Math.random()*e);return n[r][c]=-1,n}var v=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var r;Object(l.a)(this,n),(r=e.call(this,t)).updateDim=r.updateDim.bind(Object(u.a)(r)),r.changeDir=r.changeDir.bind(Object(u.a)(r));var c=p();return r.state={row:c.length,col:c[0].length,len:3,pos:[0,0],vel:[0,1],arr:c,move:!0,buff:null},r}return Object(o.a)(n,[{key:"randomPos",value:function(){var t,e,n=Object(b.a)(this.state.arr),r=this.state.row,c=this.state.col;do{t=Math.floor(Math.random()*r),e=Math.floor(Math.random()*c)}while(n[t][e]);n[t][e]=-1,this.setState({arr:n})}},{key:"updateDim",value:function(){var t=p();this.setState({row:t.length,col:t[0].length,arr:t})}},{key:"changeDir",value:function(t){var e,n=t.key.toLowerCase(),r=this.state.vel;if("arrowleft"===n||"a"===n)e=[0,-1];else if("arrowright"===n||"d"===n)e=[0,1];else if("arrowup"===n||"w"===n)e=[-1,0];else{if("arrowdown"!==n&&"s"!==n)return;e=[1,0]}this.state.move?r[0]+e[0]&&this.setState({vel:e,move:!1}):this.setState({buff:e})}},{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.move()}),100),document.title="Snake",document.addEventListener("keydown",this.changeDir,!1),this.updateDim(),window.addEventListener("resize",this.updateDim)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID),document.removeEventListener("keydown",this.changeDir,!1),window.removeEventListener("resize",this.updateDim)}},{key:"move",value:function(){var t=Object(a.a)(this.state.pos,2),e=t[0],n=t[1],r=Object(a.a)(this.state.vel,2),c=r[0],s=r[1],i=this.state,l=i.row,o=i.col,u=this.state.arr.map((function(t){return t.map((function(t){return t>0?t-1:t}))}));if(n=(n+s+o)%o,u[e=(e+c+l)%l][n]>0){var h=u[e][n];this.setState({len:this.state.len-h}),u=u.map((function(t){return t.map((function(t){return t>h?t-h:-(t<0)}))}))}else u[e][n]<0&&(this.setState({len:this.state.len+1}),this.randomPos(),u=this.state.arr.map((function(t){return t.map((function(t){return t>0?t+1:-(t<0)}))})));u[e][n]=this.state.len;var d=this.state.buff;d&&this.setState({buff:null,vel:d}),this.setState({move:!0,pos:[e,n],arr:u})}},{key:"render",value:function(){return Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("table",{style:{height:"85vh",width:"95vw"},children:Object(f.jsx)("tbody",{children:this.state.arr.map((function(t,e){return Object(f.jsx)("tr",{children:t.map((function(t,e){return Object(f.jsx)("td",{bgcolor:t>0?"white":t<0?"red":"black",style:{cursor:"default"},children:Object(f.jsx)("div",{children:"\xa0"})})}))})}))})}),Object(f.jsx)(j.b,{to:"/",style:{marginBottom:"20px"},children:Object(f.jsx)("button",{className:"custom",type:"button",children:"\ud83c\udfe0\ufe0e"})})]})}}]),n}(i.a.Component),m=n(26);function O(t){var e=Array(t).fill(" ");return e.map((function(t){return Object(b.a)(e)}))}function x(t,e){return null===t||null===e?t===e:t[0]===e[0]&&t[1]===e[1]}function y(t,e){return t.some((function(t){return x(t,e)}))}function k(t){var e=t.run,n=t.set,r=t.arr;return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{className:"custom",type:"button",onClick:e("run"),children:"\u25b6"}),Object(f.jsx)("button",{className:"custom",type:"button",onClick:e("back"),children:"\xa0\u276e\xa0"}),Object(f.jsx)("button",{className:"custom",type:"button",onClick:e("fore"),children:"\xa0\u276f\xa0"}),Object(f.jsx)("button",{className:"custom",type:"button",onClick:function(){return n({curr:{select:null,pointer:null,breaks:[]},output:{tape:[],cell:0}})},children:"\u2716"}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{className:"custom",type:"button",onClick:function(){var t=r.length+1;r.map((function(t){return t.push(" ")})),r.push(Array(t).fill(" ")),n({size:t,grid:r})},children:"\u2795\ufe0e"}),Object(f.jsx)("button",{className:"custom",type:"button",onClick:function(){var t=r.length-1;t&&(r.pop(),r.map((function(t){return t.pop()})),n({size:t,grid:r}))},children:"\u2796\ufe0e"}),Object(f.jsx)("button",{className:"custom",type:"button",onClick:function(){navigator.clipboard.writeText(r.map((function(t){return t.join("")})).join("\n"))},children:"\ud83d\udce5\ufe0e"}),Object(f.jsx)(j.b,{to:"/",children:Object(f.jsx)("button",{className:"custom",type:"button",children:"\ud83c\udfe0\ufe0e"})})]})}var g=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var r;Object(l.a)(this,n),(r=e.call(this,t)).changeText=r.changeText.bind(Object(u.a)(r));return r.state={output:{tape:[]},grid:O(5),size:5,curr:{select:null,pointer:null,breaks:[]}},r}return Object(o.a)(n,[{key:"runCode",value:function(t){return function(){var e,n=this.state.curr;if(n.select=null,this.state.grid.every((function(t){return!t.includes("*")})))return alert("No halt instruction detected!"),void this.setState({curr:n});if(null===n.pointer&&(this.func=function(t){var e=t.length,n=t[0].length,r=[{end:!1,pos:[0,0],vel:[0,1],tape:[0],cell:0}],c=0;return function(){var s=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=r[r.length-1];if(s&&c?c-=1:s||i.end||(c+=1),c<r.length)return r[c];var l=i,o=l.tape,u=l.cell,h=l.end,d=Object(a.a)(i.pos,2),j=d[0],f=d[1],p=Object(a.a)(i.vel,2),v=p[0],m=p[1],O=t[j][f];if(o=Object(b.a)(o),"\\"===O){var x=[m,v];v=x[0],m=x[1]}else if("/"===O){var y=[-m,-v];v=y[0],m=y[1]}else if("<"===O&&u)u-=1;else if(">"===O)(u+=1)===o.length&&o.push(0);else if("-"===O)o[u]^=1;else if("+"!==O||o[u])"*"===O&&(h=!0);else{var k=[j+v,f+m];j=k[0],f=k[1]}return i={pos:[j=(j+v)%e,f=(f+m)%n],vel:[v,m],tape:o,cell:u,end:h},r.push(i),i}}(this.state.grid),"run"!==t))return n.pointer=[0,0],void this.setState({curr:n,output:{tape:[0],cell:0}});if(this.setState({curr:n}),"run"===t)do{e=this.func()}while(!y(this.state.curr.breaks,e.pos)&&!e.end);else"fore"===t?e=this.func():"back"===t&&(e=this.func(!0));var r=e,c=r.pos,s=r.end,i=r.tape,l=r.cell;n.pointer=s?null:c,this.setState({curr:n,output:{tape:i,cell:l}})}.bind(this)}},{key:"changeText",value:function(t){var e=this.state.curr;if(null!==e.select){var n,r=this.state.grid,c=Object(a.a)(e.select,2),s=c[0],i=c[1];if("b"===t.key.toLowerCase()){var l=Object(m.a)({},this.state.curr),o=l.breaks,u=l.select;return y(o,u)?l.breaks=o.filter((function(t){return!x(t,u)})):o.push(u),void this.setState({curr:l})}if(1===t.key.length)n=t.key;else{if("Backspace"!==t.key&&"Delete"!==t.key){if(t.key.includes("Arrow")){t.key.includes("Left")?i-=1:t.key.includes("Right")?i+=1:t.key.includes("Up")?s-=1:s+=1;var h=this.state.size;return s=(s+h)%h,i=(i+h)%h,e.select=[s,i],void this.setState({curr:e})}return}n=" "}r[s][i]=n,this.setState({grid:r})}}},{key:"changeColor",value:function(t){return function(){var e=this.state.curr;e.select=x(e.select,t)?null:t,this.setState({curr:e})}}},{key:"chooseColor",value:function(t){var e=this.state.curr;return x(e.select,t)?"grey":x(e.pointer,t)?"red":y(e.breaks,t)?"yellow":"white"}},{key:"componentDidMount",value:function(){document.title="Interpreter",document.addEventListener("keydown",this.changeText,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.changeText,!1)}},{key:"tile",value:function(t,e,n){var r=[e,n];return Object(f.jsx)("td",{onClick:this.changeColor(r).bind(this),bgcolor:this.chooseColor(r),children:Object(f.jsxs)("div",{children:["\xa0",t,"\xa0"]})})}},{key:"render",value:function(){var t=this;return Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("div",{className:"split left",children:Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)("table",{children:Object(f.jsx)("tbody",{children:this.state.grid.map((function(e,n){return Object(f.jsx)("tr",{children:e.map((function(e,r){return t.tile(e,n,r)}))})}))})})})}),Object(f.jsx)("div",{className:"split right",children:Object(f.jsxs)("div",{className:"centered",children:[Object(f.jsx)("code",{children:"Instructions:"}),Object(f.jsxs)("ul",{style:{fontSize:"75%",textAlign:"left"},children:[Object(f.jsx)("li",{children:"Click to select/unselect"}),Object(f.jsx)("li",{children:"Type to change selected cell"}),Object(f.jsxs)("li",{children:["Commands located\xa0",Object(f.jsx)("a",{href:"https://esolangs.org/wiki/Back",children:"here"})]})]}),Object(f.jsx)(k,{run:function(e){return t.runCode(e)},set:function(e){return t.setState(e)},arr:this.state.grid}),Object(f.jsx)("br",{}),Object(f.jsx)("code",{children:"Output:"}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"output",children:[Object(f.jsx)("code",{children:"\xa0"}),this.state.output.tape.map((function(e,n){var r=t.state.output.cell===n?"red":"white";return Object(f.jsxs)("code",{style:{color:r},children:[e,"\xa0"]})}))]})]})})]})}}]),n}(i.a.Component);function w(){return document.title="Home",Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("h1",{children:"Bangyen"}),Object(f.jsxs)("div",{children:[Object(f.jsx)(j.b,{to:"/back",children:Object(f.jsx)("button",{className:"custom",type:"button",children:"Interpreter"})}),Object(f.jsx)(j.b,{to:"/snake",children:Object(f.jsx)("button",{className:"custom",type:"button",children:"Snake"})}),Object(f.jsx)("form",{action:"https://github.com/bangyen",style:{display:"inline-block"},children:Object(f.jsx)("input",{type:"submit",value:"GitHub",className:"custom"})})]})]})}n(37),n(38);var N=n(2);function S(){return Object(f.jsx)(j.a,{basename:"/",children:Object(f.jsx)("div",{children:Object(f.jsxs)(N.c,{children:[Object(f.jsx)(N.a,{path:"/back",children:Object(f.jsx)(g,{})}),Object(f.jsx)(N.a,{path:"/snake",children:Object(f.jsx)(v,{})}),Object(f.jsx)(N.a,{path:"/",children:Object(f.jsx)(w,{})})]})})})}c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e8f35a47.chunk.js.map