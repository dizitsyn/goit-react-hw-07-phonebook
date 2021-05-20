(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{67:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(14),o=n.n(a),u=n(38),s=n(17),i=n(18),d=n(21),l=n(19),b=n(8),f=n(24),j=n.n(f),h=n(36),C=n(13),O=n.n(C),p=n(3),m=Object(p.b)("state/fetchContactsRequest"),v=Object(p.b)("state/fetchContactsSuccess"),x=Object(p.b)("state/fetchContactsError"),k=Object(p.b)("phoneBook/addContactsRequest"),g=Object(p.b)("phoneBook/addContactsSuccess"),y=Object(p.b)("phoneBook/addContactsError"),S=Object(p.b)("phoneBook/delContactsRequest"),q=Object(p.b)("phoneBook/delContactsSuccess"),E=Object(p.b)("phoneBook/delContactsError"),R={fetchContactRequest:m,fetchContactSuccess:v,fetchContactError:x,filterContact:Object(p.b)("phoneBook/filter"),addContactRequest:k,addContactSuccess:g,addContactError:y,delContactRequest:S,delContactSuccess:q,delContactError:E};O.a.defaults.baseURL="http://localhost:4040";var w=function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(R.addContactRequest()),O.a.post("/contacts",c).then((function(e){var n=e.data;return t(R.addContactSuccess(n))})).catch((function(e){return t(R.addContactError(e))}))}},B=function(t){return function(e){e(R.delContactRequest()),O.a.delete("/contacts/".concat(t)).then((function(){return e(R.delContactSuccess(t))})).catch((function(t){return e(R.delContactError(t))}))}},A=function(){return function(){var t=Object(h.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(R.fetchContactRequest()),t.prev=1,t.next=4,O.a.get("/contacts");case 4:n=t.sent,c=n.data,console.log(c),e(R.fetchContactSuccess(c)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e(R.fetchContactError(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},H=n(16),z=function(t){return t.contacts.filter},L={filterValue:z,getFilterContact:Object(H.a)([function(t){return t.contacts.items},z],(function(t,e){return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))}))},D=n(1),J=Object(b.b)((function(t){return{contacts:L.getFilterContact(t)}}),(function(t){return{deleteContact:function(e){return t(B(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return Object(D.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(D.jsxs)("li",{children:[Object(D.jsxs)("p",{children:[c,":",r]}),Object(D.jsx)("button",{id:e,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),M=n(9),Z=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.inputHandler=function(e){var n=e.target,c=n.name,r=n.value;t.setState(Object(M.a)({},c,r))},t.submitHandler=function(e){e.preventDefault(),t.props.addContact(t.state)},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(D.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(D.jsxs)("label",{children:["Name",Object(D.jsx)("input",{onChange:this.inputHandler,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(D.jsxs)("label",{children:["Tel",Object(D.jsx)("input",{onChange:this.inputHandler,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(D.jsx)("button",{type:"submit",children:"Add"})]})}}]),n}(c.Component),F=Object(b.b)(null,(function(t){return{addContact:function(e){return t(w(e))},fetchContacts:function(){return t(A())}}}))(Z);var V,I=Object(b.b)((function(t){return{value:L.filterValue(t)}}),(function(t){return{filterHandler:function(e){return t(R.filterContact(e.target.value))}}}))((function(t){var e=t.filterHandler,n=t.filter;return Object(D.jsxs)("label",{children:["find",Object(D.jsx)("input",{value:n,onChange:e})]})})),N=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"Phonebook"}),Object(D.jsx)(F,{}),Object(D.jsx)("h2",{children:"Contacts"}),Object(D.jsx)(I,{}),Object(D.jsx)(J,{})]})}}]),n}(c.Component),P=n(20),T=n(37),U=n.n(T),$=n(4),G=(R.fetchContactRequest,R.fetchContactSuccess),K=(R.fetchContactError,R.addContactRequest,R.addContactSuccess),Q=(R.addContactError,R.delContactRequest,R.delContactSuccess),W=(R.delContactError,R.filterContact),X=Object(p.c)([],(V={},Object(M.a)(V,G,(function(t,e){return e.payload})),Object(M.a)(V,K,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object(M.a)(V,Q,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),V)),Y=Object(p.c)("",Object(M.a)({},W,(function(t,e){return e.payload}))),_=Object($.b)({items:X,filter:Y}),tt=n(10),et=[].concat(Object(P.a)(Object(p.d)({serializableCheck:{ignoredActions:[tt.a,tt.f,tt.b,tt.c,tt.d,tt.e]}})),[U.a]),nt=Object(p.a)({reducer:{contacts:_},middleware:et});o.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(b.a,{store:nt,children:Object(D.jsx)(u.a,{children:Object(D.jsx)(N,{})})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.33654f18.chunk.js.map