(this["webpackJsonpjenkins-scheduler"]=this["webpackJsonpjenkins-scheduler"]||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/adopt_logo_white.07e2ff50.png"},12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),s=(n(17),n(18),n(19),n(9)),l=n(2),c=n(3),u=n(6),p=n(5),h=n(4),m=n(25),d=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return 1!==this.props.currentStep?null:r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"version"},"Select a Version"),r.a.createElement("select",{className:"form-control",id:"version",name:"version",type:"text",placeholder:"Enter Version",value:this.props.version,onChange:this.props.handleChange,defaultValue:"DEFAULT"},r.a.createElement("option",{disabled:!0,value:"DEFAULT"}," -- select an option -- "),r.a.createElement("option",{value:"8"},"JDK8"),r.a.createElement("option",{value:"11"},"JDK11"),r.a.createElement("option",{value:"14"},"JDK14"),r.a.createElement("option",{value:"15"},"JDK15"),r.a.createElement("option",{value:"16"},"JDK16")))}}]),n}(r.a.Component),v=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return 2!==this.props.currentStep?null:r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"JVM"},"Select a JVM"),r.a.createElement("select",{className:"form-control",id:"jvm",name:"jvm",type:"text",placeholder:"Enter JVM",value:this.props.JVM,onChange:this.props.handleChange,defaultValue:"DEFAULT"},r.a.createElement("option",{disabled:!0,value:"DEFAULT"}," -- select an option -- "),r.a.createElement("option",{value:"hotspot"},"Hotspot"),r.a.createElement("option",{value:"openj9"},"OpenJ9")))}}]),n}(r.a.Component),f=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){if(3!==this.props.currentStep)return null;var e="",t="",n="";if("openj9"===this.props.jvm)e="Specify the extensions release branch: e.g. openj9-0.14.0",n=r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{style:{fontSize:"20px"},htmlFor:"overridePublishName"},"GitHub binaries publish name (NOTE: If you are doing a point release, do NOT adjust this as we don't want the filenames to include the .x part), e.g. jdk8u232-b09_openj9-0.14.0 or jdk-11.0.5+10_openj9-0.14.0"),r.a.createElement("input",{className:"form-control",id:"overridePublishName",name:"overridePublishName",type:"text",placeholder:"Enter overridePublishName",value:this.props.overridePublishName,onChange:this.props.handleChange}));else{e="8"===this.props.Version?"Specify the GitHub release tag: e.g jdk8u232-b09":"Specify the GitHub release tag: e.g jdk-14.0.1+9_adopt";var a="https://github.com/AdoptOpenJDK/openjdk-jdk".concat(this.props.Version,"u/releases/latest");t=r.a.createElement("p",null,"This can most likely be found at ",r.a.createElement("a",{href:a},a))}return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"scmReference"},e),t,r.a.createElement("input",{className:"form-control",id:"scmReference",name:"scmReference",type:"text",placeholder:"Enter scmReference",value:this.props.scmReference,onChange:this.props.handleChange}),n)}}]),n}(r.a.Component),b=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return 4!==this.props.currentStep?null:r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Use the button below to take you to Jenkins"),r.a.createElement("button",{className:"btn btn-lg btn-success btn-block"},"Trigger on Jenkins"))}}]),n}(r.a.Component),g=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.version,r=t.jvm,o=t.scmReference,i=t.additionalConfigureArgs,s=t.overridePublishName,l="https://ci.adoptopenjdk.net/job/build-scripts/job/openjdk".concat(n,"-pipeline/parambuild/?releaseType=Release&scmReference=").concat(o.replace("+","%2B"),"&additionalConfigureArgs=").concat(i,"&overridePublishName=").concat(s.replace("+","%2B"));alert("Your specified parameters: \n \n      Version: ".concat(n," \n \n      JVM: ").concat(r," \n\n      SCMReference: ").concat(o,"\n\n      AdditionalConfigureArgs: ").concat(i,"\n\n      OverridePublishName: ").concat(s)),window.open(l,"_blank")},a.state={currentStep:1,additionalConfigureArgs:!1,version:"",jvm:"",scmReference:"",overridePublishName:""},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a._next=a._next.bind(Object(u.a)(a)),a._prev=a._prev.bind(Object(u.a)(a)),a.addAdditionalConfigureArgs=a.addAdditionalConfigureArgs.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"addAdditionalConfigureArgs",value:function(){"8"===this.state.version?this.setState({additionalConfigureArgs:"--with-milestone=fcs"}):this.setState({additionalConfigureArgs:"--without-version-pre --without-version-opt"}),"hotspot"===this.state.jvm&&this.setState({overridePublishName:""})}},{key:"_next",value:function(){var e=this.state.currentStep;e=e>=3?4:e+1,this.setState({currentStep:e}),this.addAdditionalConfigureArgs()}},{key:"_prev",value:function(){var e=this.state.currentStep;e=e<=1?1:e-1,this.setState({currentStep:e})}},{key:"handleChange",value:function(e){console.log(this.state);var t=e.target,n=t.name,a=t.value;this.setState(Object(s.a)({},n,a))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"AdoptOpenJDK Release Scheduler"),r.a.createElement("p",null,"Step ",this.state.currentStep," "),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(d,{currentStep:this.state.currentStep,handleChange:this.handleChange,Version:this.state.version}),r.a.createElement(v,{currentStep:this.state.currentStep,handleChange:this.handleChange,JVM:this.state.JVM,Version:this.state.version,addAdditionalConfigureArgs:this.addAdditionalConfigureArgs}),r.a.createElement(f,{currentStep:this.state.currentStep,jvm:this.state.jvm,handleChange:this.handleChange,scmReference:this.state.scmReference,Version:this.state.version}),r.a.createElement(b,{currentStep:this.state.currentStep,jvm:this.state.jvm,handleChange:this.handleChange,scmReference:this.state.scmReference,Version:this.state.version}),this.previousButton,this.nextButton))}},{key:"previousButton",get:function(){return 1!==this.state.currentStep?r.a.createElement(m.a,{className:"btn btn-secondary btn-lg",type:"button",onClick:this._prev},"Previous"):null}},{key:"nextButton",get:function(){return this.state.currentStep<4?r.a.createElement(m.a,{className:"btn btn-primary btn-lg float-right",type:"button",onClick:this._next},"Next"):null}}]),n}(r.a.Component),j=(n(22),n(11)),E=n.n(j);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:E.a,className:"logo",alt:"Adopt logo"}),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.fffefc34.chunk.js.map