(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,o){e.exports=o(54)},45:function(e,t,o){},52:function(e,t,o){},54:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(3),i=o.n(r),c=(o(45),o(13)),l=o(30),u=o(16),s=o(14),m=o(17),g=o(72),d=o(73),p=o(75),b=o(71),f=o(76),v=o(74),h=o(69),k=o(70),E=function(e){function t(){var e,o;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(o=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,{className:"il-mondo-box",pad:"large",width:"medium",alignSelf:"center",onClick:function(){return o.props.handlePressBox(o.props.num)},align:"center",background:{image:"url(images/"+o.props.backgroundImage+")",opacity:"strong"},round:!0,gap:"small"},a.a.createElement(v.a,{color:"white",level:1},o.props.num),a.a.createElement(v.a,{color:"white",level:2},o.props.gioco)))},o}return Object(m.a)(t,e),t}(a.a.Component),w=(o(52),[{backgroundImage:"1MANCALA.jpg",num:1,gioco:"Manc\xe0la"},{backgroundImage:"2CERCHIO.jpg",num:2,gioco:"Cerchio"},{backgroundImage:"3KENDAMA.jpg",num:3,gioco:"Kendama"},{backgroundImage:"4JIANZI.jpg",num:4,gioco:"Jianzi"},{backgroundImage:"5MAROMERO.jpg",num:5,gioco:"Maromero"},{backgroundImage:"6BOOMERANG.jpg",num:6,gioco:"Boomerang"}]),S=function(e){function t(){var e,o;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).onOpen=function(){return o.setState({open:!0})},o.onClose=function(){return o.setState({open:void 0})},o.state={open:void 0,video:null},o.switchVideo=function(e){switch(e){case 1:o.setState({video:"./video/gioco-1.mp4"},function(){o.setState({open:!0})});break;case 2:o.setState({video:"./video/gioco-2.mp4"},function(){o.setState({open:!0})});break;case 3:o.setState({video:"./video/gioco-3.mp4"},function(){o.setState({open:!0})});break;case 4:o.setState({video:"./video/gioco-4.mp4"},function(){o.setState({open:!0})});break;case 5:o.setState({video:"./video/gioco-5.mp4"},function(){o.setState({open:!0})});break;case 6:o.setState({video:"./video/gioco-6.mp4"},function(){o.setState({open:!0})});break;default:o.setState({video:"./video/gioco-1.mp4"},function(){o.setState({open:!0})})}},o.handlePress=function(e){o.switchVideo(e)},o}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a,{full:!0},this.state.open&&this.state.video&&a.a.createElement(d.a,{position:"center",modal:!0,full:!0,margin:"none",onEsc:this.onClose},a.a.createElement(p.a,{fill:!0,background:{color:"dark-1",dark:!0,position:"bottom",image:"url(images/background.png)"},pad:"medium",gap:"small",width:"xlarge"},a.a.createElement(b.a,{loop:!0,controls:!1,autoPlay:!0},a.a.createElement("source",{src:this.state.video,type:"video/mp4"})),a.a.createElement(f.a,{icon:a.a.createElement(h.a,{color:"white"}),primary:!0,color:"neutral-4",label:"Torna indietro",onClick:this.onClose}))),a.a.createElement(p.a,{justify:"center",align:"center",alignSelf:"center",background:"url(images/background.png)",fill:!0},a.a.createElement(v.a,{color:"white",level:1},"il mondo in gioco"),a.a.createElement(p.a,{direction:"row-responsive",pad:"xlarge",gap:"medium",fill:!0},w.map(function(t){return a.a.createElement(E,{handlePressBox:e.handlePress,onClick:e.onOpen,backgroundImage:t.backgroundImage,gioco:t.gioco,num:t.num})})),a.a.createElement(v.a,{color:"white",level:3},a.a.createElement(k.a,{size:"small",color:"white"})," ",a.a.createElement("u",null,"ilmondoingioco.betharram.it")))))}}]),t}(n.Component);i.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[40,2,1]]]);
//# sourceMappingURL=main.65eaaffb.chunk.js.map