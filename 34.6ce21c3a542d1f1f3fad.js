(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+fmK":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [{\n    key: 'password',\n    validators: {\n      fieldMatch: {\n        expression: (control) => {\n          const value = control.value;\n\n          return value.passwordConfirm === value.password\n            // avoid displaying the message error when values are empty\n            || (!value.passwordConfirm || !value.password);\n        },\n        message: 'Password Not Matching',\n        errorPath: 'passwordConfirm',\n      },\n    },\n    fieldGroup: [\n      {\n        key: 'password',\n        type: 'input',\n        templateOptions: {\n          type: 'password',\n          label: 'Password',\n          placeholder: 'Must be at least 3 characters',\n          required: true,\n          minLength: 3,\n        },\n      },\n      {\n        key: 'passwordConfirm',\n        type: 'input',\n        templateOptions: {\n          type: 'password',\n          label: 'Confirm Password',\n          placeholder: 'Please re-enter your password',\n          required: true,\n        },\n      },\n    ],\n  }];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},BgNe:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >function</span> <span class="token function" >minlengthValidationMessages</span><span class="token punctuation" >(</span>err<span class="token punctuation" >,</span> field<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token template-string" ><span class="token string" >`Should have atleast </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>field<span class="token punctuation" >.</span>templateOptions<span class="token punctuation" >.</span>minLength<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > characters`</span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'This field is required\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'minlength\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> minlengthValidationMessages <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},CjK9:function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),p=a("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"password",validators:{fieldMatch:{expression:function(n){var s=n.value;return s.passwordConfirm===s.password||!s.passwordConfirm||!s.password},message:"Password Not Matching",errorPath:"passwordConfirm"}},fieldGroup:[{key:"password",type:"input",templateOptions:{type:"password",label:"Password",placeholder:"Must be at least 3 characters",required:!0,minLength:3}},{key:"passwordConfirm",type:"input",templateOptions:{type:"password",label:"Confirm Password",placeholder:"Please re-enter your password",required:!0}}]}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Matching Two Fields",description:"This is an example of how to add confirm password field using custom validation",component:o,files:[{file:"app.component.html",content:a("upWV"),filecontent:a("W05a")},{file:"app.component.ts",content:a("LfXl"),filecontent:a("+fmK")},{file:"app.module.ts",content:a("BgNe"),filecontent:a("gpIh")}]}]},l=function(){},c=a("NcP4"),u=a("goW2"),i=a("MT1c"),r=a("1Q/V"),m=a("9+aI"),k=a("haId"),d=a("LJsP"),f=a("yR2A"),g=a("grA4"),y=a("UFMs"),w=a("pMnS"),h=a("4o01"),b=a("Dl9q"),v=a("9Glx"),C=a("UcnZ"),M=a("DAbo"),F=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,2).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,b.b,b.a)),t["\u0275did"](6,966656,null,0,v.a,[C.a,M.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,v.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending)})}var O=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,F)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),_=a("Ip0R"),N=a("M2Lx"),P=a("eDkP"),L=a("Fzqc"),S=a("v9Dh"),G=a("6LlJ"),R=a("F6kA"),q=a("dWZg"),A=a("lLAP"),I=a("4c35"),D=a("qAlS"),B=a("Wf4p"),T=a("La40"),W=a("SMsm"),U=a("UodH"),V=a("5QwG"),J=a("AMrk"),z=a("me7w"),Q=a("N3PW"),Y=a("l4pn"),Z=a("Fv2i"),j=a("wBYW"),E=a("IE48"),K=a("zn1Q"),X=a("Q4Tx"),$=a("zdmU");function H(n,s){return"Should have atleast "+s.templateOptions.minLength+" characters"}var nn=function(){},sn=a("XR12"),an=a("Nsh5"),tn=a("8mMr"),pn=a("LC5p"),on=a("0/Q6"),en=a("mqvi"),ln=a("lYui"),cn=a("1ey0"),un=a("ZYCi"),rn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return mn});var mn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,m.a,k.a,d.a,f.a,g.a,y.a,w.a,h.a,O]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,_.NgLocalization,_.NgLocaleLocalization,[t.LOCALE_ID,[2,_["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,N.c,N.c,[]),t["\u0275mpd"](4608,P.c,P.c,[P.i,P.e,t.ComponentFactoryResolver,P.h,P.f,t.Injector,t.NgZone,_.DOCUMENT,L.b]),t["\u0275mpd"](5120,P.j,P.k,[P.c]),t["\u0275mpd"](5120,S.b,S.c,[P.c]),t["\u0275mpd"](4608,G.a,G.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,R.a,R.a,[]),t["\u0275mpd"](4608,C.a,C.a,[M.b]),t["\u0275mpd"](1073742336,_.CommonModule,_.CommonModule,[]),t["\u0275mpd"](1073742336,q.b,q.b,[]),t["\u0275mpd"](1073742336,N.d,N.d,[]),t["\u0275mpd"](1073742336,A.a,A.a,[]),t["\u0275mpd"](1073742336,L.a,L.a,[]),t["\u0275mpd"](1073742336,I.g,I.g,[]),t["\u0275mpd"](1073742336,D.b,D.b,[]),t["\u0275mpd"](1073742336,P.g,P.g,[]),t["\u0275mpd"](1073742336,B.l,B.l,[[2,B.d]]),t["\u0275mpd"](1073742336,S.e,S.e,[]),t["\u0275mpd"](1073742336,B.w,B.w,[]),t["\u0275mpd"](1073742336,T.i,T.i,[]),t["\u0275mpd"](1073742336,W.b,W.b,[]),t["\u0275mpd"](1073742336,U.c,U.c,[]),t["\u0275mpd"](1073742336,V.b,V.b,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](512,M.b,M.b,[]),t["\u0275mpd"](1024,M.a,function(){return[{types:[{name:"formly-group",component:J.a}]},{types:[{name:"input",component:z.a,wrappers:["form-field"]},{name:"checkbox",component:Q.a,wrappers:["form-field"],defaultOptions:{templateOptions:{indeterminate:!0,hideLabel:!0}}},{name:"radio",component:Y.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:Z.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:j.a,wrappers:["form-field"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:E.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"addons",component:K.a},{name:"form-field",component:X.a}],manipulators:[{class:$.a,method:"run"}]},{types:[{name:"formly-group",component:J.a}]},{validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:H}]}]},[]),t["\u0275mpd"](1073742336,sn.a,sn.a,[M.b,t.ComponentFactoryResolver,[2,M.a]]),t["\u0275mpd"](1073742336,an.h,an.h,[]),t["\u0275mpd"](1073742336,tn.b,tn.b,[]),t["\u0275mpd"](1073742336,B.m,B.m,[]),t["\u0275mpd"](1073742336,B.u,B.u,[]),t["\u0275mpd"](1073742336,pn.b,pn.b,[]),t["\u0275mpd"](1073742336,on.c,on.c,[]),t["\u0275mpd"](1073742336,en.a,en.a,[]),t["\u0275mpd"](1073742336,ln.a,ln.a,[]),t["\u0275mpd"](1073742336,cn.a,cn.a,[]),t["\u0275mpd"](1073742336,nn,nn,[]),t["\u0275mpd"](1073742336,un.s,un.s,[[2,un.y],[2,un.p]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,un.n,function(){return[[{path:"",component:rn.a,data:e}]]},[])])})},LfXl:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'password\'</span><span class="token punctuation" >,</span>\n    validators<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      fieldMatch<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        expression<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>control<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >const</span> value <span class="token operator" >=</span> control<span class="token punctuation" >.</span>value<span class="token punctuation" >;</span>\n\n          <span class="token keyword" >return</span> value<span class="token punctuation" >.</span>passwordConfirm <span class="token operator" >===</span> value<span class="token punctuation" >.</span>password\n            <span class="token comment" spellcheck="true">// avoid displaying the message error when values are empty</span>\n            <span class="token operator" >||</span> <span class="token punctuation" >(</span><span class="token operator" >!</span>value<span class="token punctuation" >.</span>passwordConfirm <span class="token operator" >||</span> <span class="token operator" >!</span>value<span class="token punctuation" >.</span>password<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        message<span class="token punctuation" >:</span> <span class="token string" >\'Password Not Matching\'</span><span class="token punctuation" >,</span>\n        errorPath<span class="token punctuation" >:</span> <span class="token string" >\'passwordConfirm\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    fieldGroup<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n      <span class="token punctuation" >{</span>\n        key<span class="token punctuation" >:</span> <span class="token string" >\'password\'</span><span class="token punctuation" >,</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n        templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'password\'</span><span class="token punctuation" >,</span>\n          label<span class="token punctuation" >:</span> <span class="token string" >\'Password\'</span><span class="token punctuation" >,</span>\n          placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Must be at least 3 characters\'</span><span class="token punctuation" >,</span>\n          required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n          minLength<span class="token punctuation" >:</span> <span class="token number" >3</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >{</span>\n        key<span class="token punctuation" >:</span> <span class="token string" >\'passwordConfirm\'</span><span class="token punctuation" >,</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n        templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'password\'</span><span class="token punctuation" >,</span>\n          label<span class="token punctuation" >:</span> <span class="token string" >\'Confirm Password\'</span><span class="token punctuation" >,</span>\n          placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Please re-enter your password\'</span><span class="token punctuation" >,</span>\n          required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},W05a:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},gpIh:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nexport function minlengthValidationMessages(err, field) {\n  return `Should have atleast ${field.templateOptions.minLength} characters`;\n}\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n        { name: 'minlength', message: minlengthValidationMessages },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},upWV:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'}}]);