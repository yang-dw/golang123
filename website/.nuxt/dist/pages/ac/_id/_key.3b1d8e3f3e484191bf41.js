webpackJsonp([21],{"/myT":function(e,t,s){"use strict";var a=s("V8bM"),r=s("y8ae"),n=s("b1Yp"),o=s("FN0O"),i=s.n(o);s("9oAv"),s("ookB");t.a={props:["user","messages","messageCount"],data:function(){return{q:"",userData:this.user,isInputFocus:!1,userMessages:[]}},methods:{onSearch:function(){var e="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(e)},onInputFocus:function(){this.isInputFocus=!0},onInputBlur:function(){this.isInputFocus=!1},onReadMessage:function(e){a.a.readMessage({params:{id:e.id}}).then(function(){e.readed=!0})},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var e=this;a.a.logout().then(function(t){t.errNo===r.a.SUCCESS&&(e.userData=null,window.location.href="/signin")}).catch(function(e){console.log(e)})}},mounted:function(){for(var e=this.messages||[],t=e.slice(0),s=0;s<t.length;s++){if("messageTypeCommentComment"===t[s].type){var a=i()(t[s].data.commentContent,{limit:15,wordBreak:!0,suffix:"...",preserveTags:!1,moreLink:!1}),r=a.html;r=n.a.trimImg(r),t[s].data.commentContent=r}var o=t[s].data.title||"";o.length>15&&(t[s].data.title=o.substr(0,15)+"..."),t[s].readed=!1}this.userMessages=t}}},"17iU":function(e,t,s){e.exports=s.p+"img/round_check_fill.df1f30b.png"},"3e6Q":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("go-header",{attrs:{userStatus:e.user}}),a("div",{staticClass:"golang-forget-container"},[a("h1",[e._v("账号安全中心")]),a("p",{staticClass:"golang-forget-title"},[e._v("重置密码")]),a("div",{staticClass:"golang-forget-form",attrs:{id:"reset"}},[e.error?e._e():a("Row",{staticClass:"reset-container"},[e.success?e._e():a("Form",{ref:"formCustom",staticClass:"reset-form",attrs:{model:e.formCustom,rules:e.ruleCustom,"label-width":80}},[a("Form-item",{attrs:{label:"新密码",prop:"passwd"}},[a("i-input",{staticClass:"signup-input",attrs:{size:"large",type:"password"},model:{value:e.formCustom.passwd,callback:function(t){e.formCustom.passwd=t},expression:"formCustom.passwd"}})],1),a("Form-item",{attrs:{label:"确认密码",prop:"passwdCheck"}},[a("i-input",{staticClass:"signup-input",attrs:{size:"large",type:"password"},nativeOn:{keyup:function(t){e.handleKeyUp(t)}},model:{value:e.formCustom.passwdCheck,callback:function(t){e.formCustom.passwdCheck=t},expression:"formCustom.passwdCheck"}})],1),a("i-button",{staticClass:"reset-pwd-button",attrs:{size:"large",type:"primary"},on:{click:function(t){e.handleSubmit("formCustom")}}},[e._v("重置密码")])],1),e.success?a("div",{staticClass:"signup-form"},[a("p",{staticClass:"forget-success-icon"},[a("img",{attrs:{src:s("17iU"),alt:""}})]),a("p",{staticClass:"forget-success-info"},[e._v("密码修改成功  "),a("a",{staticClass:"forget-resend",attrs:{href:"/signin"}},[e._v("立即登陆")])])]):e._e()],1),e.error?a("div",{staticClass:"signup-form"},[a("p",{staticClass:"forget-success-info",staticStyle:{"margin-top":"0","padding-top":"30px"}},[e._v(e._s(e.error))])]):e._e()],1)])],1)},r=[],n={render:a,staticRenderFns:r};t.a=n},"9dyP":function(e,t,s){var a=s("cy0t");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("7c166bff",a,!0)},"9oAv":function(e,t,s){"use strict";var a=s("FhoZ"),r=s.n(a);if(r.a.bdStatEnable&&"undefined"!=typeof window){!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?"+r.a.bdStatSI;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}},F9vk:function(e,t,s){"use strict";t.a={MIN_PWD:6}},FN0O:function(e,t){function s(e,t){t=t||{};for(var s,r,n,o,i,l=t.limit||100,c=void 0===t.preserveTags||t.preserveTags,u=void 0!==t.wordBreak&&t.wordBreak,g=t.suffix||"...",p=t.moreLink||"",f=t.moreText||"»",m=t.preserveWhiteSpace||!1,d=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),h=0,v=[],_=!1,C=0;C<d.length;C++)if(s=d[C],rowCut=m?s:s.replace(/[ ]+/g," "),s.length){var b=a(rowCut);if("<"!==s[0])if(h>=l)s="";else if(h+b.length>=l){if(r=l-h," "===b[r-1])for(;r&&(r-=1," "===b[r-1]););else n=b.slice(r).indexOf(" "),u||(-1!==n?r+=n:r=s.length);s=b.slice(0,r).join("")+g,p&&(s+='<a href="'+p+'" style="display:inline">'+f+"</a>"),h=l,_=!0}else h+=b.length;else if(c){if(h>=l)if(o=s.match(/[a-zA-Z]+/),i=o?o[0]:"")if("</"!==s.substring(0,2))v.push(i),s="";else{for(;v[v.length-1]!==i&&v.length;)v.pop();v.length&&(s=""),v.pop()}else s=""}else s="";d[C]=s}return{html:d.join("\n").replace(/\n/g,""),more:_}}function a(e){for(var t,s,a,r=[],n=0;n<rowCut.length;n++)t=rowCut.substring(n),s=t.match(/^&[a-z0-9#]+;/),s?(a=s[0],r.push(a),n+=a.length-1):r.push(rowCut[n]);return r}void 0!==e&&e.exports&&(e.exports=s)},G076:function(e,t,s){"use strict";function a(e){s("9dyP")}Object.defineProperty(t,"__esModule",{value:!0});var r=s("ZvrM"),n=s("3e6Q"),o=s("VU/8"),i=a,l=o(r.a,n.a,!1,i,null,null);t.default=l.exports},GUey:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"golang-top-header"},[s("div",{staticClass:"golang-top-box"},[s("div",{staticClass:"golang-top-header-left"},[e._m(0),s("div",{staticClass:"golang-header-search"},[s("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(t){t.preventDefault(),e.onSearch(t)}}},[s("p",{staticStyle:{position:"relative"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.q,expression:"q"}],staticClass:"golang-top-input",style:{border:e.isInputFocus?"1px #a2a2a2 solid":"1px #e3e3e3 solid"},attrs:{type:"text",name:"topSearch"},domProps:{value:e.q},on:{focus:e.onInputFocus,blur:e.onInputBlur,input:function(t){t.target.composing||(e.q=t.target.value)}}}),s("span",{staticClass:"search-icon"})])])])]),e._m(1),s("div",{staticClass:"golang-top-header-right"},[s("ul",[e._m(2),e._m(3),e.userData?[s("li",{staticClass:"user-message-wrapbox"},[e.userMessages.length?s("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[s("a",{staticClass:"user-message-box",attrs:{href:""}},[s("Icon",{staticClass:"user-message",attrs:{type:"ios-bell-outline"}}),s("span",{staticClass:"user-message-tip-count"},[e._v(e._s(e.messageCount))])],1),s("ul",{staticClass:"header-message-list",attrs:{slot:"content"},slot:"content"},e._l(e.userMessages,function(t){return s("li",["messageTypeCommentArticle"===t.type?s("p",{staticClass:"header-message-item"},[s("a",{staticClass:"header-message-user",attrs:{href:"/user/"+t.fromUser.id,target:"_blank"}},[e._v(e._s(t.fromUser.name))]),e._v(" 回复了你的话题 "),s("a",{staticClass:"header-message-content",style:{color:t.readed?"#a0a3a4":""},attrs:{href:"/topic/"+t.sourceID+"/#reply-"+t.commentID,target:"_blank"},on:{click:function(s){e.onReadMessage(t)}}},[e._v(e._s(t.data.title))])]):"messageTypeCommentVote"===t.type?s("p",{staticClass:"header-message-item"},[s("a",{staticClass:"header-message-user",attrs:{href:"/user/"+t.fromUser.id,target:"_blank"}},[e._v(e._s(t.fromUser.name))]),e._v(" 回复了你的投票 "),s("a",{staticClass:"header-message-content",style:{color:t.readed?"#a0a3a4":""},attrs:{href:"/vote/"+t.sourceID+"/#reply-"+t.commentID,target:"_blank"},on:{click:function(s){e.onReadMessage(t)}}},[e._v(e._s(t.data.title))])]):"messageTypeCommentComment"===t.type?s("p",{staticClass:"header-message-item"},[s("a",{staticClass:"header-message-user",attrs:{href:"/user/"+t.fromUser.id,target:"_blank"}},[e._v(e._s(t.fromUser.name))]),e._v(" 回复了你 "),s("a",{staticClass:"header-message-content",style:{color:t.readed?"#a0a3a4":""},attrs:{href:"article"===t.sourceName?"/topic/"+t.sourceID+"/#reply-"+t.commentID:"/vote/"+t.sourceID+"/#reply-"+t.commentID,target:"_blank"},on:{click:function(s){e.onReadMessage(t)}}},[e._v(e._s(t.data.commentContent))])]):e._e()])}))]):s("a",{staticClass:"user-message-box",attrs:{href:""}},[s("Icon",{staticClass:"user-message",attrs:{type:"ios-bell-outline"}})],1)],1),s("li",{staticStyle:{"padding-right":"0"}},[s("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[s("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+e.user.id}},[s("span",{staticClass:"header-avatar"},[s("img",{attrs:{src:e.user.avatarURL,alt:""}})]),s("span",{staticClass:"header-user-name"},[e._v(e._s(e.user.name))])]),s("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[s("li",[s("a",{attrs:{href:"/user/"+e.user.id}},[e._v("个人主页")])]),s("li",[s("a",{attrs:{href:"/ac/pwdModify"}},[e._v("修改密码")])]),s("li",{on:{click:e.onSignout}},[e._v("退  出")])])])],1)]:[s("a",{on:{click:e.onSignin}},[s("li",{staticStyle:{color:"#333"}},[e._v("登录")])]),e._m(4)]],2)])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"golang-logo-container"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:"/images/logo.png"}})])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"golang-top-header-nav"},[s("ul",[s("li",[s("a",{attrs:{href:"/"}},[e._v("首页")])]),s("li",[s("a",{attrs:{href:"/vote"}},[e._v("投票")])]),s("li",[s("a",{attrs:{href:"/timeline"}},[e._v("成长历史")])]),s("li",[s("a",{attrs:{href:"/about"}},[e._v("关于")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[e._v("golang123源码")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[e._v("问题反馈")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{attrs:{href:"/signup"}},[s("li",{staticStyle:{color:"#333"}},[e._v("注册")])])}],n={render:a,staticRenderFns:r};t.a=n},J3Se:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"golang-footer"},[s("div",{staticClass:"golang-footer-page-link"},[s("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[s("div",{staticClass:"golang-footer-github"},[s("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),s("span",{staticStyle:{"margin-left":"2px"}},[e._v("Github")])]),s("span",[e._v("  | ")]),s("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[e._v("问题反馈")]),s("span",[e._v("  |  ")]),s("a",{attrs:{href:"/vote"}},[e._v("投票")]),s("span",[e._v("  |  ")]),s("a",{attrs:{href:"/rank"}},[e._v("积分榜")]),s("span",[e._v("  |  ")]),s("a",{attrs:{href:"/links"}},[e._v("友情链接")]),s("span",[e._v("  |  ")]),s("a",{attrs:{href:"/timeline"}},[e._v("成长历史")]),s("span",[e._v("  |  ")]),s("a",{attrs:{href:"/about"}},[e._v("关于我们")])]),e._m(0)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"golang-footer-copyright"},[s("span",[e._v("© 2017 "),s("a",{attrs:{href:"/"}},[e._v("golang中文社区")]),e._v(" "),s("a",{attrs:{href:"/"}},[e._v("golang123.com")]),e._v(" 版权所有")]),s("span",[e._v(" | ")]),s("span",[e._v("京ICP备12045181号-2")])])}],n={render:a,staticRenderFns:r};t.a=n},LksS:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,"",""])},"YXP+":function(e,t,s){"use strict";function a(e){s("oXG0")}var r=s("/myT"),n=s("GUey"),o=s("VU/8"),i=a,l=o(r.a,n.a,!1,i,null,null);t.a=l.exports},ZvrM:function(e,t,s){"use strict";var a=s("YXP+"),r=s("yqLL"),n=s("y8ae"),o=s("F9vk"),i=s("V8bM"),l=s("FhoZ"),c=s.n(l),u="",g="";t.a={data:function(){var e=this;return u=this.$route.params.id||"",g=this.$route.params.key||"",{loading:!1,formCustom:{passwd:"",passwdCheck:""},success:!1,ruleCustom:{passwd:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:function(t,s,a){""===s?a(new Error("请输入密码")):s.length<o.a.MIN_PWD?a(new Error("密码长度不能少于"+o.a.MIN_PWD+"位")):(""!==e.formCustom.passwdCheck&&e.$refs.formCustom.validateField("passwdCheck"),a())},trigger:"blur"}],passwdCheck:[{required:!0,message:"请输入确认密码",trigger:"blur"},{validator:function(t,s,a){""===s?a(new Error("请再次输入密码")):s!==e.formCustom.passwd?a(new Error("两次输入的密码不一致")):a()},trigger:"blur"}]}}},validate:function(e){var t=e.params,s=!!t.id,a=!!t.key;return s&&a},asyncData:function(e){return i.a.verifyUrl({client:e.req,params:{id:e.params.id,key:e.params.key}}).then(function(t){return t.errNo===n.a.SUCCESS?{user:e.user,error:""}:{user:e.user,error:t.msg}})},head:function(){return{title:"重置密码"}},middleware:"userInfo",methods:{handleKeyUp:function(e){if(13===e.keyCode)return this.handleSubmit("formCustom")},handleSubmit:function(e){var t=this;if(!u||!g)return this.$Message.error({duration:c.a.messageDuration,closable:!0,content:"访问页面有误"});this.$refs[e].validate(function(e){if(e){if(t.loading)return;t.loading=!0,i.a.resetPwd({params:{id:u,key:g},body:{password:t.formCustom.passwd}}).then(function(e){t.loading=!1,0===e.errNo?t.success=!0:t.$Message.error({duration:c.a.messageDuration,closable:!0,content:e.msg})}).catch(function(e){t.loading=!1,t.$Message.error({duration:c.a.messageDuration,closable:!0,content:e.message})})}})}},components:{"go-header":a.a,"go-footer":r.a}}},b1Yp:function(e,t,s){"use strict";var a={trimImg:function(e){return e=e.replace(/<\s*img\s+.*?\/?\s*>/g,"")},entity2HTML:function(e){var t={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'},s=/&(lt|gt|nbsp|amp|quot);/gi;return e.replace(s,function(e,s){return t[s]})}};t.a=a},cy0t:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,"body{background-color:#e1e1e1}.golang-footer{position:fixed;bottom:0;width:100%}.golang-forget-container{width:1200px;margin:0 auto;height:560px;margin-top:20px;background-color:#fff;padding:20px}.golang-forget-container h1{font-size:24px}.golang-forget-title{height:30px;line-height:30px;background-color:#80bd01;color:#fff;font-size:14px;margin-top:15px;padding-left:10px}.golang-forget-form{width:400px;margin:0 auto;margin-top:60px}.forget-button{width:400px}.reset-pwd-button{margin-left:80px;width:300px}.forget-success-icon{text-align:center}.forget-success-icon img{widows:80px;height:80px}.forget-success-info{text-align:center;font-size:16px;font-weight:700;margin-top:30px}.reset-container{padding-top:20px}.reset-form{width:380px;margin:0 auto}.signup-input{width:300px}.forget-resend{color:#007fff;margin-left:10px;cursor:pointer}.forget-resend:hover{color:#007fff;text-decoration:none;text-decoration:underline}.not-resend{color:#9e9e9e;margin-left:10px;cursor:not-allowed}",""])},oXG0:function(e,t,s){var a=s("LksS");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("b90baa4c",a,!0)},ookB:function(e,t,s){"use strict";var a=s("FhoZ");if(s.n(a).a.adsenseID&&"undefined"!=typeof window){var r=document.createElement("script");r.async=!0,r.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var n="(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: '"+adsenseID+"',enable_page_level_ads: true});",o=document.createElement("script");o.innerHTML=n;var i=document.getElementsByTagName("head");i&&i[0]&&(i[0].appendChild(r),i[0].appendChild(o))}},yqLL:function(e,t,s){"use strict";var a=s("J3Se"),r=s("VU/8"),n=r(null,a.a,!1,null,null,null);t.a=n.exports}});
//# sourceMappingURL=_key.3b1d8e3f3e484191bf41.js.map