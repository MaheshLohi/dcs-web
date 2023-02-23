"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[917],{2917:(R,f,o)=>{o.r(f),o.d(f,{AuthSignInModule:()=>a});var c=o(3060),u=o(4859),p=o(6709),m=o(9549),h=o(7392),I=o(284),x=o(1572),v=o(5804),Z=o(7775),A=o(4466),i=o(4006),y=o(8288),t=o(4650),w=o(8951),T=o(8214),C=o(6895);const J=["signInNgForm"];function U(e,n){if(1&e&&(t.TgZ(0,"fuse-alert",32),t._uU(1),t.qZA()),2&e){const r=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),t.xp6(1),t.hij(" ",r.alert.message," ")}}function b(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email address is required "),t.qZA())}function F(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function S(e,n){1&e&&t._UZ(0,"mat-icon",26),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function Q(e,n){1&e&&t._UZ(0,"mat-icon",26),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function N(e,n){1&e&&(t.TgZ(0,"span"),t._uU(1," Sign in "),t.qZA())}function M(e,n){1&e&&t._UZ(0,"mat-progress-spinner",33),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const Y=function(){return["/forgot-password"]};class l{constructor(n,r,s,d){this._activatedRoute=n,this._authService=r,this._formBuilder=s,this._router=d,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["hughes.brian@company.com",[i.kI.required,i.kI.email]],password:["admin",i.kI.required],rememberMe:[""]}),this.signIn()}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const n=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(n)},n=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}}l.\u0275fac=function(n){return new(n||l)(t.Y36(c.gz),t.Y36(w.e),t.Y36(i.QS),t.Y36(c.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["auth-sign-in"]],viewQuery:function(n,r){if(1&n&&t.Gf(J,5),2&n){let s;t.iGM(s=t.CRH())&&(r.signInNgForm=s.first)}},decls:51,vars:19,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-center","justify-between","w-full","mt-1.5"],[1,"-ml-2",3,"color","formControlName"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t"],[1,"mx-2","text-secondary"],[1,"flex","items-center","mt-8","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto"],[1,"icon-size-5",3,"svgIcon"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],[1,"mt-8",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Sign in"),t.qZA(),t.YNc(7,U,2,5,"fuse-alert",6),t.TgZ(8,"form",7,8)(10,"mat-form-field",9)(11,"mat-label"),t._uU(12,"Email address"),t.qZA(),t._UZ(13,"input",10),t.YNc(14,b,2,0,"mat-error",11),t.YNc(15,F,2,0,"mat-error",11),t.qZA(),t.TgZ(16,"mat-form-field",9)(17,"mat-label"),t._uU(18,"Password"),t.qZA(),t._UZ(19,"input",12,13),t.TgZ(21,"button",14),t.NdJ("click",function(){t.CHM(s);const g=t.MAs(20);return t.KtG(g.type="password"===g.type?"text":"password")}),t.YNc(22,S,1,1,"mat-icon",15),t.YNc(23,Q,1,1,"mat-icon",15),t.qZA(),t.TgZ(24,"mat-error"),t._uU(25," Password is required "),t.qZA()(),t.TgZ(26,"div",16)(27,"mat-checkbox",17),t._uU(28," Remember me "),t.qZA(),t.TgZ(29,"a",18),t._uU(30,"Forgot password? "),t.qZA()(),t.TgZ(31,"button",19),t.NdJ("click",function(){return r.signIn()}),t.YNc(32,N,2,0,"span",11),t.YNc(33,M,1,2,"mat-progress-spinner",20),t.qZA(),t.TgZ(34,"div",21),t._UZ(35,"div",22),t.TgZ(36,"div",23),t._uU(37,"Or continue with"),t.qZA(),t._UZ(38,"div",22),t.qZA(),t.TgZ(39,"div",24)(40,"button",25),t._UZ(41,"mat-icon",26),t.qZA(),t.TgZ(42,"button",25),t._UZ(43,"mat-icon",26),t.qZA(),t.TgZ(44,"button",25),t._UZ(45,"mat-icon",26),t.qZA()()()()(),t.TgZ(46,"div",27),t.O4$(),t.TgZ(47,"svg",28)(48,"g",29),t._UZ(49,"circle",30)(50,"circle",31),t.qZA()()()()}if(2&n){const s=t.MAs(20);t.xp6(7),t.Q6J("ngIf",r.showAlert),t.xp6(1),t.Q6J("formGroup",r.signInForm),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",r.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",r.signInForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===s.type),t.xp6(1),t.Q6J("ngIf","text"===s.type),t.xp6(4),t.Q6J("color","primary")("formControlName","rememberMe"),t.xp6(2),t.Q6J("routerLink",t.DdM(18,Y)),t.xp6(2),t.Q6J("color","primary")("disabled",r.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!r.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",r.signInForm.disabled),t.xp6(8),t.Q6J("svgIcon","feather:facebook"),t.xp6(2),t.Q6J("svgIcon","feather:twitter"),t.xp6(2),t.Q6J("svgIcon","feather:github")}},dependencies:[c.rH,u.lW,u.RK,p.oG,m.KE,m.hX,m.TO,m.R9,h.Hw,I.Nt,x.Ou,T.W,C.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],encapsulation:2,data:{animation:y.L}});const q=[{path:"",component:l}];class a{}a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz.forChild(q),u.ot,p.p9,m.lN,h.Ps,I.c,x.Cq,v.J,Z.fC,A.m]})}}]);