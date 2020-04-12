module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){e.exports=t(2)()},function(e,n){e.exports=require("react")},function(e,n,t){"use strict";var r=t(3);function o(){}function l(){}l.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,l,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:l,resetWarningCache:o};return t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),l=t(0),a=t.n(l),c=function(e){var n=e.cell,t=e.children,r=n.layout||{colspan:1,rowspan:1};return o.a.createElement("div",{className:"crystallize-grid-cell",style:{"grid-column":"span ".concat(r.colSpan),"grid-row":"span ".concat(r.rowSpan)}},t)};c.propTypes={cell:a.a.object,children:a.a.any};var u=c;function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=function(e){var n=e.cellComponent,t=e.cells,r=e.children,l=e.totalColSpan,a=void 0===l?4:l,c=i(e,["cellComponent","cells","children","totalColSpan"]),f=n;return o.a.createElement("div",p({style:{display:"grid","grid-template-columns":"repeat(".concat(a,", 1fr)")}},c),r?r({cells:t}):t.map(function(e,n){return o.a.createElement(u,{key:"cell-".concat(n)},o.a.createElement(f,{cell:e}))}))};f.propTypes={cellComponent:a.a.oneOfType([a.a.node,a.a.func]),cells:a.a.arrayOf(a.a.object).isRequired,children:a.a.func,totalColSpan:a.a.number};var s=f,y=function(e){var n=e.cell,t=e.children,r=n.layout||{colspan:1,rowspan:1};return o.a.createElement("td",{rowSpan:r.rowspan,colSpan:r.colspan},t)};y.propTypes={cell:a.a.object,children:a.a.any};var d=y;function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=function(e){var n=e.cellComponent,t=e.children,r=e.renderCellContent,l=e.rows,a=e.totalColSpan,c=void 0===a?4:a,u=m(e,["cellComponent","children","renderCellContent","rows","totalColSpan"]),p=n||d;return o.a.createElement("table",u,o.a.createElement("thead",null,o.a.createElement("tr",null,new Array(c).fill(0).map(function(e,n){return o.a.createElement("th",{key:"th-".concat(n)})}))),o.a.createElement("tbody",null,t?t({rows:l}):l.map(function(e,n){return o.a.createElement("tr",{key:"row-".concat(n)},e.columns.map(function(e,t){return o.a.createElement(p,{key:"cell-".concat(n,"-").concat(t),cell:e},r&&r(e))}))})))};b.propTypes={cellComponent:a.a.oneOfType([a.a.node,a.a.func]),children:a.a.func,renderCellContent:a.a.func,rows:a.a.arrayOf(a.a.object),totalColSpan:a.a.number};var O=b;function v(){return(v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function C(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"Grid",function(){return s}),t.d(n,"Table",function(){return O});var h=function(e){var n=e.cellComponent,t=e.children,r=e.model,l=e.renderCellContent,a=e.type,c=void 0===a?"grid":a,u=C(e,["cellComponent","children","model","renderCellContent","type"]),p=r.rows;if(!p.length)return null;var i=function(e){return{totalColSpan:e[0].columns.reduce(function(e,n){return e+n.layout.colspan},0)}}(p).totalColSpan;if("table"===c)return o.a.createElement(O,{cellComponent:n,renderCellContent:l,rows:p,totalColSpan:i},t);var f=p.map(function(e){return e.columns}),y=[].concat.apply([],f);return o.a.createElement(s,v({cellComponent:n,cells:y,renderCellContent:l,totalColSpan:i},u),t)};h.propTypes={cellComponent:a.a.oneOfType([a.a.node,a.a.func]),children:a.a.func,model:a.a.oneOfType([a.a.object,a.a.arrayOf(a.a.object)]).isRequired,renderCellContent:a.a.func,type:a.a.string};n.default=h}]);