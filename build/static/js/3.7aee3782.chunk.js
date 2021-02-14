(this.webpackJsonp08phonebook=this.webpackJsonp08phonebook||[]).push([[3],{88:function(t,e,n){t.exports={NotificationWrapper:"Notification_NotificationWrapper__c22rV",appear:"Notification_appear__22q5B",appearActive:"Notification_appearActive__DjHuR",exit:"Notification_exit__1ZG-a",exitActive:"Notification_exitActive__TXcYp"}},89:function(t,e,n){t.exports={NotificationWrapper:"Empty_NotificationWrapper__OziBY",appear:"Empty_appear__OSslC",appearActive:"Empty_appearActive__1ZMqq",exit:"Empty_exit__2-3Wq",exitActive:"Empty_exitActive__1HbcN"}},90:function(t,e,n){t.exports={wrapper:"ContactForm_wrapper__2eKKN",title:"ContactForm_title__zibAa",form:"ContactForm_form__3BYMH",mail:"ContactForm_mail__1SOKE",password:"ContactForm_password__1jGN1",name:"ContactForm_name__3gJaf",insert:"ContactForm_insert__32_B8",label:"ContactForm_label__S4N43",input:"ContactForm_input__2IP5m",enter:"ContactForm_enter__3CDQ0",enterActive:"ContactForm_enterActive__3-kVa",exit:"ContactForm_exit__2VvKP",exitActive:"ContactForm_exitActive__2eTKS"}},91:function(t,e,n){t.exports={wrapper:"ContactList_wrapper__Dof9I",list:"ContactList_list__3BxLF",listItem:"ContactList_listItem__3UL2-",title:"ContactList_title__gxUU_",button:"ContactList_button__R4Yh-",name:"ContactList_name__3_PLu",enter:"ContactList_enter__4J4cY",enterActive:"ContactList_enterActive__Y-l7D",exit:"ContactList_exit__1I_Rt",exitActive:"ContactList_exitActive__19Sc9"}},92:function(t,e,n){t.exports={wrapper:"ContactFilter_wrapper__2ner6",inputName:"ContactFilter_inputName__rRxSB",filter:"ContactFilter_filter__lzy3H"}},93:function(t,e,n){t.exports={appear:"PhoneBook_appear__3Nu4P",appearActive:"PhoneBook_appearActive__pphbX",title:"PhoneBook_title__5hhDS",enter:"PhoneBook_enter__2Qz9A",enterActive:"PhoneBook_enterActive__249rh",exit:"PhoneBook_exit__IUbyl",exitActive:"PhoneBook_exitActive__1ZFAp"}},97:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(32),o=n(33),i=n(35),r=n(34),s=n(0),u=n(8),l=n(7),_=n(20),m=n(18),p=n.n(m),b={addContact:function(t){var e=t.name,n=t.number;return function(t){t(_.a.addContactRequest()),p.a.post("/contacts",{name:e,number:n}).then((function(e){t(_.a.addContactSuccess(e.data))})).catch((function(e){return t(_.a.addContactError(e))}))}},fetchContacts:function(){return function(t){t(_.a.fetchContactsRequest()),p.a.get("/contacts").then((function(e){t(_.a.fetchContactsSuccess(e.data))})).catch((function(e){return t(_.a.fetchContactsError(e))}))}},removeContact:function(t){return function(e){e(_.a.removeContactRequest()),p.a.delete("/contacts/".concat(t)).then((function(){return e(_.a.removeContactSuccess(t))})).catch((function(t){return e(_.a.removeContactError(t))}))}}},h=n(88),j=n.n(h),f=function(t){var e=t.name;return Object(a.jsx)("div",{className:j.a.NotificationWrapper,children:"".concat(e," is already in Contacts")})},d=n(89),C=n.n(d),x=function(){return Object(a.jsx)("div",{className:C.a.NotificationWrapper,children:"ALL FIELDS MUST BE FILLED!"})},v=n(25),O=function(t){return t.contacts.contactList},N=function(t){return t.contacts.filter},A={getContacts:O,getFilterValue:N,getVisibleContacts:Object(v.a)([O,N],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}))},F=n(98),w=n(90),y=n.n(w),S=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:"",newContact:null,showAlert:!1,showEmpty:!1},t.handleChange=function(e){var n=e.target.name;t.setState(Object(l.a)({},n,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.contacts.some((function(e){return e.name===t.state.name}))?(t.setState({newContact:t.state.name,showAlert:!0}),setTimeout((function(){t.setState({showAlert:!1})}),2500)):""===t.state.name||""===t.state.contact?(t.setState({showEmpty:!0}),setTimeout((function(){t.setState({showEmpty:!1})}),2500)):t.props.addContact({name:t.state.name,number:t.state.number}),t.setState({name:"",number:""})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.newContact,n=t.showAlert,c=t.showEmpty;return Object(a.jsxs)("div",{className:y.a.wrapper,children:[Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:y.a.form,children:[Object(a.jsxs)("label",{className:y.a.label,children:["Name",Object(a.jsx)("input",{className:y.a.mail,name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:y.a.label,children:["Number",Object(a.jsx)("input",{className:y.a.password,name:"number",type:"tel",value:this.state.number,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:y.a.insert,type:"submit",children:"Add"})]}),Object(a.jsx)(F.a,{in:n,timeout:250,classNames:y.a,unmountOnExit:!0,children:Object(a.jsx)(f,{name:e})}),Object(a.jsx)(F.a,{in:c,timeout:250,classNames:y.a,unmountOnExit:!0,children:Object(a.jsx)(x,{})})]})}}]),n}(s.Component),g={addContact:b.addContact},L=Object(u.b)((function(t){return{contacts:A.getContacts(t)}}),g)(S),E=n(99),k=n(91),B=n.n(k),P=Object(u.b)((function(t){return{contacts:A.getVisibleContacts(t)}}),(function(t){return{deleteContact:function(e){t(b.removeContact(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact,c=function(t){var e=t.target.dataset.id;n(e)};return Object(a.jsxs)("div",{className:B.a.wrapper,children:[Object(a.jsx)("h2",{className:B.a.title,children:"CONTACTS"}),Object(a.jsx)(E.a,{component:"ul",className:B.a.list,children:e.map((function(t){return Object(a.jsx)(F.a,{timeout:250,classNames:B.a,children:Object(a.jsxs)("li",{className:B.a.listItem,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:B.a.name,children:t.name}),": ",Object(a.jsx)("span",{children:t.number})]}),Object(a.jsx)("button",{className:B.a.button,type:"button","data-id":t.id,onClick:c,children:"Delete"})]})},t.id)}))})]})})),D=n(92),I=n.n(D),H={onHandleFilter:_.a.onHandleFilter},q=Object(u.b)((function(t){return{value:A.getFilterValue(t)}}),H)((function(t){var e=t.value,n=t.onHandleFilter;return Object(a.jsxs)("div",{className:I.a.wrapper,children:[Object(a.jsx)("h3",{className:I.a.inputName,children:"Find contacts by name"}),Object(a.jsx)("input",{className:I.a.filter,type:"search",value:e,onChange:function(t){return n(t.target.value)}})]})})),R=n(93),T=n.n(R),V=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(F.a,{in:!0,appear:!0,timeout:500,classNames:T.a,children:Object(a.jsx)("h1",{className:T.a.title,children:"PHONEBOOK"})}),Object(a.jsx)(L,{}),Object(a.jsx)(q,{}),Object(a.jsx)(P,{})]})}}]),n}(s.Component),W={onFetchContacts:b.fetchContacts},K=Object(u.b)(null,W)(V),Y=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(K,{})})}}]),n}(s.Component);e.default=Y}}]);
//# sourceMappingURL=3.7aee3782.chunk.js.map