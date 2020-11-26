(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(3),r=c.n(a),i=c(12),s=c.n(i),o=c(5),l=c.n(o),u=c(8),d=c(2),j=c(7),p=c.p+"static/media/deck.c3573cc7.png",b=function(e){var t=e.currentSong,c=e.isPlaying;return Object(n.jsxs)("div",{className:"song",children:[Object(n.jsxs)("div",{className:"song__data",children:[Object(n.jsx)("p",{children:Object(n.jsxs)("i",{children:['"',t.name,'"']})}),Object(n.jsx)("p",{children:t.artist})]}),Object(n.jsxs)("div",{className:"song__img",children:[Object(n.jsx)("img",{className:"song__img--deck",src:p,alt:"turntable"}),Object(n.jsx)("img",{className:"song__img--cover ".concat(c?"rotate":""),src:t.cover,alt:t.title})]})]})},h=c(6),g=c(4),m=function(e){var t=e.songs,c=e.setSongs,a=e.currentSong,r=e.setCurrentSong,i=e.isPlaying,s=e.setIsPlaying,o=e.songTime,j=e.setSongTime,p=e.audioRef,b=function(e){var n=t.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));c(n)};if(i){var m=p.current.play();void 0!==m&&m.then((function(e){p.current.play()}))}var f=function(e){var t=Math.floor(e/60),c=Math.floor(e%60),n=String(c).padStart(2,"0");return"".concat(t,":").concat(n)},O=function(){var e=Object(u.a)(l.a.mark((function e(c){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.findIndex((function(e){return e.id===a.id})),"skip-forward"!==c){e.next=5;break}return e.next=4,r(t[(n+1)%t.length]);case 4:b(t[(n+1)%t.length]);case 5:if("skip-back"!==c){e.next=15;break}if(0!==n){e.next=12;break}return e.next=9,r(t[t.length-1]);case 9:b(t[t.length-1]),e.next=15;break;case 12:return e.next=14,r(t[(n-1)%t.length]);case 14:b(t[(n-1)%t.length]);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(o.animationPercentage,"%)")};return Object(n.jsxs)("div",{className:"player",children:[Object(n.jsxs)("div",{className:"player--time-control",children:[Object(n.jsx)("p",{children:f(o.currentTime)}),Object(n.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(a.color[0],", ").concat(a.color[1],")")},className:"track",children:[Object(n.jsx)("input",{min:0,max:o.duration||0,value:o.currentTime,onChange:function(e){p.current.currentTime=e.target.value,j(Object(d.a)(Object(d.a)({},o),{},{currentTime:e.target.value}))},type:"range"}),Object(n.jsx)("div",{style:v,className:"animate-track"})]}),Object(n.jsx)("p",{children:f(o.duration||0)})]}),Object(n.jsxs)("div",{className:"player--controllers",children:[Object(n.jsx)(h.a,{style:{color:" ".concat(a.color[0])},onClick:function(){return O("skip-back")},size:"2x",icon:g.a}),Object(n.jsx)(h.a,{style:{color:" ".concat(a.color[1])},onClick:function(){i?p.current.pause():p.current.play(),s(!i)},size:"2x",icon:i?g.d:g.e}),Object(n.jsx)(h.a,{style:{color:" ".concat(a.color[0])},onClick:function(){return O("skip-forward")},size:"2x",icon:g.c})]})]})},f=c.p+"static/media/logo.4c9dc684.png",O=function(e){var t=e.libraryStatus,c=e.setLibraryStatus,a=e.currentSong;return Object(n.jsxs)("nav",{children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("a",{href:"http://www.foxdesign.ie",target:"_blank",children:Object(n.jsx)("img",{src:f,alt:"FOXdesign logo"})})}),Object(n.jsxs)("button",{style:{color:" ".concat(a.color[1])},onClick:function(){return c(!t)},children:[Object(n.jsx)("span",{children:"PLAYLIST "}),Object(n.jsx)(h.a,{icon:g.b,size:"2x"})]})]})},v=function(e){var t=e.song,c=e.songs,a=e.id,r=e.setCurrentSong,i=e.audioRef,s=e.isPlaying,o=e.setSongs;return Object(n.jsxs)("div",{onClick:function(){r(t);var e=c.map((function(e){return e.id===a?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));(o(e),s)&&i.current.play().then((function(e){i.current.play()}))},className:"music-library-song ".concat(t.active?"selected":""),children:[Object(n.jsx)("img",{src:t.cover,alt:t.title}),Object(n.jsxs)("div",{className:"music-library-song__data",children:[Object(n.jsx)("p",{children:t.artist}),Object(n.jsxs)("p",{children:['"',t.name,'"']})]})]})},x=function(e){var t=e.songs,c=e.setCurrentSong,a=e.audioRef,r=e.isPlaying,i=e.setSongs,s=e.libraryStatus;return Object(n.jsx)("div",{className:"music-library ".concat(s?"active-library":""),children:Object(n.jsxs)("div",{className:"music-library-songs",children:[Object(n.jsx)("h2",{children:"PLAYLIST"}),t.map((function(e){return Object(n.jsx)(v,{songs:t,song:e,setCurrentSong:c,id:e.id,audioRef:a,isPlaying:r,setSongs:i},e.id)}))]})})},y=(c(24),c(27));var S=function(){return[{name:"Velocities",cover:"https://chillhop.com/wp-content/uploads/2020/07/9e04907d0cf68c974c4a5f530b082a8d83a2d41f-1024x1024.jpg",artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=7988",color:["#144263","#8ECFE1"],id:Object(y.a)(),active:!0},{name:"Glory Days",cover:"https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",artist:"Sitting Duck, Hoffy Beats",audio:"https://mp3.chillhop.com/serve.php/?mp3=7981",color:["#6A9D94","#4D5B41"],id:Object(y.a)(),active:!1},{name:"Vibe Vibe",cover:"https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",artist:"Moods, Yasper",audio:"https://mp3.chillhop.com/serve.php/?mp3=10002",color:["#C8EFFE","#AE8F38"],id:Object(y.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#F7D2B4"],id:Object(y.a)(),active:!1},{name:"Where We Met",cover:"https://chillhop.com/wp-content/uploads/2020/06/faa452681fe33146c42a1b422fdf7cd7fd082637-1024x1024.jpg",artist:"xander",audio:"https://mp3.chillhop.com/serve.php/?mp3=9203",color:["#902E36","#AA917C"],id:Object(y.a)(),active:!1},{name:"Far Away",cover:"https://chillhop.com/wp-content/uploads/2020/07/bc9a7af2ad67de703541c2c7a91e3df74ab494c0-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=7951",color:["#3B4E5D","#D7878D"],id:Object(y.a)(),active:!1}]};var k=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(S()),c=Object(j.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(r[0]),o=Object(j.a)(s,2),p=o[0],h=o[1],g=Object(a.useState)(!1),f=Object(j.a)(g,2),v=f[0],y=f[1],k=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(j.a)(k,2),C=w[0],N=w[1],P=Object(a.useState)(!1),T=Object(j.a)(P,2),_=T[0],D=T[1],E=function(e){var t=e.target.currentTime,c=e.target.duration,n=Math.round(t),a=Math.round(c),r=Math.round(n/a*100);N(Object(d.a)(Object(d.a)({},C),{},{currentTime:t,duration:c,animationPercentage:r}))},M=function(){var t=Object(u.a)(l.a.mark((function t(){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.findIndex((function(e){return e.id===p.id})),t.next=3,h(r[(c+1)%r.length]);case 3:v&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App ".concat(_?"library-active":""),children:[Object(n.jsx)(O,{libraryStatus:_,setLibraryStatus:D,currentSong:p}),Object(n.jsx)(b,{currentSong:p,isPlaying:v}),Object(n.jsx)(m,{audioRef:e,currentSong:p,setCurrentSong:h,isPlaying:v,setIsPlaying:y,songTime:C,setSongTime:N,songs:r,setSongs:i}),Object(n.jsx)(x,{audioRef:e,songs:r,setCurrentSong:h,isPlaying:v,setSongs:i,libraryStatus:_}),Object(n.jsx)("audio",{onTimeUpdate:E,onLoadedMetadata:E,ref:e,src:p.audio,onEnded:M})]})};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b42b85cd.chunk.js.map