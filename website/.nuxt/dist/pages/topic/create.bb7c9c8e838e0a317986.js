webpackJsonp([12],{"/myT":function(e,t,a){"use strict";var s=a("V8bM"),i=a("y8ae"),n=a("b1Yp"),r=a("FN0O"),o=a.n(r);a("9oAv"),a("ookB");t.a={props:["user","messages","messageCount"],data:function(){return{q:"",userData:this.user,isInputFocus:!1,userMessages:[]}},methods:{onSearch:function(){var e="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(e)},onInputFocus:function(){this.isInputFocus=!0},onInputBlur:function(){this.isInputFocus=!1},onReadMessage:function(e){s.a.readMessage({params:{id:e.id}}).then(function(){e.readed=!0})},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var e=this;s.a.logout().then(function(t){t.errNo===i.a.SUCCESS&&(e.userData=null,window.location.href="/signin")}).catch(function(e){console.log(e)})}},mounted:function(){for(var e=this.messages||[],t=e.slice(0),a=0;a<t.length;a++){if("messageTypeCommentComment"===t[a].type){var s=o()(t[a].data.commentContent,{limit:15,wordBreak:!0,suffix:"...",preserveTags:!1,moreLink:!1}),i=s.html;i=n.a.trimImg(i),t[a].data.commentContent=i}var r=t[a].data.title||"";r.length>15&&(t[a].data.title=r.substr(0,15)+"..."),t[a].readed=!1}this.userMessages=t}}},"2BLx":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("app-header",{attrs:{user:e.user}}),a("article-save",{attrs:{categories:e.categories,article:e.article,recentArticles:e.recentArticles,hasRecentArticles:e.hasRecentArticles,id:e.id,user:e.user}}),a("app-footer")],1)},i=[],n={render:s,staticRenderFns:i};t.a=n},"3G8Z":function(e,t,a){"use strict";var s=a("EuWz"),i=a("s+Te"),n=a("VU/8"),r=n(s.a,i.a,!1,null,null,null);t.a=r.exports},"7EVb":function(e,t,a){"use strict";t.a={STATUS_IN_ACTIVE:1,STATUS_ACTIVE:2,STATUS_FROZEN:3}},"9IHU":function(e,t,a){"use strict";var s=a("lERW"),i=a("fPCn"),n=a("VU/8"),r=n(s.a,i.a,!1,null,null,null);t.a=r.exports},"9oAv":function(e,t,a){"use strict";var s=a("FhoZ"),i=a.n(s);if(i.a.bdStatEnable&&"undefined"!=typeof window){!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?"+i.a.bdStatSI;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}},EuWz:function(e,t,a){"use strict";t.a={props:{value:{type:String,required:!0},user:{type:Object}},data:function(){return{inputValue:this.value||""}},methods:{onSave:function(){this.$emit("save")},onChange:function(){this.$emit("change",this.inputValue)}},head:function(){return{}},mounted:function(){console.log(11111,this.value)}}},FN0O:function(e,t){function a(e,t){t=t||{};for(var a,i,n,r,o,l=t.limit||100,c=void 0===t.preserveTags||t.preserveTags,u=void 0!==t.wordBreak&&t.wordBreak,d=t.suffix||"...",p=t.moreLink||"",m=t.moreText||"»",g=t.preserveWhiteSpace||!1,f=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),h=0,v=[],_=!1,b=0;b<f.length;b++)if(a=f[b],rowCut=g?a:a.replace(/[ ]+/g," "),a.length){var C=s(rowCut);if("<"!==a[0])if(h>=l)a="";else if(h+C.length>=l){if(i=l-h," "===C[i-1])for(;i&&(i-=1," "===C[i-1]););else n=C.slice(i).indexOf(" "),u||(-1!==n?i+=n:i=a.length);a=C.slice(0,i).join("")+d,p&&(a+='<a href="'+p+'" style="display:inline">'+m+"</a>"),h=l,_=!0}else h+=C.length;else if(c){if(h>=l)if(r=a.match(/[a-zA-Z]+/),o=r?r[0]:"")if("</"!==a.substring(0,2))v.push(o),a="";else{for(;v[v.length-1]!==o&&v.length;)v.pop();v.length&&(a=""),v.pop()}else a=""}else a="";f[b]=a}return{html:f.join("\n").replace(/\n/g,""),more:_}}function s(e){for(var t,a,s,i=[],n=0;n<rowCut.length;n++)t=rowCut.substring(n),a=t.match(/^&[a-z0-9#]+;/),a?(s=a[0],i.push(s),n+=s.length-1):i.push(rowCut[n]);return i}void 0!==e&&e.exports&&(e.exports=a)},GUey:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang-top-header"},[a("div",{staticClass:"golang-top-box"},[a("div",{staticClass:"golang-top-header-left"},[e._m(0),a("div",{staticClass:"golang-header-search"},[a("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(t){t.preventDefault(),e.onSearch(t)}}},[a("p",{staticStyle:{position:"relative"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.q,expression:"q"}],staticClass:"golang-top-input",style:{border:e.isInputFocus?"1px #a2a2a2 solid":"1px #e3e3e3 solid"},attrs:{type:"text",name:"topSearch"},domProps:{value:e.q},on:{focus:e.onInputFocus,blur:e.onInputBlur,input:function(t){t.target.composing||(e.q=t.target.value)}}}),a("span",{staticClass:"search-icon"})])])])]),e._m(1),a("div",{staticClass:"golang-top-header-right"},[a("ul",[e._m(2),e._m(3),e.userData?[a("li",{staticClass:"user-message-wrapbox"},[e.userMessages.length?a("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[a("a",{staticClass:"user-message-box",attrs:{href:""}},[a("Icon",{staticClass:"user-message",attrs:{type:"ios-bell-outline"}}),a("span",{staticClass:"user-message-tip-count"},[e._v(e._s(e.messageCount))])],1),a("ul",{staticClass:"header-message-list",attrs:{slot:"content"},slot:"content"},e._l(e.userMessages,function(t){return a("li",["messageTypeCommentArticle"===t.type?a("p",{staticClass:"header-message-item"},[a("a",{staticClass:"header-message-user",attrs:{href:"/user/"+t.fromUser.id,target:"_blank"}},[e._v(e._s(t.fromUser.name))]),e._v(" 回复了你的话题 "),a("a",{staticClass:"header-message-content",style:{color:t.readed?"#a0a3a4":""},attrs:{href:"/topic/"+t.sourceID+"/#reply-"+t.commentID,target:"_blank"},on:{click:function(a){e.onReadMessage(t)}}},[e._v(e._s(t.data.title))])]):"messageTypeCommentVote"===t.type?a("p",{staticClass:"header-message-item"},[a("a",{staticClass:"header-message-user",attrs:{href:"/user/"+t.fromUser.id,target:"_blank"}},[e._v(e._s(t.fromUser.name))]),e._v(" 回复了你的投票 "),a("a",{staticClass:"header-message-content",style:{color:t.readed?"#a0a3a4":""},attrs:{href:"/vote/"+t.sourceID+"/#reply-"+t.commentID,target:"_blank"},on:{click:function(a){e.onReadMessage(t)}}},[e._v(e._s(t.data.title))])]):"messageTypeCommentComment"===t.type?a("p",{staticClass:"header-message-item"},[a("a",{staticClass:"header-message-user",attrs:{href:"/user/"+t.fromUser.id,target:"_blank"}},[e._v(e._s(t.fromUser.name))]),e._v(" 回复了你 "),a("a",{staticClass:"header-message-content",style:{color:t.readed?"#a0a3a4":""},attrs:{href:"article"===t.sourceName?"/topic/"+t.sourceID+"/#reply-"+t.commentID:"/vote/"+t.sourceID+"/#reply-"+t.commentID,target:"_blank"},on:{click:function(a){e.onReadMessage(t)}}},[e._v(e._s(t.data.commentContent))])]):e._e()])}))]):a("a",{staticClass:"user-message-box",attrs:{href:""}},[a("Icon",{staticClass:"user-message",attrs:{type:"ios-bell-outline"}})],1)],1),a("li",{staticStyle:{"padding-right":"0"}},[a("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[a("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+e.user.id}},[a("span",{staticClass:"header-avatar"},[a("img",{attrs:{src:e.user.avatarURL,alt:""}})]),a("span",{staticClass:"header-user-name"},[e._v(e._s(e.user.name))])]),a("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[a("li",[a("a",{attrs:{href:"/user/"+e.user.id}},[e._v("个人主页")])]),a("li",[a("a",{attrs:{href:"/ac/pwdModify"}},[e._v("修改密码")])]),a("li",{on:{click:e.onSignout}},[e._v("退  出")])])])],1)]:[a("a",{on:{click:e.onSignin}},[a("li",{staticStyle:{color:"#333"}},[e._v("登录")])]),e._m(4)]],2)])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang-logo-container"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"/images/logo.png"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang-top-header-nav"},[a("ul",[a("li",[a("a",{attrs:{href:"/"}},[e._v("首页")])]),a("li",[a("a",{attrs:{href:"/vote"}},[e._v("投票")])]),a("li",[a("a",{attrs:{href:"/timeline"}},[e._v("成长历史")])]),a("li",[a("a",{attrs:{href:"/about"}},[e._v("关于")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[e._v("golang123源码")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[e._v("问题反馈")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"/signup"}},[a("li",{staticStyle:{color:"#333"}},[e._v("注册")])])}],n={render:s,staticRenderFns:i};t.a=n},J3Se:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang-footer"},[a("div",{staticClass:"golang-footer-page-link"},[a("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[a("div",{staticClass:"golang-footer-github"},[a("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),a("span",{staticStyle:{"margin-left":"2px"}},[e._v("Github")])]),a("span",[e._v("  | ")]),a("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[e._v("问题反馈")]),a("span",[e._v("  |  ")]),a("a",{attrs:{href:"/vote"}},[e._v("投票")]),a("span",[e._v("  |  ")]),a("a",{attrs:{href:"/rank"}},[e._v("积分榜")]),a("span",[e._v("  |  ")]),a("a",{attrs:{href:"/links"}},[e._v("友情链接")]),a("span",[e._v("  |  ")]),a("a",{attrs:{href:"/timeline"}},[e._v("成长历史")]),a("span",[e._v("  |  ")]),a("a",{attrs:{href:"/about"}},[e._v("关于我们")])]),e._m(0)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang-footer-copyright"},[a("span",[e._v("© 2017 "),a("a",{attrs:{href:"/"}},[e._v("golang中文社区")]),e._v(" "),a("a",{attrs:{href:"/"}},[e._v("golang123.com")]),e._v(" 版权所有")]),a("span",[e._v(" | ")]),a("span",[e._v("京ICP备12045181号-2")])])}],n={render:s,staticRenderFns:i};t.a=n},LksS:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},MyuZ:function(e,t,a){"use strict";var s=a("pq6b"),i=a("UNwd"),n=a("VU/8"),r=n(s.a,i.a,!1,null,null,null);t.a=r.exports},UNwd:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang123-editor"},[e.isMounted?a("textarea",{ref:"textarea"}):e._e(),a("Modal",{attrs:{title:"上传图片"},on:{"on-ok":e.ok,"on-cancel":e.cancel},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("Upload",{attrs:{"on-success":e.onUploadCallback,name:"upFile",format:["jpg","jpeg","png","gif"],action:e.uploadURL}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传图片")])],1)],1),e.isFullscreen?a("div",{staticClass:"editor-fullScreen-save"},[a("Button",{attrs:{type:"primary"},on:{click:e.onSave}},[e._v("保  存")])],1):e._e()],1)},i=[],n={render:s,staticRenderFns:i};t.a=n},VLGQ:function(e,t,a){"use strict";function s(e){a("dkoy")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("XzXe"),n=a("2BLx"),r=a("VU/8"),o=s,l=r(i.a,n.a,!1,o,null,null);t.default=l.exports},XzXe:function(e,t,a){"use strict";var s=a("//Fk"),i=a.n(s),n=a("V8bM"),r=a("YXP+"),o=a("yqLL"),l=a("9IHU");t.a={data:function(){},asyncData:function(e){return i.a.all([n.a.getCategories({client:e.req}),n.a.getUserArticles({client:e.req,params:{userID:e.user.id},query:{orderType:1,desc:1,pageSize:5}})]).then(function(t){var a=t[0].data.categories,s=t[1].data.articles||[],i=!1;return s&&s.length>0&&(i=!0),{categories:a,article:null,recentArticles:s,hasRecentArticles:i,id:0,user:e.user}}).catch(function(t){console.log(t),e.error({statusCode:404,message:"Page not found"})})},head:function(){return{title:"发布话题",link:[{rel:"stylesheet",href:"/styles/editor/simplemde.min.css"}]}},methods:{},middleware:"userRequired",components:{"app-header":r.a,"app-footer":o.a,"article-save":l.a}}},"YXP+":function(e,t,a){"use strict";function s(e){a("oXG0")}var i=a("/myT"),n=a("GUey"),r=a("VU/8"),o=s,l=r(i.a,n.a,!1,o,null,null);t.a=l.exports},b1Yp:function(e,t,a){"use strict";var s={trimImg:function(e){return e=e.replace(/<\s*img\s+.*?\/?\s*>/g,"")},entity2HTML:function(e){var t={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'},a=/&(lt|gt|nbsp|amp|quot);/gi;return e.replace(a,function(e,a){return t[a]})}};t.a=s},cNFL:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"body{background-color:#e1e1e1}.topic-box{width:1200px;overflow:hidden;font-size:0;margin-left:auto;margin-right:auto;margin-top:20px}.topic-main{font-size:0}.topic-main,.topic-nav{width:900px;display:inline-block}.topic-nav{height:40px;padding-left:20px;background:#f6f6f6}.topic-nav a{color:#80bd01}.topic-nav li{float:left;line-height:40px}.topic-nav span{font-size:14px}.topic-nav-sep{padding:0 8px}.publish-label{color:#999}.editor-box-wrap{width:900px;padding-top:24px;min-height:720px;background:#fff}.topic-area{clear:both;padding:0 20px 1px}.topic-content .ivu-form-item-content,.topic-submit .ivu-form-item-content{margin-left:0!important}.topic-sidebar{width:280px;margin-left:20px;display:inline-block;vertical-align:top}.topic-sidebar li{background:#fff;font-size:14px;line-height:40px;margin-bottom:20px}.topic-sidebar-item p{padding-left:12px;padding-right:12px}.markdown-codeblock p{padding-top:6px;line-height:normal;font-size:14px}.topic-sidebar-my{padding:8px 0;line-height:normal}.topic-sidebar-my a{line-height:22px}.topic-sidebar-title{padding-left:12px;background:#f6f6f6;height:40px}.editor-fullScreen-save{position:fixed;top:7px;right:20px;z-index:9}.topic-none{text-align:center;color:#a8a8a8}.CodeMirror{height:400px}",""])},dkoy:function(e,t,a){var s=a("cNFL");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("58910cde",s,!0)},fPCn:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"topic-box"},[a("div",{staticClass:"topic-main"},[a("ul",{staticClass:"topic-nav"},[e._m(0),e._m(1),a("li",[a("span",{staticClass:"publish-label"},[e._v(e._s(e.id?"编辑":"发布")+"话题")])])]),a("div",{staticClass:"editor-box-wrap"},[a("div",{staticClass:"topic-area"},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleInline,"label-width":80}},[a("Form-item",{attrs:{label:"话题名称",prop:"topicName"}},[a("Input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入话题名称"},model:{value:e.formValidate.topicName,callback:function(t){e.formValidate.topicName=t},expression:"formValidate.topicName"}})],1),a("Form-item",{attrs:{label:"选择版块",prop:"selected"}},[a("Select",{staticStyle:{width:"400px"},model:{value:e.formValidate.selected,callback:function(t){e.formValidate.selected=t},expression:"formValidate.selected"}},e._l(e.formValidate.categories,function(t){return a("Option",{key:t.id,attrs:{value:t.id+""}},[e._v(e._s(t.name))])}))],1),a("Form-item",{staticClass:"topic-content",attrs:{"label-width":0,prop:"content"}},[e.article&&2==e.article.contentType?a("html-editor",{attrs:{value:e.formValidate.content,user:e.user},on:{save:e.onContentSave,change:e.onContentChage}}):a("md-editor",{attrs:{value:e.formValidate.content,user:e.user},on:{save:e.onContentSave,change:e.onContentChage}})],1),a("Form-item",{staticClass:"topic-submit",attrs:{"label-width":0}},[e.isMounted?a("Button",{attrs:{size:"large",type:"primary"},on:{click:e.onSubmit}},[e._v(e._s(e.id?"保存话题":"发布话题"))]):e._e()],1)],1)],1)])]),a("ul",{staticClass:"topic-sidebar"},[e._m(2),a("li",{staticClass:"topic-sidebar-item"},[a("div",{staticClass:"topic-sidebar-title"},[e._v("我的近期话题")]),e._l(e.recentArticles,function(t,s){return e.hasRecentArticles?a("p",{staticClass:"topic-sidebar-my",style:{"border-top":0==s?"none;":"1px solid #f0f0f0;"}},[a("a",{attrs:{href:"/topic/"+t.id,target:"_blank"}},[e._v(e._s(t.name))])]):a("p",{staticClass:"topic-none",staticStyle:{"padding-left":"0"}},[e._v("暂无话题")])})],2)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"/"}},[a("span",[e._v("主页")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"topic-nav-sep"},[a("span",[e._v("/")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"topic-sidebar-item"},[a("div",{staticClass:"topic-sidebar-title"},[e._v("Markdown 语法参考")]),a("p",[e._v("### 单行的标题")]),a("p",[e._v("**粗体**")]),a("p",[e._v("[链接](https://www.go.com)")]),a("p",[e._v("![图片](https://www.go.com/1.jpg)")]),a("div",{staticClass:"markdown-codeblock"},[a("p",[e._v("```")]),a("p",[e._v("if (a > 1) {")]),a("p",[e._v('    doSomething("代码")')]),a("p",[e._v("}")]),a("p",[e._v("```")])]),a("p",[a("a",{attrs:{href:"/markdown",target:"_blank"}},[e._v("Markdown参考文档")])])])}],n={render:s,staticRenderFns:i};t.a=n},lERW:function(e,t,a){"use strict";var s=a("V8bM"),i=a("MyuZ"),n=a("3G8Z"),r=a("y8ae"),o=a("7EVb"),l=a("FhoZ"),c=a.n(l);t.a={props:["categories","article","recentArticles","hasRecentArticles","id","user"],data:function(){return{isMounted:!1,formValidate:{topicName:this.article&&this.article.name||"",categories:this.categories,selected:this.article&&this.article.categories[0].id+""||"",content:this.article&&(this.article.content||this.article.htmlContent)||""},ruleInline:{topicName:[{required:!0,message:"请输入话题名称",trigger:"blur"}],selected:[{required:!0,message:"请选择板块",trigger:"change"}],content:[{required:!0,message:"请输入话题内容",trigger:"blur"}]}}},mounted:function(){this.isMounted=!0},methods:{onContentChage:function(e){this.formValidate.content=e},onSubmit:function(){var e=this;return this.user.status===o.a.STATUS_IN_ACTIVE?void(this.id?this.$Message.error({duration:c.a.messageDuration,closable:!0,content:"账号未激活，不能保存话题"}):this.$Message.error({duration:c.a.messageDuration,closable:!0,content:"账号未激活，不能发布话题"})):(this.$refs.formValidate.validate(function(t){if(t){var a=e;(e.id?s.a.updateArticle:s.a.createArticle)({body:{id:e.id,name:e.formValidate.topicName,content:e.formValidate.content,categories:[{id:parseInt(e.formValidate.selected)}]}}).then(function(e){e.errNo===r.a.ERROR?a.$Message.error({duration:c.a.messageDuration,closable:!0,content:e.msg}):e.errNo===r.a.IN_ACTIVE?a.id?a.$Message.error("账号未激活，不能保存话题"):a.$Message.error("账号未激活，不能发布话题"):e.errNo===r.a.LOGIN_TIMEOUT?location.href="/signin?ref="+encodeURIComponent(location.href):e.errNo===r.a.SUCCESS&&setTimeout(function(){location.href="/topic/"+e.data.id},500)}).catch(function(e){a.$Message.error({duration:c.a.messageDuration,closable:!0,content:e.message||e.msg})})}}),!1)},onContentSave:function(){this.onSubmit()}},components:{"md-editor":i.a,"html-editor":n.a}}},oXG0:function(e,t,a){var s=a("LksS");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("b90baa4c",s,!0)},ookB:function(e,t,a){"use strict";var s=a("FhoZ");if(a.n(s).a.adsenseID&&"undefined"!=typeof window){var i=document.createElement("script");i.async=!0,i.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var n="(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: '"+adsenseID+"',enable_page_level_ads: true});",r=document.createElement("script");r.innerHTML=n;var o=document.getElementsByTagName("head");o&&o[0]&&(o[0].appendChild(i),o[0].appendChild(r))}},pq6b:function(e,t,a){"use strict";var s=a("y8ae"),i=a("7EVb"),n=a("FhoZ"),r=a.n(n);t.a={props:{value:{type:String,required:!0},user:{type:Object}},data:function(){return{isMounted:!1,host:"",simplemde:null,SimpleMDE:null,uploadURL:r.a.apiURL+"/upload",modalVisible:!1,toolbar:null,isFullscreen:!1}},methods:{ok:function(){},cancel:function(){},showUpload:function(){if(this.user.status===i.a.STATUS_IN_ACTIVE)return void this.$Message.error({duration:r.a.messageDuration,closable:!0,content:"账号未激活，不能上传图片"});this.modalVisible=!0},onToggleFullScreen:function(e){e.toggleFullScreen(),this.isFullscreen=!this.isFullscreen},onSave:function(){this.$emit("save")},onUploadCallback:function(e,t){if(e)if(e.errNo===s.a.SUCCESS){var a=e.data.url;this.simplemde.setImageURL(a),this.SimpleMDE.drawImage(this.simplemde)}else e.errNo===s.a.IN_ACTIVE?(this.modalVisible=!1,this.$Message.error({duration:r.a.messageDuration,closable:!0,content:"账号未激活，不能上传图片"})):e.errNo===s.a.ERROR?(this.modalVisible=!1,this.$Message.error({duration:r.a.messageDuration,closable:!0,content:e.msg})):e.errNo===s.a.LOGIN_TIMEOUT&&(location.href="/signin")}},head:function(){return{script:[{src:"/javascripts/editor/simplemde.js"}]}},mounted:function(){this.isMounted=!0,this.$nextTick(function(){this.host=document.location.hostname;var e=window.SimpleMDE;this.toolbar=[{name:"bold",action:e.toggleBold,className:"fa fa-bold",title:"粗体"},{name:"italic",action:e.toggleItalic,className:"fa fa-italic",title:"斜体"},{name:"heading",action:e.toggleHeadingSmaller,className:"fa fa-header",title:"标题"},"|",{name:"unordered-list",action:e.toggleUnorderedList,className:"fa fa-list-ul",title:"无序列表"},{name:"ordered-list",action:e.toggleOrderedList,className:"fa fa-list-ol",title:"有序列表"},{name:"table",action:e.drawTable,className:"fa fa-table",title:"表格"},{name:"horizontal-rule",action:e.drawHorizontalRule,className:"fa fa-minus",title:"水平分隔线"},"|",{name:"code",action:e.toggleCodeBlock,className:"fa fa-code",title:"代码"},{name:"quote",action:e.toggleBlockquote,className:"fa fa-quote-left",title:"块引用"},{name:"link",action:e.drawLink,className:"fa fa-link",title:"链接"},{name:"image",action:this.showUpload,className:"fa fa-picture-o",title:"上传图片"},"|",{name:"preview",action:e.togglePreview,className:"fa fa-eye no-disable",title:"预览"},{name:"fullscreen",action:this.onToggleFullScreen,className:"fa fa-arrows-alt no-disable no-mobile",title:"全屏"}],this.SimpleMDE=e;var t=new e({element:this.$refs.textarea,promptURLs:!1,spellChecker:!1,toolbar:this.toolbar});this.simplemde=t;var a=e.prototype;a.getImageURL||(a.getImageURL=function(){return this.imageURL},a.setImageURL=function(e){this.imageURL=e});var s=this;this.simplemde.codemirror.on("change",function(){s.$emit("change",s.simplemde.value())}),this.simplemde.value(this.value)})},watch:{value:function(e,t){e!==t&&""===e&&this.simplemde.value("")}}}},"s+Te":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang123-editor"},[a("Input",{attrs:{type:"textarea",rows:40},on:{"on-change":e.onChange},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}})],1)},i=[],n={render:s,staticRenderFns:i};t.a=n},yqLL:function(e,t,a){"use strict";var s=a("J3Se"),i=a("VU/8"),n=i(null,s.a,!1,null,null,null);t.a=n.exports}});
//# sourceMappingURL=create.bb7c9c8e838e0a317986.js.map