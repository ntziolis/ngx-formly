(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"5lxF":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"9NhZ":function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},Jqkc:function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),p=a("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{fieldGroupClassName:"row",fieldGroup:[{className:"col-6",type:"input",key:"firstName",templateOptions:{label:"First Name"}},{className:"col-6",type:"input",key:"lastName",templateOptions:{label:"Last Name"},expressionProperties:{"templateOptions.disabled":"!model.firstName"}}]},{className:"section-label",template:"<hr /><div><strong>Address:</strong></div>"},{fieldGroupClassName:"row",fieldGroup:[{className:"col-6",type:"input",key:"street",templateOptions:{label:"Street"}},{className:"col-3",type:"input",key:"cityName",templateOptions:{label:"City"}},{className:"col-3",type:"input",key:"zip",templateOptions:{type:"number",label:"Zip",max:99999,min:0,pattern:"\\d{5}"}}]},{template:"<hr />"},{type:"textarea",key:"otherInput",templateOptions:{label:"Other Input"}},{type:"checkbox",key:"otherToo",templateOptions:{label:"Other Checkbox"}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Advanced Layout",description:"\n              This is an example of using\n              <code>formGroup</code>s and the\n              <code>className</code> property to have an advanced layout.\n            ",component:o,files:[{file:"app.component.html",content:a("9NhZ"),filecontent:a("Tiim")},{file:"app.component.ts",content:a("zvKS"),filecontent:a("tiOD")},{file:"app.module.ts",content:a("5lxF"),filecontent:a("ME/8")}]}]},l=function(){},c=a("NcP4"),u=a("goW2"),i=a("MT1c"),r=a("1Q/V"),k=a("9+aI"),m=a("haId"),d=a("LJsP"),f=a("yR2A"),g=a("Bbog"),y=a("fFVA"),b=a("Nntq"),N=a("L0Z1"),v=a("grA4"),h=a("pMnS"),C=a("4o01"),F=a("Dl9q"),O=a("9Glx"),w=a("UcnZ"),x=a("wdLZ"),M=a("DAbo"),G=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,2).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,F.b,F.a)),t["\u0275did"](6,966656,null,0,O.a,[w.a,x.a,M.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,O.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending),n(s,7,0,!a.form.valid)})}var S=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,_,G)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),A=a("Ip0R"),L=a("M2Lx"),R=a("eDkP"),I=a("Fzqc"),D=a("v9Dh"),Z=a("6LlJ"),z=a("F6kA"),P=a("dWZg"),T=a("lLAP"),J=a("4c35"),B=a("qAlS"),U=a("Wf4p"),q=a("La40"),E=a("SMsm"),Q=a("UodH"),W=a("5QwG"),K=a("Nsh5"),V=a("8mMr"),Y=a("LC5p"),j=a("0/Q6"),H=a("mqvi"),X=a("XR12"),$=a("1ey0"),nn=function(){},sn=a("ZYCi"),an=a("AMrk"),tn=a("me7w"),pn=a("N3PW"),on=a("l4pn"),en=a("Fv2i"),ln=a("wBYW"),cn=a("IE48"),un=a("Ltwa"),rn=a("4Mh+"),kn=a("b7gF"),mn=a("DJQk"),dn=a("zn1Q"),fn=a("CgTb"),gn=a("+oK5"),yn=a("zdmU"),bn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return Nn});var Nn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,k.a,m.a,d.a,f.a,g.a,y.a,b.a,N.a,v.a,h.a,C.a,S]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,A.NgLocalization,A.NgLocaleLocalization,[t.LOCALE_ID,[2,A["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,L.c,L.c,[]),t["\u0275mpd"](4608,R.c,R.c,[R.i,R.e,t.ComponentFactoryResolver,R.h,R.f,t.Injector,t.NgZone,A.DOCUMENT,I.b]),t["\u0275mpd"](5120,R.j,R.k,[R.c]),t["\u0275mpd"](5120,D.b,D.c,[R.c]),t["\u0275mpd"](4608,Z.a,Z.a,[]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,M.b,M.b,[M.a]),t["\u0275mpd"](4608,x.a,x.a,[]),t["\u0275mpd"](4608,w.a,w.a,[M.b,x.a]),t["\u0275mpd"](1073742336,A.CommonModule,A.CommonModule,[]),t["\u0275mpd"](1073742336,P.b,P.b,[]),t["\u0275mpd"](1073742336,L.d,L.d,[]),t["\u0275mpd"](1073742336,T.a,T.a,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,J.g,J.g,[]),t["\u0275mpd"](1073742336,B.b,B.b,[]),t["\u0275mpd"](1073742336,R.g,R.g,[]),t["\u0275mpd"](1073742336,U.l,U.l,[[2,U.d]]),t["\u0275mpd"](1073742336,D.e,D.e,[]),t["\u0275mpd"](1073742336,U.w,U.w,[]),t["\u0275mpd"](1073742336,q.i,q.i,[]),t["\u0275mpd"](1073742336,E.b,E.b,[]),t["\u0275mpd"](1073742336,Q.c,Q.c,[]),t["\u0275mpd"](1073742336,W.b,W.b,[]),t["\u0275mpd"](1073742336,K.h,K.h,[]),t["\u0275mpd"](1073742336,V.b,V.b,[]),t["\u0275mpd"](1073742336,U.m,U.m,[]),t["\u0275mpd"](1073742336,U.u,U.u,[]),t["\u0275mpd"](1073742336,Y.b,Y.b,[]),t["\u0275mpd"](1073742336,j.c,j.c,[]),t["\u0275mpd"](1073742336,H.a,H.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,nn,nn,[]),t["\u0275mpd"](1073742336,sn.r,sn.r,[[2,sn.x],[2,sn.o]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,M.a,function(){return[{types:[{name:"formly-group",component:an.a}]},{types:[{name:"input",component:tn.a,wrappers:["fieldset","label"]},{name:"checkbox",component:pn.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:on.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:en.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:ln.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:cn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:un.a},{name:"description",component:rn.a},{name:"validation-message",component:kn.a},{name:"fieldset",component:mn.a},{name:"addons",component:dn.a}],manipulators:[{class:fn.a,method:"run"},{class:gn.a,method:"run"},{class:yn.a,method:"run"}]},{types:[{name:"formly-group",component:an.a}]},{}]},[]),t["\u0275mpd"](1024,sn.m,function(){return[[{path:"",component:bn.a,data:e}]]},[])])})},"ME/8":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},Tiim:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},tiOD:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      fieldGroupClassName: 'row',\n      fieldGroup: [\n        {\n          className: 'col-6',\n          type: 'input',\n          key: 'firstName',\n          templateOptions: {\n            label: 'First Name',\n          },\n        },\n        {\n          className: 'col-6',\n          type: 'input',\n          key: 'lastName',\n          templateOptions: {\n            label: 'Last Name',\n          },\n          expressionProperties: {\n            'templateOptions.disabled': '!model.firstName',\n          },\n        },\n      ],\n    },\n    {\n      className: 'section-label',\n      template: '<hr /><div><strong>Address:</strong></div>',\n    },\n    {\n      fieldGroupClassName: 'row',\n      fieldGroup: [\n        {\n          className: 'col-6',\n          type: 'input',\n          key: 'street',\n          templateOptions: {\n            label: 'Street',\n          },\n        },\n        {\n          className: 'col-3',\n          type: 'input',\n          key: 'cityName',\n          templateOptions: {\n            label: 'City',\n          },\n        },\n        {\n          className: 'col-3',\n          type: 'input',\n          key: 'zip',\n          templateOptions: {\n            type: 'number',\n            label: 'Zip',\n            max: 99999,\n            min: 0,\n            pattern: '\\\\d{5}',\n          },\n        },\n      ],\n    },\n    { template: '<hr />' },\n    {\n      type: 'textarea',\n      key: 'otherInput',\n      templateOptions: {\n        label: 'Other Input',\n      },\n    },\n    {\n      type: 'checkbox',\n      key: 'otherToo',\n      templateOptions: {\n        label: 'Other Checkbox',\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},zvKS:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      fieldGroupClassName<span class="token punctuation" >:</span> <span class="token string" >\'row\'</span><span class="token punctuation" >,</span>\n      fieldGroup<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          className<span class="token punctuation" >:</span> <span class="token string" >\'col-6\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'firstName\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'First Name\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          className<span class="token punctuation" >:</span> <span class="token string" >\'col-6\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'lastName\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'Last Name\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n          expressionProperties<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            <span class="token string" >\'templateOptions.disabled\'</span><span class="token punctuation" >:</span> <span class="token string" >\'!model.firstName\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      className<span class="token punctuation" >:</span> <span class="token string" >\'section-label\'</span><span class="token punctuation" >,</span>\n      template<span class="token punctuation" >:</span> <span class="token string" >\'&lt;hr />&lt;div>&lt;strong>Address:&lt;/strong>&lt;/div>\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      fieldGroupClassName<span class="token punctuation" >:</span> <span class="token string" >\'row\'</span><span class="token punctuation" >,</span>\n      fieldGroup<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          className<span class="token punctuation" >:</span> <span class="token string" >\'col-6\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'street\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'Street\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          className<span class="token punctuation" >:</span> <span class="token string" >\'col-3\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'cityName\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'City\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          className<span class="token punctuation" >:</span> <span class="token string" >\'col-3\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'zip\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'number\'</span><span class="token punctuation" >,</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'Zip\'</span><span class="token punctuation" >,</span>\n            max<span class="token punctuation" >:</span> <span class="token number" >99999</span><span class="token punctuation" >,</span>\n            min<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n            pattern<span class="token punctuation" >:</span> <span class="token string" >\'\\\\d{5}\'</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span> template<span class="token punctuation" >:</span> <span class="token string" >\'&lt;hr />\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'textarea\'</span><span class="token punctuation" >,</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'otherInput\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Other Input\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'checkbox\'</span><span class="token punctuation" >,</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'otherToo\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Other Checkbox\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'}}]);