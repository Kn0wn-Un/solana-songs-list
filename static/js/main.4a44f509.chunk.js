(this.webpackJsonpepicsolanaproject=this.webpackJsonpepicsolanaproject||[]).push([[0],{101:function(e){e.exports=JSON.parse('{"_keypair":{"publicKey":{"0":65,"1":186,"2":145,"3":197,"4":117,"5":252,"6":234,"7":206,"8":90,"9":223,"10":180,"11":188,"12":106,"13":252,"14":137,"15":141,"16":237,"17":140,"18":227,"19":48,"20":135,"21":197,"22":247,"23":104,"24":177,"25":193,"26":231,"27":77,"28":227,"29":169,"30":61,"31":33},"secretKey":{"0":88,"1":56,"2":42,"3":127,"4":252,"5":244,"6":28,"7":10,"8":100,"9":199,"10":79,"11":217,"12":171,"13":174,"14":60,"15":52,"16":116,"17":151,"18":215,"19":58,"20":192,"21":39,"22":47,"23":188,"24":115,"25":80,"26":215,"27":150,"28":244,"29":97,"30":227,"31":208,"32":65,"33":186,"34":145,"35":197,"36":117,"37":252,"38":234,"39":206,"40":90,"41":223,"42":180,"43":188,"44":106,"45":252,"46":137,"47":141,"48":237,"49":140,"50":227,"51":48,"52":135,"53":197,"54":247,"55":104,"56":177,"57":193,"58":231,"59":77,"60":227,"61":169,"62":61,"63":33}}}')},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t){},115:function(e,t){},144:function(e,t){},145:function(e,t){},169:function(e,t,n){"use strict";n.r(t);var c=n(22),r=n.n(c),a=n(100),s=n.n(a),i=(n(110),n(1)),o=n.n(i),u=n(3),l=n(9),p=n.p+"static/media/twitter-logo.d89d9a86.svg",f=(n(111),n(49)),d=n(101),b=n(8),g=n(25),m=n(14),h="_buildspace",j="https://twitter.com/".concat(h),y=["https://i.giphy.com/media/eIG0HfouRQJQr1wBzz/giphy.webp","https://media3.giphy.com/media/L71a8LW2UrKwPaWNYM/giphy.gif?cid=ecf05e47rr9qizx2msjucl1xyvuu47d7kf25tqt2lvo024uo&rid=giphy.gif&ct=g","https://media4.giphy.com/media/AeFmQjHMtEySooOc8K/giphy.gif?cid=ecf05e47qdzhdma2y3ugn32lkgi972z9mpfzocjj6z1ro4ec&rid=giphy.gif&ct=g","https://i.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.webp"],x=g.d.SystemProgram,v=(g.d.Keypair,Object.values(d._keypair.secretKey)),w=new Uint8Array(v),O=g.d.Keypair.fromSecretKey(w),k=new b.PublicKey(f.metadata.address),S=Object(b.clusterApiUrl)("devnet"),K="processed",N=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],d=s[1],v=Object(c.useState)([]),w=Object(l.a)(v,2),N=w[0],A=w[1],L=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("Phantom wallet found!"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),r(c.publicKey.toString());case 10:e.next=13;break;case 12:alert("Get Phantom Wallet!");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=8;break}return e.next=4,n.connect();case 4:c=e.sent,console.log("wallet connected!"),console.log(c.publicKey.toString()),r(c.publicKey.toString());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.target.value;d(t)},G=function(){var e=new b.Connection(S,K);return new g.b(e,window.solana,K)},I=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=G(),n=new g.a(f,k,t),console.log("ping"),e.next=6,n.rpc.startStuffOff({accounts:{baseAccount:O.publicKey,user:t.wallet.publicKey,systemProgram:x.programId},signers:[O]});case 6:return console.log("Created a new BaseAccount w/ address:",O.publicKey.toString()),e.next=9,M();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error creating BaseAccount account:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.trim().length>0)){e.next=18;break}return console.log("Gif link:",i),console.log("Gif link:",i),e.prev=3,t=G(),n=new g.a(f,k,t),e.next=8,n.rpc.addGif(i,{accounts:{baseAccount:O.publicKey,user:t.wallet.publicKey}});case 8:return console.log("GIF successfully sent to program",i),e.next=11,M();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log("Error sending GIF:",e.t0);case 16:e.next=19;break;case 18:console.log("Empty input. Try again.");case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=G(),n=new g.a(f,k,t),e.next=5,n.account.baseAccount.fetch(O.publicKey);case 5:c=e.sent,console.log("Got the account",c),A(c.gifList),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in getGifList: ",e.t0),A(null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){n&&(console.log("Fetching GIF list..."),M())}),[n]);return Object(c.useEffect)((function(){n&&(console.log("Fetching GIF list..."),A(y))}),[n]),Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]),Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:n?"authed-container":"container",children:[Object(m.jsxs)("div",{className:"header-container",children:[Object(m.jsx)("p",{className:"header",children:"Solana Songs List \ud83c\udfb6"}),Object(m.jsx)("p",{className:"sub-text",children:"View song list in the solana \u2728"}),n?null===N?Object(m.jsx)("div",{className:"connected-container",children:Object(m.jsx)("button",{className:"cta-button submit-gif-button",onClick:I,children:"Do One-Time Initialization For Song Program Account"})}):Object(m.jsxs)("div",{className:"connected-container",children:[Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),z()},children:[Object(m.jsx)("input",{type:"text",placeholder:"Enter song link!",value:i,onChange:E}),Object(m.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),Object(m.jsx)("div",{className:"gif-grid",children:N.map((function(e,t){return Object(m.jsx)("div",{className:"gif-item",children:Object(m.jsx)("a",{href:e.gifLink,target:"_blank",children:Object(m.jsxs)("div",{children:[t+1+". ",e.gifLink]})})},t)}))})]}):Object(m.jsx)("button",{className:"cta-button connect-wallet-button",onClick:P,children:"Connect to Wallet"})]}),Object(m.jsxs)("div",{className:"footer-container",children:[Object(m.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:p}),Object(m.jsx)("a",{className:"footer-text",href:j,target:"_blank",rel:"noreferrer",children:"built on @".concat(h)}),Object(m.jsx)("a",{className:"footer-text",href:"https://github.com/Kn0wn-Un",target:"_blank",rel:"noreferrer",children:"by Kn0wn-Un"})]})]})})},A=n(5);globalThis.Buffer=A.Buffer,s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))},49:function(e){e.exports=JSON.parse('{"version":"0.0.0","name":"epicsolanaproject","instructions":[{"name":"startStuffOff","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"}]}}],"metadata":{"address":"Dwxm1jJxwEuTCmRSzu6ixDQTNcZSXmyWsKPMoARoPZVk"}}')}},[[169,1,2]]]);
//# sourceMappingURL=main.4a44f509.chunk.js.map