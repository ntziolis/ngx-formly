(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{EeU4:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> DataService <span class="token punctuation" >}</span> from <span class="token string" >\'./data.service\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'sport\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'select\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Sport\'</span><span class="token punctuation" >,</span>\n        options<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>dataService<span class="token punctuation" >.</span><span class="token function" >getSports</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n        valueProp<span class="token punctuation" >:</span> <span class="token string" >\'id\'</span><span class="token punctuation" >,</span>\n        labelProp<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token keyword" >constructor</span><span class="token punctuation" >(</span><span class="token keyword" >private</span> dataService<span class="token punctuation" >:</span> DataService<span class="token punctuation" >)</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},FDeC:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Injectable <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Observable<span class="token punctuation" >,</span> of <span class="token punctuation" >}</span> from <span class="token string" >\'rxjs\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Injectable</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >DataService</span> <span class="token punctuation" >{</span>\n    sports <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Soccer\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> id<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Basketball\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n    <span class="token function" >getSports</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >:</span> Observable<span class="token operator" >&lt;</span><span class="token keyword" >any</span><span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >return</span> <span class="token function" >of</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>sports<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},"J+NF":function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),p=a("gIcY"),o=a("F/XL"),e=function(){function n(){this.sports=[{id:"1",name:"Soccer"},{id:"2",name:"Basketball"}]}return n.prototype.getSports=function(){return Object(o.a)(this.sports)},n}(),c=function(){function n(n){this.dataService=n,this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"sport",type:"select",templateOptions:{label:"Sport",options:this.dataService.getSports(),valueProp:"id",labelProp:"name"}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),l={examples:[{title:"Bind Observables to Select",description:"",component:c,files:[{file:"app.component.html",content:a("zBCL"),filecontent:a("TNx+")},{file:"app.component.ts",content:a("EeU4"),filecontent:a("g36/")},{file:"app.module.ts",content:a("dADU"),filecontent:a("uvvh")},{file:"data.service.ts",content:a("FDeC"),filecontent:a("v/nE")}]}]},u=function(){},i=a("NcP4"),r=a("goW2"),m=a("MT1c"),k=a("1Q/V"),d=a("9+aI"),f=a("haId"),g=a("LJsP"),b=a("yR2A"),y=a("grA4"),v=a("UFMs"),F=a("pMnS"),w=a("4o01"),C=a("Dl9q"),S=a("9Glx"),h=a("UcnZ"),M=a("DAbo"),x=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var p=!0,o=n.component;return"submit"===s&&(p=!1!==t["\u0275nov"](n,2).onSubmit(a)&&p),"reset"===s&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===s&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,C.b,C.a)),t["\u0275did"](6,966656,null,0,S.a,[h.a,M.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,S.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending),n(s,7,0,!a.form.valid)})}var _=t["\u0275ccf"]("formly-app-example",c,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,O,x)),t["\u0275did"](1,49152,null,0,c,[e],null,null)],null,null)},{},{},[]),D=a("Ip0R"),N=a("M2Lx"),A=a("eDkP"),R=a("Fzqc"),G=a("v9Dh"),L=a("6LlJ"),B=a("F6kA"),I=a("dWZg"),P=a("lLAP"),U=a("4c35"),j=a("qAlS"),J=a("Wf4p"),z=a("La40"),E=a("SMsm"),T=a("UodH"),Q=a("5QwG"),W=a("AMrk"),q=a("me7w"),Y=a("N3PW"),Z=a("l4pn"),V=a("Fv2i"),X=a("wBYW"),H=a("IE48"),K=a("zn1Q"),$=a("Q4Tx"),nn=a("zdmU"),sn=a("XR12"),an=a("Nsh5"),tn=a("8mMr"),pn=a("LC5p"),on=a("0/Q6"),en=a("mqvi"),cn=a("lYui"),ln=a("1ey0"),un=function(){},rn=a("ZYCi"),mn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return kn});var kn=t["\u0275cmf"](u,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,r.a,m.a,k.a,d.a,f.a,g.a,b.a,y.a,v.a,F.a,w.a,_]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,D.NgLocalization,D.NgLocaleLocalization,[t.LOCALE_ID,[2,D["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,N.c,N.c,[]),t["\u0275mpd"](4608,A.c,A.c,[A.i,A.e,t.ComponentFactoryResolver,A.h,A.f,t.Injector,t.NgZone,D.DOCUMENT,R.b]),t["\u0275mpd"](5120,A.j,A.k,[A.c]),t["\u0275mpd"](5120,G.b,G.c,[A.c]),t["\u0275mpd"](4608,L.a,L.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,h.a,h.a,[M.b]),t["\u0275mpd"](4608,e,e,[]),t["\u0275mpd"](1073742336,D.CommonModule,D.CommonModule,[]),t["\u0275mpd"](1073742336,I.b,I.b,[]),t["\u0275mpd"](1073742336,N.d,N.d,[]),t["\u0275mpd"](1073742336,P.a,P.a,[]),t["\u0275mpd"](1073742336,R.a,R.a,[]),t["\u0275mpd"](1073742336,U.g,U.g,[]),t["\u0275mpd"](1073742336,j.b,j.b,[]),t["\u0275mpd"](1073742336,A.g,A.g,[]),t["\u0275mpd"](1073742336,J.l,J.l,[[2,J.d]]),t["\u0275mpd"](1073742336,G.e,G.e,[]),t["\u0275mpd"](1073742336,J.w,J.w,[]),t["\u0275mpd"](1073742336,z.i,z.i,[]),t["\u0275mpd"](1073742336,E.b,E.b,[]),t["\u0275mpd"](1073742336,T.c,T.c,[]),t["\u0275mpd"](1073742336,Q.b,Q.b,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](512,M.b,M.b,[]),t["\u0275mpd"](1024,M.a,function(){return[{types:[{name:"formly-group",component:W.a}]},{types:[{name:"input",component:q.a,wrappers:["form-field"]},{name:"checkbox",component:Y.a,wrappers:["form-field"],defaultOptions:{templateOptions:{indeterminate:!0,hideLabel:!0}}},{name:"radio",component:Z.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:V.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:X.a,wrappers:["form-field"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:H.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"addons",component:K.a},{name:"form-field",component:$.a}],manipulators:[{class:nn.a,method:"run"}]},{types:[{name:"formly-group",component:W.a}]},{}]},[]),t["\u0275mpd"](1073742336,sn.a,sn.a,[M.b,t.ComponentFactoryResolver,[2,M.a]]),t["\u0275mpd"](1073742336,an.h,an.h,[]),t["\u0275mpd"](1073742336,tn.b,tn.b,[]),t["\u0275mpd"](1073742336,J.m,J.m,[]),t["\u0275mpd"](1073742336,J.u,J.u,[]),t["\u0275mpd"](1073742336,pn.b,pn.b,[]),t["\u0275mpd"](1073742336,on.c,on.c,[]),t["\u0275mpd"](1073742336,en.a,en.a,[]),t["\u0275mpd"](1073742336,cn.a,cn.a,[]),t["\u0275mpd"](1073742336,ln.a,ln.a,[]),t["\u0275mpd"](1073742336,un,un,[]),t["\u0275mpd"](1073742336,rn.s,rn.s,[[2,rn.y],[2,rn.p]]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,rn.n,function(){return[[{path:"",component:mn.a,data:l}]]},[])])})},"TNx+":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},dADU:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> DataService <span class="token punctuation" >}</span> from <span class="token string" >\'./data.service\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  providers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>DataService<span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"g36/":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { DataService } from './data.service';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'sport',\n      type: 'select',\n      templateOptions: {\n        label: 'Sport',\n        options: this.dataService.getSports(),\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n    },\n  ];\n\n  constructor(private dataService: DataService) {}\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},uvvh:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { DataService } from './data.service';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n  providers: [DataService],\n})\nexport class AppModule { }\n"},"v/nE":function(n,s){n.exports="import { Injectable } from '@angular/core';\nimport { Observable, of } from 'rxjs';\n\n@Injectable()\nexport class DataService {\n    sports = [\n        { id: '1', name: 'Soccer' },\n        { id: '2', name: 'Basketball' },\n    ];\n\n    getSports(): Observable<any[]> {\n        return of(this.sports);\n    }\n}\n"},zBCL:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'}}]);