"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[714],{1714:(Ue,R,d)=>{d.r(R),d.d(R,{SettingsModule:()=>Ee});var j=d(4364),y=d(4859),_=d(9549),M=d(7392),D=d(284),e=d(4650),p=d(3238),S=d(2687),m=d(1281),l=(d(5017),d(4006)),f=d(6895);let re=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.BQ,f.ez,p.si,p.BQ]}),o})();var ne=d(4385),T=d(455),b=d(531),ae=d(445),G=d(9521),de=d(3353),g=d(7579),se=d(4968),ce=d(6451),x=d(9300),E=d(4004),U=d(9718),u=d(2722),le=d(1884),Q=d(5698),P=d(8675),me=d(8372),h=d(7340);const J=["*"],ue=["content"];function pe(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",2),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r._onBackdropClicked())}),e.qZA()}if(2&o){const t=e.oxw();e.ekj("mat-drawer-shown",t._isShowingBackdrop())}}function he(o,n){1&o&&(e.TgZ(0,"mat-drawer-content"),e.Hsn(1,2),e.qZA())}const _e=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],fe=["mat-drawer","mat-drawer-content","*"],ge={transformDrawer:(0,h.X$)("transform",[(0,h.SB)("open, open-instant",(0,h.oB)({transform:"none",visibility:"visible"})),(0,h.SB)("void",(0,h.oB)({"box-shadow":"none",visibility:"hidden"})),(0,h.eR)("void => open-instant",(0,h.jt)("0ms")),(0,h.eR)("void <=> open, open-instant => void",(0,h.jt)("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])},be=new e.OlP("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:function ve(){return!1}}),O=new e.OlP("MAT_DRAWER_CONTAINER");let A=(()=>{class o extends b.PQ{constructor(t,i,r,a,s){super(r,a,s),this._changeDetectorRef=t,this._container=i}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36((0,e.Gpc)(()=>q)),e.Y36(e.SBq),e.Y36(b.mF),e.Y36(e.R0b))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(t,i){2&t&&e.Udp("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px")},features:[e._Bn([{provide:b.PQ,useExisting:o}]),e.qOj],ngContentSelectors:J,decls:1,vars:0,template:function(t,i){1&t&&(e.F$t(),e.Hsn(0))},encapsulation:2,changeDetection:0}),o})(),z=(()=>{class o{constructor(t,i,r,a,s,v,w,k){this._elementRef=t,this._focusTrapFactory=i,this._focusMonitor=r,this._platform=a,this._ngZone=s,this._interactivityChecker=v,this._doc=w,this._container=k,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new g.x,this._animationEnd=new g.x,this._animationState="void",this.openedChange=new e.vpe(!0),this._openedStream=this.openedChange.pipe((0,x.h)(c=>c),(0,E.U)(()=>{})),this.openedStart=this._animationStarted.pipe((0,x.h)(c=>c.fromState!==c.toState&&0===c.toState.indexOf("open")),(0,U.h)(void 0)),this._closedStream=this.openedChange.pipe((0,x.h)(c=>!c),(0,E.U)(()=>{})),this.closedStart=this._animationStarted.pipe((0,x.h)(c=>c.fromState!==c.toState&&"void"===c.toState),(0,U.h)(void 0)),this._destroyed=new g.x,this.onPositionChanged=new e.vpe,this._modeChanged=new g.x,this.openedChange.subscribe(c=>{c?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{(0,se.R)(this._elementRef.nativeElement,"keydown").pipe((0,x.h)(c=>c.keyCode===G.hY&&!this.disableClose&&!(0,G.Vb)(c)),(0,u.R)(this._destroyed)).subscribe(c=>this._ngZone.run(()=>{this.close(),c.stopPropagation(),c.preventDefault()}))}),this._animationEnd.pipe((0,le.x)((c,C)=>c.fromState===C.fromState&&c.toState===C.toState)).subscribe(c=>{const{fromState:C,toState:N}=c;(0===N.indexOf("open")&&"void"===C||"void"===N&&0===C.indexOf("open"))&&this.openedChange.emit(this._opened)})}get position(){return this._position}set position(t){(t="end"===t?"end":"start")!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=(0,m.Ig)(t)}get autoFocus(){return this._autoFocus??("side"===this.mode?"dialog":"first-tabbable")}set autoFocus(t){("true"===t||"false"===t||null==t)&&(t=(0,m.Ig)(t)),this._autoFocus=t}get opened(){return this._opened}set opened(t){this.toggle((0,m.Ig)(t))}_forceFocus(t,i){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const r=()=>{t.removeEventListener("blur",r),t.removeEventListener("mousedown",r),t.removeAttribute("tabindex")};t.addEventListener("blur",r),t.addEventListener("mousedown",r)})),t.focus(i)}_focusByCssSelector(t,i){let r=this._elementRef.nativeElement.querySelector(t);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;const t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(i=>{!i&&"function"==typeof this._elementRef.nativeElement.focus&&t.focus()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus)}}_restoreFocus(t){"dialog"!==this.autoFocus&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){const t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState(),"end"===this._position&&this._updatePositionInParent("end")}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){this._focusTrap&&this._focusTrap.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);const r=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),r}_setOpen(t,i,r){return this._opened=t,t?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",i&&this._restoreFocus(r)),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe((0,Q.q)(1)).subscribe(s=>a(s?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&"side"!==this.mode)}_updatePositionInParent(t){const i=this._elementRef.nativeElement,r=i.parentNode;"end"===t?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(S.qV),e.Y36(S.tE),e.Y36(de.t4),e.Y36(e.R0b),e.Y36(S.ic),e.Y36(f.K0,8),e.Y36(O,8))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-drawer"]],viewQuery:function(t,i){if(1&t&&e.Gf(ue,5),2&t){let r;e.iGM(r=e.CRH())&&(i._content=r.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(t,i){1&t&&e.WFA("@transform.start",function(a){return i._animationStarted.next(a)})("@transform.done",function(a){return i._animationEnd.next(a)}),2&t&&(e.uIk("align",null),e.d8E("@transform",i._animationState),e.ekj("mat-drawer-end","end"===i.position)("mat-drawer-over","over"===i.mode)("mat-drawer-push","push"===i.mode)("mat-drawer-side","side"===i.mode)("mat-drawer-opened",i.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:J,decls:3,vars:0,consts:[["cdkScrollable","",1,"mat-drawer-inner-container"],["content",""]],template:function(t,i){1&t&&(e.F$t(),e.TgZ(0,"div",0,1),e.Hsn(2),e.qZA())},dependencies:[b.PQ],encapsulation:2,data:{animation:[ge.transformDrawer]},changeDetection:0}),o})(),q=(()=>{class o{constructor(t,i,r,a,s,v=!1,w){this._dir=t,this._element=i,this._ngZone=r,this._changeDetectorRef=a,this._animationMode=w,this._drawers=new e.n_E,this.backdropClick=new e.vpe,this._destroyed=new g.x,this._doCheckSubject=new g.x,this._contentMargins={left:null,right:null},this._contentMarginChanges=new g.x,t&&t.change.pipe((0,u.R)(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),s.change().pipe((0,u.R)(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._autosize=v}get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=(0,m.Ig)(t)}get hasBackdrop(){return null==this._backdropOverride?!this._start||"side"!==this._start.mode||!this._end||"side"!==this._end.mode:this._backdropOverride}set hasBackdrop(t){this._backdropOverride=null==t?null:(0,m.Ig)(t)}get scrollable(){return this._userContent||this._content}ngAfterContentInit(){this._allDrawers.changes.pipe((0,P.O)(this._allDrawers),(0,u.R)(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe((0,P.O)(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe((0,me.b)(10),(0,u.R)(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened)if("side"==this._left.mode)t+=this._left._getWidth();else if("push"==this._left.mode){const r=this._left._getWidth();t+=r,i-=r}if(this._right&&this._right.opened)if("side"==this._right.mode)i+=this._right._getWidth();else if("push"==this._right.mode){const r=this._right._getWidth();i+=r,t-=r}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe((0,x.h)(i=>i.fromState!==i.toState),(0,u.R)(this._drawers.changes)).subscribe(i=>{"open-instant"!==i.toState&&"NoopAnimations"!==this._animationMode&&this._element.nativeElement.classList.add("mat-drawer-transition"),this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),"side"!==t.mode&&t.openedChange.pipe((0,u.R)(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t&&t.onPositionChanged.pipe((0,u.R)(this._drawers.changes)).subscribe(()=>{this._ngZone.onMicrotaskEmpty.pipe((0,Q.q)(1)).subscribe(()=>{this._validateDrawers()})})}_watchDrawerMode(t){t&&t._modeChanged.pipe((0,u.R)((0,ce.T)(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){const i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";t?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{"end"==t.position?this._end=t:this._start=t}),this._right=this._left=null,this._dir&&"rtl"===this._dir.value?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&"over"!=this._start.mode||this._isDrawerOpen(this._end)&&"over"!=this._end.mode}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._canHaveBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._canHaveBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._canHaveBackdrop(this._end)}_canHaveBackdrop(t){return"side"!==t.mode||!!this._backdropOverride}_isDrawerOpen(t){return null!=t&&t.opened}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(ae.Is,8),e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(b.rL),e.Y36(be),e.Y36(e.QbO,8))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-drawer-container"]],contentQueries:function(t,i,r){if(1&t&&(e.Suo(r,A,5),e.Suo(r,z,5)),2&t){let a;e.iGM(a=e.CRH())&&(i._content=a.first),e.iGM(a=e.CRH())&&(i._allDrawers=a)}},viewQuery:function(t,i){if(1&t&&e.Gf(A,5),2&t){let r;e.iGM(r=e.CRH())&&(i._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,i){2&t&&e.ekj("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[e._Bn([{provide:O,useExisting:o}])],ngContentSelectors:fe,decls:4,vars:2,consts:[["class","mat-drawer-backdrop",3,"mat-drawer-shown","click",4,"ngIf"],[4,"ngIf"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){1&t&&(e.F$t(_e),e.YNc(0,pe,1,2,"div",0),e.Hsn(1),e.Hsn(2,1),e.YNc(3,he,2,0,"mat-drawer-content",1)),2&t&&(e.Q6J("ngIf",i.hasBackdrop),e.xp6(3),e.Q6J("ngIf",!i._content))},dependencies:[f.O5,A],styles:['.mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}'],encapsulation:2,changeDetection:0}),o})(),we=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.ez,p.BQ,b.ZD,b.ZD,p.BQ]}),o})();var Z=d(148),xe=d(7775),ke=d(4466),ye=d(4880);let Ce=(()=>{class o{constructor(t){this._formBuilder=t}ngOnInit(){this.accountForm=this._formBuilder.group({name:["Preetham Raju"],branch:["Mechanical Engineering"],usn:["1MS16ME184"],email:["PreethamRaju@mail.com",l.kI.email],phone:["+91 9682345678"],dateofbirth:[""],link:[""]})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.QS))},o.\u0275cmp=e.Xpm({type:o,selectors:[["settings-account"]],decls:56,vars:24,consts:[[1,"w-full","max-w-3xl"],[3,"formGroup"],[1,"w-full"],[1,"text-xl"],[1,"text-secondary"],[1,"grid","sm:grid-cols-4","gap-6","w-full","mt-8"],[1,"sm:col-span-4"],[1,"w-full",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControlName"],[1,"sm:col-span-2"],["matInput","",3,"matDatepicker","placeholder"],["matSuffix","",3,"for"],["picker",""],["matInput","",3,"formControlName","placeholder"],[1,"mt-11","mb-10","border-t"],[1,"flex","items-center","justify-end"],["mat-stroked-button","","type","button"],["mat-flat-button","","type","button",1,"ml-4",3,"color"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3),e._uU(4,"Profile"),e.qZA(),e.TgZ(5,"div",4),e._uU(6,"Following information is publicly displayed, be careful!"),e.qZA()(),e.TgZ(7,"div",5)(8,"div",6)(9,"mat-form-field",7)(10,"mat-label"),e._uU(11,"Name"),e.qZA(),e._UZ(12,"mat-icon",8)(13,"input",9),e.qZA()(),e.TgZ(14,"div",10)(15,"mat-form-field",7)(16,"mat-label"),e._uU(17,"Branch"),e.qZA(),e._UZ(18,"mat-icon",8)(19,"input",9),e.qZA()(),e.TgZ(20,"div",10)(21,"mat-form-field",7)(22,"mat-label"),e._uU(23,"USN"),e.qZA(),e._UZ(24,"mat-icon",8)(25,"input",9),e.qZA()()(),e.TgZ(26,"div",5)(27,"div",10)(28,"mat-form-field",7)(29,"mat-label"),e._uU(30,"Email"),e.qZA(),e._UZ(31,"mat-icon",8)(32,"input",9),e.qZA()(),e.TgZ(33,"div",10)(34,"mat-form-field",7)(35,"mat-label"),e._uU(36,"Phone"),e.qZA(),e._UZ(37,"mat-icon",8)(38,"input",9),e.qZA()()(),e.TgZ(39,"div",5)(40,"div",10)(41,"mat-form-field",2),e._UZ(42,"input",11)(43,"mat-datepicker-toggle",12)(44,"mat-datepicker",null,13),e.qZA()(),e.TgZ(46,"div",10)(47,"mat-form-field",7),e._UZ(48,"mat-icon",8)(49,"input",14),e.qZA()()(),e._UZ(50,"div",15),e.TgZ(51,"div",16)(52,"button",17),e._uU(53," Cancel "),e.qZA(),e.TgZ(54,"button",18),e._uU(55,"Save "),e.qZA()()()()),2&t){const r=e.MAs(45);e.xp6(1),e.Q6J("formGroup",i.accountForm),e.xp6(8),e.Q6J("subscriptSizing","dynamic"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:user"),e.xp6(1),e.Q6J("formControlName","name"),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:briefcase"),e.xp6(1),e.Q6J("formControlName","branch"),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:office-building"),e.xp6(1),e.Q6J("formControlName","usn"),e.xp6(3),e.Q6J("subscriptSizing","dynamic"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:mail"),e.xp6(1),e.Q6J("formControlName","email"),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:phone"),e.xp6(1),e.Q6J("formControlName","phone"),e.xp6(4),e.Q6J("matDatepicker",r)("placeholder","Date of birth"),e.xp6(1),e.Q6J("for",r),e.xp6(4),e.Q6J("subscriptSizing","dynamic"),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:link"),e.xp6(1),e.Q6J("formControlName","link")("placeholder","Link"),e.xp6(5),e.Q6J("color","primary")}},dependencies:[y.lW,_.KE,_.hX,_.qo,_.R9,M.Hw,D.Nt,Z.Mq,Z.hl,Z.nW,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],encapsulation:2,changeDetection:0}),o})(),Me=(()=>{class o{constructor(t){this._formBuilder=t}ngOnInit(){this.securityForm=this._formBuilder.group({currentPassword:[""],newPassword:[""],twoStep:[!0],askPasswordChange:[!1]})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.QS))},o.\u0275cmp=e.Xpm({type:o,selectors:[["settings-security"]],decls:51,vars:12,consts:[[1,"w-full","max-w-3xl"],[3,"formGroup"],[1,"w-full"],[1,"text-xl"],[1,"text-secondary"],[1,"grid","sm:grid-cols-4","gap-6","w-full","mt-8"],[1,"sm:col-span-4"],[1,"w-full",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["type","password","matInput","",3,"formControlName"],[1,"mt-1","text-md","text-hint"],[1,"my-10","border-t"],[1,"sm:col-span-4","flex","items-center","justify-between"],[1,"flex-auto","cursor-pointer",3,"click"],[1,"leading-6","font-medium"],[1,"text-md","text-secondary"],[1,"ml-4",3,"color","formControlName"],["twoStepToggle",""],["askPasswordChangeToggle",""],[1,"flex","items-center","justify-end"],["mat-stroked-button","","type","button"],["mat-flat-button","","type","button",1,"ml-4",3,"color"]],template:function(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3),e._uU(4,"Change your password"),e.qZA(),e.TgZ(5,"div",4),e._uU(6,"You can only change your password twice within 24 hours!"),e.qZA()(),e.TgZ(7,"div",5)(8,"div",6)(9,"mat-form-field",7)(10,"mat-label"),e._uU(11,"Current password"),e.qZA(),e._UZ(12,"mat-icon",8)(13,"input",9),e.qZA()(),e.TgZ(14,"div",6)(15,"mat-form-field",7)(16,"mat-label"),e._uU(17,"New password"),e.qZA(),e._UZ(18,"mat-icon",8)(19,"input",9),e.qZA(),e.TgZ(20,"div",10),e._uU(21,"Minimum 8 characters. Must include numbers, letters and special characters."),e.qZA()()(),e._UZ(22,"div",11),e.TgZ(23,"div",2)(24,"div",3),e._uU(25,"Security preferences"),e.qZA(),e.TgZ(26,"div",4),e._uU(27,"Keep your account more secure with following preferences."),e.qZA()(),e.TgZ(28,"div",5)(29,"div",12)(30,"div",13),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(36);return e.KtG(s.toggle())}),e.TgZ(31,"div",14),e._uU(32,"Enable 2-step authentication"),e.qZA(),e.TgZ(33,"div",15),e._uU(34," Protects you against password theft by requesting an authentication code via SMS on every login. "),e.qZA()(),e._UZ(35,"mat-slide-toggle",16,17),e.qZA(),e.TgZ(37,"div",12)(38,"div",13),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(44);return e.KtG(s.toggle())}),e.TgZ(39,"div",14),e._uU(40,"Ask to change password on every 6 months"),e.qZA(),e.TgZ(41,"div",15),e._uU(42," A simple but an effective way to be protected against data leaks and password theft. "),e.qZA()(),e._UZ(43,"mat-slide-toggle",16,18),e.qZA()(),e._UZ(45,"div",11),e.TgZ(46,"div",19)(47,"button",20),e._uU(48," Cancel "),e.qZA(),e.TgZ(49,"button",21),e._uU(50,"Save "),e.qZA()()()()}2&t&&(e.xp6(1),e.Q6J("formGroup",i.securityForm),e.xp6(8),e.Q6J("subscriptSizing","dynamic"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:key"),e.xp6(1),e.Q6J("formControlName","currentPassword"),e.xp6(2),e.Q6J("subscriptSizing","dynamic"),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:key"),e.xp6(1),e.Q6J("formControlName","newPassword"),e.xp6(16),e.Q6J("color","primary")("formControlName","twoStep"),e.xp6(8),e.Q6J("color","primary")("formControlName","askPasswordChange"),e.xp6(6),e.Q6J("color","primary"))},dependencies:[y.lW,_.KE,_.hX,_.qo,M.Hw,D.Nt,T.Rr,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],encapsulation:2,changeDetection:0}),o})(),Se=(()=>{class o{constructor(t){this._formBuilder=t}ngOnInit(){this.notificationsForm=this._formBuilder.group({communication:[!0],security:[!0],meetups:[!1],comments:[!1],mention:[!0],follow:[!0],inquiry:[!0]})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.QS))},o.\u0275cmp=e.Xpm({type:o,selectors:[["settings-notifications"]],decls:61,vars:16,consts:[[1,"w-full","max-w-3xl"],[3,"formGroup"],[1,"w-full","text-xl"],[1,"grid","grid-cols-1","gap-6","w-full","mt-8"],[1,"flex","items-center","justify-between"],[1,"flex-auto","cursor-pointer",3,"click"],[1,"leading-6","font-medium"],[1,"text-md","text-secondary"],[1,"ml-2",3,"color","formControlName"],["communication",""],["securityToggle",""],["meetupsToggle",""],[1,"my-10","border-t"],[1,"w-full","mt-8","font-medium"],[1,"grid","grid-cols-1","gap-4","w-full","mt-4"],[1,"flex-auto","leading-6","cursor-pointer",3,"click"],["comments",""],["mention",""],["follow",""],["inquiry",""],[1,"flex","items-center","justify-end"],["mat-stroked-button","","type","button"],["mat-flat-button","","type","button",1,"ml-4",3,"color"]],template:function(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"form",1)(2,"div",2),e._uU(3,"Alerts"),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(12);return e.KtG(s.toggle())}),e.TgZ(7,"div",6),e._uU(8,"Communication"),e.qZA(),e.TgZ(9,"div",7),e._uU(10,"Get news, announcements, and product updates."),e.qZA()(),e._UZ(11,"mat-slide-toggle",8,9),e.qZA(),e.TgZ(13,"div",4)(14,"div",5),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(20);return e.KtG(s.toggle())}),e.TgZ(15,"div",6),e._uU(16,"Security"),e.qZA(),e.TgZ(17,"div",7),e._uU(18," Get important notifications about your account security. "),e.qZA()(),e._UZ(19,"mat-slide-toggle",8,10),e.qZA(),e.TgZ(21,"div",4)(22,"div",5),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(28);return e.KtG(s.toggle())}),e.TgZ(23,"div",6),e._uU(24,"Meetups"),e.qZA(),e.TgZ(25,"div",7),e._uU(26," Get an email when a Meetup is posted close to my location. "),e.qZA()(),e._UZ(27,"mat-slide-toggle",8,11),e.qZA()(),e._UZ(29,"div",12),e.TgZ(30,"div",2),e._uU(31,"Account Activity"),e.qZA(),e.TgZ(32,"div",13),e._uU(33,"Email me when:"),e.qZA(),e.TgZ(34,"div",14)(35,"div",4)(36,"div",15),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(39);return e.KtG(s.toggle())}),e._uU(37," someone comments on one of my items "),e.qZA(),e._UZ(38,"mat-slide-toggle",8,16),e.qZA(),e.TgZ(40,"div",4)(41,"div",15),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(44);return e.KtG(s.toggle())}),e._uU(42," someone mentions me "),e.qZA(),e._UZ(43,"mat-slide-toggle",8,17),e.qZA(),e.TgZ(45,"div",4)(46,"div",15),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(49);return e.KtG(s.toggle())}),e._uU(47," someone follows me "),e.qZA(),e._UZ(48,"mat-slide-toggle",8,18),e.qZA(),e.TgZ(50,"div",4)(51,"div",15),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(54);return e.KtG(s.toggle())}),e._uU(52," someone replies to my job posting "),e.qZA(),e._UZ(53,"mat-slide-toggle",8,19),e.qZA()(),e._UZ(55,"div",12),e.TgZ(56,"div",20)(57,"button",21),e._uU(58," Cancel "),e.qZA(),e.TgZ(59,"button",22),e._uU(60,"Save "),e.qZA()()()()}2&t&&(e.xp6(1),e.Q6J("formGroup",i.notificationsForm),e.xp6(10),e.Q6J("color","primary")("formControlName","communication"),e.xp6(8),e.Q6J("color","primary")("formControlName","security"),e.xp6(8),e.Q6J("color","primary")("formControlName","meetups"),e.xp6(11),e.Q6J("color","primary")("formControlName","comments"),e.xp6(5),e.Q6J("color","primary")("formControlName","mention"),e.xp6(5),e.Q6J("color","primary")("formControlName","follow"),e.xp6(5),e.Q6J("color","primary")("formControlName","inquiry"),e.xp6(6),e.Q6J("color","primary"))},dependencies:[y.lW,T.Rr,l._Y,l.JJ,l.JL,l.sg,l.u],encapsulation:2,changeDetection:0}),o})();const Ae=["drawer"],Ze=function(o,n){return{"hover:bg-gray-100 dark:hover:bg-hover":o,"bg-primary-50 dark:bg-hover":n}},De=function(o,n){return{"text-hint":o,"text-primary dark:text-primary-500":n}},Te=function(o){return{"text-primary dark:text-primary-500":o}};function Re(o,n){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",19),e.NdJ("click",function(){const a=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.goToPanel(a.id))}),e._UZ(2,"mat-icon",20),e.TgZ(3,"div",21)(4,"div",22),e._uU(5),e.qZA(),e.TgZ(6,"div",23),e._uU(7),e.qZA()()(),e.BQk()}if(2&o){const t=n.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngClass",e.WLB(6,Ze,!i.selectedPanel||i.selectedPanel!==t.id,i.selectedPanel&&i.selectedPanel===t.id)),e.xp6(1),e.Q6J("ngClass",e.WLB(9,De,!i.selectedPanel||i.selectedPanel!==t.id,i.selectedPanel&&i.selectedPanel===t.id))("svgIcon",t.icon),e.xp6(2),e.Q6J("ngClass",e.VKq(12,Te,i.selectedPanel&&i.selectedPanel===t.id)),e.xp6(1),e.hij(" ",t.title," "),e.xp6(2),e.hij(" ",t.description," ")}}function Be(o,n){1&o&&(e.ynx(0),e._UZ(1,"settings-account"),e.BQk())}function Fe(o,n){1&o&&(e.ynx(0),e._UZ(1,"settings-security"),e.BQk())}function Ie(o,n){1&o&&(e.ynx(0),e._UZ(1,"settings-notifications"),e.BQk())}const Ge=[{path:"",component:(()=>{class o{constructor(t,i){this._changeDetectorRef=t,this._fuseMediaWatcherService=i,this.drawerMode="side",this.drawerOpened=!0,this.panels=[],this.selectedPanel="account",this._unsubscribeAll=new g.x}ngOnInit(){this.panels=[{id:"account",icon:"heroicons_outline:user-circle",title:"Account",description:"Manage your public profile and private information"},{id:"security",icon:"heroicons_outline:lock-closed",title:"Security",description:"Manage your password and 2-step verification preferences"},{id:"notifications",icon:"heroicons_outline:bell",title:"Notifications",description:"Manage when you'll be notified on which channels"}],this._fuseMediaWatcherService.onMediaChange$.pipe((0,u.R)(this._unsubscribeAll)).subscribe(({matchingAliases:t})=>{t.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}goToPanel(t){this.selectedPanel=t,"over"===this.drawerMode&&this.drawer.close()}getPanelInfo(t){return this.panels.find(i=>i.id===t)}trackByFn(t,i){return i.id||t}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(ye.T))},o.\u0275cmp=e.Xpm({type:o,selectors:[["settings"]],viewQuery:function(t,i){if(1&t&&e.Gf(Ae,5),2&t){let r;e.iGM(r=e.CRH())&&(i.drawer=r.first)}},decls:24,vars:12,consts:[[1,"flex","flex-col","w-full","min-w-0","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"flex-auto","sm:h-full"],[1,"sm:w-96","dark:bg-gray-900",3,"autoFocus","mode","opened"],["drawer",""],[1,"flex","items-center","justify-between","m-8","mr-6","sm:my-10"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"lg:hidden"],["mat-icon-button","",3,"click"],[3,"svgIcon"],[1,"flex","flex-col","divide-y","border-t","border-b"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","flex-col"],[1,"flex-auto","px-6","pt-9","pb-12","md:p-8","md:pb-12","lg:p-12"],[1,"flex","items-center"],["mat-icon-button","",1,"lg:hidden","-ml-2",3,"click"],[1,"ml-2","lg:ml-0","text-3xl","font-bold","tracking-tight","leading-none"],[1,"mt-8"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"flex","px-8","py-5","cursor-pointer",3,"ngClass","click"],[3,"ngClass","svgIcon"],[1,"ml-3"],[1,"font-medium","leading-6",3,"ngClass"],[1,"mt-0.5","text-secondary"]],template:function(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"div",0)(1,"mat-drawer-container",1)(2,"mat-drawer",2,3)(4,"div",4)(5,"div",5),e._uU(6,"Settings"),e.qZA(),e.TgZ(7,"div",6)(8,"button",7),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(3);return e.KtG(s.close())}),e._UZ(9,"mat-icon",8),e.qZA()()(),e.TgZ(10,"div",9),e.YNc(11,Re,8,14,"ng-container",10),e.qZA()(),e.TgZ(12,"mat-drawer-content",11)(13,"div",12)(14,"div",13)(15,"button",14),e.NdJ("click",function(){e.CHM(r);const s=e.MAs(3);return e.KtG(s.toggle())}),e._UZ(16,"mat-icon",8),e.qZA(),e.TgZ(17,"div",15),e._uU(18),e.qZA()(),e.TgZ(19,"div",16),e.ynx(20,17),e.YNc(21,Be,2,0,"ng-container",18),e.YNc(22,Fe,2,0,"ng-container",18),e.YNc(23,Ie,2,0,"ng-container",18),e.BQk(),e.qZA()()()()()}2&t&&(e.xp6(2),e.Q6J("autoFocus",!1)("mode",i.drawerMode)("opened",i.drawerOpened),e.xp6(7),e.Q6J("svgIcon","heroicons_outline:x"),e.xp6(2),e.Q6J("ngForOf",i.panels)("ngForTrackBy",i.trackByFn),e.xp6(5),e.Q6J("svgIcon","heroicons_outline:menu"),e.xp6(2),e.hij(" ",i.getPanelInfo(i.selectedPanel).title," "),e.xp6(2),e.Q6J("ngSwitch",i.selectedPanel),e.xp6(1),e.Q6J("ngSwitchCase","account"),e.xp6(1),e.Q6J("ngSwitchCase","security"),e.xp6(1),e.Q6J("ngSwitchCase","notifications"))},dependencies:[y.RK,M.Hw,z,q,A,f.mk,f.sg,f.RF,f.n9,Ce,Me,Se],encapsulation:2,changeDetection:0}),o})()}];let Ee=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[j.Bz.forChild(Ge),y.ot,_.lN,M.Ps,D.c,re,ne.LD,we,T.rP,xe.fC,p.XK,Z.FA,ke.m]}),o})()}}]);