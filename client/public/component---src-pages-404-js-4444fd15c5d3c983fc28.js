(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{193:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(211),o=a(209);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},198:function(t,e,a){"use strict";a.d(e,"b",function(){return s});var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(e,"a",function(){return o.a});a(202),a(9).default.enqueue;var l=r.a.createContext({});function c(t){var e=t.staticQueryData,a=t.data,n=t.query,i=t.render,o=a?a.data:e[n]&&e[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(t){var e=t.data,a=t.query,n=t.render,i=t.children;return r.a.createElement(l.Consumer,null,function(t){return r.a.createElement(c,{data:e,query:a,render:n||i,staticQueryData:t})})}},202:function(t,e,a){var n;t.exports=(n=a(208))&&n.default||n},207:function(t){t.exports={data:{site:{siteMetadata:{title:"Guitar Hub"}}}}},208:function(t,e,a){"use strict";a.r(e);a(23);var n=a(0),r=a.n(n),i=a(95);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null}},209:function(t,e,a){"use strict";var n=a(210),r=a(0),i=a.n(r),o=a(226),l=a.n(o),c=function(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title,s=n.data.site,u=e||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})};c.defaultProps={lang:"en",meta:[],keywords:[]},e.a=c},210:function(t){t.exports={data:{site:{siteMetadata:{title:"Guitar Hub",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@Turkyden"}}}}},211:function(t,e,a){"use strict";var n=a(207),r=a(0),i=a.n(r),o=a(198),l=a(224),c=a.n(l),s=function(t){var e=t.siteTitle;return i.a.createElement(c.a,null,i.a.createElement("header",{style:{background:"rgba(47,47,47,0.98)",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},e)),i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",lineHeight:"2.1",width:300}},i.a.createElement(o.a,{to:"/chords/",style:{color:"#fff"}},"Chords"),i.a.createElement(o.a,{to:"/songs/",style:{color:"#fff"}},"Songs"))))))};s.defaultProps={siteTitle:""};var u=s;a(225),e.a=function(t){var e=t.children;return i.a.createElement(o.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"20px 1.0875rem 1.45rem"}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-404-js-4444fd15c5d3c983fc28.js.map