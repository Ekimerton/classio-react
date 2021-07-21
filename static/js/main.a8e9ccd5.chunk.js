(this["webpackJsonpclassio-react"]=this["webpackJsonpclassio-react"]||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(25),r=n.n(s),i=(n(142),n(71)),l=n.n(i),o=n(84),j=n(61),d=n(29),u=(n(143),n(144),n(186)),h=n(182),b=n(184),m=n(49),f=n(135),O=n(181),p=n(188),x=n(101),g=n(180),v=n(74),y=n(44),k=n(187),w=n(185),_=n(191),T=n(192),S=n(105),M=n(59),C=n(85),F=n.n(C),I=n(42),N=n.n(I),A=n(183),L=n(190),E=n(6),z=A.a.Meta,D=u.a.Text;u.a.Paragraph;function P(e){var t=Object(a.useState)(!0),n=Object(d.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),j=i[0],u=i[1],h=Object(a.useState)(0),b=Object(d.a)(h,2),m=b[0],f=b[1],O=Object(E.jsx)("div",{style:{maxWidth:200},children:Object(E.jsx)(D,{children:"Some classes are async, and might not have set timeslots."})}),p=e.code,x=e.onDelete,g=e.onAdd,v=e.semester;return Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("https://classio-api.herokuapp.com/course/".concat(p),{params:{semester:v}});case 2:t=e.sent,u(t.data.course_info.name),n=N.a.flatMap(t.data.course_info.sections,"timeslots"),f(n.length),g(t.data.course_info),s(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s(!0),e()}),[p,v]),Object(E.jsx)(A.a,{size:"small",bordered:!1,title:p,loading:c,className:"App-class-card",style:{marginRight:10,height:120},extra:Object(E.jsx)("a",{onClick:function(){return x(e.code)},children:"X"}),children:Object(E.jsx)(z,{title:j,description:Object(E.jsxs)("div",{children:[Object(E.jsx)(D,{children:"Found ".concat(m," timeslot(s)")}),0===m&&Object(E.jsx)(L.a,{content:O,title:"Why are there no timeslots?",children:Object(E.jsx)("a",{children:" ? "})})]})})})}var W=n(189),B=n(137),G=u.a.Title;function R(e){var t=e.timeslots;return Object(E.jsx)(A.a,{style:{width:"100%"},bodyStyle:{padding:0},size:"small",children:Object(E.jsxs)(v.a,{justify:"center",style:{margin:0,paddingTop:10,justifyContent:"center"},children:[Object(E.jsxs)(y.a,{flex:1,className:"Timetable-column",children:[Object(E.jsx)(G,{level:5,children:"Monday"}),t.Mo.map((function(e){return Object(E.jsx)("p",{children:"".concat(e.start_time," - ").concat(e.end_time)})}))]}),Object(E.jsxs)(y.a,{flex:1,className:"Timetable-column",children:[Object(E.jsx)(G,{level:5,children:"Tuesday"}),t.Tu.map((function(e){return Object(E.jsx)("p",{children:"".concat(e.start_time," - ").concat(e.end_time)})}))]}),Object(E.jsxs)(y.a,{flex:1,className:"Timetable-column",children:[Object(E.jsx)(G,{level:5,children:"Wednesday"}),t.We.map((function(e){return Object(E.jsx)("p",{children:"".concat(e.start_time," - ").concat(e.end_time)})}))]}),Object(E.jsxs)(y.a,{flex:1,className:"Timetable-column",children:[Object(E.jsx)(G,{level:5,children:"Thursday"}),t.Th.map((function(e){return Object(E.jsx)("p",{children:"".concat(e.start_time," - ").concat(e.end_time)})}))]}),Object(E.jsxs)(y.a,{flex:1,className:"Timetable-column",children:[Object(E.jsx)(G,{level:5,children:"Friday"}),t.Fr.map((function(e){return Object(E.jsx)("p",{children:"".concat(e.start_time," - ").concat(e.end_time)})}))]})]})})}var H=W.a.Panel;function J(e){var t=e.timetable,n=t.timetable,a=t.scores,c=t.classes;return Object(E.jsx)(W.a,{children:Object(E.jsxs)(H,{header:Object(E.jsxs)("div",{children:[Object(E.jsx)(B.a,{color:{Early:"gold","Mid-Day":"green",Late:"geekblue"}[a.type],style:{margin:5},children:a.type}),Object(E.jsxs)(B.a,{color:"blue",style:{margin:5},children:["Score: ",a.total,"/10"]}),Object(E.jsxs)(B.a,{color:"blue",style:{margin:5},children:["Time wasted: ",a.offTime,"h"]}),Object(E.jsxs)(B.a,{color:"blue",style:{margin:5},children:["Lunches: ",a.lunch,"/5"]}),Object(E.jsxs)(B.a,{color:"blue",style:{margin:5},children:["Dinners: ",a.dinner,"/5"]})]}),style:{padding:0,margin:0,justifyContent:"flex-start",alignItems:"flex-start",backgroundColor:"#ffffff"},showArrow:!1,children:[Object(E.jsx)(R,{timeslots:n}),c.map((function(e,t){return Object(E.jsxs)(B.a,{style:{marginTop:15},color:"default",children:[e.courseCode," - ",e.kind,": ",e.code]},t)}))]},"1")})}var U=u.a.Paragraph,Y=u.a.Title,q=u.a.Link;function K(){return Object(E.jsxs)("div",{children:[Object(E.jsx)(Y,{style:{textAlign:"center"},children:"classio"}),Object(E.jsxs)(U,{style:{textAlign:"center",marginTop:-10},children:["Found a bug? Have a suggestion?",Object(E.jsx)(q,{href:"https://docs.google.com/forms/d/1FNYSnC7lkeZQt-3fw_PotWnGe5q40A5vKZaJDMRs5b4/edit",target:"_blank",children:" Let me know!"})]}),Object(E.jsx)(U,{children:"classio is an app that helps with course selection. Once you enter which classes you are taking, it automatically creates all possible timetables, eliminates any with conflicts, and ranks them for convenience."}),Object(E.jsxs)(U,{children:["All of the course information used within this project comes from my ",Object(E.jsx)(q,{href:"https://classio-api.herokuapp.com",target:"_blank",children:"open-source api"}),". If you have a keen eye for code or are looking to get into coding, I would recommend giving it a shot in your next project!"]}),Object(E.jsx)(g.a,{}),Object(E.jsxs)(U,{ellipsis:{rows:2,expandable:!0,symbol:"more"},children:["Thanks for using my app! I created classio in 2019 because I was frustrated with the overly-tedious course selection process. Since then, I've gotten a lot of requests to update it for future semesters. I had originally planned to update classio for 2020. However, the original was mostly spaghetti code that was slow and very hard to read. Plus, most courses in 2020 ended up being online, which meant their timeslots were fungible. For 2021, as we slowly go back to physical learning, I hope classio can be of use to you. Good luck in the upcoming semester!",Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),"Best wishes,",Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),"Ekim",Object(E.jsx)(q,{href:"https://www.linkedin.com/in/ekim-karabey/",target:"_blank",children:" (LinkedIn)"}),Object(E.jsx)(q,{href:"https://github.com/Ekimerton",target:"_blank",children:" (Github)"})]})]})}var Z=n(81),Q=n(32),V=n.n(Q),X=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return n===t.length?a.push(c):t[n].forEach((function(s){return e(t,n+1,a,[].concat(Object(j.a)(c),[s]))})),a},$=["Mo","Tu","We","Th","Fr"],ee={start_time:"11:30",end_time:"12:30"},te={start_time:"18:30",end_time:"19:30"},ne=function(e){if(0===e.length||1===e.length)return!0;for(var t=1;t<e.length;t++){var n=e[t-1];if(e[t].start_time<n.end_time)return!1}return!0},ae=function(e){for(var t={Early:0,"Mid-Day":0,Late:0},n=0,a=Object.values(e);n<a.length;n++){var c,s=a[n],r=Object(Z.a)(s);try{for(r.s();!(c=r.n()).done;){var i=c.value;i.start_time<"10:30"?t.Early++:i.start_time<"3:30"?t["Mid-Day"]++:t.Late++}}catch(l){r.e(l)}finally{r.f()}}return Object.entries(t).reduce((function(e,t){return e[1]>t[1]?e:t}))[0]},ce=function(e){if(0===e.length||1===e.length)return 0;for(var t=0,n=1;n<e.length;n++){var a=e[n-1],c=e[n],s=V()(a.end_time,V.a.HTML5_FMT.TIME),r=V()(c.start_time,V.a.HTML5_FMT.TIME);t+=V.a.duration(r.diff(s)).asHours()}return t},se=function(e,t){if(0===e.length)return!0;if(1===e.length)return!(t.end_time>e[0].start_time&&e[0].end_time>t.start_time);for(var n,a=0,c=e.length-1;;){if(e[n=Math.floor((c+a)/2)].end_time===t.start_time){n++;break}if(e[n].end_time>t.start_time){if(a>(c=n-1))break}else if((a=n+1)>c){n++;break}}return n===e.length||t.end_time<=e[n].start_time},re=u.a.Paragraph,ie=u.a.Title,le=h.a.RangePicker,oe=b.a.Step,je=m.a.Option;function de(e){return"Meals: ".concat(10-e,"/10 - Time: ").concat(e,"/10")}var ue=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(d.a)(s,2),i=r[0],u=r[1],h=Object(a.useState)("2021 Fall"),C=Object(d.a)(h,2),I=C[0],A=C[1],L=Object(a.useState)([]),z=Object(d.a)(L,2),D=z[0],W=z[1],B=Object(a.useState)([]),G=Object(d.a)(B,2),R=G[0],H=G[1],U=Object(a.useState)(!1),Y=Object(d.a)(U,2),q=Y[0],Q=Y[1],V=Object(a.useState)(-1),ue=Object(d.a)(V,2),he=ue[0],be=ue[1],me=Object(a.useState)([]),fe=Object(d.a)(me,2),Oe=fe[0],pe=fe[1],xe=Object(a.useState)(!1),ge=Object(d.a)(xe,2),ve=ge[0],ye=ge[1],ke=Object(a.useState)(6),we=Object(d.a)(ke,2),_e=we[0],Te=we[1],Se=_e>=5?"":"icon-wrapper-active",Me=_e>=5?"icon-wrapper-active":"",Ce=function(e){var t=Object(j.a)(R);t.unshift(e),H(t)};Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("https://classio-api.herokuapp.com/course",{params:{semester:I}});case 2:t=e.sent,n=t.data.course_codes,a=[],n.forEach((function(e){a.push({value:e})})),c(a),Q(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Q(!0),e()}),[I]);var Fe=function(e){var t=Object(j.a)(D),n=Object(j.a)(R),a=t.indexOf(e);t.splice(a,1),n.splice(a,1),W(t),H(n)};return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)("header",{className:"App-header",children:Object(E.jsxs)("div",{style:{maxWidth:"100%",width:800,padding:10},children:[Object(E.jsx)("div",{className:"App-section",style:{fontSize:14},children:Object(E.jsx)(K,{})}),Object(E.jsxs)("div",{className:"App-section",children:[Object(E.jsxs)("div",{style:{flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginBottom:20,display:"flex"},children:[Object(E.jsxs)(m.a,{defaultValue:"2021 Fall",size:"large",style:{flex:.3,marginRight:10},onChange:function(e){return function(e){be(-1),A(e),u(""),W([]),H([]),pe([])}(e)},children:[Object(E.jsx)(je,{value:"2021 Fall",children:"Fall 2021"}),Object(E.jsx)(je,{value:"2021 Winter",children:"Winter 2021"})]}),Object(E.jsx)(O.a,{allowClear:!0,disabled:q,value:i,options:n,loading:q,style:{flex:1},onSelect:function(e){!function(e){if(D.includes(e))f.b.warning("You can't select the same class twice!");else{var t=Object(j.a)(D);t.unshift(e),W(t),u("")}}(e)},onSearch:function(){},onChange:u,filterOption:function(e,t){return-1!==t.value.toUpperCase().indexOf(e.toUpperCase())},children:Object(E.jsx)(p.a,{size:"large",placeholder:q?"Loading courses...":"Enter course code",disabled:q})}),Object(E.jsx)(x.a,{style:{marginLeft:10},type:"primary",size:"large",icon:Object(E.jsx)(_.a,{}),onClick:function(){return ye(!ve)}})]}),Object(E.jsxs)(re,{children:["Selected ",Object(E.jsx)("b",{children:R.length})," course(s)"]}),Object(E.jsx)("div",{className:"App-horizontal-scroll",children:D.map((function(e){return Object(E.jsx)(P,{onDelete:Fe,code:e,onAdd:Ce,semester:I},e)}))}),ve&&Object(E.jsxs)("div",{style:{marginBottom:20},children:[Object(E.jsx)(g.a,{plain:!0,children:"Advanced Options (NOT WORKING YET)"}),Object(E.jsxs)(v.a,{gutter:[10,10],children:[Object(E.jsxs)(y.a,{flex:1,children:[Object(E.jsx)(ie,{level:5,children:"Lunch Time"}),Object(E.jsx)(le,{format:"h:mm a",minuteStep:15,size:"large",picker:"time",style:{width:"100%"}})]}),Object(E.jsxs)(y.a,{flex:1,children:[Object(E.jsx)(ie,{level:5,children:"Dinner Time"}),Object(E.jsx)(le,{minuteStep:15,format:"h:mm a",size:"large",picker:"time",style:{width:"100%"},onChange:function(e){console.log(e)}})]})]}),Object(E.jsxs)("div",{style:{marginTop:10},children:[Object(E.jsx)(ie,{level:5,children:"Score Importance"}),Object(E.jsxs)("div",{className:"icon-wrapper",children:[Object(E.jsx)(T.a,{className:Se}),Object(E.jsx)(k.a,{onChange:function(e){return Te(e)},value:_e,min:0,max:10,tipFormatter:de}),Object(E.jsx)(S.a,{className:Me})]})]})]}),Object(E.jsx)(x.a,{style:{marginTop:0},type:"primary",block:!0,size:"large",disabled:0===R.length,onClick:function(){pe([]),be(0);var e=function(e){var t,n=[],a=Object(Z.a)(e);try{for(a.s();!(t=a.n()).done;){var c=t.value,s=N.a.filter(c.sections,(function(e){return e.timeslots.length>0})),r=N.a.groupBy(s,(function(e){return e.kind})),i=Object.values(r);n=n.concat(i)}}catch(l){a.e(l)}finally{a.f()}return n}(R);be(1);var t=function(e){var t,n=[],a=Object(Z.a)(e);try{for(a.s();!(t=a.n()).done;){var c,s=t.value,r=N.a.flatMap(s,(function(e){return{courseCode:e.course_code,kind:e.kind,code:e.code}})),i=N.a.flatMap(s,(function(e){return e.timeslots})),l=N.a.groupBy(i,(function(e){return e.day})),o=!0,j=Object(Z.a)($);try{for(j.s();!(c=j.n()).done;){var d=c.value;if(l[d]=N.a.sortBy(l[d],"start_time"),!(o=o&&ne(l[d])))break}}catch(u){j.e(u)}finally{j.f()}o&&n.push({classes:r,days:l})}}catch(u){a.e(u)}finally{a.f()}return n}(X(e));be(2);var n=function(e){return e.map((function(e){for(var t={total:0,lunch:0,dinner:0,offTime:0,type:"late"},n=0,a=Object.values(e.days);n<a.length;n++){var c=a[n];t.offTime+=ce(c),t.lunch+=se(c,ee)?1:0,t.dinner+=se(c,te)?1:0}return t.type=ae(e.days),t.total=10-(5-t.lunch)-(5-t.dinner)-Math.round(t.offTime),{classes:e.classes,timetable:e.days,scores:t}}))}(t),a=N.a.sortBy(n,(function(e){return e.scores.total})).reverse();0===a.length?f.b.error("Unable to generate timetables due to a time conflict!"):f.b.success("Finished generating ".concat(a.length," timetable(s)!")),pe(a),be(3)},children:"Generate Timetables"})]}),Object(E.jsxs)("div",{className:"App-section",style:{textAlign:"center"},children:[Object(E.jsxs)(b.a,{size:"small",current:he,children:[Object(E.jsx)(oe,{title:"Parsing",icon:0===he&&Object(E.jsx)(M.a,{})}),Object(E.jsx)(oe,{title:"Generating",icon:1===he&&Object(E.jsx)(M.a,{})}),Object(E.jsx)(oe,{title:"Scoring",icon:2===he&&Object(E.jsx)(M.a,{})})]}),Object(E.jsxs)(g.a,{plain:!0,children:["Showing ",Oe.length," option(s)"]}),Object(E.jsx)(w.b,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:10},style:{padding:0},dataSource:Oe,renderItem:function(e){return Object(E.jsx)(w.b.Item,{style:{paddingLeft:0,paddingRight:0},children:Object(E.jsx)(J,{timetable:e})},Math.floor(1e4*Math.random()))}}),","]})]})})})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(ue,{})}),document.getElementById("root")),he()}},[[175,1,2]]]);
//# sourceMappingURL=main.a8e9ccd5.chunk.js.map