webpackJsonp([13],{"/myT":function(e,t,a){"use strict";var s=a("V8bM"),n=a("y8ae"),o=a("b1Yp"),i=a("FN0O"),r=a.n(i);a("9oAv"),a("ookB");t.a={props:["user","messages","messageCount"],data:function(){return{q:"",userData:this.user,isInputFocus:!1,userMessages:[]}},methods:{onSearch:function(){var e="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(e)},onInputFocus:function(){this.isInputFocus=!0},onInputBlur:function(){this.isInputFocus=!1},onReadMessage:function(e){s.a.readMessage({params:{id:e.id}}).then(function(){e.readed=!0})},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var e=this;s.a.logout().then(function(t){t.errNo===n.a.SUCCESS&&(e.userData=null,window.location.href="/signin")}).catch(function(e){console.log(e)})}},mounted:function(){for(var e=this.messages||[],t=e.slice(0),a=0;a<t.length;a++){if("messageTypeCommentComment"===t[a].type){var s=r()(t[a].data.commentContent,{limit:15,wordBreak:!0,suffix:"...",preserveTags:!1,moreLink:!1}),n=s.html;n=o.a.trimImg(n),t[a].data.commentContent=n}var i=t[a].data.title||"";i.length>15&&(t[a].data.title=i.substr(0,15)+"..."),t[a].readed=!1}this.userMessages=t}}},"7EVb":function(e,t,a){"use strict";t.a={STATUS_IN_ACTIVE:1,STATUS_ACTIVE:2,STATUS_FROZEN:3}},"9oAv":function(e,t,a){"use strict";var s=a("FhoZ"),n=a.n(s);if(n.a.bdStatEnable&&"undefined"!=typeof window){!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?"+n.a.bdStatSI;var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}},FN0O:function(e,t){function a(e,t){t=t||{};for(var a,n,o,i,r,l=t.limit||100,c=void 0===t.preserveTags||t.preserveTags,u=void 0!==t.wordBreak&&t.wordBreak,m=t.suffix||"...",d=t.moreLink||"",f=t.moreText||"»",g=t.preserveWhiteSpace||!1,p=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n"),h=0,v=[],b=!1,_=0;_<p.length;_++)if(a=p[_],rowCut=g?a:a.replace(/[ ]+/g," "),a.length){var C=s(rowCut);if("<"!==a[0])if(h>=l)a="";else if(h+C.length>=l){if(n=l-h," "===C[n-1])for(;n&&(n-=1," "===C[n-1]););else o=C.slice(n).indexOf(" "),u||(-1!==o?n+=o:n=a.length);a=C.slice(0,n).join("")+m,d&&(a+='<a href="'+d+'" style="display:inline">'+f+"</a>"),h=l,b=!0}else h+=C.length;else if(c){if(h>=l)if(i=a.match(/[a-zA-Z]+/),r=i?i[0]:"")if("</"!==a.substring(0,2))v.push(r),a="";else{for(;v[v.length-1]!==r&&v.length;)v.pop();v.length&&(a=""),v.pop()}else a=""}else a="";p[_]=a}return{html:p.join("\n").replace(/\n/g,""),more:b}}function s(e){for(var t,a,s,n=[],o=0;o<rowCut.length;o++)t=rowCut.substring(o),a=t.match(/^&[a-z0-9#]+;/),a?(s=a[0],n.push(s),o+=s.length-1):n.push(rowCut[o]);return n}void 0!==e&&e.exports&&(e.exports=a)},GUey:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang-top-header"},[a("div",{staticClass:"golang-top-box"},[a("div",{staticClass:"golang-top-header-left"},[e._m(0),a("div",{staticClass:"golang-header-search"},[a("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(t){t.preventDefault(),e.onSearch(t)}}},[a("p",{staticStyle:{position:"relative"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.q,expression:"q"}],staticClass:"golang-top-input",style:{border:e.isInputFocus?"1px #a2a2a2 solid":"1px #e3e3e3 solid"},attrs:{type:"text",name:"topSearch"},domProps:{value:e.q},on:{focus:e.onInputFocus,blur:e.onInputBlur,input:function(t){t.target.composing||(e.q=t.target.value)}}}),a("span",{staticClass:"search-icon"})])])])]),e._m(1),a("div",{staticClass:"golang-top-header-right"},[a("ul",[e._m(2),e._m(3),e.userData?[a("li",{staticClass:"user-message-wrapbox"},[e.userMessages.length?a("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[a("a",{staticClass:"user-message-box",attrs:{href:""}},[a("Icon",{staticClass:"user-message",attrs:{type:"ios-bell-outline"}}),a("span",{staticClass:"user-message-tip-count"},[e._v(e._s(e.messageCount))])],1),a("ul",{staticClass:"header-message-list",attrs:{slot:"content"},slot:"content"},e._l(e.userMessages,function(t){return a("li",["messageTypeCommentArticle"===t.type?a("p",{staticClass:"header-message-item"},[a("a",{staticClass:"header-message-user",attrs:{href:"/user/"+t.fromUser.id,target:"_blank"}},[e._v(e._s(t.fromUser.name))]),e._v(" 回复了你的话题 "),a("a",{staticClass:"header-message-content",style:{color:t.readed?"#a0a3a4":""},attrs:{href:"/topic/"+t.sourceID+"/#reply-"+t.commentID,target:"_blank"},on:{click:function(a){e.onReadMessage(t)}}},[e._v(e._s(t.data.title))])]):"messageTypeCommentVote"===t.type?a("p",{staticClass:"header-message-item"},[a("a",{staticClass:"header-message-user",attrs:{href:"/user/"+t.fromUser.id,target:"_blank"}},[e._v(e._s(t.fromUser.name))]),e._v(" 回复了你的投票 "),a("a",{staticClass:"header-message-content",style:{color:t.readed?"#a0a3a4":""},attrs:{href:"/vote/"+t.sourceID+"/#reply-"+t.commentID,target:"_blank"},on:{click:function(a){e.onReadMessage(t)}}},[e._v(e._s(t.data.title))])]):"messageTypeCommentComment"===t.type?a("p",{staticClass:"header-message-item"},[a("a",{staticClass:"header-message-user",attrs:{href:"/user/"+t.fromUser.id,target:"_blank"}},[e._v(e._s(t.fromUser.name))]),e._v(" 回复了你 "),a("a",{staticClass:"header-message-content",style:{color:t.readed?"#a0a3a4":""},attrs:{href:"article"===t.sourceName?"/topic/"+t.sourceID+"/#reply-"+t.commentID:"/vote/"+t.sourceID+"/#reply-"+t.commentID,target:"_blank"},on:{click:function(a){e.onReadMessage(t)}}},[e._v(e._s(t.data.commentContent))])]):e._e()])}))]):a("a",{staticClass:"user-message-box",attrs:{href:""}},[a("Icon",{staticClass:"user-message",attrs:{type:"ios-bell-outline"}})],1)],1),a("li",{staticStyle:{"padding-right":"0"}},[a("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[a("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+e.user.id}},[a("span",{staticClass:"header-avatar"},[a("img",{attrs:{src:e.user.avatarURL,alt:""}})]),a("span",{staticClass:"header-user-name"},[e._v(e._s(e.user.name))])]),a("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[a("li",[a("a",{attrs:{href:"/user/"+e.user.id}},[e._v("个人主页")])]),a("li",[a("a",{attrs:{href:"/ac/pwdModify"}},[e._v("修改密码")])]),a("li",{on:{click:e.onSignout}},[e._v("退  出")])])])],1)]:[a("a",{on:{click:e.onSignin}},[a("li",{staticStyle:{color:"#333"}},[e._v("登录")])]),e._m(4)]],2)])])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang-logo-container"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"/images/logo.png"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang-top-header-nav"},[a("ul",[a("li",[a("a",{attrs:{href:"/"}},[e._v("首页")])]),a("li",[a("a",{attrs:{href:"/vote"}},[e._v("投票")])]),a("li",[a("a",{attrs:{href:"/timeline"}},[e._v("成长历史")])]),a("li",[a("a",{attrs:{href:"/about"}},[e._v("关于")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[e._v("golang123源码")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[e._v("问题反馈")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"/signup"}},[a("li",{staticStyle:{color:"#333"}},[e._v("注册")])])}],o={render:s,staticRenderFns:n};t.a=o},IgDG:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return n});var s=function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},n=function(e,t){var a=e.split("."),n=t,o=a.length-1,i=a[o];a.map(function(e,t){t!==o&&(n=n[e])}),n[i]=s(n[i])}},J3Se:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang-footer"},[a("div",{staticClass:"golang-footer-page-link"},[a("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[a("div",{staticClass:"golang-footer-github"},[a("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),a("span",{staticStyle:{"margin-left":"2px"}},[e._v("Github")])]),a("span",[e._v("  | ")]),a("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[e._v("问题反馈")]),a("span",[e._v("  |  ")]),a("a",{attrs:{href:"/vote"}},[e._v("投票")]),a("span",[e._v("  |  ")]),a("a",{attrs:{href:"/rank"}},[e._v("积分榜")]),a("span",[e._v("  |  ")]),a("a",{attrs:{href:"/links"}},[e._v("友情链接")]),a("span",[e._v("  |  ")]),a("a",{attrs:{href:"/timeline"}},[e._v("成长历史")]),a("span",[e._v("  |  ")]),a("a",{attrs:{href:"/about"}},[e._v("关于我们")])]),e._m(0)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang-footer-copyright"},[a("span",[e._v("© 2017 "),a("a",{attrs:{href:"/"}},[e._v("golang中文社区")]),e._v(" "),a("a",{attrs:{href:"/"}},[e._v("golang123.com")]),e._v(" 版权所有")]),a("span",[e._v(" | ")]),a("span",[e._v("京ICP备12045181号-2")])])}],o={render:s,staticRenderFns:n};t.a=o},LQ54:function(e,t,a){"use strict";function s(e){a("Sdjw")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("uAXr"),o=a("Omnq"),i=a("VU/8"),r=s,l=i(n.a,o.a,!1,r,null,null);t.default=l.exports},LksS:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},MyuZ:function(e,t,a){"use strict";var s=a("pq6b"),n=a("UNwd"),o=a("VU/8"),i=o(s.a,n.a,!1,null,null,null);t.a=i.exports},Omnq:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("app-header",{attrs:{user:e.user}}),a("div",{staticClass:"vote-box"},[a("div",{staticClass:"vote-main"},[e._m(0),a("div",{staticClass:"vote-box-wrap"},[a("div",{staticClass:"vote-area"},[a("vote-editor",{attrs:{vote:e.vote,id:e.id,user:e.user}})],1)])])]),a("app-footer")],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"vote-nav"},[a("li",[a("a",{attrs:{href:"/"}},[a("span",[e._v("主页")])])]),a("li",{staticClass:"vote-nav-sep"},[a("span",[e._v("/")])]),a("li",[a("span",{staticClass:"publish-label"},[e._v("发布话题")])])])}],o={render:s,staticRenderFns:n};t.a=o},Sdjw:function(e,t,a){var s=a("W1LP");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("3accf0fd",s,!0)},UNwd:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"golang123-editor"},[e.isMounted?a("textarea",{ref:"textarea"}):e._e(),a("Modal",{attrs:{title:"上传图片"},on:{"on-ok":e.ok,"on-cancel":e.cancel},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("Upload",{attrs:{"on-success":e.onUploadCallback,name:"upFile",format:["jpg","jpeg","png","gif"],action:e.uploadURL}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[e._v("上传图片")])],1)],1),e.isFullscreen?a("div",{staticClass:"editor-fullScreen-save"},[a("Button",{attrs:{type:"primary"},on:{click:e.onSave}},[e._v("保  存")])],1):e._e()],1)},n=[],o={render:s,staticRenderFns:n};t.a=o},W1LP:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"body{background-color:#e1e1e1}.vote-box{width:1200px;overflow:hidden;font-size:0;margin-left:auto;margin-right:auto;margin-top:20px}.vote-main{font-size:0}.vote-main,.vote-nav{width:900px;display:inline-block}.vote-nav{height:40px;padding-left:20px;background:#f6f6f6}.vote-nav a{color:#80bd01}.vote-nav li{float:left;line-height:40px}.vote-nav-sep{padding:0 8px}.vote-nav span{font-size:14px}.vote-box-wrap{width:900px;padding-top:24px;min-height:720px;background:#fff}.vote-content .ivu-form-item-content,.vote-submit .ivu-form-item-content{margin-left:0!important}.vote-area{clear:both;padding:0 20px 1px}",""])},"YXP+":function(e,t,a){"use strict";function s(e){a("oXG0")}var n=a("/myT"),o=a("GUey"),i=a("VU/8"),r=s,l=i(n.a,o.a,!1,r,null,null);t.a=l.exports},aku6:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleInline,"label-width":80}},[a("Form-item",{attrs:{label:"投票名称",prop:"voteName"}},[a("Input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入话题名称"},model:{value:e.formValidate.voteName,callback:function(t){e.formValidate.voteName=t},expression:"formValidate.voteName"}})],1),a("Form-item",{attrs:{label:"结束时间",prop:"date"}},[a("Date-picker",{staticStyle:{width:"400px"},attrs:{type:"datetime",placeholder:"选择日期"},on:{"on-change":e.onDateChange},model:{value:e.formValidate.date,callback:function(t){e.formValidate.date=t},expression:"formValidate.date"}})],1),a("Form-item",{staticClass:"vote-content",attrs:{"label-width":0,prop:"content"}},[a("md-editor",{attrs:{user:e.user,value:e.formValidate.content},on:{change:e.onContentChage}})],1),e._l(e.formValidate.items,function(t,s){return a("Form-item",{key:s,attrs:{label:"投票项"+(s+1),prop:"items."+s+".value",rules:{required:!0,message:"投票项"+(s+1)+"不能为空",trigger:"blur"}}},[a("Row",[a("Col",{attrs:{span:"18"}},[a("Input",{attrs:{type:"text",placeholder:"请输入..."},model:{value:t.value,callback:function(e){t.value=e},expression:"item.value"}})],1),a("Col",{attrs:{span:"4",offset:"1"}},[e.id?a("Button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(t){e.addItem(s)}}},[e._v("保存")]):e._e(),a("Button",{attrs:{type:"ghost"},on:{click:function(t){e.handleRemove(s)}}},[e._v("删除")])],1)],1)],1)}),a("Form-item",[a("Row",[a("Col",{attrs:{span:"12"}},[a("Button",{attrs:{type:"dashed",long:"",icon:"plus-round"},on:{click:e.handleAdd}},[e._v("增加投票项")])],1)],1)],1),a("Form-item",{staticClass:"vote-submit",attrs:{"label-width":0}},[a("Button",{attrs:{size:"large",type:"primary"},on:{click:function(t){e.onSubmit()}}},[e._v("发起投票")])],1)],2)},n=[],o={render:s,staticRenderFns:n};t.a=o},b1Yp:function(e,t,a){"use strict";var s={trimImg:function(e){return e=e.replace(/<\s*img\s+.*?\/?\s*>/g,"")},entity2HTML:function(e){var t={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'},a=/&(lt|gt|nbsp|amp|quot);/gi;return e.replace(a,function(e,a){return t[a]})}};t.a=s},ijO2:function(e,t,a){"use strict";var s=a("lcHV"),n=a("aku6"),o=a("VU/8"),i=o(s.a,n.a,!1,null,null,null);t.a=i.exports},lcHV:function(e,t,a){"use strict";var s=a("FhoZ"),n=a.n(s),o=a("MyuZ"),i=a("V8bM"),r=a("y8ae"),l=a("IgDG"),c=a("7EVb");t.a={props:["vote","user","id"],data:function(){return{formValidate:{voteName:this.vote&&this.vote.name||"",date:this.vote&&this.vote.endAt&&new Date(this.vote.endAt)||null,content:this.vote&&this.vote.content||"",items:this.vote&&this.vote.voteItems.map(function(e){return{id:e.id,value:e.name}})||[{value:""},{value:""}]},ruleInline:{voteName:[{required:!0,message:"请输入投票名称",trigger:"blur"}],date:[{required:!0,type:"date",message:"请选择结束时间",trigger:"blur"}],content:[{required:!0,message:"请输入投票内容",trigger:"blur"}]},dataOption:{disabledDate:function(e){return e&&e.valueOf()<Date.now()-864e5}},success:!1}},methods:{onSubmit:function(){var e=this,t=this;if(this.user.status===c.a.STATUS_IN_ACTIVE)return void(this.id?this.$Message.error({duration:n.a.messageDuration,closable:!0,content:"账号未激活，不能保存投票"}):this.$Message.error({duration:n.a.messageDuration,closable:!0,content:"账号未激活，不能发布投票"}));this.$refs.formValidate.validate(function(a){if(a){var s={},o=e.id?i.a.updateVote:i.a.createVote;s=e.id?{id:parseInt(e.id),name:Object(l.a)(e.formValidate.voteName),content:e.formValidate.content,endAt:e.formValidate.date}:{vote:{name:Object(l.a)(e.formValidate.voteName),content:e.formValidate.content,endAt:e.formValidate.date},voteItems:e.formValidate.items.map(function(e){return{name:Object(l.a)(e.value)}})},o({body:s}).then(function(e){e.errNo===r.a.SUCCESS?setTimeout(function(){location.href="/vote/"+e.data.id},500):e.errNo===r.a.IN_ACTIVE?t.id?t.$Message.error({duration:n.a.messageDuration,closable:!0,content:"账号未激活，不能保存投票"}):t.$Message.error({duration:n.a.messageDuration,closable:!0,content:"账号未激活，不能发布投票"}):e.errNo===r.a.LOGIN_TIMEOUT?location.href="/signin?ref="+encodeURIComponent(location.href):t.$Message.error({duration:n.a.messageDuration,closable:!0,content:e.msg})}).catch(function(t){e.$Message.error({duration:n.a.messageDuration,closable:!0,content:t.message})})}})},onContentChage:function(e){this.formValidate.content=e},handleAdd:function(){if(!(this.formValidate.items.length<20))return this.$Message.error({duration:n.a.messageDuration,closable:!0,content:"投票项最多只能创建20个"});this.formValidate.items.push({value:""})},handleRemove:function(e){var t=this;if(2===this.formValidate.items.length)return this.$Message.error({duration:n.a.messageDuration,closable:!0,content:"至少保存两个投票项"});if(this.id){var a=this.formValidate.items[e].id||"";a?i.a.deleteVoteItem({params:{id:a}}).then(function(a){a.errNo===r.a.SUCCESS?t.formValidate.items.splice(e,1):t.$Message.error({duration:n.a.messageDuration,closable:!0,content:a.msg})}).catch(function(e){t.$Message.error({duration:n.a.messageDuration,closable:!0,content:e.message})}):this.formValidate.items.splice(e,1)}else this.formValidate.items.splice(e,1)},onDateChange:function(e){this.formValidate.date=e},addItem:function(e){var t=this,a={};a=this.formValidate.items[e].id?{id:this.formValidate.items[e].id,name:this.formValidate.items[e].value}:{voteID:parseInt(this.id),name:this.formValidate.items[e].value},(this.formValidate.items[e].id?i.a.editVoteItem:i.a.addVoteItem)({body:a}).then(function(e){e.errNo===r.a.SUCCESS?(console.log(e),t.$Message.success({duration:n.a.messageDuration,closable:!0,content:"操作投票项成果"})):t.$Message.error({duration:n.a.messageDuration,closable:!0,content:e.msg})}).catch(function(e){t.$Message.error({duration:n.a.messageDuration,closable:!0,content:e.message||e.msg})})}},components:{"md-editor":o.a}}},oXG0:function(e,t,a){var s=a("LksS");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("b90baa4c",s,!0)},ookB:function(e,t,a){"use strict";var s=a("FhoZ");if(a.n(s).a.adsenseID&&"undefined"!=typeof window){var n=document.createElement("script");n.async=!0,n.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var o="(adsbygoogle = window.adsbygoogle || []).push({google_ad_client: '"+adsenseID+"',enable_page_level_ads: true});",i=document.createElement("script");i.innerHTML=o;var r=document.getElementsByTagName("head");r&&r[0]&&(r[0].appendChild(n),r[0].appendChild(i))}},pq6b:function(e,t,a){"use strict";var s=a("y8ae"),n=a("7EVb"),o=a("FhoZ"),i=a.n(o);t.a={props:{value:{type:String,required:!0},user:{type:Object}},data:function(){return{isMounted:!1,host:"",simplemde:null,SimpleMDE:null,uploadURL:i.a.apiURL+"/upload",modalVisible:!1,toolbar:null,isFullscreen:!1}},methods:{ok:function(){},cancel:function(){},showUpload:function(){if(this.user.status===n.a.STATUS_IN_ACTIVE)return void this.$Message.error({duration:i.a.messageDuration,closable:!0,content:"账号未激活，不能上传图片"});this.modalVisible=!0},onToggleFullScreen:function(e){e.toggleFullScreen(),this.isFullscreen=!this.isFullscreen},onSave:function(){this.$emit("save")},onUploadCallback:function(e,t){if(e)if(e.errNo===s.a.SUCCESS){var a=e.data.url;this.simplemde.setImageURL(a),this.SimpleMDE.drawImage(this.simplemde)}else e.errNo===s.a.IN_ACTIVE?(this.modalVisible=!1,this.$Message.error({duration:i.a.messageDuration,closable:!0,content:"账号未激活，不能上传图片"})):e.errNo===s.a.ERROR?(this.modalVisible=!1,this.$Message.error({duration:i.a.messageDuration,closable:!0,content:e.msg})):e.errNo===s.a.LOGIN_TIMEOUT&&(location.href="/signin")}},head:function(){return{script:[{src:"/javascripts/editor/simplemde.js"}]}},mounted:function(){this.isMounted=!0,this.$nextTick(function(){this.host=document.location.hostname;var e=window.SimpleMDE;this.toolbar=[{name:"bold",action:e.toggleBold,className:"fa fa-bold",title:"粗体"},{name:"italic",action:e.toggleItalic,className:"fa fa-italic",title:"斜体"},{name:"heading",action:e.toggleHeadingSmaller,className:"fa fa-header",title:"标题"},"|",{name:"unordered-list",action:e.toggleUnorderedList,className:"fa fa-list-ul",title:"无序列表"},{name:"ordered-list",action:e.toggleOrderedList,className:"fa fa-list-ol",title:"有序列表"},{name:"table",action:e.drawTable,className:"fa fa-table",title:"表格"},{name:"horizontal-rule",action:e.drawHorizontalRule,className:"fa fa-minus",title:"水平分隔线"},"|",{name:"code",action:e.toggleCodeBlock,className:"fa fa-code",title:"代码"},{name:"quote",action:e.toggleBlockquote,className:"fa fa-quote-left",title:"块引用"},{name:"link",action:e.drawLink,className:"fa fa-link",title:"链接"},{name:"image",action:this.showUpload,className:"fa fa-picture-o",title:"上传图片"},"|",{name:"preview",action:e.togglePreview,className:"fa fa-eye no-disable",title:"预览"},{name:"fullscreen",action:this.onToggleFullScreen,className:"fa fa-arrows-alt no-disable no-mobile",title:"全屏"}],this.SimpleMDE=e;var t=new e({element:this.$refs.textarea,promptURLs:!1,spellChecker:!1,toolbar:this.toolbar});this.simplemde=t;var a=e.prototype;a.getImageURL||(a.getImageURL=function(){return this.imageURL},a.setImageURL=function(e){this.imageURL=e});var s=this;this.simplemde.codemirror.on("change",function(){s.$emit("change",s.simplemde.value())}),this.simplemde.value(this.value)})},watch:{value:function(e,t){e!==t&&""===e&&this.simplemde.value("")}}}},uAXr:function(e,t,a){"use strict";var s=a("YXP+"),n=a("yqLL"),o=a("ijO2"),i=a("V8bM");t.a={data:function(){return{}},validate:function(e){return!!e.params.id},middleware:"userRequired",asyncData:function(e){return i.a.getVote({client:e.req,query:{f:"md"},params:{id:e.params.id}}).then(function(t){return{user:e.user,vote:t.data,id:e.params.id}}).catch(function(t){console.log(t),e.error({statusCode:404,message:"Page not found"})})},head:function(){return{title:this.vote.name,link:[{rel:"stylesheet",href:"/styles/editor/simplemde.min.css"}]}},mounted:function(){console.log(this.vote)},components:{"app-header":s.a,"app-footer":n.a,"vote-editor":o.a}}},yqLL:function(e,t,a){"use strict";var s=a("J3Se"),n=a("VU/8"),o=n(null,s.a,!1,null,null,null);t.a=o.exports}});
//# sourceMappingURL=_id.fa7080c2fd5cd1bf9886.js.map