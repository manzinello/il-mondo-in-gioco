(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,o){e.exports=o(51)},39:function(e,t,o){},51:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),i=o(2),r=o.n(i),c=(o(39),o(12)),s=o(29),u=o(15),l=o(13),d=o(16),m=o(66),p=o(67),g=o(69),f=o(65),b=o(68),k=function(e){function t(){var e,o;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).render=function(){return a.a.createElement(g.a,{pad:"large",width:"medium",onClick:function(){return o.props.handlePressBox(o.props.num)},align:"center",background:{color:"dark-1",dark:!0,opacity:"weak",position:"bottom",image:"url(images/"+o.props.backgroundImage+")"},round:!0,gap:"small"},a.a.createElement(b.a,{level:1},o.props.num),a.a.createElement(b.a,{level:2},o.props.gioco))},o}return Object(d.a)(t,e),t}(a.a.Component),v=[{backgroundImage:"1MANCALA.jpg",num:1,gioco:"Manc\xe0la"},{backgroundImage:"2CERCHIO.jpg",num:2,gioco:"Cerchio"},{backgroundImage:"3KENDAMA.jpg",num:3,gioco:"Kendama"},{backgroundImage:"4JIANZI.jpg",num:4,gioco:"Jianzi"},{backgroundImage:"5MAROMERO.jpg",num:5,gioco:"Maromero"},{backgroundImage:"6BOOMERANG.jpg",num:6,gioco:"Boomerang"}],h=function(e){function t(){var e,o;Object(c.a)(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(o=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onOpen=function(){return o.setState({open:!0})},o.onClose=function(){return o.setState({open:void 0})},o.state={open:void 0,video:null},o.switchVideo=function(e){switch(e){case 1:o.setState({video:"/video/gioco-1.mp4"},function(){o.setState({open:!0})});break;case 2:o.setState({video:"/video/gioco-2.mp4"},function(){o.setState({open:!0})});break;case 3:o.setState({video:"/video/gioco-3.mp4"},function(){o.setState({open:!0})});break;case 4:o.setState({video:"/video/gioco-4.mp4"},function(){o.setState({open:!0})});break;case 5:o.setState({video:"/video/gioco-5.mp4"},function(){o.setState({open:!0})});break;case 6:o.setState({video:"/video/gioco-6.mp4"},function(){o.setState({open:!0})});break;default:o.setState({video:"/video/small.mp4"},function(){o.setState({open:!0})})}},o.handlePress=function(e){o.switchVideo(e)},o}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{full:!0},this.state.open&&this.state.video&&a.a.createElement(p.a,{position:"center",modal:!0,margin:"none",onClickOutside:this.onClose,onEsc:this.onClose},a.a.createElement(g.a,{fill:!0,background:{color:"dark-1",dark:!0,position:"bottom"},pad:"medium",gap:"small",width:"xlarge"},a.a.createElement(f.a,{loop:!0,controls:!1,autoPlay:!0},a.a.createElement("source",{src:this.state.video,type:"video/mp4"})))),a.a.createElement(g.a,{background:"dark-1",fill:!0},a.a.createElement(g.a,{direction:"row-responsive",justify:"center",alignSelf:"center",align:"center",pad:"xlarge",gap:"medium",fill:!0},v.map(function(t){return a.a.createElement(k,{handlePressBox:e.handlePress,onClick:e.onOpen,backgroundImage:t.backgroundImage,gioco:t.gioco,num:t.num})})))))}}]),t}(n.Component);r.a.render(a.a.createElement(h,null),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.9d6a50e4.chunk.js.map