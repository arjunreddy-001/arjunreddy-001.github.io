(this["webpackJsonppersonal-portfolio-arjunreddy"]=this["webpackJsonppersonal-portfolio-arjunreddy"]||[]).push([[7],{51:function(t,e,a){t.exports={"contact-section":"ContactPage_contact-section__33Pjx","contact-container":"ContactPage_contact-container__AtEdn","contact-title":"ContactPage_contact-title__27zHr","contact-subtitle":"ContactPage_contact-subtitle__2k0VS","contact-form":"ContactPage_contact-form__boQZC","contact-inputs":"ContactPage_contact-inputs__12hXi","contact-content":"ContactPage_contact-content__3jGuJ","contact-label":"ContactPage_contact-label__RsGtv","contact-input":"ContactPage_contact-input__UF4pr","btn-container":"ContactPage_btn-container___iCHI","btn-download":"ContactPage_btn-download__1y5uG","btn-text":"ContactPage_btn-text__3XCFd","btn-icon":"ContactPage_btn-icon__193si"}},54:function(t,e,a){"use strict";a.r(e);var c=a(35),n=a(0),s=a(51),o=a.n(s),l=a(33),i=a(34),r=a(36),u=a(5),b=Object(u.jsx)(l.a,{icon:i.a});e.default=function(){var t=Object(n.useRef)(null),e=Object(n.useRef)(null),a=Object(n.useRef)(null),s=Object(n.useState)("Send Message"),l=Object(c.a)(s,2),i=l[0],j=l[1],d=Object(n.useState)(!1),m=Object(c.a)(d,2),_=m[0],p=m[1];return Object(u.jsx)("section",{className:o.a["contact-section"],children:Object(u.jsxs)("div",{className:o.a["contact-container"],children:[Object(u.jsx)("h2",{className:o.a["contact-title"],children:"Contact Me"}),Object(u.jsx)("div",{className:o.a["contact-subtitle"],children:"Get in touch"}),Object(u.jsxs)("form",{onSubmit:function(c){c.preventDefault(),p(!0);var n={name:t.current.value,email:e.current.value,message:a.current.value,_subject:t.current.value+" via Contact Form - arjunreddy.in",_template:"table",_replyto:e.current.value};fetch("https://formsubmit.co/ajax/b7c8a12cd083761a2f44481ad4834437",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)}),t.current.value="",e.current.value="",a.current.value="",p(!1),j("Message Sent"),Object(r.setTimeout)((function(){return j("Send Message")}),5e3)},className:o.a["contact-form"],children:[Object(u.jsxs)("div",{className:o.a["contact-inputs"],children:[Object(u.jsxs)("div",{className:o.a["contact-content"],children:[Object(u.jsx)("label",{htmlFor:"name",className:o.a["contact-label"],children:"Name"}),Object(u.jsx)("input",{type:"text",ref:t,id:"name",className:o.a["contact-input"],required:!0})]}),Object(u.jsxs)("div",{className:o.a["contact-content"],children:[Object(u.jsx)("label",{htmlFor:"email",className:o.a["contact-label"],children:"Email"}),Object(u.jsx)("input",{type:"email",ref:e,id:"email",className:o.a["contact-input"],required:!0})]}),Object(u.jsxs)("div",{className:o.a["contact-content"],children:[Object(u.jsx)("label",{htmlFor:"message",className:o.a["contact-label"],children:"Message"}),Object(u.jsx)("textarea",{ref:a,id:"message",cols:0,rows:7,className:o.a["contact-input"],required:!0})]})]}),Object(u.jsx)("div",{className:o.a["btn-container"],children:Object(u.jsxs)("button",{type:"submit",className:o.a["btn-download"],children:[Object(u.jsx)("span",{className:o.a["btn-text"],children:_?"Sending...":i}),Object(u.jsx)("span",{className:o.a["btn-icon"],children:b})]})})]})]})})}}}]);
//# sourceMappingURL=7.6c3b851d.chunk.js.map