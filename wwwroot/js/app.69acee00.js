(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],h=0,d=[];h<o.length;h++)s=o[h],r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2a7d":function(t,e,n){"use strict";var a=n("61dd"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Appointment")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t.dance?a("img",{attrs:{src:n("6db6"),alt:"death dancing",id:"death"}}):t._e(),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-third"},[a("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.addItem()}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Date Appointment")]),a("div",{staticClass:"control",attrs:{id:"calendar-wrap"}},[a("Calendar",{ref:"calendar",attrs:{sundayBegin:!1},on:{date:function(e){return t.setDate(e)}}})],1)]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Email")]),a("div",{staticClass:"control has-icons-left"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Email,expression:"Email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email input"},domProps:{value:t.Email},on:{input:function(e){e.target.composing||(t.Email=e.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Phone")]),a("div",{staticClass:"control has-icons-left"},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.PhoneNumber,expression:"PhoneNumber"}],staticClass:"input",attrs:{type:"text",placeholder:"555 5555"},domProps:{value:t.PhoneNumber},on:{input:function(e){e.target.composing||(t.PhoneNumber=e.target.value)}}})])]),t._m(3),a("ul",{staticClass:"help is-danger is-size-8"},t._l(t.errors,function(e,n){return a("li",{key:n},[t._v(t._s(e))])}),0)])]),a("div",{staticClass:"column is-one-fifth"},[a("div",{staticClass:"card",attrs:{id:"hours"}},[a("div",{staticClass:"field"},[t._m(4),a("div",{staticClass:"card-content",staticStyle:{padding:"0.5rem"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.DateAppointment,expression:"DateAppointment"}],staticClass:"control"},[t.radios.length?t._l(t.radios,function(e,n){return a("label",{key:n,staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.StartTime,expression:"StartTime"}],staticClass:"radio",attrs:{type:"radio",name:"StartTime",required:""},domProps:{value:e,checked:t._q(t.StartTime,e)},on:{change:function(n){t.StartTime=e}}}),t._v("\n                At "+t._s(e)+":00\n              ")])}):a("p",[t._v("All hours are already booked")])],2)])])])]),a("div",{staticClass:"column"},[a("p",{attrs:{id:"counter"}}),a("table",{staticClass:"table"},[t._m(5),a("tbody",t._l(t.appointments,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(new Date(e.dateAppointment).toLocaleDateString()))]),a("td",[t._v(t._s(e.startTime)+":00")]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.phoneNumber))]),a("td")])}),0)])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"title is-1"},[t._v("\n    Dancing with Death\n    "),a("img",{attrs:{src:n("5c0d"),alt:"death icon",id:"logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fas fa-phone"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("button",{staticClass:"button is-link",attrs:{type:"submit"}},[t._v("Book")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t._v("Select an hour")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Date")]),n("th",[t._v("Hour")]),n("th",[t._v("Email")]),n("th",[t._v("Phone")]),n("th")])])}],c=n("795b"),u=n.n(c),l=(n("96cf"),n("3b8d")),h=n("bc3a"),d=n.n(h),p=n("0e39"),m={name:"Appointment",components:{Calendar:p["a"]},data:function(){return{dance:!1,uri:"https://localhost:5001/api/appointments",errors:[],appointments:[],Email:null,radios:[],StartTime:null,PhoneNumber:null,DateAppointment:null}},methods:{fetchAvailableHours:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(this.uri+"/getAvailableHours/"+this.DateAppointment);case 3:e=t.sent,this.radios=e.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.errors.push(t.t0.response.data);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}(),addItem:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.errors=[],!this.DateAppointment||!this.StartTime||!this.Email&&!this.PhoneNumber){t.next=21;break}return e={DateAppointment:this.DateAppointment,StartTime:this.StartTime,Email:this.Email,PhoneNumber:this.PhoneNumber},t.prev=3,t.next=6,d.a.post(this.uri,e);case 6:n=t.sent,this.appointments.length>=10&&this.appointments.pop(),this.appointments.unshift(n.data),this.Email=null,this.PhoneNumber=null,this.StartTime=null,this.fetchAvailableHours(),this.dancing(),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](3),this.errors.push(t.t0.response.data);case 19:t.next=24;break;case 21:this.DateAppointment||this.errors.push("Date required"),this.StartTime||this.errors.push("StartTime required"),this.Email||this.PhoneNumber||this.errors.push("Contact information required(EMAIL or PHONE)");case 24:case"end":return t.stop()}},t,this,[[3,16]])}));function e(){return t.apply(this,arguments)}return e}(),setDate:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.DateAppointment=e.date,this.errors=[],this.fetchAvailableHours();case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),sleep:function(t){return new u.a(function(e){return setTimeout(e,t)})},dancing:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.dance=!0,t.next=3,this.sleep(5e3);case 3:this.dance=!1;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(this.uri);case 3:e=t.sent,this.appointments=e.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),this.errors.push(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}()},f=m,v=(n("2a7d"),n("2877")),b=Object(v["a"])(f,s,o,!1,null,null,null),w=b.exports,A={name:"app",components:{Appointment:w}},C=A,g=Object(v["a"])(C,r,i,!1,null,null,null),S=g.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0d":function(t,e){t.exports="data:image/png;base64,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"},"61dd":function(t,e,n){},"6db6":function(t,e,n){t.exports=n.p+"img/dancing_with_death300.20a5b154.png"}});
//# sourceMappingURL=app.69acee00.js.map