(this["webpackJsonpmy-social-network"]=this["webpackJsonpmy-social-network"]||[]).push([[0],{11:function(e,s,a){e.exports={messagesWrap:"Messages_messagesWrap__37gEB",dialogsInner:"Messages_dialogsInner__2Zvw1",friendsMessages:"Messages_friendsMessages__rSgKe",active:"Messages_active__2mhrg",messagesLink:"Messages_messagesLink__2lvm6",linkTitle:"Messages_linkTitle__3ukLt",messagesContent:"Messages_messagesContent__7FsKi",messageInput:"Messages_messageInput__1tQzY",inputArea:"Messages_inputArea__1Ncb4",inputBtn:"Messages_inputBtn__R5nkW"}},15:function(e,s,a){e.exports={postWrap:"Post_postWrap__36rVA",postAutor:"Post_postAutor__2HhnX",postContent:"Post_postContent__1gaiv",ava:"Post_ava__1XJR6",postText:"Post_postText__bdGV0",postLikes:"Post_postLikes__3eEag",likeIcon:"Post_likeIcon__1RECh"}},19:function(e,s,a){e.exports={avaWrap:"Avatar_avaWrap__3USAx",avaImg:"Avatar_avaImg__2JcdS",ava:"Avatar_ava__30Ywd",avaSettings:"Avatar_avaSettings__1Pk7T",avaBtn:"Avatar_avaBtn__1Zhom"}},21:function(e,s,a){e.exports={headerWrap:"Header_headerWrap__jGDDN",headLogo:"Header_headLogo__X9m-A",headContent:"Header_headContent__33_HY"}},22:function(e,s,a){e.exports={postsWrap:"MyPosts_postsWrap__1nK8b",inputPost:"MyPosts_inputPost__3jVO-",inputArea:"MyPosts_inputArea__2mtLL",inputBtn:"MyPosts_inputBtn__q0Ses"}},29:function(e,s,a){e.exports={profileWrap:"Profile_profileWrap__3RtKc",avaDiscript:"Profile_avaDiscript__2dUNC"}},36:function(e,s,a){e.exports={conversationWrap:"Conversation_conversationWrap__16jRU"}},37:function(e,s,a){e.exports={messageWrap:"MessageRequest_messageWrap__2DvZF"}},38:function(e,s,a){e.exports={messageWrap:"MessageResponse_messageWrap__2PKcS"}},43:function(e,s,a){},46:function(e,s,a){},5:function(e,s,a){e.exports={navWrap:"Navbar_navWrap__2lMxZ",navContent:"Navbar_navContent__1pH8x",active:"Navbar_active__1gdX1",link:"Navbar_link__3jgJz",navIcon:"Navbar_navIcon__3jRcb"}},57:function(e,s,a){"use strict";a.r(s);var t=a(23),n=a.n(t),c=a(2),i=a.n(c),r=(a(43),a(30)),o=a(24),l=a(18),j=a(8),d={dialogs:[{id:Object(j.v1)(),name:"Amy Wong"},{id:Object(j.v1)(),name:"Zapp Brannigan"},{id:Object(j.v1)(),name:"John D. Zoidberg"},{id:Object(j.v1)(),name:"Turanga Leela"},{id:Object(j.v1)(),name:"Hubert J. Farnsworth"}],messages:[{id:Object(j.v1)(),text:"Hi! How are you?"},{id:Object(j.v1)(),text:"Hi! I'm fine, thanks!"}],newMessageText:""},m={posts:[{id:Object(j.v1)(),name:"Philip J. Fry",text:"Phew! What a terrible dream I had! I will never sleep again!",likes:12},{id:Object(j.v1)(),name:"John D. Zoidberg",text:"What's up?",likes:5},{id:Object(j.v1)(),name:"Turanga Leela",text:"Have you run out of idiotic thoughts?",likes:24}],newPostText:""},p=Object(r.a)({profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"ADD-POST":var a=Object(l.a)({},e);a.posts=Object(o.a)(e.posts);var t={id:Object(j.v1)(),name:"%@User_name@%",text:e.newPostText,likes:0};return a.posts.push(t),a.newPostText="",a;case"CHANGE-NEW-TEXT":var n=Object(l.a)({},e);return n.newPostText=s.newText,n;default:return e}},dialogsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"ADD-MESSAGE":var a=Object(l.a)({},e);a.messages=Object(o.a)(e.messages);var t={id:Object(j.v1)(),text:e.newMessageText};return a.messages.push(t),a.newMessageText="",a;case"CHANGE-NEW-MESSAGE":var n=Object(l.a)({},e);return n.newMessageText=s.newMessage,n;default:return e}}}),v=Object(r.b)(p),x=(a(46),a(21)),b=a.n(x),_=a(33),u=a(1),g=function(){return Object(u.jsxs)("header",{className:b.a.headerWrap,children:[Object(u.jsx)("a",{href:"#",className:b.a.headLogo,children:Object(u.jsx)(_.a,{className:b.a.logo,size:"2em"})}),Object(u.jsx)("div",{className:b.a.headContent,children:"Welcome to my SocialNetwork"})]})},O=a(5),h=a.n(O),N=a(14),f=a(13),T=function(){return Object(u.jsx)("section",{className:h.a.navWrap,children:Object(u.jsxs)("div",{className:h.a.navContent,children:[Object(u.jsxs)(f.b,{to:"/profile",className:h.a.link,activeClassName:h.a.active,children:[Object(u.jsx)(N.e,{className:h.a.navIcon}),Object(u.jsx)("div",{className:h.a.navText,children:"Profile"})]}),Object(u.jsxs)(f.b,{to:"/messages",className:h.a.link,activeClassName:h.a.active,children:[Object(u.jsx)(N.c,{className:h.a.navIcon}),Object(u.jsx)("div",{className:h.a.navText,children:"Messages"})]}),Object(u.jsxs)(f.b,{to:"/friends",className:h.a.link,activeClassName:h.a.active,children:[Object(u.jsx)(N.f,{className:h.a.navIcon}),Object(u.jsx)("div",{className:h.a.navText,children:"Friends"})]}),Object(u.jsxs)(f.b,{to:"/news",className:h.a.link,activeClassName:h.a.active,children:[Object(u.jsx)(N.d,{className:h.a.navIcon}),Object(u.jsx)("div",{className:h.a.navText,children:"News"})]})]})})},W=a(29),k=a.n(W),M=a(19),w=a.n(M),A=a.p+"static/media/IRh4RWeX.c1850cca.jpg",P=function(){return Object(u.jsxs)("section",{className:w.a.avaWrap,children:[Object(u.jsx)("div",{className:w.a.avaImg,children:Object(u.jsx)("img",{className:w.a.ava,src:A,alt:"Avatar"})}),Object(u.jsx)("div",{className:w.a.avaSettings,children:Object(u.jsx)("button",{className:w.a.avaBtn,children:"Edit"})})]})},I=a(6),C=a.n(I),E=function(){return Object(u.jsxs)("section",{className:C.a.infoWrap,children:[Object(u.jsxs)("div",{className:C.a.infoItem,children:[Object(u.jsx)("div",{className:C.a.itemTitle,children:"Name"}),Object(u.jsx)("div",{className:C.a.itemDescription,children:"Bender Rodriguez"})]}),Object(u.jsxs)("div",{className:C.a.infoItem,children:[Object(u.jsx)("div",{className:C.a.itemTitle,children:"Birth"}),Object(u.jsx)("div",{className:C.a.itemDescription,children:"10/11/1989"})]}),Object(u.jsxs)("div",{className:C.a.infoItem,children:[Object(u.jsx)("div",{className:C.a.itemTitle,children:"Education"}),Object(u.jsx)("div",{className:C.a.itemDescription,children:"University degree"})]}),Object(u.jsxs)("div",{className:C.a.infoItem,children:[Object(u.jsx)("div",{className:C.a.itemTitle,children:"Quotes"}),Object(u.jsx)("div",{className:C.a.itemDescription,children:Object(u.jsx)("div",{className:C.a.descriptionText,children:'"I\'m going to build my own theme park! With blackjack! And hookers!"'})})]})]})},y=a(22),D=a.n(y),H=a(15),S=a.n(H),R=a.p+"static/media/ghML0mY_.02012f6e.jpg",L=a(34),B=function(e){return Object(u.jsxs)("section",{className:S.a.postWrap,children:[Object(u.jsx)("div",{className:S.a.postAutor,children:e.name}),Object(u.jsxs)("div",{className:S.a.postContent,children:[Object(u.jsx)("div",{className:S.a.ava,children:Object(u.jsx)("img",{src:R,alt:"Avatar"})}),Object(u.jsxs)("div",{className:S.a.postText,children:["\u201c",e.text,"\u201d"]})]}),Object(u.jsxs)("div",{className:S.a.postLikes,children:[Object(u.jsx)(L.a,{className:S.a.likeIcon}),Object(u.jsx)("div",{className:S.a.likesCount,children:e.likes})]})]})},G=function(e){var s=e.posts.map((function(e){return Object(u.jsx)(B,{name:e.name,text:e.text,likes:e.likes},e.id)}));return Object(u.jsxs)("section",{className:D.a.postsWrap,children:[Object(u.jsxs)("div",{className:D.a.inputPost,children:[Object(u.jsx)("div",{className:D.a.inputArea,children:Object(u.jsx)("input",{type:"text",value:e.newPost,onChange:function(s){e.onNewTextChangeHandler(s)},placeholder:"Enter your message"})}),Object(u.jsx)(N.a,{onClick:e.onAddPost,className:D.a.inputBtn,size:"2em"})]}),s]})},J=a(17),X=Object(J.b)((function(e){return{posts:e.profileReducer.posts,newPost:e.profileReducer.newPostText}}),(function(e){return{onAddPost:function(){e({type:"ADD-POST"})},onNewTextChangeHandler:function(s){e({type:"CHANGE-NEW-TEXT",newText:s.currentTarget.value})}}}))(G),Z=function(){return Object(u.jsxs)("section",{className:k.a.profileWrap,children:[Object(u.jsxs)("div",{className:k.a.avaDiscript,children:[Object(u.jsx)(P,{}),Object(u.jsx)(E,{})]}),Object(u.jsx)(X,{})]})},z=a(4),F=a(11),K=a.n(F),U=a(36),Y=a.n(U),V=a(37),q=a.n(V),Q=function(e){return Object(u.jsx)("section",{className:q.a.messageWrap,children:e.message})},$=a(38),ee=a.n($),se=function(e){return Object(u.jsx)("section",{className:ee.a.messageWrap,children:e.message})},ae=function(e){var s=e.message.map((function(e){return Object(u.jsx)(se,{message:e.text},e.id)}));return Object(u.jsxs)("section",{className:Y.a.conversationWrap,children:[Object(u.jsx)(Q,{message:e.message[0].text}),s]})},te=function(e){return Object(u.jsx)(f.b,{to:"/messages/conversation/"+e.id,className:K.a.messagesLink,activeClassName:K.a.active,children:Object(u.jsx)("div",{className:K.a.linkTitle,children:e.name})})},ne=function(e){var s=e.dialogs.map((function(e){return Object(u.jsx)(te,{id:e.id,name:e.name},e.id)}));return Object(u.jsxs)("section",{className:K.a.messagesWrap,children:[Object(u.jsxs)("div",{className:K.a.dialogsInner,children:[Object(u.jsx)("div",{className:K.a.friendsMessages,children:s}),Object(u.jsx)("div",{className:K.a.messagesContent,children:Object(u.jsx)(ae,{message:e.messages})})]}),Object(u.jsxs)("div",{className:K.a.messageInput,children:[Object(u.jsx)("div",{className:K.a.inputArea,children:Object(u.jsx)("input",{type:"text",value:e.newMessage,onChange:function(s){return e.onNewMessageChangeHandler(s)},placeholder:"Enter your message"})}),Object(u.jsx)(N.b,{onClick:e.onAddMessage,className:K.a.inputBtn,size:"2em"})]})]})},ce=Object(J.b)((function(e){return{newMessage:e.dialogsReducer.newMessageText,dialogs:e.dialogsReducer.dialogs,messages:e.dialogsReducer.messages}}),(function(e){return{onAddMessage:function(){e({type:"ADD-MESSAGE"})},onNewMessageChangeHandler:function(s){e({type:"CHANGE-NEW-MESSAGE",newMessage:s.currentTarget.value})}}}))(ne);var ie=function(){return Object(u.jsx)(f.a,{children:Object(u.jsxs)("div",{className:"App-wrapper",children:[Object(u.jsx)(g,{}),Object(u.jsx)(T,{}),Object(u.jsx)("section",{className:"Content",children:Object(u.jsxs)(z.d,{children:[Object(u.jsx)(z.b,{path:"/profile",render:function(){return Object(u.jsx)(Z,{})}}),Object(u.jsx)(z.b,{path:"/messages",render:function(){return Object(u.jsx)(ce,{})}}),Object(u.jsx)(z.a,{to:"/profile"})]})})]})})};n.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(J.a,{store:v,children:Object(u.jsx)(ie,{})})}),document.getElementById("root"))},6:function(e,s,a){e.exports={infoWrap:"ProfileInfo_infoWrap__XdM_I",infoItem:"ProfileInfo_infoItem__2XvJw",itemTitle:"ProfileInfo_itemTitle__ri-Hf",itemDescription:"ProfileInfo_itemDescription__YLoNv",descriptionText:"ProfileInfo_descriptionText__2OkD6"}}},[[57,1,2]]]);
//# sourceMappingURL=main.4919bd0d.chunk.js.map