(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{56:function(e,a,t){"use strict";t.r(a);var s=t(3),c=t.n(s),n=t(33),r=t.n(n),l=t(37),i=(t(48),t(49),t(10)),o=t(13),d=t(9),b=t(18),j=t(34),m=t(35),u=t(39),h=t(38),p=t(2),O=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var s;return Object(j.a)(this,t),(s=a.call(this,e)).state={hasError:!1},s}return Object(m.a)(t,[{key:"logErrorToMyService",value:function(e,a){return a}},{key:"componentDidCatch",value:function(e,a){this.logErrorToMyService(e,a)}},{key:"render",value:function(){return this.state.hasError?Object(p.jsxs)("h1",{children:["Something went wrong. ",this.logErrorToMyService()]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(s.Component),x=t(16),v=t.n(x),g=t(19),f=function(e){var a=e.user,t=e.cart,s=Object(d.f)(),c=function(){var e=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.auth().signOut().then((function(){s.goBack(-1)})).catch((function(e){alert(e.message)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("There was an error loging out");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(o.c,{className:"navbar-brand",to:"/",children:"Shop"}),Object(p.jsx)("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavId",children:Object(p.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0",children:[!a.name&&Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.c,{className:"nav-link",to:"/sign-in",children:"Login/Signup"})}),t.length>0&&Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsxs)(o.c,{className:"nav-link",to:"/cart",children:["Cart ",Object(p.jsx)("i",{className:"fa fa-shopping-bag"})," ",Object(p.jsxs)("span",{class:"badge rounded-pill bg-danger ms-n3",children:[t.length," "]})]})}),a.name&&Object(p.jsxs)("li",{className:"nav-item dropdown",children:[Object(p.jsx)("span",{className:"nav-link dropdown-toggle",id:"dropdownId","data-toggle":"dropdown",ariaHasPopUp:"true","aria-expanded":"false",style:{cursor:"pointer"},children:"Account"}),Object(p.jsxs)("div",{className:"dropdown-menu",ariaLabelledBy:"dropdownId",children:[Object(p.jsx)(o.c,{className:"dropdown-item",to:"/dashboard",children:"Dashboard"}),Object(p.jsx)(o.c,{className:"dropdown-item",to:"/profile-settings",children:"Profile settings"}),Object(p.jsx)("span",{className:"dropdown-item",children:Object(p.jsx)("button",{className:"btn btn-primary me-2",onClick:c,children:"Logout"})})]})]})]})})]})})})},N=function(){var e=Object(s.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],j=Object(s.useState)(""),m=Object(i.a)(j,2),u=m[0],h=m[1],O=Object(s.useState)(""),x=Object(i.a)(O,2),f=x[0],N=x[1],y=Object(d.f)(),S=function(){var e=Object(g.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),h(Object(p.jsx)(k,{})),t&&l){e.next=7;break}N("Provide your email/password"),h(""),e.next=16;break;case 7:return e.prev=7,e.next=10,b.a.auth().signInWithEmailAndPassword(t,l).then((function(e){if(e.user)return y.push("/")})).catch((function(e){e.code;var a=e.message;N(a),h("")}));case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(7),N(e.t0.message),h("");case 16:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(a){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"my-5",children:[f&&Object(p.jsx)("div",{className:"my-3 py-2 alert alert-danger",children:Object(p.jsx)("p",{className:"pb-0",children:f})}),Object(p.jsxs)("form",{onSubmit:S,children:[Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(p.jsx)("input",{value:t,onChange:function(e){return c(e.target.value)},type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp"}),Object(p.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(p.jsx)("input",{value:l,onChange:function(e){return o(e.target.value)},type:"password",className:"form-control",id:"password"})]}),Object(p.jsx)("nav",{children:Object(p.jsx)("div",{className:"col-12 text-end mb-2",id:"nav-tab2",children:Object(p.jsx)("button",{type:"button",className:"btn btn-default text-primary","data-bs-toggle":"modal","data-bs-target":"#passwordResetModal",children:"Forgot Password?"})})}),Object(p.jsxs)("button",{class:"btn btn-primary btn-block w-100",type:"submit",disabled:!t||!l,children:[u," Login"]})]})]}),Object(p.jsx)(w,{})]})},y=function(){var e=Object(s.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],j=Object(s.useState)(""),m=Object(i.a)(j,2),u=m[0],h=m[1],O=Object(s.useState)(""),x=Object(i.a)(O,2),f=x[0],N=x[1],y=Object(s.useState)(""),w=Object(i.a)(y,2),S=w[0],C=w[1],I=Object(d.f)(),P=function(){var e=Object(g.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),N(Object(p.jsx)(k,{})),l&&u){e.next=7;break}C("Provide your email/password"),N(""),e.next=16;break;case 7:return e.prev=7,e.next=10,b.a.auth().createUserWithEmailAndPassword(l,u).then((function(e){var a=e.user;a&&b.a.auth().currentUser.sendEmailVerification().then((function(){a.updateProfile({displayName:t}).then((function(){N(""),window.localStorage.setItem("email",l),window.localStorage.setItem("fullName",t),I.push("/email-sent")})).catch((function(e){C(e.message),N("")}))})),N("")})).catch((function(e){e.code;var a=e.message;C(a),N("")}));case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(7),C(e.t0.message),N("");case 16:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(a){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"my-5",children:[S&&Object(p.jsx)("div",{className:"my-3 py-2 alert alert-danger",children:Object(p.jsx)("p",{className:"pb-0",children:S})}),Object(p.jsxs)("form",{onSubmit:P,children:[Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"fullName",className:"form-label",children:"Full Name"}),Object(p.jsx)("input",{value:t,onChange:function(e){return c(e.target.value)},type:"text",className:"form-control",id:"fullName","aria-describedby":"emailHelp"})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"email2",className:"form-label",children:"Email address"}),Object(p.jsx)("input",{value:l,onChange:function(e){return o(e.target.value)},type:"email",className:"form-control",id:"email2","aria-describedby":"emailHelp"}),Object(p.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"password2",className:"form-label",children:"Password"}),Object(p.jsx)("input",{value:u,onChange:function(e){return h(e.target.value)},type:"password2",className:"form-control",id:"password"})]}),Object(p.jsxs)("button",{type:"submit",className:"btn btn-primary btn-block w-100 mt-3",disabled:!t||!l||!u,children:[f," Sign up"]})]})]})})})},w=function(){var e=Object(s.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],d=Object(s.useState)(""),j=Object(i.a)(d,2),m=j[0],u=j[1],h=Object(s.useState)(""),O=Object(i.a)(h,2),x=O[0],f=O[1],N=function(){var e=Object(g.a)(v.a.mark((function e(a){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o(Object(p.jsx)(k,{})),t){e.next=7;break}u("Provide your email address"),o(""),e.next=18;break;case 7:return e.prev=7,s={url:"http://localhost:3000/success-password-reset",handleCodeInApp:!0},e.next=11,b.a.auth().sendPasswordResetEmail(t,s).then((function(){f("A password reset link has been sent to your ".concat(t)),u(""),o("")})).catch((function(e){e.code;var a=e.message;u(a),o("")}));case 11:o(""),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(7),u(e.t0.message),o("");case 18:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(a){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"modal fade",id:"passwordResetModal",tabindex:"-1","aria-labelledby":"passwordResetModalLabel","aria-hidden":"true",children:Object(p.jsx)("div",{className:"modal-dialog modal-sm",children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Provide your email"}),Object(p.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(p.jsxs)("form",{onSubmit:N,children:[Object(p.jsxs)("div",{className:"modal-body",children:[m&&Object(p.jsx)("div",{className:"my-3 py-2 alert alert-danger",children:Object(p.jsx)("p",{className:"pb-0",children:m})}),x&&Object(p.jsx)("div",{className:"my-3 py-2 alert alert-success",children:Object(p.jsx)("p",{className:"pb-0",children:x})}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"email3",className:"form-label",children:"Email address"}),Object(p.jsx)("input",{value:t,onChange:function(e){return c(e.target.value)},type:"email",className:"form-control",id:"email3","aria-describedby":"emailHelp"})]})]}),Object(p.jsxs)("div",{className:"modal-footer",children:[Object(p.jsx)("button",{onClick:function(){return u("")},type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(p.jsxs)("button",{type:"submit",className:"btn btn-primary",children:[l," Submit"]})]})]})]})})})},k=function(){return Object(p.jsxs)("span",{children:[Object(p.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})]})},S=function(){return Object(p.jsx)("div",{children:"Aside"})},C=function(e){var a=e.product,t=e.addToCart,s=e.addToWishList;return Object(p.jsx)("div",{className:"col-6 col-lg-4 col-md-6 mb-3",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"card-img-top img-responsive",src:"img/products/".concat(a.img),alt:a.name}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:a.name}),Object(p.jsxs)("p",{className:"card-text",children:["GHS ",a.price]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"btn btn-secondary me-1",onClick:function(){return s(a)},children:Object(p.jsx)("i",{className:"fa fa-heart"})}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(){return t(a)},children:Object(p.jsx)("i",{className:"fa fa-shopping-bag"})})]})]})]})})},I=function(e){var a=e.addToCart,t=e.addToWishList;return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row m-auto my-5",children:[Object(p.jsx)("div",{className:"col-md-3 d-none d-md-block",children:Object(p.jsx)(S,{})}),Object(p.jsx)("div",{className:"col-12 col-md-9",children:Object(p.jsx)("div",{className:"row",children:[{id:1,name:"khaki Trousers",price:45,img:"trousers.jpg",qtyInCart:0},{id:2,name:"Lactogen",price:25,img:"lactogen.jpg",qtyInCart:0},{id:3,name:"Cerelac",price:20,img:"cerelac.jpg",qtyInCart:0}].map((function(e){return Object(p.jsx)(C,{product:e,addToCart:a,addToWishList:t},e.id)}))})})]})})},P=function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"col-12 col-sm-7 col-md-6 col-lg-4 mx-auto my-5 bg-light p-3 rounded",children:[Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist",children:[Object(p.jsx)("button",{className:"nav-link active",id:"nav-login-tab","data-bs-toggle":"tab","data-bs-target":"#nav-login",type:"button",role:"tab","aria-controls":"nav-login","aria-selected":"true",children:"Login"}),Object(p.jsx)("button",{className:"nav-link",id:"nav-signup-tab","data-bs-toggle":"tab","data-bs-target":"#nav-signup",type:"button",role:"tab","aria-controls":"nav-signup","aria-selected":"false",children:"Signup"})]})}),Object(p.jsxs)("div",{className:"tab-content",id:"nav-tabContent",children:[Object(p.jsx)("div",{className:"tab-pane fade show active",id:"nav-login",role:"tabpanel","aria-labelledby":"nav-login-tab",children:Object(p.jsx)(N,{})}),Object(p.jsx)("div",{className:"tab-pane fade",id:"nav-signup",role:"tabpanel","aria-labelledby":"nav-signup-tab",children:Object(p.jsx)(y,{})})]})]})})},L=function(){return Object(p.jsx)("div",{children:"Page Not Found"})},E=function(){var e=window.localStorage.getItem("email"),a=window.localStorage.getItem("fullName");return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"col-6 mx-auto my-5 p-3 bg-light bg-gradient",children:[Object(p.jsxs)("h3",{className:"mb-2",children:["Hello, ",a," ",Object(p.jsx)("br",{}),"An email Verification link has been sent to ",e]}),Object(p.jsx)("h4",{className:"mb-3",children:"Click on the link sent, to verify your email"}),Object(p.jsxs)("h5",{children:["Go back ",Object(p.jsx)(o.b,{to:"/",children:"Home"})]})]})})},T=function(){var e=Object(d.f)(),a=window.localStorage.getItem("fullName");return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"col-6 mx-auto my-5 p-3 bg-light",children:[Object(p.jsx)("h2",{children:a}),Object(p.jsx)("h3",{children:"Your email has been verified successfully"}),Object(p.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){window.localStorage.removeItem("email"),window.localStorage.removeItem("fullName"),e.push("/")},children:"Go Back home"})]})})},F=function(){var e=Object(d.f)();return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"col-6 mx-auto my-5 p-3 bg-light",children:[Object(p.jsx)("h3",{children:"Your password has been reset"}),Object(p.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){e.push("/sign-in")},children:"Login"})]})})};var H=function(){var e=Object(s.useState)({name:"",email:"",picture:""}),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(s.useState)(),r=Object(i.a)(n,2),l=(r[0],r[1],Object(s.useState)([])),j=Object(i.a)(l,2),m=j[0];return j[1],Object(s.useEffect)((function(){return b.a.auth().onAuthStateChanged((function(e){e?(c({name:e.displayName,email:e.email,picture:e.photoURL}),console.log(e)):console.log("user data missing")}))()}),[]),Object(p.jsxs)(o.a,{children:[Object(p.jsx)(f,{user:t,cart:m}),Object(p.jsx)(O,{children:Object(p.jsx)(s.Suspense,{fallback:Object(p.jsx)("div",{className:"mx-auto",children:Object(p.jsx)(k,{})}),children:Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{exact:!0,path:"/",children:Object(p.jsx)(I,{addToCart:function(e){e&&(console.log(e),m.push(e),console.log(m))},addToWishList:function(e){console.log(e)}})}),Object(p.jsx)(d.a,{path:"/sign-in",children:Object(p.jsx)(P,{})}),Object(p.jsx)(d.a,{path:"/email-sent",children:Object(p.jsx)(E,{})}),Object(p.jsx)(d.a,{path:"/success-registration",children:Object(p.jsx)(T,{})}),Object(p.jsx)(d.a,{path:"/success-password-reset",children:Object(p.jsx)(F,{})}),Object(p.jsx)(d.a,{path:"*",children:Object(p.jsx)(L,{})})]})})})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),s(e),c(e),n(e),r(e)}))};l.a.initializeApp({apiKey:"AIzaSyC2j6KoRP1ksyqRgR5fDHPCniW-YafgWkI",authDomain:"shopping-cart-3889a.firebaseapp.com",projectId:"shopping-cart-3889a",storageBucket:"shopping-cart-3889a.appspot.com",messagingSenderId:"961349540519",appId:"1:961349540519:web:8a4820557b150f7a085982"}),r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(H,{})}),document.getElementById("root")),A()}},[[56,1,2]]]);
//# sourceMappingURL=main.a6043f4f.chunk.js.map