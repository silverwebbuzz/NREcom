(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"4RuT":function(t,e,n){"use strict";n.r(e),n.d(e,"ion_spinner",function(){return o});var r=n("3eIi"),s=n("lSdy"),i=n("fXh5"),a={lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":t*e/n-t+"ms"}}}},bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var r=t*e/n-t+"ms",s=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var r=e/n,s=t*r-t+"ms",i=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}}},o=function(){function t(t){Object(r.m)(this,t),this.paused=!1}return t.prototype.getName=function(){var t=this.name||s.b.get("spinner"),e=Object(r.e)(this);return t||("ios"===e?"lines":"crescent")},t.prototype.render=function(){var t,e=Object(r.e)(this),n=this.getName(),o=a[n]||a.lines,f="number"==typeof this.duration&&this.duration>10?this.duration:o.dur,m=[];if(void 0!==o.circles)for(var p=0;p<o.circles;p++)m.push(l(o,f,p,o.circles));else if(void 0!==o.lines)for(p=0;p<o.lines;p++)m.push(c(o,f,p,o.lines));return Object(r.i)(r.a,{class:Object.assign({},Object(i.a)(this.color),(t={},t[e]=!0,t["spinner-"+n]=!0,t["spinner-paused"]=!!this.paused||s.b.getBoolean("_testing"),t))},m)},Object.defineProperty(t,"style",{get:function(){return":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}"},enumerable:!0,configurable:!0}),t}(),l=function(t,e,n,s){var i=t.fn(e,n,s);return i.style["animation-duration"]=e+"ms",Object(r.i)("svg",{viewBox:"0 0 64 64",style:i.style},Object(r.i)("circle",{transform:"translate(32,32)",r:i.r}))},c=function(t,e,n,s){var i=t.fn(e,n,s);return i.style["animation-duration"]=e+"ms",Object(r.i)("svg",{viewBox:"0 0 64 64",style:i.style},Object(r.i)("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))}}}]);