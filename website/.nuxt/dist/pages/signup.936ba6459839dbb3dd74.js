webpackJsonp([24],{"4tW9":function(t,s,e){s=t.exports=e("FZ+f")(!1),s.push([t.i,"",""])},"9oAv":function(t,s,e){"use strict";var a=e("FhoZ"),i=e.n(a);if(i.a.bdStatEnable&&"undefined"!=typeof window){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?"+i.a.bdStatSI;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}()}},Fmx5:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),e("div",{staticClass:"signup-box"},[e("div",{staticClass:"signup-nav"},[e("span",{staticClass:"title"},[t._v(t._s(t.success?"邮箱验证":"账号注册"))]),e("span",{staticClass:"desc"},[t._v(t._s(t.success?"如果您已经完成验证":"如果您有Golang123账号")+"，那么可以"),e("a",{attrs:{href:"/signin"}},[t._v("登录")])])]),t.success?t._e():e("Form",{ref:"formCustom",staticClass:"signup-form",staticStyle:{height:"500px"},attrs:{model:t.formCustom,rules:t.ruleCustom,"label-width":80}},[e("Form-item",{attrs:{label:"用户名",prop:"username"}},[e("i-input",{staticClass:"signup-input",attrs:{size:"large",type:"text"},on:{"on-blur":function(s){t.blur("formCustom.username")}},model:{value:t.formCustom.username,callback:function(s){t.formCustom.username=s},expression:"formCustom.username"}}),e("span",{staticClass:"signup-label"},[t._v("4-20位可由中文、数字、字母组成")])],1),e("Form-item",{attrs:{label:"密码",prop:"passwd"}},[e("i-input",{staticClass:"signup-input",attrs:{size:"large",type:"password"},model:{value:t.formCustom.passwd,callback:function(s){t.formCustom.passwd=s},expression:"formCustom.passwd"}}),e("span",{staticClass:"signup-label"},[t._v("密码由6-20个字符组成，区分大小写")])],1),e("Form-item",{attrs:{label:"确认密码",prop:"passwdCheck"}},[e("i-input",{staticClass:"signup-input",attrs:{size:"large",type:"password"},model:{value:t.formCustom.passwdCheck,callback:function(s){t.formCustom.passwdCheck=s},expression:"formCustom.passwdCheck"}}),e("span",{staticClass:"signup-label"},[t._v("请在此确认您的密码")])],1),e("Form-item",{attrs:{label:"邮箱",prop:"email"}},[e("i-input",{staticClass:"signup-input",attrs:{size:"large"},on:{"on-blur":function(s){t.blur("formCustom.email")}},model:{value:t.formCustom.email,callback:function(s){t.formCustom.email=s},expression:"formCustom.email"}}),e("span",{staticClass:"signup-label"},[t._v("请输入有效的电子邮箱")])],1),e("i-button",{staticClass:"signup-button",attrs:{type:"primary",size:"large"},on:{click:function(s){t.handleSubmit("formCustom")}}},[t._v("立即注册")])],1),t.success?e("div",{staticClass:"signup-message-box",staticStyle:{height:"500px"}},[e("div",[t._m(1),e("div",{staticClass:"message-mail-right"},[e("p",{staticClass:"signup-reminder-text"},[t._v("我们发送了一封验证邮件到"),e("span",{staticClass:"signup-resend"},[t._v(t._s(t.formCustom.email))])]),e("p",{staticClass:"signup-reminder-text"},[t._v("请到您的邮箱收信，并点击其中的链接验证您的邮箱")]),e("a",{attrs:{href:"http://mail."+t.formCustom.email.split("@")[t.formCustom.email.split("@").length-1],target:"_blank"}},[e("i-button",{attrs:{type:"primary"}},[t._v("去邮箱验证")])],1),e("p",{staticClass:"signup-reminder-text signup-text-bottom"},[t._v("收不到邮件？")]),e("p",{staticClass:"signup-reminder-small"},[t._v("请查看您的垃圾邮件和广告邮件，邮件有可能会被误认为是垃圾邮件或广告邮件")]),e("p",{staticClass:"signup-reminder-small signup-resend click-mouse"},[t._v("重新发送")])])])]):t._e()],1),e("app-footer")],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"signup-head"},[a("div",{staticClass:"signup-head-content"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:e("JamQ"),alt:""}}),a("span",[t._v("Golang123")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message-mail-icon"},[a("img",{attrs:{src:e("ohOU"),alt:""}})])}],n={render:a,staticRenderFns:i};s.a=n},FoGE:function(t,s,e){"use strict";s.a={props:["user","userLoginVisible","score","maxComment","maxBrowse","pubTopic","author","score","maxComment","recentArticles","votesMaxBrowse","votesMaxComment"],data:function(){return{}},mounted:function(){},methods:{onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)}}}},IgDG:function(t,s,e){"use strict";e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i});var a=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},i=function(t,s){var e=t.split("."),i=s,n=e.length-1,r=e[n];e.map(function(t,s){s!==n&&(i=i[t])}),i[r]=a(i[r])}},J3Se:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"golang-footer"},[e("div",{staticClass:"golang-footer-page-link"},[e("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[e("div",{staticClass:"golang-footer-github"},[e("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),e("span",{staticStyle:{"margin-left":"2px"}},[t._v("Github")])]),e("span",[t._v("  | ")]),e("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")]),e("span",[t._v("  |  ")]),e("a",{attrs:{href:"/vote"}},[t._v("投票")]),e("span",[t._v("  |  ")]),e("a",{attrs:{href:"/rank"}},[t._v("积分榜")]),e("span",[t._v("  |  ")]),e("a",{attrs:{href:"/links"}},[t._v("友情链接")]),e("span",[t._v("  |  ")]),e("a",{attrs:{href:"/timeline"}},[t._v("成长历史")]),e("span",[t._v("  |  ")]),e("a",{attrs:{href:"/about"}},[t._v("关于我们")])]),t._m(0)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"golang-footer-copyright"},[e("span",[t._v("© 2017 "),e("a",{attrs:{href:"/"}},[t._v("golang中文社区")]),t._v(" "),e("a",{attrs:{href:"/"}},[t._v("golang123.com")]),t._v(" 版权所有")]),e("span",[t._v(" | ")]),e("span",[t._v("京ICP备12045181号-2")])])}],n={render:a,staticRenderFns:i};s.a=n},JamQ:function(t,s,e){t.exports=e.p+"img/logo.ca1f746.png"},KRhH:function(t,s,e){"use strict";function a(t){e("Ve5R")}Object.defineProperty(s,"__esModule",{value:!0});var i=e("ypZv"),n=e("Fmx5"),r=e("VU/8"),o=a,l=r(i.a,n.a,!1,o,null,null);s.default=l.exports},RsKN:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"golang-home-body-right"},[!t.user&&t.userLoginVisible?[e("div",{staticClass:"golang-cell golang-user-info"},[e("p",[t._v("golang中文社区")]),e("p",[t._v("您可以"),e("a",{staticClass:"golang-user-info-action sidebar-user-signin",on:{click:t.onSignin}},[t._v("登录")]),t._v("或"),e("a",{staticClass:"golang-user-info-action sidebar-user-signup",attrs:{href:"/signup"}},[t._v("注册")])])])]:t._e(),t.user&&t.pubTopic?e("div",{staticClass:"golang-user-publish"},[t._m(0)]):t._e(),t.author?e("div",{staticClass:"golang-cell"},[e("div",{staticClass:"title"},[t._v("作者信息")]),e("div",{staticClass:"golang-user-info",staticStyle:{"padding-top":"16px"}},[e("div",[e("a",{staticClass:"golang-sidebar-icon-box",attrs:{href:"/user/"+t.author.id,target:"_blank"}},[e("img",{staticClass:"golang-user-info-icon",attrs:{src:t.author.avatarURL,alt:""}})]),e("span",{staticClass:"golang-sidebar-info-box"},[e("a",{attrs:{href:"/user/"+t.author.id,target:"_blank"}},[t._v(t._s(t.author.name))])])]),e("div",{staticClass:"golang-user-line author-info-text"},[t._v("\n                    积分: "+t._s(t.author.score)+"\n                ")]),e("div",{staticClass:"golang-user-line author-info-text text-italic"},[t._v(t._s(t.author.signature||"这家伙很懒，什么个性签名都没有留下"))])])]):t._e(),t.recentArticles&&t.recentArticles.length?e("div",{staticClass:"golang-cell"},[e("div",{staticClass:"title"},[t._v("作者近期话题")]),e("ul",t._l(t.recentArticles,function(s){return e("li",{staticClass:"golang-cell-item"},[e("a",{staticClass:"sidebar-articles-title",attrs:{href:"/topic/"+s.id,target:"_blank"}},[t._v(t._s(s.name))])])}))]):t._e(),t.score?e("div",{staticClass:"golang-cell"},[t._m(1),e("ul",t._l(t.score,function(s){return e("li",{staticClass:"golang-cell-item"},[e("span",{staticClass:"golang-score-item"},[t._v(t._s(s.score))]),e("span",{staticClass:"golang-score-item"},[e("a",{staticClass:"user-page-link",attrs:{href:"/user/"+s.id,target:"_blank"}},[t._v(t._s(s.name))])])])}))]):t._e(),t.maxBrowse?e("div",{staticClass:"golang-cell"},[e("div",{staticClass:"title"},[t._v("热门话题")]),e("ul",t._l(t.maxBrowse,function(s){return e("li",{staticClass:"golang-cell-item"},[e("a",{staticClass:"sidebar-articles-title",attrs:{href:"/topic/"+s.id,target:"_blank"}},[t._v(t._s(s.name))])])}))]):t._e(),t.maxComment?e("div",{staticClass:"golang-cell"},[e("div",{staticClass:"title"},[t._v("回复最多的话题")]),e("ul",t._l(t.maxComment,function(s){return e("li",{staticClass:"golang-cell-item"},[e("a",{staticClass:"sidebar-articles-title",attrs:{href:"/topic/"+s.id,target:"_blank"}},[t._v(t._s(s.name))])])}))]):t._e(),t.votesMaxBrowse?e("div",{staticClass:"golang-cell"},[e("div",{staticClass:"title"},[t._v("热门投票")]),e("ul",t._l(t.votesMaxBrowse,function(s){return e("li",{staticClass:"golang-cell-item"},[e("a",{staticClass:"sidebar-articles-title",attrs:{href:"/vote/"+s.id}},[t._v(t._s(s.name))])])}))]):t._e(),t.votesMaxComment?e("div",{staticClass:"golang-cell"},[e("div",{staticClass:"title"},[t._v("回复最多的投票")]),e("ul",t._l(t.votesMaxComment,function(s){return e("li",{staticClass:"golang-cell-item"},[e("a",{staticClass:"sidebar-articles-title",attrs:{href:"/vote/"+s.id}},[t._v(t._s(s.name))])])}))]):t._e(),t._m(2)],2)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"/topic/create"}},[e("button",{staticClass:"signup-button ivu-btn ivu-btn-primary ivu-btn-large"},[t._v("发布话题")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[t._v("积分榜"),e("a",{staticClass:"top100-link",attrs:{href:"/rank",target:"_blank"}},[t._v("TOP 100>>")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"sideAd1"}},[e("a",{attrs:{href:"https://promotion.aliyun.com/ntms/act/ambassador/sharetouser.html?userCode=1kjxjjg7&productCode=qingcloud&utm_source=1kjxjjg7",target:"_blank"}},[e("img",{attrs:{src:"/images/ad/aliyun/side.300x300.jpg"}})])])}],n={render:a,staticRenderFns:i};s.a=n},Ve5R:function(t,s,e){var a=e("Y1aQ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("5017a476",a,!0)},Xx2u:function(t,s,e){var a=e("4tW9");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("ab216b16",a,!0)},Y1aQ:function(t,s,e){s=t.exports=e("FZ+f")(!1),s.push([t.i,".signup-head{padding:10px;background-color:#f0f9ff}.signup-head-content{width:1000px;margin:0 auto}.signup-head-content a{display:inline-block}.signup-head-content a:hover{text-decoration:none}.signup-head-content img{width:60px}.signup-head-content span{font-size:30px;vertical-align:bottom;line-height:60px}.signup-box{width:1000px;overflow:hidden;background-color:#fff;border:1px solid #e9e9e9;font-size:0;margin-left:auto;margin-right:auto;margin-top:20px;border-radius:2px;position:relative;-webkit-transition:all .3s;transition:all .3s}.signup-box:hover{-webkit-box-shadow:0 1px 6px rgba(0,0,0,.2);box-shadow:0 1px 6px rgba(0,0,0,.2);border-color:transparent}.signup-main{width:900px;font-size:0;margin:0 auto;background-color:#fff}.signup-nav{height:60px;line-height:60px;background:#fff;border-bottom:1px solid #e9e9e9;padding:0 24px;border-radius:2px 2px 0 0}.signup-label{margin-left:20px;font-size:14px;color:gray}.signup-nav-sep{padding:0 8px}.signup-nav a{color:#80bd01}.signup-nav li{float:left;line-height:40px}.signup-nav .title{font-size:18px;font-weight:700}.signup-nav .desc{font-size:12px;float:right;color:#000}.signup-nav .desc a{font-weight:700;color:#000}.signup-nav .desc a:hover{text-decoration:underline}.signup-form{margin-top:32px;margin-left:80px}.signup-input{width:400px}.signup-button{margin-left:80px;margin-bottom:20px;width:400px}.message-mail-right{display:inline-block;vertical-align:top;margin-top:10px;margin-left:20px}.signup-reminder-text{font-size:14px;color:#000;font-weight:700;margin-bottom:10px}.signup-reminder-text .signup-resend{margin-left:5px}.signup-text-bottom{margin-top:50px}.signup-reminder-small{font-size:12px;color:gray;margin-bottom:10px}.message-mail-icon{margin-left:200px;padding:0 10px;display:inline-block;border-right:1px solid;-o-border-image:linear-gradient(180deg,hsla(0,0%,62%,.25) 0,#9e9e9e 50%,hsla(0,0%,62%,.25)) 30 30;border-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,62%,.25)),color-stop(50%,#9e9e9e),to(hsla(0,0%,62%,.25))) 30 30;border-image:linear-gradient(180deg,hsla(0,0%,62%,.25) 0,#9e9e9e 50%,hsla(0,0%,62%,.25)) 30 30}.signup-resend{color:#2d8cf0}.click-mouse{cursor:pointer}.message-mail-icon img{width:100px}",""])},ohOU:function(t,s,e){t.exports=e.p+"img/mail.78006e5.png"},tLe7:function(t,s,e){"use strict";function a(t){e("Xx2u")}var i=e("FoGE"),n=e("RsKN"),r=e("VU/8"),o=a,l=r(i.a,n.a,!1,o,null,null);s.a=l.exports},ypZv:function(t,s,e){"use strict";var a=e("yqLL"),i=e("tLe7"),n=e("y8ae"),r=e("FhoZ"),o=e.n(r),l=e("V8bM"),c=e("IgDG");e("9oAv");s.a={data:function(){var t=this;return{loading:!1,formCustom:{passwd:"",passwdCheck:"",username:"",email:""},success:!1,ruleCustom:{passwd:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:function(s,e,a){if(""===e)a(new Error("请输入密码"));else{if(e.length<6||e.length>20)return a(new Error("密码必须6-20个字符"));""!==t.formCustom.passwdCheck&&t.$refs.formCustom.validateField("passwdCheck"),a()}},trigger:"blur"}],passwdCheck:[{required:!0,message:"请输入确认密码",trigger:"blur"},{validator:function(s,e,a){""===e?a(new Error("请输入确认密码")):e!==t.formCustom.passwd?a(new Error("两次输入密码不一致!")):a()},trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:function(t,s,e){s&&(s.length<4||s.length>20)&&e(new Error("用户名长度必须4-20位")),e()},trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]}}},asyncData:function(t){var s=t.user;if(s){var e=t.req.headers.referer||"/";return void t.redirect(e)}return{user:s}},head:function(){return{title:"注册"}},middleware:"userInfo",methods:{handleSubmit:function(t){var s=this;this.$refs[t].validate(function(t){if(t){if(s.loading)return;s.loading=!0,l.a.signup({body:{name:Object(c.a)(s.formCustom.username),password:Object(c.a)(s.formCustom.passwd),email:Object(c.a)(s.formCustom.email)}}).then(function(t){s.loading=!1,t.errNo===n.a.SUCCESS?(s.success=!0,s.$Message.success({duration:o.a.messageDuration,closable:!0,content:"提交成功!"})):s.$Message.error({duration:o.a.messageDuration,closable:!0,content:t.msg})}).catch(function(t){s.loading=!1,s.$Message.error({duration:o.a.messageDuration,closable:!0,content:t.message})})}})},blur:function(t){Object(c.b)(t,this)}},components:{"app-footer":a.a,"app-sidebar":i.a}}},yqLL:function(t,s,e){"use strict";var a=e("J3Se"),i=e("VU/8"),n=i(null,a.a,!1,null,null,null);s.a=n.exports}});
//# sourceMappingURL=signup.936ba6459839dbb3dd74.js.map