(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports={messagesWrap:"Messages_messagesWrap__2nz78",dialogsInner:"Messages_dialogsInner__2GJPn",friendsMessages:"Messages_friendsMessages__1aUAf",active:"Messages_active__29Eub",messagesLink:"Messages_messagesLink__2jVMy",linkTitle:"Messages_linkTitle__fjSYB",messagesContent:"Messages_messagesContent__AR3ux",messageInput:"Messages_messageInput__2fsWP",inputArea:"Messages_inputArea__2y7ur",inputBtn:"Messages_inputBtn__1TLdz"}},15:function(e,a,t){e.exports={mainFader:"PreloaderSVG_mainFader__1igsZ",loader:"PreloaderSVG_loader__1oRYk",pulse:"PreloaderSVG_pulse__UrCAz",path7:"PreloaderSVG_path7__1GDgv",path6:"PreloaderSVG_path6__3SMwK",path5:"PreloaderSVG_path5__oNd75",path4:"PreloaderSVG_path4__1Us6x",path3:"PreloaderSVG_path3__5AkEc",path2:"PreloaderSVG_path2__hhvwI",path1:"PreloaderSVG_path1__2K28F",path0:"PreloaderSVG_path0__3FRnn"}},17:function(e,a,t){e.exports={infoWrap:"ProfileInfo_infoWrap__1Sogx",infoItem:"ProfileInfo_infoItem__x1wAk",itemTitle:"ProfileInfo_itemTitle__sIu7o",itemDescription:"ProfileInfo_itemDescription__1muTk",descriptionText:"ProfileInfo_descriptionText__2PDqw"}},19:function(e,a,t){e.exports={postWrap:"Post_postWrap__33QUx",postAutor:"Post_postAutor__OPZNZ",postContent:"Post_postContent__2wo3j",ava:"Post_ava__1tdgG",postText:"Post_postText__y2cCX",postLikes:"Post_postLikes__3rZc0",likeIcon:"Post_likeIcon__34Epz"}},21:function(e,a,t){e.exports={avaWrap:"Avatar_avaWrap__3tpKP",avaImg:"Avatar_avaImg__OYA3s",ava:"Avatar_ava__3MD2v",avaSettings:"Avatar_avaSettings__1BNE_",avaBtn:"Avatar_avaBtn__cpEjP"}},24:function(e,a,t){e.exports={headerWrap:"Header_headerWrap__3-83i",headLogo:"Header_headLogo__3TQve",headContent:"Header_headContent__3deog"}},25:function(e,a,t){e.exports={postsWrap:"MyPosts_postsWrap__31Cb8",inputPost:"MyPosts_inputPost__2BE_Y",inputArea:"MyPosts_inputArea__3WVLA",inputBtn:"MyPosts_inputBtn__2D68l"}},30:function(e,a,t){e.exports=t.p+"static/media/nonameUser.2a09aa4b.jpg"},34:function(e,a,t){e.exports={messageWrap:"MessageRequest_messageWrap__1u85V",message:"MessageRequest_message__1i1G-",angle:"MessageRequest_angle__24Y4D"}},35:function(e,a,t){e.exports={messageWrap:"MessageResponse_messageWrap__1V2Dh",message:"MessageResponse_message__7KkQ2",angle:"MessageResponse_angle__3pby9"}},39:function(e,a,t){e.exports={profileWrap:"Profile_profileWrap__37dOT",avaDiscript:"Profile_avaDiscript__33R9Z"}},4:function(e,a,t){e.exports={navWrap:"Navbar_navWrap__18mrh",navContent:"Navbar_navContent__2pfvB",active:"Navbar_active__QtVGT",link:"Navbar_link__3vOxA",navIcon:"Navbar_navIcon__36W5q"}},5:function(e,a,t){e.exports={usersWrap:"Users_usersWrap__e1s2w",getBtn:"Users_getBtn__bGW_U",pagesWrap:"Users_pagesWrap__1XFtJ",selectedPage:"Users_selectedPage__2n7ut",innerWrap:"Users_innerWrap__1HFul",avaWrap:"Users_avaWrap__rzbwa",avaImg:"Users_avaImg__1UWqP",ava:"Users_ava__23Qog",avaSettings:"Users_avaSettings__3C8js",avaBtn:"Users_avaBtn__157ef",userInfoWrap:"Users_userInfoWrap__2werw",user:"Users_user__16aU1",userName:"Users_userName__3B_lJ",userStatus:"Users_userStatus__P3CYk",location:"Users_location__1pNzC",country:"Users_country__16fVl",city:"Users_city__2TDNy"}},53:function(e,a,t){e.exports={conversationWrap:"Conversation_conversationWrap__39JRi"}},56:function(e,a,t){e.exports=t(92)},61:function(e,a,t){},64:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var s=t(26),n=t.n(s),r=t(1),c=t.n(r),o=(t(61),t(40)),i=t(31),l=t(6),m=t(8),u={dialogs:[{id:Object(m.v1)(),name:"Amy Wong"},{id:Object(m.v1)(),name:"Zapp Brannigan"},{id:Object(m.v1)(),name:"John D. Zoidberg"},{id:Object(m.v1)(),name:"Turanga Leela"},{id:Object(m.v1)(),name:"Hubert J. Farnsworth"}],messages:[{id:Object(m.v1)(),text:"Hi! How are you?"},{id:Object(m.v1)(),text:"Hi! I'm fine, thanks!"}],newMessageText:""},p={posts:[{image:"https://pbs.twimg.com/profile_images/472509364738072576/dtKZNd1J.jpeg",id:Object(m.v1)(),name:"Philip J. Fry",text:"Phew! What a terrible dream I had! I will never sleep again!",likes:12},{image:"https://i.pinimg.com/736x/bb/4f/45/bb4f4529f8d7d3d60aa6fb3096b94ee6--futurama-why-not.jpg",id:Object(m.v1)(),name:"John D. Zoidberg",text:"Whoop! Whoop! Whoop! Whoop! Whoop!",likes:5},{image:"https://tridigital.wpengine.com/wp-content/uploads/2014/10/Turanga-Leela-Cartoon-Anime.jpg",id:Object(m.v1)(),name:"Turanga Leela",text:"Have you run out of idiotic thoughts?",likes:24}],newPostText:"",profile:{}},_={users:[],pagesSize:5,totalUsersCount:0,currentPage:1,isFetching:!0},g=Object(o.a)({profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD-POST":var t=Object(l.a)({},e);t.posts=Object(i.a)(e.posts);var s={image:"https://media1.tenor.com/images/9a04b431a9355b4b6295f25cbbcfe547/tenor.gif?itemid=4868772",id:Object(m.v1)(),name:"%@User_name@%",text:e.newPostText,likes:0};return t.posts.unshift(s),t.newPostText="",t;case"CHANGE-NEW-TEXT":var n=Object(l.a)({},e);return n.newPostText=a.newText,n;case"SET-USER-PROFILE":return Object(l.a)({},e,{profile:a.profile});default:return e}},dialogsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD-MESSAGE":var t=Object(l.a)({},e);t.messages=Object(i.a)(e.messages);var s={id:Object(m.v1)(),text:e.newMessageText};return t.messages.push(s),t.newMessageText="",t;case"CHANGE-NEW-MESSAGE":var n=Object(l.a)({},e);return n.newMessageText=a.newMessage,n;default:return e}},usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FOLLOW":return Object(l.a)({},e,{users:e.users.map(function(e){return e.id===a.userID?Object(l.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(l.a)({},e,{users:e.users.map(function(e){return e.id===a.userID?Object(l.a)({},e,{followed:!1}):e})});case"SET-USERS":return Object(l.a)({},e,{users:a.users});case"SET-CURRENT-PAGE":return Object(l.a)({},e,{currentPage:a.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(l.a)({},e,{totalUsersCount:a.count});case"TOGGLE-IS-FETCHING":return Object(l.a)({},e,{isFetching:a.isFetching});default:return e}}}),d=Object(o.b)(g),v=(t(64),t(24)),f=t.n(v),E=t(52),h=function(){return c.a.createElement("header",{className:f.a.headerWrap},c.a.createElement("a",{href:"#",className:f.a.headLogo},c.a.createElement(E.a,{className:f.a.logo,size:"2em"})),c.a.createElement("div",{className:f.a.headContent},"Welcome to my SocialNetwork"))},N=t(4),b=t.n(N),P=t(16),w=t(12),C=function(){return c.a.createElement("section",{className:b.a.navWrap},c.a.createElement("div",{className:b.a.navContent},c.a.createElement(w.b,{to:"/profile",className:b.a.link,activeClassName:b.a.active},c.a.createElement(P.f,{className:b.a.navIcon}),c.a.createElement("div",{className:b.a.navText},"Profile")),c.a.createElement(w.b,{to:"/messages",className:b.a.link,activeClassName:b.a.active},c.a.createElement(P.c,{className:b.a.navIcon}),c.a.createElement("div",{className:b.a.navText},"Messages")),c.a.createElement(w.b,{to:"/friends",className:b.a.link,activeClassName:b.a.active},c.a.createElement(P.g,{className:b.a.navIcon}),c.a.createElement("div",{className:b.a.navText},"Friends")),c.a.createElement(w.b,{to:"/news",className:b.a.link,activeClassName:b.a.active},c.a.createElement(P.e,{className:b.a.navIcon}),c.a.createElement("div",{className:b.a.navText},"News"))))},T=t(3),W=t(13),O=t.n(W),S=t(53),x=t.n(S),M=t(34),j=t.n(M),A=function(e){var a=e.message;return c.a.createElement("section",{className:j.a.messageWrap},c.a.createElement("div",{className:j.a.angle}),c.a.createElement("div",{className:j.a.message},a))},I=t(35),y=t.n(I),k=function(e){var a=e.message;return c.a.createElement("section",{className:y.a.messageWrap},c.a.createElement("div",{className:y.a.message},a),c.a.createElement("div",{className:y.a.angle}))},U=function(e){var a=e.message,t=a.map(function(e){return c.a.createElement(k,{key:e.id,message:e.text})});return c.a.createElement("section",{className:x.a.conversationWrap},c.a.createElement(A,{message:a[0].text}),t)},R=function(e){var a=e.name,t=e.id;return c.a.createElement(w.b,{to:"/messages/conversation/"+t,className:O.a.messagesLink,activeClassName:O.a.active},c.a.createElement("div",{className:O.a.linkTitle},a))},D=function(e){var a=e.dialogs,t=e.messages,s=e.newMessage,n=e.onAddMessage,r=e.onNewMessageChangeHandler,o=a.map(function(e){return c.a.createElement(R,{key:e.id,id:e.id,name:e.name})});return c.a.createElement("section",{className:O.a.messagesWrap},c.a.createElement("div",{className:O.a.dialogsInner},c.a.createElement("div",{className:O.a.friendsMessages},o),c.a.createElement("div",{className:O.a.messagesContent},c.a.createElement(U,{message:t}))),c.a.createElement("div",{className:O.a.messageInput},c.a.createElement("div",{className:O.a.inputArea},c.a.createElement("input",{type:"text",value:s,onChange:function(e){return r(e)},placeholder:"Enter your message"})),c.a.createElement(P.b,{onClick:n,className:O.a.inputBtn,size:"2em"})))},F=t(18),G=Object(F.b)(function(e){return{newMessage:e.dialogsReducer.newMessageText,dialogs:e.dialogsReducer.dialogs,messages:e.dialogsReducer.messages}},function(e){return{onAddMessage:function(){e({type:"ADD-MESSAGE"})},onNewMessageChangeHandler:function(a){e({type:"CHANGE-NEW-MESSAGE",newMessage:a.currentTarget.value})}}})(D),L=t(27),B=t(28),H=t(32),Z=t(29),z=t(33),V=t(23),J=t.n(V),q=t(5),Y=t.n(q),K=t(30),Q=t.n(K),X=function(e){for(var a=e.users,t=e.totalUsersCount,s=e.currentPage,n=e.pagesSize,r=e.onPageChanged,o=e.unfollow,i=e.follow,l=Math.ceil(t/n),m=[],u=1;u<=l;u++)m.push(u);return c.a.createElement("section",{className:Y.a.usersWrap},c.a.createElement("div",{className:Y.a.pagesWrap},m.map(function(e){return c.a.createElement("span",{style:{marginLeft:"5px"},className:s===e?Y.a.selectedPage:"",onClick:function(){return r(e)}},e)})),a.map(function(e){return c.a.createElement("section",{key:e.id,className:Y.a.innerWrap},c.a.createElement("div",{className:Y.a.avaWrap},c.a.createElement(w.b,{to:"/profile/"+e.id},c.a.createElement("div",{className:Y.a.avaImg},c.a.createElement("img",{className:Y.a.ava,src:null===e.photos.small?Q.a:e.photos.small,alt:"Avatar"}))),c.a.createElement("div",{className:Y.a.avaSettings},e.followed?c.a.createElement("button",{className:Y.a.avaBtn,onClick:function(){o(e.id)}},"Unfollow"):c.a.createElement("button",{className:Y.a.avaBtn,onClick:function(){i(e.id)}},"Follow"))),c.a.createElement("div",{className:Y.a.userInfoWrap},c.a.createElement("div",{className:Y.a.user},c.a.createElement("div",{className:Y.a.userName},e.name),c.a.createElement("div",{className:Y.a.userStatus},"\u201c",e.status,"\u201d")),c.a.createElement("div",{className:Y.a.location},c.a.createElement("div",{className:Y.a.country},"country"),c.a.createElement("div",{className:Y.a.city},"city"))))}))},$=t(15),ee=t.n($),ae=function(){return c.a.createElement("div",{className:ee.a.mainFader},c.a.createElement("div",{className:ee.a.loader},c.a.createElement("svg",{viewBox:"0 0 866 866"},c.a.createElement("svg",{id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 164.83 151.5"},c.a.createElement("path",{className:ee.a.path0,d:"M117.24,69.24A8,8,0,0,0,115.67,67c-4.88-4-9.8-7.89-14.86-11.62A4.93,4.93,0,0,0,96.93,55c-5.76,1.89-11.4,4.17-17.18,6a4.36,4.36,0,0,0-3.42,4.12c-1,6.89-2.1,13.76-3,20.66a4,4,0,0,0,1,3.07c5.12,4.36,10.39,8.61,15.68,12.76a3.62,3.62,0,0,0,2.92.75c6.29-2.66,12.52-5.47,18.71-8.36a3.49,3.49,0,0,0,1.68-2.19c1.34-7.25,2.54-14.55,3.9-22.58Z",fill:"#40c456"}),c.a.createElement("path",{className:ee.a.path1,d:"M97.55,38.68A43.76,43.76,0,0,1,98,33.44c.41-2.36-.5-3.57-2.57-4.64C91.1,26.59,87,24,82.66,21.82a6.18,6.18,0,0,0-4-.71C73.45,22.55,68.32,24.25,63.22,26c-3.63,1.21-6.08,3.35-5.76,7.69a26.67,26.67,0,0,1-.6,4.92c-1.08,8.06-1.08,8.08,5.86,11.92,3.95,2.19,7.82,5.75,11.94,6.08s8.76-2.41,13.12-3.93c9.33-3.29,9.33-3.3,9.78-14Z",fill:"#40c456"}),c.a.createElement("path",{className:ee.a.path2,d:"M66.11,126.56c5.91-.91,11.37-1.7,16.81-2.71a3.3,3.3,0,0,0,1.87-2.17c1-4.06,1.73-8.19,2.84-12.24.54-2-.11-3-1.55-4.15-5-4-9.9-8.12-15-12a6.19,6.19,0,0,0-4.15-1.1c-5.35.66-10.7,1.54-16,2.54A4,4,0,0,0,48.34,97a109.13,109.13,0,0,0-3,12.19,4.47,4.47,0,0,0,1.34,3.6c5.54,4.36,11.23,8.53,16.91,12.69a10.84,10.84,0,0,0,2.57,1.11Z",fill:"#40c456"}),c.a.createElement("path",{className:ee.a.path3,d:"M127.42,104.12c4.1-2.1,8-3.93,11.72-6a6,6,0,0,0,2.27-3,58.22,58.22,0,0,0,3.18-29.92c-.26-1.7-8-7.28-9.71-6.85A5,5,0,0,0,133,59.65c-2.81,2.49-5.71,4.88-8.33,7.56a9.46,9.46,0,0,0-2.47,4.4c-1.29,6.49-2.38,13-3.35,19.55a5.73,5.73,0,0,0,.83,3.91c2.31,3.08,5,5.88,7.7,9Z",fill:"#40c456"}),c.a.createElement("path",{className:ee.a.path4,d:"M52.58,29.89c-2.15-.36-3.78-.54-5.39-.9-2.83-.64-4.92.1-7,2.32A64.1,64.1,0,0,0,26.09,54.64c-2.64,7.92-2.62,7.84,5.15,10.87,1.76.69,2.73.45,3.93-1C39.79,59,44.54,53.65,49.22,48.2a4.2,4.2,0,0,0,1.13-2c.8-5.32,1.49-10.68,2.24-16.34Z",fill:"#40c456"}),c.a.createElement("path",{className:ee.a.path5,fill:"#40c456",d:"M23,68.13c0,2.51,0,4.7,0,6.87a60.49,60.49,0,0,0,9.75,32.15c1.37,2.13,6.4,3,7,1.2,1.55-5,2.68-10.2,3.82-15.34.13-.58-.58-1.38-.94-2.06-2.51-4.77-5.47-9.38-7.45-14.37C32.94,71,28.22,69.84,23,68.13Z"}),c.a.createElement("path",{className:ee.a.path6,fill:"#40c456",d:"M83.91,12.86c-.32.36-.66.71-1,1.07.9,1.13,1.57,2.62,2.73,3.33,4.71,2.84,9.56,5.48,14.39,8.1a9.29,9.29,0,0,0,3.13.83c5.45.69,10.89,1.38,16.35,1.94a10.41,10.41,0,0,0,3.07-.71c-11.48-9.9-24.26-14.61-38.71-14.56Z"}),c.a.createElement("path",{className:ee.a.path7,fill:"#40c456",d:"M66.28,132.51c13.36,3.78,25.62,3.5,38-.9C91.68,129.59,79.36,128,66.28,132.51Z"}),c.a.createElement("path",{className:ee.a.path8,fill:"#40c456",d:"M127.2,30.66l-1.27.37a18.58,18.58,0,0,0,1,3.08c3,5.52,6.21,10.89,8.89,16.54,1.34,2.83,3.41,3.82,6.49,4.9a60.38,60.38,0,0,0-15.12-24.9Z"}),c.a.createElement("path",{className:"bb-9",fill:"#40c456",d:"M117.35,125c5.58-2.32,16.9-13.84,18.1-19.2-2.41,1.46-5.18,2.36-6.78,4.23-4.21,5-7.89,10.37-11.32,15Z"})))))},te=function(e){function a(){var e,t;Object(L.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(H.a)(this,(e=Object(Z.a)(a)).call.apply(e,[this].concat(n)))).onPageChanged=function(e){t.props.setCurrentPage(e),t.props.toggleIsFetching(!0),J.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(e,"&count=").concat(t.props.pagesSize)).then(function(e){t.props.toggleIsFetching(!1),t.props.setUsers(e.data.items)})},t}return Object(z.a)(a,e),Object(B.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.toggleIsFetching(!0),J.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pagesSize)).then(function(a){e.props.toggleIsFetching(!1),e.props.setUsers(a.data.items),e.props.setTotalUsersCount(a.data.totalCount)})}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.isFetching?c.a.createElement(ae,null):null,c.a.createElement(X,{users:this.props.users,pagesSize:this.props.pagesSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged}))}}]),a}(c.a.Component),se=Object(F.b)(function(e){return{users:e.usersReducer.users,pagesSize:e.usersReducer.pagesSize,totalUsersCount:e.usersReducer.totalUsersCount,currentPage:e.usersReducer.currentPage,isFetching:e.usersReducer.isFetching}},{follow:function(e){return{type:"FOLLOW",userID:e}},unfollow:function(e){return{type:"UNFOLLOW",userID:e}},setUsers:function(e){return{type:"SET-USERS",users:e}},setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},setTotalUsersCount:function(e){return{type:"SET-TOTAL-USERS-COUNT",count:e}},toggleIsFetching:function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}}})(te),ne=t(39),re=t.n(ne),ce=t(21),oe=t.n(ce),ie=function(e){var a=e.photos;return c.a.createElement("section",{className:oe.a.avaWrap},c.a.createElement("div",{className:oe.a.avaImg},c.a.createElement("img",{className:oe.a.ava,src:null===a.large?Q.a:a.large,alt:"Avatar"})),c.a.createElement("div",{className:oe.a.avaSettings},c.a.createElement("button",{className:oe.a.avaBtn},"Edit")))},le=t(17),me=t.n(le),ue=function(e){var a=e.profile;return c.a.createElement("section",{className:me.a.infoWrap},c.a.createElement("div",{className:me.a.infoItem},c.a.createElement("div",{className:me.a.itemTitle},"Name"),c.a.createElement("div",{className:me.a.itemDescription},a.fullName)),c.a.createElement("div",{className:me.a.infoItem},c.a.createElement("div",{className:me.a.itemTitle},"About me"),c.a.createElement("div",{className:me.a.itemDescription},'"',a.aboutMe,'"')),c.a.createElement("div",{className:me.a.infoItem},c.a.createElement("div",{className:me.a.itemTitle},"Looking for a job"),c.a.createElement("div",{className:me.a.itemDescription},a.lookingForAJob?c.a.createElement(P.d,null):"")))},pe=t(25),_e=t.n(pe),ge=t(19),de=t.n(ge),ve=t(55),fe=function(e){var a=e.name,t=e.text,s=e.likes,n=e.image;return c.a.createElement("section",{className:de.a.postWrap},c.a.createElement("div",{className:de.a.postAutor},a),c.a.createElement("div",{className:de.a.postContent},c.a.createElement("div",{className:de.a.ava},c.a.createElement("img",{src:n,alt:"Avatar"})),c.a.createElement("div",{className:de.a.postText},"\u201c",t,"\u201d")),c.a.createElement("div",{className:de.a.postLikes},c.a.createElement(ve.a,{className:de.a.likeIcon}),c.a.createElement("div",{className:de.a.likesCount},s)))},Ee=function(e){var a=e.posts,t=e.newPost,s=e.onAddPost,n=e.onNewTextChangeHandler,r=a.map(function(e){return c.a.createElement(fe,{key:e.id,name:e.name,text:e.text,likes:e.likes,image:e.image})});return c.a.createElement("section",{className:_e.a.postsWrap},c.a.createElement("div",{className:_e.a.inputPost},c.a.createElement("div",{className:_e.a.inputArea},c.a.createElement("input",{type:"text",value:t,onChange:function(e){n(e)},placeholder:"Enter your message"})),c.a.createElement(P.a,{onClick:s,className:_e.a.inputBtn,size:"2em"})),r)},he=Object(F.b)(function(e){return{posts:e.profileReducer.posts,newPost:e.profileReducer.newPostText}},function(e){return{onAddPost:function(){e({type:"ADD-POST"})},onNewTextChangeHandler:function(a){e({type:"CHANGE-NEW-TEXT",newText:a.currentTarget.value})}}})(Ee),Ne=function(e){var a=e.profile;return a.photos?c.a.createElement("section",{className:re.a.profileWrap},c.a.createElement("div",{className:re.a.avaDiscript},c.a.createElement(ie,{photos:a.photos}),c.a.createElement(ue,{profile:a})),c.a.createElement(he,null)):c.a.createElement(ae,null)},be=function(e){function a(){return Object(L.a)(this,a),Object(H.a)(this,Object(Z.a)(a).apply(this,arguments))}return Object(z.a)(a,e),Object(B.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.userID;a||(a="2"),J.a.get("https://social-network.samuraijs.com/api/1.0/profile/"+a).then(function(a){e.props.setUserProfile(a.data)})}},{key:"render",value:function(){return c.a.createElement(Ne,Object.assign({},this.props,{profile:this.props.profile}))}}]),a}(c.a.Component),Pe=Object(T.g)(be),we=Object(F.b)(function(e){return{profile:e.profileReducer.profile}},{setUserProfile:function(e){return{type:"SET-USER-PROFILE",profile:e}}})(Pe);var Ce=function(){return c.a.createElement(w.a,null,c.a.createElement("div",{className:"App-wrapper"},c.a.createElement(h,null),c.a.createElement(C,null),c.a.createElement("section",{className:"Content"},c.a.createElement(T.d,null,c.a.createElement(T.b,{path:"/profile/:userID?",render:function(){return c.a.createElement(we,null)}}),c.a.createElement(T.b,{path:"/messages",render:function(){return c.a.createElement(G,null)}}),c.a.createElement(T.b,{path:"/friends",render:function(){return c.a.createElement(se,null)}}),c.a.createElement(T.a,{to:"/profile"})))))};n.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F.a,{store:d},c.a.createElement(Ce,null))),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.127efebd.chunk.js.map