(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports={messagesWrap:"Messages_messagesWrap__2nz78",dialogsInner:"Messages_dialogsInner__2GJPn",friendsMessages:"Messages_friendsMessages__1aUAf",active:"Messages_active__29Eub",messagesLink:"Messages_messagesLink__2jVMy",linkTitle:"Messages_linkTitle__fjSYB",messagesContent:"Messages_messagesContent__AR3ux",messageInput:"Messages_messageInput__2fsWP",inputArea:"Messages_inputArea__2y7ur",inputBtn:"Messages_inputBtn__1TLdz"}},16:function(e,a,t){e.exports={mainFader:"PreloaderSVG_mainFader__1igsZ",loader:"PreloaderSVG_loader__1oRYk",pulse:"PreloaderSVG_pulse__UrCAz",path7:"PreloaderSVG_path7__1GDgv",path6:"PreloaderSVG_path6__3SMwK",path5:"PreloaderSVG_path5__oNd75",path4:"PreloaderSVG_path4__1Us6x",path3:"PreloaderSVG_path3__5AkEc",path2:"PreloaderSVG_path2__hhvwI",path1:"PreloaderSVG_path1__2K28F",path0:"PreloaderSVG_path0__3FRnn"}},18:function(e,a,t){e.exports={infoWrap:"ProfileInfo_infoWrap__1Sogx",infoItem:"ProfileInfo_infoItem__x1wAk",itemTitle:"ProfileInfo_itemTitle__sIu7o",itemDescription:"ProfileInfo_itemDescription__1muTk",descriptionText:"ProfileInfo_descriptionText__2PDqw"}},19:function(e,a,t){e.exports={postWrap:"Post_postWrap__33QUx",postAutor:"Post_postAutor__OPZNZ",postContent:"Post_postContent__2wo3j",ava:"Post_ava__1tdgG",postText:"Post_postText__y2cCX",postLikes:"Post_postLikes__3rZc0",likeIcon:"Post_likeIcon__34Epz"}},27:function(e,a,t){e.exports={avaWrap:"Avatar_avaWrap__3tpKP",avaImg:"Avatar_avaImg__OYA3s",ava:"Avatar_ava__3MD2v",avaSettings:"Avatar_avaSettings__1BNE_",avaBtn:"Avatar_avaBtn__cpEjP"}},30:function(e,a,t){e.exports={postsWrap:"MyPosts_postsWrap__31Cb8",inputPost:"MyPosts_inputPost__2BE_Y",inputArea:"MyPosts_inputArea__3WVLA",inputBtn:"MyPosts_inputBtn__2D68l"}},31:function(e,a,t){e.exports={headerWrap:"Header_headerWrap__3-83i",headLogo:"Header_headLogo__3TQve",headContent:"Header_headContent__3deog"}},33:function(e,a,t){e.exports=t.p+"static/media/nonameUser.2a09aa4b.jpg"},34:function(e,a,t){e.exports={messageWrap:"MessageRequest_messageWrap__1u85V",message:"MessageRequest_message__1i1G-",angle:"MessageRequest_angle__24Y4D"}},35:function(e,a,t){e.exports={messageWrap:"MessageResponse_messageWrap__1V2Dh",message:"MessageResponse_message__7KkQ2",angle:"MessageResponse_angle__3pby9"}},39:function(e,a,t){e.exports={profileWrap:"Profile_profileWrap__37dOT",avaDiscript:"Profile_avaDiscript__33R9Z"}},5:function(e,a,t){e.exports={navWrap:"Navbar_navWrap__18mrh",navContent:"Navbar_navContent__2pfvB",active:"Navbar_active__QtVGT",link:"Navbar_link__3vOxA",navIcon:"Navbar_navIcon__36W5q"}},53:function(e,a,t){e.exports={conversationWrap:"Conversation_conversationWrap__39JRi"}},57:function(e,a,t){e.exports=t(93)},6:function(e,a,t){e.exports={usersWrap:"Users_usersWrap__e1s2w",getBtn:"Users_getBtn__bGW_U",pagesWrap:"Users_pagesWrap__1XFtJ",selectedPage:"Users_selectedPage__2n7ut",innerWrap:"Users_innerWrap__1HFul",avaWrap:"Users_avaWrap__rzbwa",avaImg:"Users_avaImg__1UWqP",ava:"Users_ava__23Qog",avaSettings:"Users_avaSettings__3C8js",avaBtn:"Users_avaBtn__157ef",userInfoWrap:"Users_userInfoWrap__2werw",user:"Users_user__16aU1",userName:"Users_userName__3B_lJ",userStatus:"Users_userStatus__P3CYk",location:"Users_location__1pNzC",country:"Users_country__16fVl",city:"Users_city__2TDNy"}},62:function(e,a,t){},83:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(32),s=t.n(n),r=t(1),c=t.n(r),o=(t(62),t(29)),i=t(24),l=t(4),u=t(9),m={dialogs:[{id:Object(u.v1)(),name:"Amy Wong"},{id:Object(u.v1)(),name:"Zapp Brannigan"},{id:Object(u.v1)(),name:"John D. Zoidberg"},{id:Object(u.v1)(),name:"Turanga Leela"},{id:Object(u.v1)(),name:"Hubert J. Farnsworth"}],messages:[{id:Object(u.v1)(),text:"Hi! How are you?"},{id:Object(u.v1)(),text:"Hi! I'm fine, thanks!"}],newMessageText:""},p=t(51),g=t.n(p).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"26cd6eda-bc62-4bf5-b3d8-fb025b33cde9"}}),d=function(e,a){return g.get("users?page=".concat(e,"&count=").concat(a)).then(function(e){return e.data})},_=function(e){return g.delete("follow/".concat(e))},f=function(e){return g.post("follow/".concat(e))},v=function(e){return g.get("profile/".concat(e))},E=function(){return g.get("auth/me")},h={posts:[{image:"https://pbs.twimg.com/profile_images/472509364738072576/dtKZNd1J.jpeg",id:Object(u.v1)(),name:"Philip J. Fry",text:"Phew! What a terrible dream I had! I will never sleep again!",likes:12},{image:"https://i.pinimg.com/736x/bb/4f/45/bb4f4529f8d7d3d60aa6fb3096b94ee6--futurama-why-not.jpg",id:Object(u.v1)(),name:"John D. Zoidberg",text:"Whoop! Whoop! Whoop! Whoop! Whoop!",likes:5},{image:"https://tridigital.wpengine.com/wp-content/uploads/2014/10/Turanga-Leela-Cartoon-Anime.jpg",id:Object(u.v1)(),name:"Turanga Leela",text:"Have you run out of idiotic thoughts?",likes:24}],newPostText:"",profile:{}},N={users:[],pagesSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingProgress:[]},b=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},P=function(e,a){return{type:"TOGGLE-FOLLOWING-PROGRESS",isFetching:e,userID:a}},O={id:null,email:null,login:null,isAuth:!1},w=t(52),A=Object(o.b)({profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD-POST":var t=Object(l.a)({},e);t.posts=Object(i.a)(e.posts);var n={image:"https://media1.tenor.com/images/9a04b431a9355b4b6295f25cbbcfe547/tenor.gif?itemid=4868772",id:Object(u.v1)(),name:"%@User_name@%",text:e.newPostText,likes:0};return t.posts.unshift(n),t.newPostText="",t;case"CHANGE-NEW-TEXT":var s=Object(l.a)({},e);return s.newPostText=a.newText,s;case"SET-USER-PROFILE":return Object(l.a)({},e,{profile:a.profile});default:return e}},dialogsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD-MESSAGE":var t=Object(l.a)({},e);t.messages=Object(i.a)(e.messages);var n={id:Object(u.v1)(),text:e.newMessageText};return t.messages.push(n),t.newMessageText="",t;case"CHANGE-NEW-MESSAGE":var s=Object(l.a)({},e);return s.newMessageText=a.newMessage,s;default:return e}},usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FOLLOW":return Object(l.a)({},e,{users:e.users.map(function(e){return e.id===a.userID?Object(l.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(l.a)({},e,{users:e.users.map(function(e){return e.id===a.userID?Object(l.a)({},e,{followed:!1}):e})});case"SET-USERS":return Object(l.a)({},e,{users:a.users});case"SET-CURRENT-PAGE":return Object(l.a)({},e,{currentPage:a.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(l.a)({},e,{totalUsersCount:a.count});case"TOGGLE-IS-FETCHING":return Object(l.a)({},e,{isFetching:a.isFetching});case"TOGGLE-FOLLOWING-PROGRESS":return Object(l.a)({},e,{followingProgress:a.isFetching?[].concat(Object(i.a)(e.followingProgress),[a.userID]):e.followingProgress.filter(function(e){return e!=a.userID})});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET-USER-DATA":return Object(l.a)({},e,a.data,{isAuth:!0});default:return e}}}),T=Object(o.c)(A,Object(o.a)(w.a)),C=(t(83),t(5)),S=t.n(C),W=t(17),j=t(7),x=function(){return c.a.createElement("section",{className:S.a.navWrap},c.a.createElement("div",{className:S.a.navContent},c.a.createElement(j.b,{to:"/profile",className:S.a.link,activeClassName:S.a.active},c.a.createElement(W.f,{className:S.a.navIcon}),c.a.createElement("div",{className:S.a.navText},"Profile")),c.a.createElement(j.b,{to:"/messages",className:S.a.link,activeClassName:S.a.active},c.a.createElement(W.c,{className:S.a.navIcon}),c.a.createElement("div",{className:S.a.navText},"Messages")),c.a.createElement(j.b,{to:"/friends",className:S.a.link,activeClassName:S.a.active},c.a.createElement(W.g,{className:S.a.navIcon}),c.a.createElement("div",{className:S.a.navText},"Friends")),c.a.createElement(j.b,{to:"/news",className:S.a.link,activeClassName:S.a.active},c.a.createElement(W.e,{className:S.a.navIcon}),c.a.createElement("div",{className:S.a.navText},"News"))))},y=t(3),M=t(14),I=t.n(M),U=t(53),k=t.n(U),R=t(34),G=t.n(R),D=function(e){var a=e.message;return c.a.createElement("section",{className:G.a.messageWrap},c.a.createElement("div",{className:G.a.angle}),c.a.createElement("div",{className:G.a.message},a))},L=t(35),F=t.n(L),B=function(e){var a=e.message;return c.a.createElement("section",{className:F.a.messageWrap},c.a.createElement("div",{className:F.a.message},a),c.a.createElement("div",{className:F.a.angle}))},H=function(e){var a=e.message,t=a.map(function(e){return c.a.createElement(B,{key:e.id,message:e.text})});return c.a.createElement("section",{className:k.a.conversationWrap},c.a.createElement(D,{message:a[0].text}),t)},Z=function(e){var a=e.name,t=e.id;return c.a.createElement(j.b,{to:"/messages/conversation/"+t,className:I.a.messagesLink,activeClassName:I.a.active},c.a.createElement("div",{className:I.a.linkTitle},a))},z=function(e){var a=e.dialogs,t=e.messages,n=e.newMessage,s=e.onAddMessage,r=e.onNewMessageChangeHandler,o=e.isAuth,i=a.map(function(e){return c.a.createElement(Z,{key:e.id,id:e.id,name:e.name})});return o?c.a.createElement("section",{className:I.a.messagesWrap},c.a.createElement("div",{className:I.a.dialogsInner},c.a.createElement("div",{className:I.a.friendsMessages},i),c.a.createElement("div",{className:I.a.messagesContent},c.a.createElement(H,{message:t}))),c.a.createElement("div",{className:I.a.messageInput},c.a.createElement("div",{className:I.a.inputArea},c.a.createElement("input",{type:"text",value:n,onChange:function(e){return r(e)},placeholder:"Enter your message"})),c.a.createElement(W.b,{onClick:s,className:I.a.inputBtn,size:"2em"}))):c.a.createElement(y.a,{to:"/login"})},V=t(13),J=Object(V.b)(function(e){return{newMessage:e.dialogsReducer.newMessageText,dialogs:e.dialogsReducer.dialogs,messages:e.dialogsReducer.messages,isAuth:e.auth.isAuth}},function(e){return{onAddMessage:function(){e({type:"ADD-MESSAGE"})},onNewMessageChangeHandler:function(a){e({type:"CHANGE-NEW-MESSAGE",newMessage:a.currentTarget.value})}}})(z),Y=t(21),q=t(22),K=t(25),Q=t(23),X=t(26),$=t(6),ee=t.n($),ae=t(33),te=t.n(ae),ne=function(e){for(var a=e.users,t=e.totalUsersCount,n=e.currentPage,s=e.pagesSize,r=e.onPageChanged,o=e.unfollow,i=e.follow,l=e.followingProgress,u=Math.ceil(t/s),m=[],p=1;p<=u;p++)m.push(p);return c.a.createElement("section",{className:ee.a.usersWrap},c.a.createElement("div",{className:ee.a.pagesWrap},m.map(function(e){return c.a.createElement("span",{style:{marginLeft:"5px"},className:n===e?ee.a.selectedPage:"",onClick:function(){return r(e)}},e)})),a.map(function(e){return c.a.createElement("section",{key:e.id,className:ee.a.innerWrap},c.a.createElement("div",{className:ee.a.avaWrap},c.a.createElement(j.b,{to:"/profile/"+e.id},c.a.createElement("div",{className:ee.a.avaImg},c.a.createElement("img",{className:ee.a.ava,src:null===e.photos.small?te.a:e.photos.small,alt:"Avatar"}))),c.a.createElement("div",{className:ee.a.avaSettings},e.followed?c.a.createElement("button",{className:ee.a.avaBtn,disabled:l.some(function(a){return a===e.id}),onClick:function(){o(e.id)}},"Unfollow"):c.a.createElement("button",{className:ee.a.avaBtn,disabled:l.some(function(a){return a===e.id}),onClick:function(){i(e.id)}},"Follow"))),c.a.createElement("div",{className:ee.a.userInfoWrap},c.a.createElement("div",{className:ee.a.user},c.a.createElement("div",{className:ee.a.userName},e.name),c.a.createElement("div",{className:ee.a.userStatus},"\u201c",e.status,"\u201d")),c.a.createElement("div",{className:ee.a.location},c.a.createElement("div",{className:ee.a.country},"country"),c.a.createElement("div",{className:ee.a.city},"city"))))}))},se=t(16),re=t.n(se),ce=function(){return c.a.createElement("div",{className:re.a.mainFader},c.a.createElement("div",{className:re.a.loader},c.a.createElement("svg",{viewBox:"0 0 866 866"},c.a.createElement("svg",{id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 164.83 151.5"},c.a.createElement("path",{className:re.a.path0,d:"M117.24,69.24A8,8,0,0,0,115.67,67c-4.88-4-9.8-7.89-14.86-11.62A4.93,4.93,0,0,0,96.93,55c-5.76,1.89-11.4,4.17-17.18,6a4.36,4.36,0,0,0-3.42,4.12c-1,6.89-2.1,13.76-3,20.66a4,4,0,0,0,1,3.07c5.12,4.36,10.39,8.61,15.68,12.76a3.62,3.62,0,0,0,2.92.75c6.29-2.66,12.52-5.47,18.71-8.36a3.49,3.49,0,0,0,1.68-2.19c1.34-7.25,2.54-14.55,3.9-22.58Z",fill:"#40c456"}),c.a.createElement("path",{className:re.a.path1,d:"M97.55,38.68A43.76,43.76,0,0,1,98,33.44c.41-2.36-.5-3.57-2.57-4.64C91.1,26.59,87,24,82.66,21.82a6.18,6.18,0,0,0-4-.71C73.45,22.55,68.32,24.25,63.22,26c-3.63,1.21-6.08,3.35-5.76,7.69a26.67,26.67,0,0,1-.6,4.92c-1.08,8.06-1.08,8.08,5.86,11.92,3.95,2.19,7.82,5.75,11.94,6.08s8.76-2.41,13.12-3.93c9.33-3.29,9.33-3.3,9.78-14Z",fill:"#40c456"}),c.a.createElement("path",{className:re.a.path2,d:"M66.11,126.56c5.91-.91,11.37-1.7,16.81-2.71a3.3,3.3,0,0,0,1.87-2.17c1-4.06,1.73-8.19,2.84-12.24.54-2-.11-3-1.55-4.15-5-4-9.9-8.12-15-12a6.19,6.19,0,0,0-4.15-1.1c-5.35.66-10.7,1.54-16,2.54A4,4,0,0,0,48.34,97a109.13,109.13,0,0,0-3,12.19,4.47,4.47,0,0,0,1.34,3.6c5.54,4.36,11.23,8.53,16.91,12.69a10.84,10.84,0,0,0,2.57,1.11Z",fill:"#40c456"}),c.a.createElement("path",{className:re.a.path3,d:"M127.42,104.12c4.1-2.1,8-3.93,11.72-6a6,6,0,0,0,2.27-3,58.22,58.22,0,0,0,3.18-29.92c-.26-1.7-8-7.28-9.71-6.85A5,5,0,0,0,133,59.65c-2.81,2.49-5.71,4.88-8.33,7.56a9.46,9.46,0,0,0-2.47,4.4c-1.29,6.49-2.38,13-3.35,19.55a5.73,5.73,0,0,0,.83,3.91c2.31,3.08,5,5.88,7.7,9Z",fill:"#40c456"}),c.a.createElement("path",{className:re.a.path4,d:"M52.58,29.89c-2.15-.36-3.78-.54-5.39-.9-2.83-.64-4.92.1-7,2.32A64.1,64.1,0,0,0,26.09,54.64c-2.64,7.92-2.62,7.84,5.15,10.87,1.76.69,2.73.45,3.93-1C39.79,59,44.54,53.65,49.22,48.2a4.2,4.2,0,0,0,1.13-2c.8-5.32,1.49-10.68,2.24-16.34Z",fill:"#40c456"}),c.a.createElement("path",{className:re.a.path5,fill:"#40c456",d:"M23,68.13c0,2.51,0,4.7,0,6.87a60.49,60.49,0,0,0,9.75,32.15c1.37,2.13,6.4,3,7,1.2,1.55-5,2.68-10.2,3.82-15.34.13-.58-.58-1.38-.94-2.06-2.51-4.77-5.47-9.38-7.45-14.37C32.94,71,28.22,69.84,23,68.13Z"}),c.a.createElement("path",{className:re.a.path6,fill:"#40c456",d:"M83.91,12.86c-.32.36-.66.71-1,1.07.9,1.13,1.57,2.62,2.73,3.33,4.71,2.84,9.56,5.48,14.39,8.1a9.29,9.29,0,0,0,3.13.83c5.45.69,10.89,1.38,16.35,1.94a10.41,10.41,0,0,0,3.07-.71c-11.48-9.9-24.26-14.61-38.71-14.56Z"}),c.a.createElement("path",{className:re.a.path7,fill:"#40c456",d:"M66.28,132.51c13.36,3.78,25.62,3.5,38-.9C91.68,129.59,79.36,128,66.28,132.51Z"}),c.a.createElement("path",{className:re.a.path8,fill:"#40c456",d:"M127.2,30.66l-1.27.37a18.58,18.58,0,0,0,1,3.08c3,5.52,6.21,10.89,8.89,16.54,1.34,2.83,3.41,3.82,6.49,4.9a60.38,60.38,0,0,0-15.12-24.9Z"}),c.a.createElement("path",{className:"bb-9",fill:"#40c456",d:"M117.35,125c5.58-2.32,16.9-13.84,18.1-19.2-2.41,1.46-5.18,2.36-6.78,4.23-4.21,5-7.89,10.37-11.32,15Z"})))))},oe=function(e){function a(){var e,t;Object(Y.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(K.a)(this,(e=Object(Q.a)(a)).call.apply(e,[this].concat(s)))).onPageChanged=function(e){t.props.getUsers(e,t.props.pagesSize)},t}return Object(X.a)(a,e),Object(q.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pagesSize)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.isFetching?c.a.createElement(ce,null):null,c.a.createElement(ne,{users:this.props.users,pagesSize:this.props.pagesSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,followingProgress:this.props.followingProgress}))}}]),a}(c.a.Component),ie=Object(V.b)(function(e){return{users:e.usersReducer.users,pagesSize:e.usersReducer.pagesSize,totalUsersCount:e.usersReducer.totalUsersCount,currentPage:e.usersReducer.currentPage,isFetching:e.usersReducer.isFetching,followingProgress:e.usersReducer.followingProgress}},{follow:function(e){return function(a,t){a(P(!0,e)),f(e).then(function(t){0==t.data.resultCode&&a(function(e){return{type:"FOLLOW",userID:e}}(e)),a(P(!1,e))})}},unfollow:function(e){return function(a,t){a(P(!0,e)),_(e).then(function(t){0==t.data.resultCode&&a(function(e){return{type:"UNFOLLOW",userID:e}}(e)),a(P(!1,e))})}},getUsers:function(e,a){return function(t,n){t(function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}}(e)),t(b(!0)),d(e,a).then(function(e){t(b(!1)),t({type:"SET-USERS",users:e.items}),t({type:"SET-TOTAL-USERS-COUNT",count:e.totalCount})})}}})(oe),le=t(39),ue=t.n(le),me=t(27),pe=t.n(me),ge=function(e){var a=e.photos;return c.a.createElement("section",{className:pe.a.avaWrap},c.a.createElement("div",{className:pe.a.avaImg},c.a.createElement("img",{className:pe.a.ava,src:null===a.large?te.a:a.large,alt:"Avatar"})),c.a.createElement("div",{className:pe.a.avaSettings},c.a.createElement("button",{className:pe.a.avaBtn},"Edit")))},de=t(18),_e=t.n(de),fe=function(e){var a=e.profile;return c.a.createElement("section",{className:_e.a.infoWrap},c.a.createElement("div",{className:_e.a.infoItem},c.a.createElement("div",{className:_e.a.itemTitle},"Name"),c.a.createElement("div",{className:_e.a.itemDescription},a.fullName)),c.a.createElement("div",{className:_e.a.infoItem},c.a.createElement("div",{className:_e.a.itemTitle},"About me"),c.a.createElement("div",{className:_e.a.itemDescription},'"',a.aboutMe,'"')),c.a.createElement("div",{className:_e.a.infoItem},c.a.createElement("div",{className:_e.a.itemTitle},"Looking for a job"),c.a.createElement("div",{className:_e.a.itemDescription},a.lookingForAJob?c.a.createElement(W.d,null):"")))},ve=t(30),Ee=t.n(ve),he=t(19),Ne=t.n(he),be=t(55),Pe=function(e){var a=e.name,t=e.text,n=e.likes,s=e.image;return c.a.createElement("section",{className:Ne.a.postWrap},c.a.createElement("div",{className:Ne.a.postAutor},a),c.a.createElement("div",{className:Ne.a.postContent},c.a.createElement("div",{className:Ne.a.ava},c.a.createElement("img",{src:s,alt:"Avatar"})),c.a.createElement("div",{className:Ne.a.postText},"\u201c",t,"\u201d")),c.a.createElement("div",{className:Ne.a.postLikes},c.a.createElement(be.a,{className:Ne.a.likeIcon}),c.a.createElement("div",{className:Ne.a.likesCount},n)))},Oe=function(e){var a=e.posts,t=e.newPost,n=e.onAddPost,s=e.onNewTextChangeHandler,r=a.map(function(e){return c.a.createElement(Pe,{key:e.id,name:e.name,text:e.text,likes:e.likes,image:e.image})});return c.a.createElement("section",{className:Ee.a.postsWrap},c.a.createElement("div",{className:Ee.a.inputPost},c.a.createElement("div",{className:Ee.a.inputArea},c.a.createElement("input",{type:"text",value:t,onChange:function(e){s(e)},placeholder:"Enter your message"})),c.a.createElement(W.a,{onClick:n,className:Ee.a.inputBtn,size:"2em"})),r)},we=Object(V.b)(function(e){return{posts:e.profileReducer.posts,newPost:e.profileReducer.newPostText}},function(e){return{onAddPost:function(){e({type:"ADD-POST"})},onNewTextChangeHandler:function(a){e({type:"CHANGE-NEW-TEXT",newText:a.currentTarget.value})}}})(Oe),Ae=function(e){var a=e.profile;return a.photos?c.a.createElement("section",{className:ue.a.profileWrap},c.a.createElement("div",{className:ue.a.avaDiscript},c.a.createElement(ge,{photos:a.photos}),c.a.createElement(fe,{profile:a})),c.a.createElement(we,null)):c.a.createElement(ce,null)},Te=function(e){function a(){return Object(Y.a)(this,a),Object(K.a)(this,Object(Q.a)(a).apply(this,arguments))}return Object(X.a)(a,e),Object(q.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userID;e||(e="2"),this.props.getUserProfile(e)}},{key:"render",value:function(){return this.props.isAuth?c.a.createElement(Ae,Object.assign({},this.props,{profile:this.props.profile})):c.a.createElement(y.a,{to:"/login"})}}]),a}(c.a.Component),Ce=Object(y.g)(Te),Se=Object(V.b)(function(e){return{profile:e.profileReducer.profile,isAuth:e.auth.isAuth}},{getUserProfile:function(e){return function(a){v(e).then(function(e){a({type:"SET-USER-PROFILE",profile:e.data})})}}})(Ce),We=t(31),je=t.n(We),xe=t(56),ye=function(e){var a=e.isAuth,t=e.login;return c.a.createElement("header",{className:je.a.headerWrap},c.a.createElement("a",{href:"#",className:je.a.headLogo},c.a.createElement(xe.a,{className:je.a.logo,size:"2em"})),c.a.createElement("div",{className:je.a.headContent},a?t:c.a.createElement(j.b,{to:"/login"},"Login")))},Me=function(e){function a(){return Object(Y.a)(this,a),Object(K.a)(this,Object(Q.a)(a).apply(this,arguments))}return Object(X.a)(a,e),Object(q.a)(a,[{key:"componentDidMount",value:function(){this.props.getUserData()}},{key:"render",value:function(){return c.a.createElement(ye,{isAuth:this.props.isAuth,login:this.props.login})}}]),a}(c.a.Component),Ie=Object(V.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{getUserData:function(){return function(e){E().then(function(a){0==a.data.resultCode&&e({type:"SET-USER-DATA",data:a.data.data})})}}})(Me),Ue=function(){return c.a.createElement("h1",null,"LOGIN")};var ke=function(){return c.a.createElement(j.a,null,c.a.createElement("div",{className:"App-wrapper"},c.a.createElement(Ie,null),c.a.createElement(x,null),c.a.createElement("section",{className:"Content"},c.a.createElement(y.d,null,c.a.createElement(y.b,{path:"/profile/:userID?",render:function(){return c.a.createElement(Se,null)}}),c.a.createElement(y.b,{path:"/messages",render:function(){return c.a.createElement(J,null)}}),c.a.createElement(y.b,{path:"/friends",render:function(){return c.a.createElement(ie,null)}}),c.a.createElement(y.b,{path:"/login",render:function(){return c.a.createElement(Ue,null)}}),c.a.createElement(y.a,{to:"/profile"})))))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(V.a,{store:T},c.a.createElement(ke,null))),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.27bed904.chunk.js.map