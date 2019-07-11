(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return l});var n=a(0),i=a.n(n),r=a(202),M=a.n(r),s=a(88),o=a(203),c=a(210),L=a(201),u=a.n(L);var l=function(t){var e,a;function n(){return t.apply(this,arguments)||this}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){(0,this.context.setNotFound)()},r.componentWillUnmount=function(){(0,this.context.setFound)()},r.render=function(){return i.a.createElement(o.a,null,i.a.createElement(M.a,{title:"Page not found – "+u.a.siteTitle}),i.a.createElement(c.a,null),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h1",null,"404")),i.a.createElement("p",null,"A fatal exception 0E has occurred at ",i.a.createElement("span",{className:"tania"},"0x74616e6961")," in 404: page not found."),i.a.createElement("div",{className:"list"},i.a.createElement("p",null,i.a.createElement("span",{className:"bullet"},"*")," Click any link to terminate the current application."),i.a.createElement("p",null,i.a.createElement("span",{className:"bullet"},"*")," Press ALT + F4 again to restart your browser. You will lose any unsaved information in all tabs.")),i.a.createElement("p",{className:"text-right"},"Click any link to continue",i.a.createElement("span",{className:"blink"},"█"))))},n}(n.Component);l.contextType=s.b},201:function(t,e,a){a(8);var n={siteTitle:"Ancestral Guidance",siteTitleShort:"AG",siteTitleAlt:"AG",siteLogo:"/logos/tania.jpg",siteUrl:"https://www.taniarascia.com",repo:"https://github.com/taniarascia/taniarascia.com",pathPrefix:"/AncestralGuidance.com",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",siteDescription:"Tania Rascia is full-stack software developer specializing in modern JavaScript who breaks down complex concepts in an accessible and intuitive way.",siteRss:"/rss.xml",googleAnalyticsID:"UA-42068444-1",disqusShortname:"taniarascia",postDefaultCategoryID:"Tech",userName:"Tania",userEmail:"tania@taniarascia.com",userTwitter:"shamansag",userLocation:"Chicago, IL",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"I build open source projects and write the missing instruction manuals of the web.",menuLinks:[{name:"Blog",link:"/me/"},{name:"Articles",link:"/blog/"},{name:"About",link:"/contact/"}],themeColor:"#3F80FF",backgroundColor:"#ffffff"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),t.exports=n},203:function(t,e,a){"use strict";var n=a(0),i=a.n(n),r=a(202),M=a.n(r),s=a(88),o=(a(211),a(35),a(87)),c=a(204),L=a.n(c),u=a(205),l=a.n(u),w=a(206),j=a.n(w);var N=function(t){var e,a;function n(){for(var e,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).state={scrolled:!1},e.navOnScroll=function(){window.scrollY>20?e.setState({scrolled:!0}):e.setState({scrolled:!1})},e}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.navOnScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.navOnScroll)},r.render=function(){var t=this.state.scrolled,e=this.props.menuLinks,a=this.context;return i.a.createElement("nav",{className:t?"nav scroll":"nav"},i.a.createElement("div",{className:"nav-container"},i.a.createElement("div",{className:"brand"},i.a.createElement(o.Link,{to:"/"},i.a.createElement("img",{src:L.a,className:"favicon",alt:"Floppy Diskette"}),i.a.createElement("span",{className:"text"},"Ancestral Guidance"))),i.a.createElement("div",{className:"links"},e.map(function(t){return i.a.createElement(o.Link,{key:t.name,to:t.link,activeClassName:"active"},t.name)}),i.a.createElement("div",{className:"cta"},i.a.createElement("button",{className:"dark-switcher",onClick:a.toggleDark},a.dark?i.a.createElement("span",null,i.a.createElement("img",{src:l.a,className:"theme-icon",alt:"Light Mode"})):i.a.createElement("span",null,i.a.createElement("img",{src:j.a,className:"theme-icon",alt:"Dark Mode"})))))))},n}(n.Component);N.contextType=s.b;var m=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){return i.a.createElement("footer",{className:"footer container"},i.a.createElement("a",{href:"https://patreon.com/ancestralguidance",target:"_blank",rel:"noopener noreferrer"},"Patreon"),i.a.createElement("a",{href:"https://twitter.com/shamansag",target:"_blank",rel:"noopener noreferrer"},"Twitter"),i.a.createElement("a",{href:"https://github.com/taniarascia/taniarascia.com",target:"_blank",rel:"noopener noreferrer"},"View source"))},n}(n.Component),A=a(201),p=a.n(A),y=a(207),C=a.n(y);a(212);a.d(e,"a",function(){return E});var E=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.context,e=t.dark,a=t.notFound,n=this.props.children,r="";return e&&!a?r="dark":a&&(r="not-found"),i.a.createElement(i.a.Fragment,null,i.a.createElement(M.a,{bodyAttributes:{class:"theme "+r}},i.a.createElement("meta",{name:"description",content:p.a.siteDescription}),i.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:C.a})),i.a.createElement(N,{menuLinks:p.a.menuLinks}),i.a.createElement("main",{id:"main-content"},n),i.a.createElement(m,null))},n}(n.Component);E.contextType=s.b},204:function(t,e,a){t.exports=a.p+"static/aglogo-777cfe653098bb04a1772f56e92810d2.png"},205:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICA8Zz4NCiAgICA8cGF0aCBkPSJNNjQsMzAuMzRjLTE4LjU5LDAtMzMuNjYsMTUuMDctMzMuNjYsMzMuNjVjMCwxOC41OSwxNS4wNywzMy42NiwzMy42NiwzMy42NiBjMTguNTksMCwzMy42Ni0xNS4wNywzMy42Ni0zMy42NkM5Ny42Niw0NS40MSw4Mi41OSwzMC4zNCw2NCwzMC4zNHoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+DQogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPg0KICAgIDxwYXRoIGQ9Ik05Ny4yNiw0MC45OWMwLjM4LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4xMiwwLDAuMjQtMC4wMSwwLjM2LTAuMDNjMC42Ni0wLjEyLDEuMjEtMC41NSwxLjUtMS4xNiBsOC43Ni0xOS4wMWMwLjM2LTAuNzgsMC4xOS0xLjY5LTAuNDEtMi4zYy0wLjYxLTAuNjEtMS41My0wLjc3LTIuMzEtMC40Mkw4Ny42LDI3LjQ0Yy0wLjYxLDAuMjgtMS4wNCwwLjg0LTEuMTYsMS41IGMtMC4xMiwwLjY2LDAuMSwxLjMzLDAuNTYsMS44MUw5Ny4yNiw0MC45OXoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+DQogICAgPHBhdGggZD0iTTEyNi4xOCw2Mi4wOGwtMTkuNjQtNy4yNGMtMC42My0wLjIzLTEuMzMtMC4xNC0xLjg4LDAuMjRjLTAuNTUsMC4zOC0wLjg3LDEtMC44NywxLjY3bDAuMDEsMTQuNDkgYzAsMC42NywwLjMzLDEuMywwLjg4LDEuNjhjMC4zNSwwLjIzLDAuNzYsMC4zNiwxLjE3LDAuMzZjMC4yNCwwLDAuNDgtMC4wNCwwLjcxLTAuMTNsMTkuNjQtNy4yNGMwLjgtMC4yOSwxLjM0LTEuMDYsMS4zNC0xLjkzIEMxMjcuNTIsNjMuMTQsMTI2Ljk5LDYyLjM4LDEyNi4xOCw2Mi4wOHoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+DQogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+DQogICAgPHBhdGggZD0iTTcxLjI0LDEwMy43OEw3MS4yNCwxMDMuNzhsLTE0LjQ5LDAuMDFjLTAuNjcsMC0xLjI5LDAuMzMtMS42NywwLjg4IGMtMC4zOCwwLjU1LTAuNDcsMS4yNS0wLjI1LDEuODdsNy4yNSwxOS42NGMwLjMsMC44LDEuMDYsMS4zNCwxLjkyLDEuMzRzMS42Mi0wLjU0LDEuOTItMS4zNGw3LjI1LTE5LjY0IGMwLjIzLTAuNjMsMC4xNC0xLjMzLTAuMjQtMS44OEM3Mi41NCwxMDQuMTEsNzEuOTIsMTAzLjc4LDcxLjI0LDEwMy43OHoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+DQogICAgPHBhdGggZD0iTTMwLjc0LDg3LjAxYy0wLjQ3LTAuNDctMS4xNC0wLjY4LTEuOC0wLjU3Yy0wLjY2LDAuMTItMS4yMiwwLjU1LTEuNSwxLjE2bC04Ljc2LDE5LjAxIGMtMC4zNiwwLjc4LTAuMTksMS43LDAuNDIsMi4zYzAuMzksMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjI5LDAsMC41OC0wLjA2LDAuODYtMC4xOWwxOS4wMS04Ljc3YzAuNjEtMC4yOCwxLjA0LTAuODQsMS4xNi0xLjUgYzAuMTItMC42Ni0wLjEtMS4zMy0wLjU3LTEuOEwzMC43NCw4Ny4wMXoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+DQogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4NCiAgICA8cGF0aCBkPSJNMjcuNDUsNDAuNGMwLjI4LDAuNjEsMC44NCwxLjA0LDEuNSwxLjE2YzAuMTIsMC4wMiwwLjI0LDAuMDMsMC4zNiwwLjAzYzAuNTQsMCwxLjA2LTAuMjEsMS40NS0wLjYgTDQxLDMwLjc0YzAuNDctMC40OCwwLjY4LTEuMTUsMC41Ni0xLjgxYy0wLjEyLTAuNjUtMC41NS0xLjIxLTEuMTYtMS40OWwtMTkuMDItOC43NmMtMC43OC0wLjM2LTEuNjktMC4xOS0yLjMsMC40MiBjLTAuNjEsMC42MS0wLjc3LDEuNTItMC40MSwyLjNMMjcuNDUsNDAuNHoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+DQogIDwvZz4NCjwvc3ZnPg=="},206:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICA8cGF0aCBkPSJNMTA1Ljg3LDE0Ljk5Yy0zLjc0LTMuMzktNy45MS02LjM4LTEyLjQyLTguODljLTAuODctMC40OS0yLTAuMzUtMi43MSwwLjMzIGMtMC43MSwwLjY4LTAuODMsMS43My0wLjI5LDIuNTNjMTUuNjMsMjIuOTMsMTIuMjksNTIuNTItOC4xMSw3MS45N2MtMTEuOSwxMS4zNS0yNy44NSwxNy42LTQ0LjkxLDE3LjYgYy0xMS4zOSwwLTIyLjU0LTIuODYtMzIuMjQtOC4yN2MtMC44Ny0wLjQ5LTItMC4zNi0yLjcxLDAuMzNjLTAuNzEsMC42OC0wLjgzLDEuNzItMC4yOCwyLjUzYzIuODEsNC4xMiw2LjEyLDcuOTMsOS44NiwxMS4zMiBjMTIuNjEsMTEuNDUsMjkuMjcsMTcuNzYsNDYuOSwxNy43NmMxOC4yNywwLDM1LjM0LTYuNyw0OC4wOS0xOC44NmMxMi41My0xMS45NCwxOS4zMS0yNy43MSwxOS4wOS00NC40IEMxMjUuOTIsNDIuMjUsMTE4LjcyLDI2LjY0LDEwNS44NywxNC45OXoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+DQo8L3N2Zz4="},207:function(t,e){t.exports="data:image/png;base64,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"},208:function(t,e,a){"use strict";a(216)("fixed",function(t){return function(){return t(this,"tt","","")}})},209:function(t,e,a){var n,i,r;a(36),a(8),a(124),a(35),r=function(){return function(){return function(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^\/:]+:\/*$/)&&t.length>1){var a=t.shift();t[0]=a+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^\/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^\/:]+):\/*/,"$1://");for(var n=0;n<t.length;n++){var i=t[n];if("string"!=typeof i)throw new TypeError("Url must be a string. Received "+i);""!==i&&(n>0&&(i=i.replace(/^[\/]+/,"")),i=n<t.length-1?i.replace(/[\/]+$/,""):i.replace(/[\/]+$/,"/"),e.push(i))}var r=e.join("/"),M=(r=r.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return r=M.shift()+(M.length>0?"?":"")+M.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},t.exports?t.exports=r():void 0===(i="function"==typeof(n=r)?n.call(e,a,e,t):n)||(t.exports=i)},210:function(t,e,a){"use strict";a.d(e,"a",function(){return u});a(208);var n=a(0),i=a.n(n),r=a(202),M=a.n(r),s=a(209),o=a.n(s),c=a(201),L=a.n(c);var u=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t,e,a,n=this.props,r=n.postNode,s=n.postPath,c=n.postSEO,u="";if(c){var l=r.frontmatter;t=l.title,e=l.description?l.description:r.excerpt,l.thumbnail&&(u=l.thumbnail.childImageSharp.fixed.src),a=o()(L.a.siteUrl,L.a.pathPrefix,s)}else t=L.a.siteTitle,e=L.a.siteDescription,u=L.a.siteLogo;u=o()(L.a.siteUrl,u);var w=o()(L.a.siteUrl,L.a.pathPrefix),j=[{"@context":"http://schema.org","@type":"WebSite",url:w,name:t,alternateName:L.a.siteTitleAlt?L.a.siteTitleAlt:""}];return c&&j.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:t,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:w,name:t,alternateName:L.a.siteTitleAlt?L.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:u},description:e}),i.a.createElement(M.a,null,i.a.createElement("meta",{name:"description",content:e}),i.a.createElement("meta",{name:"image",content:u}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(j)),i.a.createElement("meta",{property:"og:url",content:c?a:w}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:t}),i.a.createElement("meta",{property:"og:description",content:e}),i.a.createElement("meta",{property:"og:image",content:u}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:L.a.userTwitter}),i.a.createElement("meta",{name:"twitter:title",content:t}),i.a.createElement("meta",{name:"twitter:description",content:e}),i.a.createElement("meta",{name:"twitter:image",content:u}))},n}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-404-js-ecf0a713dd0da61ff40a.js.map