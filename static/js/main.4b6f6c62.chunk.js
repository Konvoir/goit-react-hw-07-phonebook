(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={item:"Contacts_item__RKIFY",text:"Contacts_text__12lqH",btn:"Contacts_btn__2dumG"}},20:function(t,e,n){t.exports={wrapper:"Filter_wrapper__16UAM",label:"Filter_label__77Ae1",input:"Filter_input__10Vul"}},63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(17),s=n.n(r),u=n(6),o=n(4),i=n.n(o),b=n(7),l=n(2),p=Object(l.b)("contacts/fetchRequest"),j=Object(l.b)("contacts/fetchSuccess"),f=Object(l.b)("contacts/fetchError"),d=Object(l.b)("contacts/addRequest"),O=Object(l.b)("contacts/faddSuccess"),m=Object(l.b)("contacts/addError"),h=Object(l.b)("contacts/deleteRequest"),x=Object(l.b)("contacts/deleteSuccess"),v=Object(l.b)("contacts/deleteError"),_=Object(l.b)("contacts/filterContacts"),y=n(13),w=n.n(y);function k(){return N.apply(this,arguments)}function N(){return(N=Object(b.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(i.a.mark((function t(e){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.post("/contacts",e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(t){return A.apply(this,arguments)}function A(){return(A=Object(b.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.delete("/contacts/".concat(e));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}w.a.defaults.baseURL="http://localhost:3000";var S=n(11),q=function(t){return t.contacts.filter},R=Object(S.a)([function(t){return t.contacts.items},q],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),z=n(14),E=n.n(z),J=n(1);function L(){var t=Object(u.c)(R),e=Object(u.b)();if(Object(a.useEffect)((function(){return e(function(){var t=Object(b.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(p()),t.prev=1,t.next=4,k();case 4:n=t.sent,e(j(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(f(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[e]),t)return Object(J.jsx)("ul",{className:E.a.list,children:t.map((function(t){return Object(J.jsxs)("li",{className:E.a.item,children:[Object(J.jsxs)("p",{className:E.a.text,children:[t.name,": ",t.number]}),Object(J.jsx)("button",{className:E.a.btn,type:"button",onClick:function(){return e((n=t.id,function(){var t=Object(b.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(h()),t.prev=1,t.next=4,F(n);case 4:e(x(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(v(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()));var n},children:"Delete"})]},t.id)}))})}var M=n(23),T=n(8),Z=n.n(T);function B(){var t=Object(a.useState)(""),e=Object(M.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(M.a)(r,2),o=s[0],l=s[1],p=Object(u.b)(),j=function(t){var e=t.currentTarget,n=e.name,a=e.value;"name"===n?c(a):"number"===n&&l(a)},f=function(){c(""),l("")};return Object(J.jsxs)("form",{onSubmit:function(t){var e;t.preventDefault(),p((e={name:n,number:o},function(){var t=Object(b.a)(i.a.mark((function t(n){var a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(d()),t.next=3,k();case 3:if(!(a=t.sent)){t.next=21;break}if(a.map((function(t){return t.name})).includes(e.name)){t.next=20;break}return t.prev=8,t.next=11,C(e);case 11:c=t.sent,n(O(c)),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),n(m(t.t0));case 18:t.next=21;break;case 20:n(m("".concat(e.name," is already in contacts")));case 21:case"end":return t.stop()}}),t,null,[[8,15]])})));return function(e){return t.apply(this,arguments)}}())),f()},className:Z.a.form,children:[Object(J.jsxs)("label",{className:Z.a.label,children:["Name",Object(J.jsx)("input",{className:Z.a.input,value:n,onChange:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(J.jsxs)("label",{className:Z.a.label,children:["Number",Object(J.jsx)("input",{className:Z.a.input,value:o,onChange:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(J.jsx)("button",{type:"submit",className:Z.a.btn,children:"Add to contacts"})]})}var D=n(20),G=n.n(D);function H(){var t=Object(u.c)(q),e=Object(u.b)();return Object(J.jsx)("div",{className:G.a.wrapper,children:Object(J.jsxs)("label",{className:G.a.label,children:["Find contacts by name",Object(J.jsx)("input",{className:G.a.input,type:"text",name:"filter",value:t,onChange:function(t){return e(_(t.target.value))}})]})})}function I(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{children:"Phonebook"}),Object(J.jsx)(B,{}),Object(J.jsx)("h2",{children:"Contacts"}),Object(J.jsx)(H,{}),Object(J.jsx)(L,{})]})}var U,K,P=n(19),V=n(10),W=n(9),Y=n(3),$=Object(l.c)([],(U={},Object(W.a)(U,j,(function(t,e){return e.payload})),Object(W.a)(U,O,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object(W.a)(U,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),U)),Q=Object(l.c)("",Object(W.a)({},_,(function(t,e){return e.payload.toLowerCase()}))),X=Object(l.c)(null,(K={},Object(W.a)(K,m,(function(t,e){return window.alert(e.payload)})),Object(W.a)(K,v,(function(t,e){return e.payload})),K)),tt=Object(Y.b)({items:$,filter:Q,error:X}),et=Object(P.a)(Object(l.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),nt=Object(l.a)({reducer:{contacts:tt},middleware:et,devTools:!1});n(63);s.a.render(Object(J.jsx)(c.a.StrictMode,{children:Object(J.jsx)(u.a,{store:nt,children:Object(J.jsx)(I,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"Form_form__3WcyR",label:"Form_label___0nTG",input:"Form_input__1ySH3",btn:"Form_btn__ONpSk"}}},[[64,1,2]]]);
//# sourceMappingURL=main.4b6f6c62.chunk.js.map