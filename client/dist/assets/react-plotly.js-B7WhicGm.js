import{p as M,g as I}from"./plotly.js-basic-dist-hD-yW4Zm.js";import{r as T}from"./react-Bswn7Xpn.js";import{p as B}from"./prop-types-BKNjMPK8.js";var O={},R={};(function(p){function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(t)}Object.defineProperty(p,"__esModule",{value:!0}),p.default=L;var v=y(T),u=_(B);function _(t){return t&&t.__esModule?t:{default:t}}function m(t){if(typeof WeakMap!="function")return null;var n=new WeakMap,o=new WeakMap;return(m=function(s){return s?o:n})(t)}function y(t,n){if(t&&t.__esModule)return t;if(t===null||h(t)!=="object"&&typeof t!="function")return{default:t};var o=m(n);if(o&&o.has(t))return o.get(t);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)){var e=s?Object.getOwnPropertyDescriptor(t,r):null;e&&(e.get||e.set)?Object.defineProperty(i,r,e):i[r]=t[r]}return i.default=t,o&&o.set(t,i),i}function H(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function z(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function C(t,n,o){return n&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function U(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&b(t,n)}function b(t,n){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,s){return i.__proto__=s,i},b(t,n)}function D(t){var n=W();return function(){var i=g(t),s;if(n){var r=g(this).constructor;s=Reflect.construct(i,arguments,r)}else s=i.apply(this,arguments);return S(this,s)}}function S(t,n){if(n&&(h(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function d(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},g(t)}var P=["AfterExport","AfterPlot","Animated","AnimatingFrame","AnimationInterrupted","AutoSize","BeforeExport","BeforeHover","ButtonClicked","Click","ClickAnnotation","Deselect","DoubleClick","Framework","Hover","LegendClick","LegendDoubleClick","Relayout","Relayouting","Restyle","Redraw","Selected","Selecting","SliderChange","SliderEnd","SliderStart","SunburstClick","Transitioning","TransitionInterrupted","Unhover","WebGlContextLost"],k=["plotly_restyle","plotly_redraw","plotly_relayout","plotly_relayouting","plotly_doubleclick","plotly_animated","plotly_sunburstclick"],E=typeof window<"u";function L(t){var n=function(o){U(s,o);var i=D(s);function s(r){var e;return H(this,s),e=i.call(this,r),e.p=Promise.resolve(),e.resizeHandler=null,e.handlers={},e.syncWindowResize=e.syncWindowResize.bind(d(e)),e.syncEventHandlers=e.syncEventHandlers.bind(d(e)),e.attachUpdateEvents=e.attachUpdateEvents.bind(d(e)),e.getRef=e.getRef.bind(d(e)),e.handleUpdate=e.handleUpdate.bind(d(e)),e.figureCallback=e.figureCallback.bind(d(e)),e.updatePlotly=e.updatePlotly.bind(d(e)),e}return C(s,[{key:"updatePlotly",value:function(e,a,f){var l=this;this.p=this.p.then(function(){if(!l.unmounting){if(!l.el)throw new Error("Missing element reference");return t.react(l.el,{data:l.props.data,layout:l.props.layout,config:l.props.config,frames:l.props.frames})}}).then(function(){l.unmounting||(l.syncWindowResize(e),l.syncEventHandlers(),l.figureCallback(a),f&&l.attachUpdateEvents())}).catch(function(c){l.props.onError&&l.props.onError(c)})}},{key:"componentDidMount",value:function(){this.unmounting=!1,this.updatePlotly(!0,this.props.onInitialized,!0)}},{key:"componentDidUpdate",value:function(e){this.unmounting=!1;var a=e.frames&&e.frames.length?e.frames.length:0,f=this.props.frames&&this.props.frames.length?this.props.frames.length:0,l=!(e.layout===this.props.layout&&e.data===this.props.data&&e.config===this.props.config&&f===a),c=e.revision!==void 0,w=e.revision!==this.props.revision;!l&&(!c||c&&!w)||this.updatePlotly(!1,this.props.onUpdate,!1)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0,this.figureCallback(this.props.onPurge),this.resizeHandler&&E&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.removeUpdateEvents(),t.purge(this.el)}},{key:"attachUpdateEvents",value:function(){var e=this;!this.el||!this.el.removeListener||k.forEach(function(a){e.el.on(a,e.handleUpdate)})}},{key:"removeUpdateEvents",value:function(){var e=this;!this.el||!this.el.removeListener||k.forEach(function(a){e.el.removeListener(a,e.handleUpdate)})}},{key:"handleUpdate",value:function(){this.figureCallback(this.props.onUpdate)}},{key:"figureCallback",value:function(e){if(typeof e=="function"){var a=this.el,f=a.data,l=a.layout,c=this.el._transitionData?this.el._transitionData._frames:null,w={data:f,layout:l,frames:c};e(w,this.el)}}},{key:"syncWindowResize",value:function(e){var a=this;E&&(this.props.useResizeHandler&&!this.resizeHandler?(this.resizeHandler=function(){return t.Plots.resize(a.el)},window.addEventListener("resize",this.resizeHandler),e&&this.resizeHandler()):!this.props.useResizeHandler&&this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null))}},{key:"getRef",value:function(e){this.el=e,this.props.debug&&E&&(window.gd=this.el)}},{key:"syncEventHandlers",value:function(){var e=this;P.forEach(function(a){var f=e.props["on"+a],l=e.handlers[a],c=!!l;f&&!c?e.addEventHandler(a,f):!f&&c?e.removeEventHandler(a):f&&c&&f!==l&&(e.removeEventHandler(a),e.addEventHandler(a,f))})}},{key:"addEventHandler",value:function(e,a){this.handlers[e]=a,this.el.on(this.getPlotlyEventName(e),this.handlers[e])}},{key:"removeEventHandler",value:function(e){this.el.removeListener(this.getPlotlyEventName(e),this.handlers[e]),delete this.handlers[e]}},{key:"getPlotlyEventName",value:function(e){return"plotly_"+e.toLowerCase()}},{key:"render",value:function(){return v.default.createElement("div",{id:this.props.divId,style:this.props.style,ref:this.getRef,className:this.props.className})}}]),s}(v.Component);return n.propTypes={data:u.default.arrayOf(u.default.object),config:u.default.object,layout:u.default.object,frames:u.default.arrayOf(u.default.object),revision:u.default.number,onInitialized:u.default.func,onPurge:u.default.func,onError:u.default.func,onUpdate:u.default.func,debug:u.default.bool,style:u.default.object,className:u.default.string,useResizeHandler:u.default.bool,divId:u.default.string},P.forEach(function(o){n.propTypes["on"+o]=u.default.func}),n.defaultProps={debug:!1,useResizeHandler:!1,data:[],style:{position:"relative",display:"inline-block"}},n}})(R);(function(p){Object.defineProperty(p,"__esModule",{value:!0}),p.default=void 0;var h=u(R),v=u(M);function u(y){return y&&y.__esModule?y:{default:y}}var _=(0,h.default)(v.default),m=_;p.default=m})(O);const q=I(O);export{q as P};
