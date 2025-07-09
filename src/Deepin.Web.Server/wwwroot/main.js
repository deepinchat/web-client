import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ChatEditorComponent,
  ChatHubService,
  FileUploaderComponent,
  FlexibleConnectedPositionStrategy,
  MatButton,
  MatButtonModule,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  MatIconButton,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatSnackBar,
  OverlayConfig,
  OverlayModule,
  createBlockScrollStrategy,
  createFlexibleConnectedPositionStrategy,
  createGlobalPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-K6MCXCXV.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter
} from "./chunk-LCSMVFIT.js";
import {
  FileUrlPipe,
  UserService
} from "./chunk-D764HGAI.js";
import {
  A,
  A11yModule,
  ActiveDescendantKeyManager,
  BACKSPACE,
  CdkMonitorFocus,
  CdkPortalOutlet,
  CdkScrollable,
  CdkScrollableModule,
  CdkTrapFocus,
  ComponentPortal,
  ControlContainer,
  DOWN_ARROW,
  DefaultValueAccessor,
  Directionality,
  END,
  ENTER,
  ESCAPE,
  ErrorStateMatcher,
  FocusMonitor,
  FocusTrapFactory,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  HOME,
  InteractivityChecker,
  LEFT_ARROW,
  LiveAnnouncer,
  MAT_FORM_FIELD,
  MAT_INPUT_VALUE_ACCESSOR,
  MatCommonModule,
  MatDivider,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatIcon,
  MatInput,
  MatInputModule,
  MatLabel,
  MatListItemIcon,
  MatListModule,
  MatProgressSpinner,
  MatPseudoCheckbox,
  MatPseudoCheckboxModule,
  MatRipple,
  MatRippleModule,
  MatSuffix,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  PAGE_DOWN,
  PAGE_UP,
  Platform,
  PortalModule,
  RIGHT_ARROW,
  ReactiveFormsModule,
  SPACE,
  ScrollDispatcher,
  SelectionModel,
  TemplatePortal,
  UP_ARROW,
  UserAvatar,
  Validators,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _ErrorStateTracker,
  _IdGenerator,
  _StructuralStylesLoader,
  _VisuallyHiddenLoader,
  _animationsDisabled,
  _getFocusedElementPierceShadowDom,
  addAriaReferencedId,
  coerceBooleanProperty,
  coerceNumberProperty,
  coerceStringArray,
  hasModifierKey,
  removeAriaReferencedId,
  ɵNgNoValidate
} from "./chunk-2O4QMEWM.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgClass,
  NgModule,
  NgZone,
  Optional,
  Output,
  QueryList,
  Renderer2,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  Version,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  bootstrapApplication,
  debounceTime,
  defer,
  filter,
  forwardRef,
  fromEvent,
  inject,
  isSignal,
  map,
  mapTo,
  merge,
  numberAttribute,
  of,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-WAVD63B2.js";

// node_modules/@angular/material/fesm2022/sidenav.mjs
var _c0 = ["*"];
var _c1 = ["content"];
var _c2 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
var _c3 = ["mat-drawer", "mat-drawer-content", "*"];
function MatDrawerContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatDrawerContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatDrawerContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-drawer-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c4 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
var _c5 = ["mat-sidenav", "mat-sidenav-content", "*"];
function MatSidenavContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function MatSidenavContainer_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._onBackdropClicked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatSidenavContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-sidenav-content");
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
}
var _c6 = ".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n";
function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
var MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE", {
  providedIn: "root",
  factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
});
var MAT_DRAWER_CONTAINER = new InjectionToken("MAT_DRAWER_CONTAINER");
function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}
var MatDrawerContent = class _MatDrawerContent extends CdkScrollable {
  _platform = inject(Platform);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _container = inject(MatDrawerContainer);
  constructor() {
    const elementRef = inject(ElementRef);
    const scrollDispatcher = inject(ScrollDispatcher);
    const ngZone = inject(NgZone);
    super(elementRef, scrollDispatcher, ngZone);
  }
  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Determines whether the content element should be hidden from the user. */
  _shouldBeHidden() {
    if (this._platform.isBrowser) {
      return false;
    }
    const {
      start,
      end
    } = this._container;
    return start != null && start.mode !== "over" && start.opened || end != null && end.mode !== "over" && end.opened;
  }
  static \u0275fac = function MatDrawerContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContent,
    selectors: [["mat-drawer-content"]],
    hostAttrs: [1, "mat-drawer-content"],
    hostVars: 6,
    hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
        \u0275\u0275classProp("mat-drawer-content-hidden", ctx._shouldBeHidden());
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatDrawerContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatDrawerContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContent, [{
    type: Component,
    args: [{
      selector: "mat-drawer-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content",
        "[style.margin-left.px]": "_container._contentMargins.left",
        "[style.margin-right.px]": "_container._contentMargins.right",
        "[class.mat-drawer-content-hidden]": "_shouldBeHidden()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatDrawerContent
      }]
    }]
  }], () => [], null);
})();
var MatDrawer = class _MatDrawer {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  _focusMonitor = inject(FocusMonitor);
  _platform = inject(Platform);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _interactivityChecker = inject(InteractivityChecker);
  _doc = inject(DOCUMENT);
  _container = inject(MAT_DRAWER_CONTAINER, {
    optional: true
  });
  _focusTrap = null;
  _elementFocusedBeforeDrawerWasOpened = null;
  _eventCleanups;
  /** Whether the view of the component has been attached. */
  _isAttached;
  /** Anchor node used to restore the drawer to its initial position. */
  _anchor;
  /** The side that the drawer is attached to. */
  get position() {
    return this._position;
  }
  set position(value) {
    value = value === "end" ? "end" : "start";
    if (value !== this._position) {
      if (this._isAttached) {
        this._updatePositionInParent(value);
      }
      this._position = value;
      this.onPositionChanged.emit();
    }
  }
  _position = "start";
  /** Mode of the drawer; one of 'over', 'push' or 'side'. */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._updateFocusTrapState();
    this._modeChanged.next();
  }
  _mode = "over";
  /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
  get disableClose() {
    return this._disableClose;
  }
  set disableClose(value) {
    this._disableClose = coerceBooleanProperty(value);
  }
  _disableClose = false;
  /**
   * Whether the drawer should focus the first focusable element automatically when opened.
   * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
   * enabled, focus will be moved into the sidenav in `side` mode as well.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
   * instead.
   */
  get autoFocus() {
    const value = this._autoFocus;
    if (value == null) {
      if (this.mode === "side") {
        return "dialog";
      } else {
        return "first-tabbable";
      }
    }
    return value;
  }
  set autoFocus(value) {
    if (value === "true" || value === "false" || value == null) {
      value = coerceBooleanProperty(value);
    }
    this._autoFocus = value;
  }
  _autoFocus;
  /**
   * Whether the drawer is opened. We overload this because we trigger an event when it
   * starts or end.
   */
  get opened() {
    return this._opened();
  }
  set opened(value) {
    this.toggle(coerceBooleanProperty(value));
  }
  _opened = signal(false);
  /** How the sidenav was opened (keypress, mouse click etc.) */
  _openedVia;
  /** Emits whenever the drawer has started animating. */
  _animationStarted = new Subject();
  /** Emits whenever the drawer is done animating. */
  _animationEnd = new Subject();
  /** Event emitted when the drawer open state is changed. */
  openedChange = (
    // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new EventEmitter(
      /* isAsync */
      true
    )
  );
  /** Event emitted when the drawer has been opened. */
  _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
  }));
  /** Event emitted when the drawer has started opening. */
  openedStart = this._animationStarted.pipe(filter(() => this.opened), mapTo(void 0));
  /** Event emitted when the drawer has been closed. */
  _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
  }));
  /** Event emitted when the drawer has started closing. */
  closedStart = this._animationStarted.pipe(filter(() => !this.opened), mapTo(void 0));
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Event emitted when the drawer's position changes. */
  // tslint:disable-next-line:no-output-on-prefix
  onPositionChanged = new EventEmitter();
  /** Reference to the inner element that contains all the content. */
  _content;
  /**
   * An observable that emits when the drawer mode changes. This is used by the drawer container to
   * to know when to when the mode changes so it can adapt the margins on the content.
   */
  _modeChanged = new Subject();
  _injector = inject(Injector);
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    this.openedChange.pipe(takeUntil(this._destroyed)).subscribe((opened) => {
      if (opened) {
        this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
        this._takeFocus();
      } else if (this._isFocusWithinDrawer()) {
        this._restoreFocus(this._openedVia || "program");
      }
    });
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      fromEvent(element, "keydown").pipe(filter((event) => {
        return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
      }), takeUntil(this._destroyed)).subscribe((event) => this._ngZone.run(() => {
        this.close();
        event.stopPropagation();
        event.preventDefault();
      }));
      this._eventCleanups = [this._renderer.listen(element, "transitionrun", this._handleTransitionEvent), this._renderer.listen(element, "transitionend", this._handleTransitionEvent), this._renderer.listen(element, "transitioncancel", this._handleTransitionEvent)];
    });
    this._animationEnd.subscribe(() => {
      this.openedChange.emit(this.opened);
    });
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          cleanupBlur();
          cleanupMousedown();
          element.removeAttribute("tabindex");
        };
        const cleanupBlur = this._renderer.listen(element, "blur", callback);
        const cleanupMousedown = this._renderer.listen(element, "mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves focus into the drawer. Note that this works even if
   * the focus trap is disabled in `side` mode.
   */
  _takeFocus() {
    if (!this._focusTrap) {
      return;
    }
    const element = this._elementRef.nativeElement;
    switch (this.autoFocus) {
      case false:
      case "dialog":
        return;
      case true:
      case "first-tabbable":
        afterNextRender(() => {
          const hasMovedFocus = this._focusTrap.focusInitialElement();
          if (!hasMovedFocus && typeof element.focus === "function") {
            element.focus();
          }
        }, {
          injector: this._injector
        });
        break;
      case "first-heading":
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
        break;
      default:
        this._focusByCssSelector(this.autoFocus);
        break;
    }
  }
  /**
   * Restores focus to the element that was originally focused when the drawer opened.
   * If no element was focused at that time, the focus will be restored to the drawer.
   */
  _restoreFocus(focusOrigin) {
    if (this.autoFocus === "dialog") {
      return;
    }
    if (this._elementFocusedBeforeDrawerWasOpened) {
      this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
    } else {
      this._elementRef.nativeElement.blur();
    }
    this._elementFocusedBeforeDrawerWasOpened = null;
  }
  /** Whether focus is currently within the drawer. */
  _isFocusWithinDrawer() {
    const activeEl = this._doc.activeElement;
    return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
  }
  ngAfterViewInit() {
    this._isAttached = true;
    if (this._position === "end") {
      this._updatePositionInParent("end");
    }
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      this._updateFocusTrapState();
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._focusTrap?.destroy();
    this._anchor?.remove();
    this._anchor = null;
    this._animationStarted.complete();
    this._animationEnd.complete();
    this._modeChanged.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /**
   * Open the drawer.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  open(openedVia) {
    return this.toggle(true, openedVia);
  }
  /** Close the drawer. */
  close() {
    return this.toggle(false);
  }
  /** Closes the drawer with context that the backdrop was clicked. */
  _closeViaBackdropClick() {
    return this._setOpen(
      /* isOpen */
      false,
      /* restoreFocus */
      true,
      "mouse"
    );
  }
  /**
   * Toggle this drawer.
   * @param isOpen Whether the drawer should be open.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */
  toggle(isOpen = !this.opened, openedVia) {
    if (isOpen && openedVia) {
      this._openedVia = openedVia;
    }
    const result = this._setOpen(
      isOpen,
      /* restoreFocus */
      !isOpen && this._isFocusWithinDrawer(),
      this._openedVia || "program"
    );
    if (!isOpen) {
      this._openedVia = null;
    }
    return result;
  }
  /**
   * Toggles the opened state of the drawer.
   * @param isOpen Whether the drawer should open or close.
   * @param restoreFocus Whether focus should be restored on close.
   * @param focusOrigin Origin to use when restoring focus.
   */
  _setOpen(isOpen, restoreFocus, focusOrigin) {
    if (isOpen === this.opened) {
      return Promise.resolve(isOpen ? "open" : "close");
    }
    this._opened.set(isOpen);
    if (this._container?._transitionsEnabled) {
      this._setIsAnimating(true);
    } else {
      setTimeout(() => {
        this._animationStarted.next();
        this._animationEnd.next();
      });
    }
    this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", isOpen);
    if (!isOpen && restoreFocus) {
      this._restoreFocus(focusOrigin);
    }
    this._changeDetectorRef.markForCheck();
    this._updateFocusTrapState();
    return new Promise((resolve) => {
      this.openedChange.pipe(take(1)).subscribe((open) => resolve(open ? "open" : "close"));
    });
  }
  /** Toggles whether the drawer is currently animating. */
  _setIsAnimating(isAnimating) {
    this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", isAnimating);
  }
  _getWidth() {
    return this._elementRef.nativeElement.offsetWidth || 0;
  }
  /** Updates the enabled state of the focus trap. */
  _updateFocusTrapState() {
    if (this._focusTrap) {
      this._focusTrap.enabled = !!this._container?.hasBackdrop && this.opened;
    }
  }
  /**
   * Updates the position of the drawer in the DOM. We need to move the element around ourselves
   * when it's in the `end` position so that it comes after the content and the visual order
   * matches the tab order. We also need to be able to move it back to `start` if the sidenav
   * started off as `end` and was changed to `start`.
   */
  _updatePositionInParent(newPosition) {
    if (!this._platform.isBrowser) {
      return;
    }
    const element = this._elementRef.nativeElement;
    const parent = element.parentNode;
    if (newPosition === "end") {
      if (!this._anchor) {
        this._anchor = this._doc.createComment("mat-drawer-anchor");
        parent.insertBefore(this._anchor, element);
      }
      parent.appendChild(element);
    } else if (this._anchor) {
      this._anchor.parentNode.insertBefore(element, this._anchor);
    }
  }
  /** Event handler for animation events. */
  _handleTransitionEvent = (event) => {
    const element = this._elementRef.nativeElement;
    if (event.target === element) {
      this._ngZone.run(() => {
        if (event.type === "transitionrun") {
          this._animationStarted.next(event);
        } else {
          if (event.type === "transitionend") {
            this._setIsAnimating(false);
          }
          this._animationEnd.next(event);
        }
      });
    }
  };
  static \u0275fac = function MatDrawer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawer,
    selectors: [["mat-drawer"]],
    viewQuery: function MatDrawer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer"],
    hostVars: 12,
    hostBindings: function MatDrawer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("align", null)("tabIndex", ctx.mode !== "side" ? "-1" : null);
        \u0275\u0275styleProp("visibility", !ctx._container && !ctx.opened ? "hidden" : null);
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side");
      }
    },
    inputs: {
      position: "position",
      mode: "mode",
      disableClose: "disableClose",
      autoFocus: "autoFocus",
      opened: "opened"
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      openedStart: "openedStart",
      _closedStream: "closed",
      closedStart: "closedStart",
      onPositionChanged: "positionChanged"
    },
    exportAs: ["matDrawer"],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatDrawer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawer, [{
    type: Component,
    args: [{
      selector: "mat-drawer",
      exportAs: "matDrawer",
      host: {
        "class": "mat-drawer",
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        // The styles that render the sidenav off-screen come from the drawer container. Prior to #30235
        // this was also done by the animations module which some internal tests seem to depend on.
        // Simulate it by toggling the `hidden` attribute instead.
        "[style.visibility]": '(!_container && !opened) ? "hidden" : null',
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null'
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], () => [], {
    position: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    disableClose: [{
      type: Input
    }],
    autoFocus: [{
      type: Input
    }],
    opened: [{
      type: Input
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    openedStart: [{
      type: Output
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    closedStart: [{
      type: Output
    }],
    onPositionChanged: [{
      type: Output,
      args: ["positionChanged"]
    }],
    _content: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
var MatDrawerContainer = class _MatDrawerContainer {
  _dir = inject(Directionality, {
    optional: true
  });
  _element = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _animationDisabled = _animationsDisabled();
  _transitionsEnabled = false;
  /** All drawers in the container. Includes drawers from inside nested containers. */
  _allDrawers;
  /** Drawers that belong to this container. */
  _drawers = new QueryList();
  _content;
  _userContent;
  /** The drawer child with the `start` position. */
  get start() {
    return this._start;
  }
  /** The drawer child with the `end` position. */
  get end() {
    return this._end;
  }
  /**
   * Whether to automatically resize the container whenever
   * the size of any of its drawers changes.
   *
   * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
   * the drawers on every change detection cycle. Can be configured globally via the
   * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
   */
  get autosize() {
    return this._autosize;
  }
  set autosize(value) {
    this._autosize = coerceBooleanProperty(value);
  }
  _autosize = inject(MAT_DRAWER_DEFAULT_AUTOSIZE);
  /**
   * Whether the drawer container should have a backdrop while one of the sidenavs is open.
   * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
   * mode as well.
   */
  get hasBackdrop() {
    return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
  }
  set hasBackdrop(value) {
    this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
  }
  _backdropOverride;
  /** Event emitted when the drawer backdrop is clicked. */
  backdropClick = new EventEmitter();
  /** The drawer at the start/end position, independent of direction. */
  _start;
  _end;
  /**
   * The drawer at the left/right. When direction changes, these will change as well.
   * They're used as aliases for the above to set the left/right style properly.
   * In LTR, _left == _start and _right == _end.
   * In RTL, _left == _end and _right == _start.
   */
  _left;
  _right;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /** Emits on every ngDoCheck. Used for debouncing reflows. */
  _doCheckSubject = new Subject();
  /**
   * Margins to be applied to the content. These are used to push / shrink the drawer content when a
   * drawer is open. We use margin rather than transform even for push mode because transform breaks
   * fixed position elements inside of the transformed element.
   */
  _contentMargins = {
    left: null,
    right: null
  };
  _contentMarginChanges = new Subject();
  /** Reference to the CdkScrollable instance that wraps the scrollable content. */
  get scrollable() {
    return this._userContent || this._content;
  }
  _injector = inject(Injector);
  constructor() {
    const platform = inject(Platform);
    const viewportRuler = inject(ViewportRuler);
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._validateDrawers();
      this.updateContentMargins();
    });
    viewportRuler.change().pipe(takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
    if (!this._animationDisabled && platform.isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this._element.nativeElement.classList.add("mat-drawer-transition");
          this._transitionsEnabled = true;
        }, 200);
      });
    }
  }
  ngAfterContentInit() {
    this._allDrawers.changes.pipe(startWith(this._allDrawers), takeUntil(this._destroyed)).subscribe((drawer) => {
      this._drawers.reset(drawer.filter((item) => !item._container || item._container === this));
      this._drawers.notifyOnChanges();
    });
    this._drawers.changes.pipe(startWith(null)).subscribe(() => {
      this._validateDrawers();
      this._drawers.forEach((drawer) => {
        this._watchDrawerToggle(drawer);
        this._watchDrawerPosition(drawer);
        this._watchDrawerMode(drawer);
      });
      if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
        this.updateContentMargins();
      }
      this._changeDetectorRef.markForCheck();
    });
    this._ngZone.runOutsideAngular(() => {
      this._doCheckSubject.pipe(
        debounceTime(10),
        // Arbitrary debounce time, less than a frame at 60fps
        takeUntil(this._destroyed)
      ).subscribe(() => this.updateContentMargins());
    });
  }
  ngOnDestroy() {
    this._contentMarginChanges.complete();
    this._doCheckSubject.complete();
    this._drawers.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Calls `open` of both start and end drawers */
  open() {
    this._drawers.forEach((drawer) => drawer.open());
  }
  /** Calls `close` of both start and end drawers */
  close() {
    this._drawers.forEach((drawer) => drawer.close());
  }
  /**
   * Recalculates and updates the inline styles for the content. Note that this should be used
   * sparingly, because it causes a reflow.
   */
  updateContentMargins() {
    let left = 0;
    let right = 0;
    if (this._left && this._left.opened) {
      if (this._left.mode == "side") {
        left += this._left._getWidth();
      } else if (this._left.mode == "push") {
        const width = this._left._getWidth();
        left += width;
        right -= width;
      }
    }
    if (this._right && this._right.opened) {
      if (this._right.mode == "side") {
        right += this._right._getWidth();
      } else if (this._right.mode == "push") {
        const width = this._right._getWidth();
        right += width;
        left -= width;
      }
    }
    left = left || null;
    right = right || null;
    if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
      this._contentMargins = {
        left,
        right
      };
      this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
    }
  }
  ngDoCheck() {
    if (this._autosize && this._isPushed()) {
      this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
    }
  }
  /**
   * Subscribes to drawer events in order to set a class on the main container element when the
   * drawer is open and the backdrop is visible. This ensures any overflow on the container element
   * is properly hidden.
   */
  _watchDrawerToggle(drawer) {
    drawer._animationStarted.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
    if (drawer.mode !== "side") {
      drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
    }
  }
  /**
   * Subscribes to drawer onPositionChanged event in order to
   * re-validate drawers when the position changes.
   */
  _watchDrawerPosition(drawer) {
    drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
      afterNextRender({
        read: () => this._validateDrawers()
      }, {
        injector: this._injector
      });
    });
  }
  /** Subscribes to changes in drawer mode so we can run change detection. */
  _watchDrawerMode(drawer) {
    drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed))).subscribe(() => {
      this.updateContentMargins();
      this._changeDetectorRef.markForCheck();
    });
  }
  /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
  _setContainerClass(isAdd) {
    const classList = this._element.nativeElement.classList;
    const className = "mat-drawer-container-has-open";
    if (isAdd) {
      classList.add(className);
    } else {
      classList.remove(className);
    }
  }
  /** Validate the state of the drawer children components. */
  _validateDrawers() {
    this._start = this._end = null;
    this._drawers.forEach((drawer) => {
      if (drawer.position == "end") {
        if (this._end != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("end");
        }
        this._end = drawer;
      } else {
        if (this._start != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throwMatDuplicatedDrawerError("start");
        }
        this._start = drawer;
      }
    });
    this._right = this._left = null;
    if (this._dir && this._dir.value === "rtl") {
      this._left = this._end;
      this._right = this._start;
    } else {
      this._left = this._start;
      this._right = this._end;
    }
  }
  /** Whether the container is being pushed to the side by one of the drawers. */
  _isPushed() {
    return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over";
  }
  _onBackdropClicked() {
    this.backdropClick.emit();
    this._closeModalDrawersViaBackdrop();
  }
  _closeModalDrawersViaBackdrop() {
    [this._start, this._end].filter((drawer) => drawer && !drawer.disableClose && this._drawerHasBackdrop(drawer)).forEach((drawer) => drawer._closeViaBackdropClick());
  }
  _isShowingBackdrop() {
    return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
  }
  _isDrawerOpen(drawer) {
    return drawer != null && drawer.opened;
  }
  // Whether argument drawer should have a backdrop when it opens
  _drawerHasBackdrop(drawer) {
    if (this._backdropOverride == null) {
      return !!drawer && drawer.mode !== "side";
    }
    return this._backdropOverride;
  }
  static \u0275fac = function MatDrawerContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDrawerContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDrawerContainer,
    selectors: [["mat-drawer-container"]],
    contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatDrawerContent, 5);
        \u0275\u0275contentQuery(dirIndex, MatDrawer, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    viewQuery: function MatDrawerContainer_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatDrawerContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._userContent = _t.first);
      }
    },
    hostAttrs: [1, "mat-drawer-container"],
    hostVars: 2,
    hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    inputs: {
      autosize: "autosize",
      hasBackdrop: "hasBackdrop"
    },
    outputs: {
      backdropClick: "backdropClick"
    },
    exportAs: ["matDrawerContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatDrawerContainer
    }])],
    ngContentSelectors: _c3,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatDrawerContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275conditionalCreate(0, MatDrawerContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275conditionalCreate(3, MatDrawerContainer_Conditional_3_Template, 2, 0, "mat-drawer-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatDrawerContent],
    styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDrawerContainer, [{
    type: Component,
    args: [{
      selector: "mat-drawer-container",
      exportAs: "matDrawerContainer",
      host: {
        "class": "mat-drawer-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatDrawerContainer
      }],
      imports: [MatDrawerContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer"></ng-content>\n\n<ng-content select="mat-drawer-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content></ng-content>\n  </mat-drawer-content>\n}\n',
      styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"]
    }]
  }], () => [], {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatDrawer, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatDrawerContent]
    }],
    _userContent: [{
      type: ViewChild,
      args: [MatDrawerContent]
    }],
    autosize: [{
      type: Input
    }],
    hasBackdrop: [{
      type: Input
    }],
    backdropClick: [{
      type: Output
    }]
  });
})();
var MatSidenavContent = class _MatSidenavContent extends MatDrawerContent {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContent_BaseFactory;
    return function MatSidenavContent_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContent_BaseFactory || (\u0275MatSidenavContent_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContent)))(__ngFactoryType__ || _MatSidenavContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContent,
    selectors: [["mat-sidenav-content"]],
    hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useExisting: _MatSidenavContent
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatSidenavContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContent, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-content",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-drawer-content mat-sidenav-content"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: CdkScrollable,
        useExisting: MatSidenavContent
      }]
    }]
  }], null, null);
})();
var MatSidenav = class _MatSidenav extends MatDrawer {
  /** Whether the sidenav is fixed in the viewport. */
  get fixedInViewport() {
    return this._fixedInViewport;
  }
  set fixedInViewport(value) {
    this._fixedInViewport = coerceBooleanProperty(value);
  }
  _fixedInViewport = false;
  /**
   * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
   * mode.
   */
  get fixedTopGap() {
    return this._fixedTopGap;
  }
  set fixedTopGap(value) {
    this._fixedTopGap = coerceNumberProperty(value);
  }
  _fixedTopGap = 0;
  /**
   * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
   * fixed mode.
   */
  get fixedBottomGap() {
    return this._fixedBottomGap;
  }
  set fixedBottomGap(value) {
    this._fixedBottomGap = coerceNumberProperty(value);
  }
  _fixedBottomGap = 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenav_BaseFactory;
    return function MatSidenav_Factory(__ngFactoryType__) {
      return (\u0275MatSidenav_BaseFactory || (\u0275MatSidenav_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenav)))(__ngFactoryType__ || _MatSidenav);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenav,
    selectors: [["mat-sidenav"]],
    hostAttrs: [1, "mat-drawer", "mat-sidenav"],
    hostVars: 16,
    hostBindings: function MatSidenav_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("tabIndex", ctx.mode !== "side" ? "-1" : null)("align", null);
        \u0275\u0275styleProp("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
        \u0275\u0275classProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-sidenav-fixed", ctx.fixedInViewport);
      }
    },
    inputs: {
      fixedInViewport: "fixedInViewport",
      fixedTopGap: "fixedTopGap",
      fixedBottomGap: "fixedBottomGap"
    },
    exportAs: ["matSidenav"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatDrawer,
      useExisting: _MatSidenav
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
    template: function MatSidenav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
      }
    },
    dependencies: [CdkScrollable],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenav, [{
    type: Component,
    args: [{
      selector: "mat-sidenav",
      exportAs: "matSidenav",
      host: {
        "class": "mat-drawer mat-sidenav",
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null',
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        "[class.mat-sidenav-fixed]": "fixedInViewport",
        "[style.top.px]": "fixedInViewport ? fixedTopGap : null",
        "[style.bottom.px]": "fixedInViewport ? fixedBottomGap : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkScrollable],
      providers: [{
        provide: MatDrawer,
        useExisting: MatSidenav
      }],
      template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
    }]
  }], null, {
    fixedInViewport: [{
      type: Input
    }],
    fixedTopGap: [{
      type: Input
    }],
    fixedBottomGap: [{
      type: Input
    }]
  });
})();
var MatSidenavContainer = class _MatSidenavContainer extends MatDrawerContainer {
  _allDrawers = void 0;
  // We need an initializer here to avoid a TS error.
  _content = void 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatSidenavContainer_BaseFactory;
    return function MatSidenavContainer_Factory(__ngFactoryType__) {
      return (\u0275MatSidenavContainer_BaseFactory || (\u0275MatSidenavContainer_BaseFactory = \u0275\u0275getInheritedFactory(_MatSidenavContainer)))(__ngFactoryType__ || _MatSidenavContainer);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSidenavContainer,
    selectors: [["mat-sidenav-container"]],
    contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatSidenavContent, 5);
        \u0275\u0275contentQuery(dirIndex, MatSidenav, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allDrawers = _t);
      }
    },
    hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
    hostVars: 2,
    hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
      }
    },
    exportAs: ["matSidenavContainer"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_DRAWER_CONTAINER,
      useExisting: _MatSidenavContainer
    }, {
      provide: MatDrawerContainer,
      useExisting: _MatSidenavContainer
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 4,
    vars: 2,
    consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
    template: function MatSidenavContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275conditionalCreate(0, MatSidenavContainer_Conditional_0_Template, 1, 2, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275conditionalCreate(3, MatSidenavContainer_Conditional_3_Template, 2, 0, "mat-sidenav-content");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasBackdrop ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx._content ? 3 : -1);
      }
    },
    dependencies: [MatSidenavContent],
    styles: [_c6],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavContainer, [{
    type: Component,
    args: [{
      selector: "mat-sidenav-container",
      exportAs: "matSidenavContainer",
      host: {
        "class": "mat-drawer-container mat-sidenav-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatSidenavContainer
      }, {
        provide: MatDrawerContainer,
        useExisting: MatSidenavContainer
      }],
      imports: [MatSidenavContent],
      template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-sidenav"></ng-content>\n\n<ng-content select="mat-sidenav-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n}\n',
      styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"]
    }]
  }], null, {
    _allDrawers: [{
      type: ContentChildren,
      args: [MatSidenav, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: ContentChild,
      args: [MatSidenavContent]
    }]
  });
})();
var MatSidenavModule = class _MatSidenavModule {
  static \u0275fac = function MatSidenavModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSidenavModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSidenavModule,
    imports: [MatCommonModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
    exports: [CdkScrollableModule, MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkScrollableModule, CdkScrollableModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSidenavModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
      exports: [CdkScrollableModule, MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/date-formats-K6TQue-Y.mjs
var MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
  providedIn: "root",
  factory: MAT_DATE_LOCALE_FACTORY
});
function MAT_DATE_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var NOT_IMPLEMENTED = "Method not implemented";
var DateAdapter = class {
  /** The locale to use for all dates. */
  locale;
  _localeChanges = new Subject();
  /** A stream that emits when the locale changes. */
  localeChanges = this._localeChanges;
  /**
   * Sets the time of one date to the time of another.
   * @param target Date whose time will be set.
   * @param hours New hours to set on the date object.
   * @param minutes New minutes to set on the date object.
   * @param seconds New seconds to set on the date object.
   */
  setTime(target, hours, minutes, seconds) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Gets the hours component of the given date.
   * @param date The date to extract the hours from.
   */
  getHours(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Gets the minutes component of the given date.
   * @param date The date to extract the minutes from.
   */
  getMinutes(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Gets the seconds component of the given date.
   * @param date The date to extract the seconds from.
   */
  getSeconds(date) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Parses a date with a specific time from a user-provided value.
   * @param value The value to parse.
   * @param parseFormat The expected format of the value being parsed
   *     (type is implementation-dependent).
   */
  parseTime(value, parseFormat) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Adds an amount of seconds to the specified date.
   * @param date Date to which to add the seconds.
   * @param amount Amount of seconds to add to the date.
   */
  addSeconds(date, amount) {
    throw new Error(NOT_IMPLEMENTED);
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Compares the time values of two dates.
   * @param first First date to compare.
   * @param second Second date to compare.
   * @returns 0 if the times are equal, a number less than 0 if the first time is earlier,
   *     a number greater than 0 if the first time is later.
   */
  compareTime(first, second) {
    return this.getHours(first) - this.getHours(second) || this.getMinutes(first) - this.getMinutes(second) || this.getSeconds(first) - this.getSeconds(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Checks if the times of two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the times of the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameTime(first, second) {
    if (first && second) {
      const firstValid = this.isValid(first);
      const secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareTime(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");

// node_modules/@angular/material/fesm2022/datepicker.mjs
var _c02 = ["mat-calendar-body", ""];
function _forTrack0($index, $item) {
  return this._trackRow($item);
}
var _forTrack1 = ($index, $item) => $item.id;
function MatCalendarBody_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 0)(1, "td", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("colspan", ctx_r0.numCols);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.label, " ");
  }
}
function MatCalendarBody_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("colspan", ctx_r0._firstRowOffset);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0._firstRowOffset >= ctx_r0.labelMinRequiredCells ? ctx_r0.label : "", " ");
  }
}
function MatCalendarBody_For_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 6)(1, "button", 7);
    \u0275\u0275listener("click", function MatCalendarBody_For_2_For_3_Template_button_click_1_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._cellClicked(item_r3, $event));
    })("focus", function MatCalendarBody_For_2_For_3_Template_button_focus_1_listener($event) {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0._emitActiveDateChange(item_r3, $event));
    });
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "span", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const \u0275$index_14_r4 = ctx.$index;
    const \u0275$index_7_r5 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r0._cellWidth)("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    \u0275\u0275attribute("data-mat-row", \u0275$index_7_r5)("data-mat-col", \u0275$index_14_r4);
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-body-disabled", !item_r3.enabled)("mat-calendar-body-active", ctx_r0._isActiveCell(\u0275$index_7_r5, \u0275$index_14_r4))("mat-calendar-body-range-start", ctx_r0._isRangeStart(item_r3.compareValue))("mat-calendar-body-range-end", ctx_r0._isRangeEnd(item_r3.compareValue))("mat-calendar-body-in-range", ctx_r0._isInRange(item_r3.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r0._isComparisonBridgeStart(item_r3.compareValue, \u0275$index_7_r5, \u0275$index_14_r4))("mat-calendar-body-comparison-bridge-end", ctx_r0._isComparisonBridgeEnd(item_r3.compareValue, \u0275$index_7_r5, \u0275$index_14_r4))("mat-calendar-body-comparison-start", ctx_r0._isComparisonStart(item_r3.compareValue))("mat-calendar-body-comparison-end", ctx_r0._isComparisonEnd(item_r3.compareValue))("mat-calendar-body-in-comparison-range", ctx_r0._isInComparisonRange(item_r3.compareValue))("mat-calendar-body-preview-start", ctx_r0._isPreviewStart(item_r3.compareValue))("mat-calendar-body-preview-end", ctx_r0._isPreviewEnd(item_r3.compareValue))("mat-calendar-body-in-preview", ctx_r0._isInPreview(item_r3.compareValue));
    \u0275\u0275property("ngClass", item_r3.cssClasses)("tabindex", ctx_r0._isActiveCell(\u0275$index_7_r5, \u0275$index_14_r4) ? 0 : -1);
    \u0275\u0275attribute("aria-label", item_r3.ariaLabel)("aria-disabled", !item_r3.enabled || null)("aria-pressed", ctx_r0._isSelected(item_r3.compareValue))("aria-current", ctx_r0.todayValue === item_r3.compareValue ? "date" : null)("aria-describedby", ctx_r0._getDescribedby(item_r3.compareValue));
    \u0275\u0275advance();
    \u0275\u0275classProp("mat-calendar-body-selected", ctx_r0._isSelected(item_r3.compareValue))("mat-calendar-body-comparison-identical", ctx_r0._isComparisonIdentical(item_r3.compareValue))("mat-calendar-body-today", ctx_r0.todayValue === item_r3.compareValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.displayValue, " ");
  }
}
function MatCalendarBody_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 1);
    \u0275\u0275conditionalCreate(1, MatCalendarBody_For_2_Conditional_1_Template, 2, 6, "td", 4);
    \u0275\u0275repeaterCreate(2, MatCalendarBody_For_2_For_3_Template, 5, 48, "td", 5, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const \u0275$index_7_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_7_r5 === 0 && ctx_r0._firstRowOffset ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r6);
  }
}
function MatMonthView_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 2)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.long);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r1.narrow);
  }
}
var _c12 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) {
}
function MatCalendar_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-month-view", 4);
    \u0275\u0275twoWayListener("activeDateChange", function MatCalendar_Case_2_Template_mat_month_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("_userSelection", function MatCalendar_Case_2_Template_mat_month_view__userSelection_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dateSelected($event));
    })("dragStarted", function MatCalendar_Case_2_Template_mat_month_view_dragStarted_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dragStarted($event));
    })("dragEnded", function MatCalendar_Case_2_Template_mat_month_view_dragEnded_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._dragEnded($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd)("startDateAccessibleName", ctx_r1.startDateAccessibleName)("endDateAccessibleName", ctx_r1.endDateAccessibleName)("activeDrag", ctx_r1._activeDrag);
  }
}
function MatCalendar_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-year-view", 5);
    \u0275\u0275twoWayListener("activeDateChange", function MatCalendar_Case_3_Template_mat_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("monthSelected", function MatCalendar_Case_3_Template_mat_year_view_monthSelected_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._monthSelectedInYearView($event));
    })("selectedChange", function MatCalendar_Case_3_Template_mat_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._goToDateInView($event, "month"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function MatCalendar_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-multi-year-view", 6);
    \u0275\u0275twoWayListener("activeDateChange", function MatCalendar_Case_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("yearSelected", function MatCalendar_Case_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._yearSelectedInMultiYearView($event));
    })("selectedChange", function MatCalendar_Case_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._goToDateInView($event, "year"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("activeDate", ctx_r1.activeDate);
    \u0275\u0275property("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function MatDatepickerContent_ng_template_2_Template(rf, ctx) {
}
var _c22 = ["button"];
var _c32 = [[["", "matDatepickerToggleIcon", ""]]];
var _c42 = ["[matDatepickerToggleIcon]"];
function MatDatepickerToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 2);
    \u0275\u0275element(1, "path", 3);
    \u0275\u0275elementEnd();
  }
}
var _c52 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
var _c62 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function createMissingDateImplError(provider) {
  return Error(`MatDatepicker: No provider found for ${provider}. You must add one of the following to your app config: provideNativeDateAdapter, provideDateFnsAdapter, provideLuxonDateAdapter, provideMomentDateAdapter, or provide a custom implementation.`);
}
var MatDatepickerIntl = class _MatDatepickerIntl {
  /**
   * Stream that emits whenever the labels here are changed. Use this to notify
   * components if the labels have changed after initialization.
   */
  changes = new Subject();
  /** A label for the calendar popup (used by screen readers). */
  calendarLabel = "Calendar";
  /** A label for the button used to open the calendar popup (used by screen readers). */
  openCalendarLabel = "Open calendar";
  /** Label for the button used to close the calendar popup. */
  closeCalendarLabel = "Close calendar";
  /** A label for the previous month button (used by screen readers). */
  prevMonthLabel = "Previous month";
  /** A label for the next month button (used by screen readers). */
  nextMonthLabel = "Next month";
  /** A label for the previous year button (used by screen readers). */
  prevYearLabel = "Previous year";
  /** A label for the next year button (used by screen readers). */
  nextYearLabel = "Next year";
  /** A label for the previous multi-year button (used by screen readers). */
  prevMultiYearLabel = "Previous 24 years";
  /** A label for the next multi-year button (used by screen readers). */
  nextMultiYearLabel = "Next 24 years";
  /** A label for the 'switch to month view' button (used by screen readers). */
  switchToMonthViewLabel = "Choose date";
  /** A label for the 'switch to year view' button (used by screen readers). */
  switchToMultiYearViewLabel = "Choose month and year";
  /**
   * A label for the first date of a range of dates (used by screen readers).
   * @deprecated Provide your own internationalization string.
   * @breaking-change 17.0.0
   */
  startDateLabel = "Start date";
  /**
   * A label for the last date of a range of dates (used by screen readers).
   * @deprecated Provide your own internationalization string.
   * @breaking-change 17.0.0
   */
  endDateLabel = "End date";
  /**
   * A label for the Comparison date of a range of dates (used by screen readers).
   */
  comparisonDateLabel = "Comparison range";
  /** Formats a range of years (used for visuals). */
  formatYearRange(start, end) {
    return `${start} \u2013 ${end}`;
  }
  /** Formats a label for a range of years (used by screen readers). */
  formatYearRangeLabel(start, end) {
    return `${start} to ${end}`;
  }
  static \u0275fac = function MatDatepickerIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatDatepickerIntl,
    factory: _MatDatepickerIntl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var uniqueIdCounter$1 = 0;
var MatCalendarCell = class {
  value;
  displayValue;
  ariaLabel;
  enabled;
  cssClasses;
  compareValue;
  rawValue;
  id = uniqueIdCounter$1++;
  constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.cssClasses = cssClasses;
    this.compareValue = compareValue;
    this.rawValue = rawValue;
  }
};
var activeCapturingEventOptions = {
  passive: false,
  capture: true
};
var passiveCapturingEventOptions = {
  passive: true,
  capture: true
};
var passiveEventOptions = {
  passive: true
};
var MatCalendarBody = class _MatCalendarBody {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _intl = inject(MatDatepickerIntl);
  _eventCleanups;
  /**
   * Used to skip the next focus event when rendering the preview range.
   * We need a flag like this, because some browsers fire focus events asynchronously.
   */
  _skipNextFocus;
  /**
   * Used to focus the active cell after change detection has run.
   */
  _focusActiveCellAfterViewChecked = false;
  /** The label for the table. (e.g. "Jan 2017"). */
  label;
  /** The cells to display in the table. */
  rows;
  /** The value in the table that corresponds to today. */
  todayValue;
  /** Start value of the selected date range. */
  startValue;
  /** End value of the selected date range. */
  endValue;
  /** The minimum number of free cells needed to fit the label in the first row. */
  labelMinRequiredCells;
  /** The number of columns in the table. */
  numCols = 7;
  /** The cell number of the active cell in the table. */
  activeCell = 0;
  ngAfterViewChecked() {
    if (this._focusActiveCellAfterViewChecked) {
      this._focusActiveCell();
      this._focusActiveCellAfterViewChecked = false;
    }
  }
  /** Whether a range is being selected. */
  isRange = false;
  /**
   * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
   * maintained even as the table resizes.
   */
  cellAspectRatio = 1;
  /** Start of the comparison range. */
  comparisonStart;
  /** End of the comparison range. */
  comparisonEnd;
  /** Start of the preview range. */
  previewStart = null;
  /** End of the preview range. */
  previewEnd = null;
  /** ARIA Accessible name of the `<input matStartDate/>` */
  startDateAccessibleName;
  /** ARIA Accessible name of the `<input matEndDate/>` */
  endDateAccessibleName;
  /** Emits when a new value is selected. */
  selectedValueChange = new EventEmitter();
  /** Emits when the preview has changed as a result of a user action. */
  previewChange = new EventEmitter();
  activeDateChange = new EventEmitter();
  /** Emits the date at the possible start of a drag event. */
  dragStarted = new EventEmitter();
  /** Emits the date at the conclusion of a drag, or null if mouse was not released on a date. */
  dragEnded = new EventEmitter();
  /** The number of blank cells to put at the beginning for the first row. */
  _firstRowOffset;
  /** Padding for the individual date cells. */
  _cellPadding;
  /** Width of an individual cell. */
  _cellWidth;
  /** ID for the start date label. */
  _startDateLabelId;
  /** ID for the end date label. */
  _endDateLabelId;
  /** ID for the comparison start date label. */
  _comparisonStartDateLabelId;
  /** ID for the comparison end date label. */
  _comparisonEndDateLabelId;
  _didDragSinceMouseDown = false;
  _injector = inject(Injector);
  comparisonDateAccessibleName = this._intl.comparisonDateLabel;
  /**
   * Tracking function for rows based on their identity. Ideally we would use some sort of
   * key on the row, but that would require a breaking change for the `rows` input. We don't
   * use the built-in identity tracking, because it logs warnings.
   */
  _trackRow = (row) => row;
  constructor() {
    const renderer = inject(Renderer2);
    const idGenerator = inject(_IdGenerator);
    this._startDateLabelId = idGenerator.getId("mat-calendar-body-start-");
    this._endDateLabelId = idGenerator.getId("mat-calendar-body-end-");
    this._comparisonStartDateLabelId = idGenerator.getId("mat-calendar-body-comparison-start-");
    this._comparisonEndDateLabelId = idGenerator.getId("mat-calendar-body-comparison-end-");
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      const cleanups = [
        // `touchmove` is active since we need to call `preventDefault`.
        renderer.listen(element, "touchmove", this._touchmoveHandler, activeCapturingEventOptions),
        renderer.listen(element, "mouseenter", this._enterHandler, passiveCapturingEventOptions),
        renderer.listen(element, "focus", this._enterHandler, passiveCapturingEventOptions),
        renderer.listen(element, "mouseleave", this._leaveHandler, passiveCapturingEventOptions),
        renderer.listen(element, "blur", this._leaveHandler, passiveCapturingEventOptions),
        renderer.listen(element, "mousedown", this._mousedownHandler, passiveEventOptions),
        renderer.listen(element, "touchstart", this._mousedownHandler, passiveEventOptions)
      ];
      if (this._platform.isBrowser) {
        cleanups.push(renderer.listen("window", "mouseup", this._mouseupHandler), renderer.listen("window", "touchend", this._touchendHandler));
      }
      this._eventCleanups = cleanups;
    });
  }
  /** Called when a cell is clicked. */
  _cellClicked(cell, event) {
    if (this._didDragSinceMouseDown) {
      return;
    }
    if (cell.enabled) {
      this.selectedValueChange.emit({
        value: cell.value,
        event
      });
    }
  }
  _emitActiveDateChange(cell, event) {
    if (cell.enabled) {
      this.activeDateChange.emit({
        value: cell.value,
        event
      });
    }
  }
  /** Returns whether a cell should be marked as selected. */
  _isSelected(value) {
    return this.startValue === value || this.endValue === value;
  }
  ngOnChanges(changes) {
    const columnChanges = changes["numCols"];
    const {
      rows,
      numCols
    } = this;
    if (changes["rows"] || columnChanges) {
      this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
    }
    if (changes["cellAspectRatio"] || columnChanges || !this._cellPadding) {
      this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
    }
    if (columnChanges || !this._cellWidth) {
      this._cellWidth = `${100 / numCols}%`;
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
  }
  /** Returns whether a cell is active. */
  _isActiveCell(rowIndex, colIndex) {
    let cellNumber = rowIndex * this.numCols + colIndex;
    if (rowIndex) {
      cellNumber -= this._firstRowOffset;
    }
    return cellNumber == this.activeCell;
  }
  /**
   * Focuses the active cell after the microtask queue is empty.
   *
   * Adding a 0ms setTimeout seems to fix Voiceover losing focus when pressing PageUp/PageDown
   * (issue #24330).
   *
   * Determined a 0ms by gradually increasing duration from 0 and testing two use cases with screen
   * reader enabled:
   *
   * 1. Pressing PageUp/PageDown repeatedly with pausing between each key press.
   * 2. Pressing and holding the PageDown key with repeated keys enabled.
   *
   * Test 1 worked roughly 95-99% of the time with 0ms and got a little bit better as the duration
   * increased. Test 2 got slightly better until the duration was long enough to interfere with
   * repeated keys. If the repeated key speed was faster than the timeout duration, then pressing
   * and holding pagedown caused the entire page to scroll.
   *
   * Since repeated key speed can verify across machines, determined that any duration could
   * potentially interfere with repeated keys. 0ms would be best because it almost entirely
   * eliminates the focus being lost in Voiceover (#24330) without causing unintended side effects.
   * Adding delay also complicates writing tests.
   */
  _focusActiveCell(movePreview = true) {
    afterNextRender(() => {
      setTimeout(() => {
        const activeCell = this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");
        if (activeCell) {
          if (!movePreview) {
            this._skipNextFocus = true;
          }
          activeCell.focus();
        }
      });
    }, {
      injector: this._injector
    });
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _scheduleFocusActiveCellAfterViewChecked() {
    this._focusActiveCellAfterViewChecked = true;
  }
  /** Gets whether a value is the start of the main range. */
  _isRangeStart(value) {
    return isStart(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is the end of the main range. */
  _isRangeEnd(value) {
    return isEnd(value, this.startValue, this.endValue);
  }
  /** Gets whether a value is within the currently-selected range. */
  _isInRange(value) {
    return isInRange(value, this.startValue, this.endValue, this.isRange);
  }
  /** Gets whether a value is the start of the comparison range. */
  _isComparisonStart(value) {
    return isStart(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Whether the cell is a start bridge cell between the main and comparison ranges. */
  _isComparisonBridgeStart(value, rowIndex, colIndex) {
    if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
      return false;
    }
    let previousCell = this.rows[rowIndex][colIndex - 1];
    if (!previousCell) {
      const previousRow = this.rows[rowIndex - 1];
      previousCell = previousRow && previousRow[previousRow.length - 1];
    }
    return previousCell && !this._isRangeEnd(previousCell.compareValue);
  }
  /** Whether the cell is an end bridge cell between the main and comparison ranges. */
  _isComparisonBridgeEnd(value, rowIndex, colIndex) {
    if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
      return false;
    }
    let nextCell = this.rows[rowIndex][colIndex + 1];
    if (!nextCell) {
      const nextRow = this.rows[rowIndex + 1];
      nextCell = nextRow && nextRow[0];
    }
    return nextCell && !this._isRangeStart(nextCell.compareValue);
  }
  /** Gets whether a value is the end of the comparison range. */
  _isComparisonEnd(value) {
    return isEnd(value, this.comparisonStart, this.comparisonEnd);
  }
  /** Gets whether a value is within the current comparison range. */
  _isInComparisonRange(value) {
    return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
  }
  /**
   * Gets whether a value is the same as the start and end of the comparison range.
   * For context, the functions that we use to determine whether something is the start/end of
   * a range don't allow for the start and end to be on the same day, because we'd have to use
   * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
   * the regular range, because when it happens, the selected styles take over and still show where
   * the range would've been, however we don't have these selected styles for a comparison range.
   * This function is used to apply a class that serves the same purpose as the one for selected
   * dates, but it only applies in the context of a comparison range.
   */
  _isComparisonIdentical(value) {
    return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
  }
  /** Gets whether a value is the start of the preview range. */
  _isPreviewStart(value) {
    return isStart(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is the end of the preview range. */
  _isPreviewEnd(value) {
    return isEnd(value, this.previewStart, this.previewEnd);
  }
  /** Gets whether a value is inside the preview range. */
  _isInPreview(value) {
    return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
  }
  /** Gets ids of aria descriptions for the start and end of a date range. */
  _getDescribedby(value) {
    if (!this.isRange) {
      return null;
    }
    if (this.startValue === value && this.endValue === value) {
      return `${this._startDateLabelId} ${this._endDateLabelId}`;
    } else if (this.startValue === value) {
      return this._startDateLabelId;
    } else if (this.endValue === value) {
      return this._endDateLabelId;
    }
    if (this.comparisonStart !== null && this.comparisonEnd !== null) {
      if (value === this.comparisonStart && value === this.comparisonEnd) {
        return `${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;
      } else if (value === this.comparisonStart) {
        return this._comparisonStartDateLabelId;
      } else if (value === this.comparisonEnd) {
        return this._comparisonEndDateLabelId;
      }
    }
    return null;
  }
  /**
   * Event handler for when the user enters an element
   * inside the calendar body (e.g. by hovering in or focus).
   */
  _enterHandler = (event) => {
    if (this._skipNextFocus && event.type === "focus") {
      this._skipNextFocus = false;
      return;
    }
    if (event.target && this.isRange) {
      const cell = this._getCellFromElement(event.target);
      if (cell) {
        this._ngZone.run(() => this.previewChange.emit({
          value: cell.enabled ? cell : null,
          event
        }));
      }
    }
  };
  _touchmoveHandler = (event) => {
    if (!this.isRange) return;
    const target = getActualTouchTarget(event);
    const cell = target ? this._getCellFromElement(target) : null;
    if (target !== event.target) {
      this._didDragSinceMouseDown = true;
    }
    if (getCellElement(event.target)) {
      event.preventDefault();
    }
    this._ngZone.run(() => this.previewChange.emit({
      value: cell?.enabled ? cell : null,
      event
    }));
  };
  /**
   * Event handler for when the user's pointer leaves an element
   * inside the calendar body (e.g. by hovering out or blurring).
   */
  _leaveHandler = (event) => {
    if (this.previewEnd !== null && this.isRange) {
      if (event.type !== "blur") {
        this._didDragSinceMouseDown = true;
      }
      if (event.target && this._getCellFromElement(event.target) && !(event.relatedTarget && this._getCellFromElement(event.relatedTarget))) {
        this._ngZone.run(() => this.previewChange.emit({
          value: null,
          event
        }));
      }
    }
  };
  /**
   * Triggered on mousedown or touchstart on a date cell.
   * Respsonsible for starting a drag sequence.
   */
  _mousedownHandler = (event) => {
    if (!this.isRange) return;
    this._didDragSinceMouseDown = false;
    const cell = event.target && this._getCellFromElement(event.target);
    if (!cell || !this._isInRange(cell.compareValue)) {
      return;
    }
    this._ngZone.run(() => {
      this.dragStarted.emit({
        value: cell.rawValue,
        event
      });
    });
  };
  /** Triggered on mouseup anywhere. Respsonsible for ending a drag sequence. */
  _mouseupHandler = (event) => {
    if (!this.isRange) return;
    const cellElement = getCellElement(event.target);
    if (!cellElement) {
      this._ngZone.run(() => {
        this.dragEnded.emit({
          value: null,
          event
        });
      });
      return;
    }
    if (cellElement.closest(".mat-calendar-body") !== this._elementRef.nativeElement) {
      return;
    }
    this._ngZone.run(() => {
      const cell = this._getCellFromElement(cellElement);
      this.dragEnded.emit({
        value: cell?.rawValue ?? null,
        event
      });
    });
  };
  /** Triggered on touchend anywhere. Respsonsible for ending a drag sequence. */
  _touchendHandler = (event) => {
    const target = getActualTouchTarget(event);
    if (target) {
      this._mouseupHandler({
        target
      });
    }
  };
  /** Finds the MatCalendarCell that corresponds to a DOM node. */
  _getCellFromElement(element) {
    const cell = getCellElement(element);
    if (cell) {
      const row = cell.getAttribute("data-mat-row");
      const col = cell.getAttribute("data-mat-col");
      if (row && col) {
        return this.rows[parseInt(row)][parseInt(col)];
      }
    }
    return null;
  }
  static \u0275fac = function MatCalendarBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCalendarBody)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCalendarBody,
    selectors: [["", "mat-calendar-body", ""]],
    hostAttrs: [1, "mat-calendar-body"],
    inputs: {
      label: "label",
      rows: "rows",
      todayValue: "todayValue",
      startValue: "startValue",
      endValue: "endValue",
      labelMinRequiredCells: "labelMinRequiredCells",
      numCols: "numCols",
      activeCell: "activeCell",
      isRange: "isRange",
      cellAspectRatio: "cellAspectRatio",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd",
      previewStart: "previewStart",
      previewEnd: "previewEnd",
      startDateAccessibleName: "startDateAccessibleName",
      endDateAccessibleName: "endDateAccessibleName"
    },
    outputs: {
      selectedValueChange: "selectedValueChange",
      previewChange: "previewChange",
      activeDateChange: "activeDateChange",
      dragStarted: "dragStarted",
      dragEnded: "dragEnded"
    },
    exportAs: ["matCalendarBody"],
    features: [\u0275\u0275NgOnChangesFeature],
    attrs: _c02,
    decls: 11,
    vars: 11,
    consts: [["aria-hidden", "true"], ["role", "row"], [1, "mat-calendar-body-hidden-label", 3, "id"], [1, "mat-calendar-body-label"], [1, "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "click", "focus", "ngClass", "tabindex"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"]],
    template: function MatCalendarBody_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MatCalendarBody_Conditional_0_Template, 3, 6, "tr", 0);
        \u0275\u0275repeaterCreate(1, MatCalendarBody_For_2_Template, 4, 1, "tr", 1, _forTrack0, true);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 2);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 2);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 2);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx._firstRowOffset < ctx.labelMinRequiredCells ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.rows);
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx._startDateLabelId);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.startDateAccessibleName, "\n");
        \u0275\u0275advance();
        \u0275\u0275property("id", ctx._endDateLabelId);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.endDateAccessibleName, "\n");
        \u0275\u0275advance();
        \u0275\u0275property("id", ctx._comparisonStartDateLabelId);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", ctx.comparisonDateAccessibleName, " ", ctx.startDateAccessibleName, "\n");
        \u0275\u0275advance();
        \u0275\u0275property("id", ctx._comparisonEndDateLabelId);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" ", ctx.comparisonDateAccessibleName, " ", ctx.endDateAccessibleName, "\n");
      }
    },
    dependencies: [NgClass],
    styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary))}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface))}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;margin:0;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary))}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-calendar-body-disabled{opacity:.5}}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));border-color:var(--mat-datepicker-calendar-date-outline-color, transparent)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}@media(forced-colors: active){.mat-calendar-body-cell-content{border:none}}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));color:var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary))}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary))}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container))}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container))}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary))}@media(forced-colors: active){.mat-datepicker-popup:not(:empty),.mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.mat-calendar-body-today{outline:dotted 1px}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-selected{background:none}.mat-calendar-body-in-range::before,.mat-calendar-body-comparison-bridge-start::before,.mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendarBody, [{
    type: Component,
    args: [{
      selector: "[mat-calendar-body]",
      host: {
        "class": "mat-calendar-body"
      },
      exportAs: "matCalendarBody",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgClass],
      template: `<!--
  If there's not enough space in the first row, create a separate label row. We mark this row as
  aria-hidden because we don't want it to be read out as one of the weeks in the month.
-->
@if (_firstRowOffset < labelMinRequiredCells) {
  <tr aria-hidden="true">
    <td class="mat-calendar-body-label"
        [attr.colspan]="numCols"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding">
      {{label}}
    </td>
  </tr>
}

<!-- Create the first row separately so we can include a special spacer cell. -->
@for (row of rows; track _trackRow(row); let rowIndex = $index) {
  <tr role="row">
    <!--
      This cell is purely decorative, but we can't put \`aria-hidden\` or \`role="presentation"\` on it,
      because it throws off the week days for the rest of the row on NVDA. The aspect ratio of the
      table cells is maintained by setting the top and bottom padding as a percentage of the width
      (a variant of the trick described here: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).
    -->
    @if (rowIndex === 0 && _firstRowOffset) {
      <td
        class="mat-calendar-body-label"
        [attr.colspan]="_firstRowOffset"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding">
        {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}
      </td>
    }
    <!--
      Each gridcell in the calendar contains a button, which signals to assistive technology that the
      cell is interactable, as well as the selection state via \`aria-pressed\`. See #23476 for
      background.
    -->
    @for (item of row; track item.id; let colIndex = $index) {
      <td
        role="gridcell"
        class="mat-calendar-body-cell-container"
        [style.width]="_cellWidth"
        [style.paddingTop]="_cellPadding"
        [style.paddingBottom]="_cellPadding"
        [attr.data-mat-row]="rowIndex"
        [attr.data-mat-col]="colIndex"
      >
        <button
            type="button"
            class="mat-calendar-body-cell"
            [ngClass]="item.cssClasses"
            [tabindex]="_isActiveCell(rowIndex, colIndex) ? 0 : -1"
            [class.mat-calendar-body-disabled]="!item.enabled"
            [class.mat-calendar-body-active]="_isActiveCell(rowIndex, colIndex)"
            [class.mat-calendar-body-range-start]="_isRangeStart(item.compareValue)"
            [class.mat-calendar-body-range-end]="_isRangeEnd(item.compareValue)"
            [class.mat-calendar-body-in-range]="_isInRange(item.compareValue)"
            [class.mat-calendar-body-comparison-bridge-start]="_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)"
            [class.mat-calendar-body-comparison-bridge-end]="_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)"
            [class.mat-calendar-body-comparison-start]="_isComparisonStart(item.compareValue)"
            [class.mat-calendar-body-comparison-end]="_isComparisonEnd(item.compareValue)"
            [class.mat-calendar-body-in-comparison-range]="_isInComparisonRange(item.compareValue)"
            [class.mat-calendar-body-preview-start]="_isPreviewStart(item.compareValue)"
            [class.mat-calendar-body-preview-end]="_isPreviewEnd(item.compareValue)"
            [class.mat-calendar-body-in-preview]="_isInPreview(item.compareValue)"
            [attr.aria-label]="item.ariaLabel"
            [attr.aria-disabled]="!item.enabled || null"
            [attr.aria-pressed]="_isSelected(item.compareValue)"
            [attr.aria-current]="todayValue === item.compareValue ? 'date' : null"
            [attr.aria-describedby]="_getDescribedby(item.compareValue)"
            (click)="_cellClicked(item, $event)"
            (focus)="_emitActiveDateChange(item, $event)">
            <span class="mat-calendar-body-cell-content mat-focus-indicator"
              [class.mat-calendar-body-selected]="_isSelected(item.compareValue)"
              [class.mat-calendar-body-comparison-identical]="_isComparisonIdentical(item.compareValue)"
              [class.mat-calendar-body-today]="todayValue === item.compareValue">
              {{item.displayValue}}
            </span>
            <span class="mat-calendar-body-cell-preview" aria-hidden="true"></span>
        </button>
      </td>
    }
  </tr>
}

<span [id]="_startDateLabelId" class="mat-calendar-body-hidden-label">
  {{startDateAccessibleName}}
</span>
<span [id]="_endDateLabelId" class="mat-calendar-body-hidden-label">
  {{endDateAccessibleName}}
</span>
<span [id]="_comparisonStartDateLabelId" class="mat-calendar-body-hidden-label">
  {{comparisonDateAccessibleName}} {{startDateAccessibleName}}
</span>
<span [id]="_comparisonEndDateLabelId" class="mat-calendar-body-hidden-label">
  {{comparisonDateAccessibleName}} {{endDateAccessibleName}}
</span>
`,
      styles: ['.mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary))}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface))}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;margin:0;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary))}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-calendar-body-disabled{opacity:.5}}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));border-color:var(--mat-datepicker-calendar-date-outline-color, transparent)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}@media(forced-colors: active){.mat-calendar-body-cell-content{border:none}}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));color:var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary))}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary))}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container))}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container))}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary))}@media(forced-colors: active){.mat-datepicker-popup:not(:empty),.mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.mat-calendar-body-today{outline:dotted 1px}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-selected{background:none}.mat-calendar-body-in-range::before,.mat-calendar-body-comparison-bridge-start::before,.mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}}\n']
    }]
  }], () => [], {
    label: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    todayValue: [{
      type: Input
    }],
    startValue: [{
      type: Input
    }],
    endValue: [{
      type: Input
    }],
    labelMinRequiredCells: [{
      type: Input
    }],
    numCols: [{
      type: Input
    }],
    activeCell: [{
      type: Input
    }],
    isRange: [{
      type: Input
    }],
    cellAspectRatio: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    previewStart: [{
      type: Input
    }],
    previewEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    selectedValueChange: [{
      type: Output
    }],
    previewChange: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    dragStarted: [{
      type: Output
    }],
    dragEnded: [{
      type: Output
    }]
  });
})();
function isTableCell(node) {
  return node?.nodeName === "TD";
}
function getCellElement(element) {
  let cell;
  if (isTableCell(element)) {
    cell = element;
  } else if (isTableCell(element.parentNode)) {
    cell = element.parentNode;
  } else if (isTableCell(element.parentNode?.parentNode)) {
    cell = element.parentNode.parentNode;
  }
  return cell?.getAttribute("data-mat-row") != null ? cell : null;
}
function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
function getActualTouchTarget(event) {
  const touchLocation = event.changedTouches[0];
  return document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
}
var DateRange = class {
  start;
  end;
  /**
   * Ensures that objects with a `start` and `end` property can't be assigned to a variable that
   * expects a `DateRange`
   */
  // tslint:disable-next-line:no-unused-variable
  _disableStructuralEquivalency;
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};
var MatDateSelectionModel = class _MatDateSelectionModel {
  selection;
  _adapter;
  _selectionChanged = new Subject();
  /** Emits when the selection has changed. */
  selectionChanged = this._selectionChanged;
  constructor(selection, _adapter) {
    this.selection = selection;
    this._adapter = _adapter;
    this.selection = selection;
  }
  /**
   * Updates the current selection in the model.
   * @param value New selection that should be assigned.
   * @param source Object that triggered the selection change.
   */
  updateSelection(value, source) {
    const oldValue = this.selection;
    this.selection = value;
    this._selectionChanged.next({
      selection: value,
      source,
      oldValue
    });
  }
  ngOnDestroy() {
    this._selectionChanged.complete();
  }
  _isValidDateInstance(date) {
    return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
  }
  static \u0275fac = function MatDateSelectionModel_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatDateSelectionModel,
    factory: _MatDateSelectionModel.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: void 0
  }, {
    type: DateAdapter
  }], null);
})();
var MatSingleDateSelectionModel = class _MatSingleDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(null, adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a single date selection, the added date
   * simply overwrites the previous selection
   */
  add(date) {
    super.updateSelection(date, this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    return this.selection != null && this._isValidDateInstance(this.selection);
  }
  /**
   * Checks whether the current selection is complete. In the case of a single date selection, this
   * is true if the current selection is not null.
   */
  isComplete() {
    return this.selection != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _MatSingleDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
  static \u0275fac = function MatSingleDateSelectionModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSingleDateSelectionModel)(\u0275\u0275inject(DateAdapter));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatSingleDateSelectionModel,
    factory: _MatSingleDateSelectionModel.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSingleDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
var MatRangeDateSelectionModel = class _MatRangeDateSelectionModel extends MatDateSelectionModel {
  constructor(adapter) {
    super(new DateRange(null, null), adapter);
  }
  /**
   * Adds a date to the current selection. In the case of a date range selection, the added date
   * fills in the next `null` value in the range. If both the start and the end already have a date,
   * the selection is reset so that the given date is the new `start` and the `end` is null.
   */
  add(date) {
    let {
      start,
      end
    } = this.selection;
    if (start == null) {
      start = date;
    } else if (end == null) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    super.updateSelection(new DateRange(start, end), this);
  }
  /** Checks whether the current selection is valid. */
  isValid() {
    const {
      start,
      end
    } = this.selection;
    if (start == null && end == null) {
      return true;
    }
    if (start != null && end != null) {
      return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
    }
    return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
  }
  /**
   * Checks whether the current selection is complete. In the case of a date range selection, this
   * is true if the current selection has a non-null `start` and `end`.
   */
  isComplete() {
    return this.selection.start != null && this.selection.end != null;
  }
  /** Clones the selection model. */
  clone() {
    const clone = new _MatRangeDateSelectionModel(this._adapter);
    clone.updateSelection(this.selection, this);
    return clone;
  }
  static \u0275fac = function MatRangeDateSelectionModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRangeDateSelectionModel)(\u0275\u0275inject(DateAdapter));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatRangeDateSelectionModel,
    factory: _MatRangeDateSelectionModel.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRangeDateSelectionModel, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatSingleDateSelectionModel(adapter);
}
var MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), MatDateSelectionModel], DateAdapter],
  useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatRangeDateSelectionModel(adapter);
}
var MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[new Optional(), new SkipSelf(), MatDateSelectionModel], DateAdapter],
  useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};
var MAT_DATE_RANGE_SELECTION_STRATEGY = new InjectionToken("MAT_DATE_RANGE_SELECTION_STRATEGY");
var DefaultMatCalendarRangeStrategy = class _DefaultMatCalendarRangeStrategy {
  _dateAdapter;
  constructor(_dateAdapter) {
    this._dateAdapter = _dateAdapter;
  }
  selectionFinished(date, currentRange) {
    let {
      start,
      end
    } = currentRange;
    if (start == null) {
      start = date;
    } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
      end = date;
    } else {
      start = date;
      end = null;
    }
    return new DateRange(start, end);
  }
  createPreview(activeDate, currentRange) {
    let start = null;
    let end = null;
    if (currentRange.start && !currentRange.end && activeDate) {
      start = currentRange.start;
      end = activeDate;
    }
    return new DateRange(start, end);
  }
  createDrag(dragOrigin, originalRange, newDate) {
    let start = originalRange.start;
    let end = originalRange.end;
    if (!start || !end) {
      return null;
    }
    const adapter = this._dateAdapter;
    const isRange = adapter.compareDate(start, end) !== 0;
    const diffYears = adapter.getYear(newDate) - adapter.getYear(dragOrigin);
    const diffMonths = adapter.getMonth(newDate) - adapter.getMonth(dragOrigin);
    const diffDays = adapter.getDate(newDate) - adapter.getDate(dragOrigin);
    if (isRange && adapter.sameDate(dragOrigin, originalRange.start)) {
      start = newDate;
      if (adapter.compareDate(newDate, end) > 0) {
        end = adapter.addCalendarYears(end, diffYears);
        end = adapter.addCalendarMonths(end, diffMonths);
        end = adapter.addCalendarDays(end, diffDays);
      }
    } else if (isRange && adapter.sameDate(dragOrigin, originalRange.end)) {
      end = newDate;
      if (adapter.compareDate(newDate, start) < 0) {
        start = adapter.addCalendarYears(start, diffYears);
        start = adapter.addCalendarMonths(start, diffMonths);
        start = adapter.addCalendarDays(start, diffDays);
      }
    } else {
      start = adapter.addCalendarYears(start, diffYears);
      start = adapter.addCalendarMonths(start, diffMonths);
      start = adapter.addCalendarDays(start, diffDays);
      end = adapter.addCalendarYears(end, diffYears);
      end = adapter.addCalendarMonths(end, diffMonths);
      end = adapter.addCalendarDays(end, diffDays);
    }
    return new DateRange(start, end);
  }
  static \u0275fac = function DefaultMatCalendarRangeStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultMatCalendarRangeStrategy)(\u0275\u0275inject(DateAdapter));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultMatCalendarRangeStrategy,
    factory: _DefaultMatCalendarRangeStrategy.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultMatCalendarRangeStrategy, [{
    type: Injectable
  }], () => [{
    type: DateAdapter
  }], null);
})();
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
var MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[new Optional(), new SkipSelf(), MAT_DATE_RANGE_SELECTION_STRATEGY], DateAdapter],
  useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};
var DAYS_PER_WEEK = 7;
var uniqueIdCounter = 0;
var MatMonthView = class _MatMonthView {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dateFormats = inject(MAT_DATE_FORMATS, {
    optional: true
  });
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _rangeStrategy = inject(MAT_DATE_RANGE_SELECTION_STRATEGY, {
    optional: true
  });
  _rerenderSubscription = Subscription.EMPTY;
  /** Flag used to filter out space/enter keyup events that originated outside of the view. */
  _selectionKeyPressed;
  /**
   * The date to display in this month view (everything other than the month and year is ignored).
   */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    const oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
      this._init();
    }
  }
  _activeDate;
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setRanges(this._selected);
  }
  _selected;
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _minDate;
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _maxDate;
  /** Function used to filter which dates are selectable. */
  dateFilter;
  /** Function that can be used to add custom CSS classes to dates. */
  dateClass;
  /** Start of the comparison range. */
  comparisonStart;
  /** End of the comparison range. */
  comparisonEnd;
  /** ARIA Accessible name of the `<input matStartDate/>` */
  startDateAccessibleName;
  /** ARIA Accessible name of the `<input matEndDate/>` */
  endDateAccessibleName;
  /** Origin of active drag, or null when dragging is not active. */
  activeDrag = null;
  /** Emits when a new date is selected. */
  selectedChange = new EventEmitter();
  /** Emits when any date is selected. */
  _userSelection = new EventEmitter();
  /** Emits when the user initiates a date range drag via mouse or touch. */
  dragStarted = new EventEmitter();
  /**
   * Emits when the user completes or cancels a date range drag.
   * Emits null when the drag was canceled or the newly selected date range if completed.
   */
  dragEnded = new EventEmitter();
  /** Emits when any date is activated. */
  activeDateChange = new EventEmitter();
  /** The body of calendar table */
  _matCalendarBody;
  /** The label for this month (e.g. "January 2017"). */
  _monthLabel;
  /** Grid of calendar cells representing the dates of the month. */
  _weeks;
  /** The number of blank cells in the first row before the 1st of the month. */
  _firstWeekOffset;
  /** Start value of the currently-shown date range. */
  _rangeStart;
  /** End value of the currently-shown date range. */
  _rangeEnd;
  /** Start value of the currently-shown comparison date range. */
  _comparisonRangeStart;
  /** End value of the currently-shown comparison date range. */
  _comparisonRangeEnd;
  /** Start of the preview range. */
  _previewStart;
  /** End of the preview range. */
  _previewEnd;
  /** Whether the user is currently selecting a range of dates. */
  _isRange;
  /** The date of the month that today falls on. Null if today is in another month. */
  _todayDate;
  /** The names of the weekdays. */
  _weekdays;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnChanges(changes) {
    const comparisonChange = changes["comparisonStart"] || changes["comparisonEnd"];
    if (comparisonChange && !comparisonChange.firstChange) {
      this._setRanges(this.selected);
    }
    if (changes["activeDrag"] && !this.activeDrag) {
      this._clearPreview();
    }
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new date is selected. */
  _dateSelected(event) {
    const date = event.value;
    const selectedDate = this._getDateFromDayOfMonth(date);
    let rangeStartDate;
    let rangeEndDate;
    if (this._selected instanceof DateRange) {
      rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
      rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
    } else {
      rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
    }
    if (rangeStartDate !== date || rangeEndDate !== date) {
      this.selectedChange.emit(selectedDate);
    }
    this._userSelection.emit({
      value: selectedDate,
      event: event.event
    });
    this._clearPreview();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromDayOfMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this._activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
        break;
      case PAGE_DOWN:
        this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        if (this._canSelect(this._activeDate)) {
          event.preventDefault();
        }
        return;
      case ESCAPE:
        if (this._previewEnd != null && !hasModifierKey(event)) {
          this._clearPreview();
          if (this.activeDrag) {
            this.dragEnded.emit({
              value: null,
              event
            });
          } else {
            this.selectedChange.emit(null);
            this._userSelection.emit({
              value: null,
              event
            });
          }
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in month view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
        this._dateSelected({
          value: this._dateAdapter.getDate(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this month view. */
  _init() {
    this._setRanges(this.selected);
    this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
    this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
    let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
    this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
    this._initWeekdays();
    this._createWeekCells();
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell(movePreview) {
    this._matCalendarBody._focusActiveCell(movePreview);
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /** Called when the user has activated a new cell and the preview needs to be updated. */
  _previewChanged({
    event,
    value: cell
  }) {
    if (this._rangeStrategy) {
      const value = cell ? cell.rawValue : null;
      const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
      this._previewStart = this._getCellCompareValue(previewRange.start);
      this._previewEnd = this._getCellCompareValue(previewRange.end);
      if (this.activeDrag && value) {
        const dragRange = this._rangeStrategy.createDrag?.(this.activeDrag.value, this.selected, value, event);
        if (dragRange) {
          this._previewStart = this._getCellCompareValue(dragRange.start);
          this._previewEnd = this._getCellCompareValue(dragRange.end);
        }
      }
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Called when the user has ended a drag. If the drag/drop was successful,
   * computes and emits the new range selection.
   */
  _dragEnded(event) {
    if (!this.activeDrag) return;
    if (event.value) {
      const dragDropResult = this._rangeStrategy?.createDrag?.(this.activeDrag.value, this.selected, event.value, event.event);
      this.dragEnded.emit({
        value: dragDropResult ?? null,
        event: event.event
      });
    } else {
      this.dragEnded.emit({
        value: null,
        event: event.event
      });
    }
  }
  /**
   * Takes a day of the month and returns a new date in the same month and year as the currently
   *  active date. The returned date will have the same day of the month as the argument date.
   */
  _getDateFromDayOfMonth(dayOfMonth) {
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), dayOfMonth);
  }
  /** Initializes the weekdays. */
  _initWeekdays() {
    const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this._dateAdapter.getDayOfWeekNames("narrow");
    const longWeekdays = this._dateAdapter.getDayOfWeekNames("long");
    let weekdays = longWeekdays.map((long, i) => {
      return {
        long,
        narrow: narrowWeekdays[i],
        id: uniqueIdCounter++
      };
    });
    this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
  }
  /** Creates MatCalendarCells for the dates in this month. */
  _createWeekCells() {
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this._dateAdapter.getDateNames();
    this._weeks = [[]];
    for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
      if (cell == DAYS_PER_WEEK) {
        this._weeks.push([]);
        cell = 0;
      }
      const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
      const enabled = this._shouldEnableDate(date);
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
      const cellClasses = this.dateClass ? this.dateClass(date, "month") : void 0;
      this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
    }
  }
  /** Date filter for the month */
  _shouldEnableDate(date) {
    return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
  }
  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  _getDateInCurrentMonth(date) {
    return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
  }
  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  _hasSameMonthAndYear(d1, d2) {
    return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
  }
  /** Gets the value that will be used to one cell to another. */
  _getCellCompareValue(date) {
    if (date) {
      const year = this._dateAdapter.getYear(date);
      const month = this._dateAdapter.getMonth(date);
      const day = this._dateAdapter.getDate(date);
      return new Date(year, month, day).getTime();
    }
    return null;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the current range based on a model value. */
  _setRanges(selectedValue) {
    if (selectedValue instanceof DateRange) {
      this._rangeStart = this._getCellCompareValue(selectedValue.start);
      this._rangeEnd = this._getCellCompareValue(selectedValue.end);
      this._isRange = true;
    } else {
      this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
      this._isRange = false;
    }
    this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
    this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
  }
  /** Gets whether a date can be selected in the month view. */
  _canSelect(date) {
    return !this.dateFilter || this.dateFilter(date);
  }
  /** Clears out preview state. */
  _clearPreview() {
    this._previewStart = this._previewEnd = null;
  }
  static \u0275fac = function MatMonthView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMonthView)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMonthView,
    selectors: [["mat-month-view"]],
    viewQuery: function MatMonthView_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatCalendarBody, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
      }
    },
    inputs: {
      activeDate: "activeDate",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd",
      startDateAccessibleName: "startDateAccessibleName",
      endDateAccessibleName: "endDateAccessibleName",
      activeDrag: "activeDrag"
    },
    outputs: {
      selectedChange: "selectedChange",
      _userSelection: "_userSelection",
      dragStarted: "dragStarted",
      dragEnded: "dragEnded",
      activeDateChange: "activeDateChange"
    },
    exportAs: ["matMonthView"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 8,
    vars: 14,
    consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col"], ["aria-hidden", "true"], ["colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName"], [1, "cdk-visually-hidden"]],
    template: function MatMonthView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
        \u0275\u0275repeaterCreate(3, MatMonthView_For_4_Template, 5, 2, "th", 2, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "tr", 3);
        \u0275\u0275element(6, "th", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "tbody", 5);
        \u0275\u0275listener("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_7_listener($event) {
          return ctx._dateSelected($event);
        })("activeDateChange", function MatMonthView_Template_tbody_activeDateChange_7_listener($event) {
          return ctx._updateActiveDate($event);
        })("previewChange", function MatMonthView_Template_tbody_previewChange_7_listener($event) {
          return ctx._previewChanged($event);
        })("dragStarted", function MatMonthView_Template_tbody_dragStarted_7_listener($event) {
          return ctx.dragStarted.emit($event);
        })("dragEnded", function MatMonthView_Template_tbody_dragEnded_7_listener($event) {
          return ctx._dragEnded($event);
        })("keyup", function MatMonthView_Template_tbody_keyup_7_listener($event) {
          return ctx._handleCalendarBodyKeyup($event);
        })("keydown", function MatMonthView_Template_tbody_keydown_7_listener($event) {
          return ctx._handleCalendarBodyKeydown($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx._weekdays);
        \u0275\u0275advance(4);
        \u0275\u0275property("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
      }
    },
    dependencies: [MatCalendarBody],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMonthView, [{
    type: Component,
    args: [{
      selector: "mat-month-view",
      exportAs: "matMonthView",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead class="mat-calendar-table-header">\n    <tr>\n      @for (day of _weekdays; track day.id) {\n        <th scope="col">\n          <span class="cdk-visually-hidden">{{day.long}}</span>\n          <span aria-hidden="true">{{day.narrow}}</span>\n        </th>\n      }\n    </tr>\n    <tr aria-hidden="true"><th class="mat-calendar-table-header-divider" colspan="7"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]="_monthLabel"\n         [rows]="_weeks"\n         [todayValue]="_todayDate!"\n         [startValue]="_rangeStart!"\n         [endValue]="_rangeEnd!"\n         [comparisonStart]="_comparisonRangeStart"\n         [comparisonEnd]="_comparisonRangeEnd"\n         [previewStart]="_previewStart"\n         [previewEnd]="_previewEnd"\n         [isRange]="_isRange"\n         [labelMinRequiredCells]="3"\n         [activeCell]="_dateAdapter.getDate(activeDate) - 1"\n         [startDateAccessibleName]="startDateAccessibleName"\n         [endDateAccessibleName]="endDateAccessibleName"\n         (selectedValueChange)="_dateSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (previewChange)="_previewChanged($event)"\n         (dragStarted)="dragStarted.emit($event)"\n         (dragEnded)="_dragEnded($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    activeDrag: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    dragStarted: [{
      type: Output
    }],
    dragEnded: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
var yearsPerPage = 24;
var yearsPerRow = 4;
var MatMultiYearView = class _MatMultiYearView {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _rerenderSubscription = Subscription.EMPTY;
  /** Flag used to filter out space/enter keyup events that originated outside of the view. */
  _selectionKeyPressed;
  /** The date to display in this multi-year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
      this._init();
    }
  }
  _activeDate;
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedYear(value);
  }
  _selected;
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _minDate;
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _maxDate;
  /** A function used to filter which dates are selectable. */
  dateFilter;
  /** Function that can be used to add custom CSS classes to date cells. */
  dateClass;
  /** Emits when a new year is selected. */
  selectedChange = new EventEmitter();
  /** Emits the selected year. This doesn't imply a change on the selected date */
  yearSelected = new EventEmitter();
  /** Emits when any date is activated. */
  activeDateChange = new EventEmitter();
  /** The body of calendar table */
  _matCalendarBody;
  /** Grid of calendar cells representing the currently displayed years. */
  _years;
  /** The year that today falls on. */
  _todayYear;
  /** The year of the selected date. Null if the selected date is null. */
  _selectedYear;
  constructor() {
    if (!this._dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Initializes this multi-year view. */
  _init() {
    this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
    const activeYear = this._dateAdapter.getYear(this._activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    this._years = [];
    for (let i = 0, row = []; i < yearsPerPage; i++) {
      row.push(minYearOfPage + i);
      if (row.length == yearsPerRow) {
        this._years.push(row.map((year) => this._createCellForYear(year)));
        row = [];
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Handles when a new year is selected. */
  _yearSelected(event) {
    const year = event.value;
    const selectedYear = this._dateAdapter.createDate(year, 0, 1);
    const selectedDate = this._getDateFromYear(year);
    this.yearSelected.emit(selectedYear);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const year = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromYear(year);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
    this._focusActiveCellAfterViewChecked();
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in multi-year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._yearSelected({
          value: this._dateAdapter.getYear(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  _getActiveCell() {
    return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Focuses the active cell after change detection has run and the microtask queue is empty. */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Takes a year and returns a new date on the same day and month as the currently active date
   *  The returned date will have the same year as the argument date.
   */
  _getDateFromYear(year) {
    const activeMonth = this._dateAdapter.getMonth(this.activeDate);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, activeMonth, 1));
    const normalizedDate = this._dateAdapter.createDate(year, activeMonth, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
    return normalizedDate;
  }
  /** Creates an MatCalendarCell for the given year. */
  _createCellForYear(year) {
    const date = this._dateAdapter.createDate(year, 0, 1);
    const yearName = this._dateAdapter.getYearName(date);
    const cellClasses = this.dateClass ? this.dateClass(date, "multi-year") : void 0;
    return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
  }
  /** Whether the given year is enabled. */
  _shouldEnableYear(year) {
    if (year === void 0 || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
    for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-highlighted year based on a model value. */
  _setSelectedYear(value) {
    this._selectedYear = null;
    if (value instanceof DateRange) {
      const displayValue = value.start || value.end;
      if (displayValue) {
        this._selectedYear = this._dateAdapter.getYear(displayValue);
      }
    } else if (value) {
      this._selectedYear = this._dateAdapter.getYear(value);
    }
  }
  static \u0275fac = function MatMultiYearView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatMultiYearView)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatMultiYearView,
    selectors: [["mat-multi-year-view"]],
    viewQuery: function MatMultiYearView_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatCalendarBody, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
      }
    },
    inputs: {
      activeDate: "activeDate",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass"
    },
    outputs: {
      selectedChange: "selectedChange",
      yearSelected: "yearSelected",
      activeDateChange: "activeDateChange"
    },
    exportAs: ["matMultiYearView"],
    decls: 5,
    vars: 7,
    consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell"]],
    template: function MatMultiYearView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
        \u0275\u0275element(3, "th", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "tbody", 3);
        \u0275\u0275listener("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
          return ctx._yearSelected($event);
        })("activeDateChange", function MatMultiYearView_Template_tbody_activeDateChange_4_listener($event) {
          return ctx._updateActiveDate($event);
        })("keyup", function MatMultiYearView_Template_tbody_keyup_4_listener($event) {
          return ctx._handleCalendarBodyKeyup($event);
        })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
          return ctx._handleCalendarBodyKeydown($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
      }
    },
    dependencies: [MatCalendarBody],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatMultiYearView, [{
    type: Component,
    args: [{
      selector: "mat-multi-year-view",
      exportAs: "matMultiYearView",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead aria-hidden="true" class="mat-calendar-table-header">\n    <tr><th class="mat-calendar-table-header-divider" colspan="4"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]="_years"\n         [todayValue]="_todayYear"\n         [startValue]="_selectedYear!"\n         [endValue]="_selectedYear!"\n         [numCols]="4"\n         [cellAspectRatio]="4 / 7"\n         [activeCell]="_getActiveCell()"\n         (selectedValueChange)="_yearSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}
var MatYearView = class _MatYearView {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dateFormats = inject(MAT_DATE_FORMATS, {
    optional: true
  });
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _rerenderSubscription = Subscription.EMPTY;
  /** Flag used to filter out space/enter keyup events that originated outside of the view. */
  _selectionKeyPressed;
  /** The date to display in this year view (everything other than the year is ignored). */
  get activeDate() {
    return this._activeDate;
  }
  set activeDate(value) {
    let oldActiveDate = this._activeDate;
    const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
    this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
      this._init();
    }
  }
  _activeDate;
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    this._setSelectedMonth(value);
  }
  _selected;
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _minDate;
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _maxDate;
  /** A function used to filter which dates are selectable. */
  dateFilter;
  /** Function that can be used to add custom CSS classes to date cells. */
  dateClass;
  /** Emits when a new month is selected. */
  selectedChange = new EventEmitter();
  /** Emits the selected month. This doesn't imply a change on the selected date */
  monthSelected = new EventEmitter();
  /** Emits when any date is activated. */
  activeDateChange = new EventEmitter();
  /** The body of calendar table */
  _matCalendarBody;
  /** Grid of calendar cells representing the months of the year. */
  _months;
  /** The label for this year (e.g. "2017"). */
  _yearLabel;
  /** The month in this year that today falls on. Null if today is in a different year. */
  _todayMonth;
  /**
   * The month in this year that the selected Date falls on.
   * Null if the selected Date is in a different year.
   */
  _selectedMonth;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._activeDate = this._dateAdapter.today();
  }
  ngAfterContentInit() {
    this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(startWith(null)).subscribe(() => this._init());
  }
  ngOnDestroy() {
    this._rerenderSubscription.unsubscribe();
  }
  /** Handles when a new month is selected. */
  _monthSelected(event) {
    const month = event.value;
    const selectedMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    this.monthSelected.emit(selectedMonth);
    const selectedDate = this._getDateFromMonth(month);
    this.selectedChange.emit(selectedDate);
  }
  /**
   * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
   * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
   * that date.
   *
   * This function is used to match each component's model of the active date with the calendar
   * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
   * parent's value asynchronously via the `activeDateChange` event. The child component receives an
   * updated value asynchronously via the `activeCell` Input.
   */
  _updateActiveDate(event) {
    const month = event.value;
    const oldActiveDate = this._activeDate;
    this.activeDate = this._getDateFromMonth(month);
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }
  }
  /** Handles keydown events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeydown(event) {
    const oldActiveDate = this._activeDate;
    const isRtl = this._isRtl();
    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
        break;
      case UP_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
        break;
      case DOWN_ARROW:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
        break;
      case HOME:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
        break;
      case END:
        this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
        break;
      case PAGE_UP:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
        break;
      case PAGE_DOWN:
        this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
        break;
      case ENTER:
      case SPACE:
        this._selectionKeyPressed = true;
        break;
      default:
        return;
    }
    if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
      this._focusActiveCellAfterViewChecked();
    }
    event.preventDefault();
  }
  /** Handles keyup events on the calendar body when calendar is in year view. */
  _handleCalendarBodyKeyup(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this._selectionKeyPressed) {
        this._monthSelected({
          value: this._dateAdapter.getMonth(this._activeDate),
          event
        });
      }
      this._selectionKeyPressed = false;
    }
  }
  /** Initializes this year view. */
  _init() {
    this._setSelectedMonth(this.selected);
    this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
    this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
    let monthNames = this._dateAdapter.getMonthNames("short");
    this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map((row) => row.map((month) => this._createCellForMonth(month, monthNames[month])));
    this._changeDetectorRef.markForCheck();
  }
  /** Focuses the active cell after the microtask queue is empty. */
  _focusActiveCell() {
    this._matCalendarBody._focusActiveCell();
  }
  /** Schedules the matCalendarBody to focus the active cell after change detection has run */
  _focusActiveCellAfterViewChecked() {
    this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
  }
  /**
   * Gets the month in this year that the given Date falls on.
   * Returns null if the given Date is in another year.
   */
  _getMonthInCurrentYear(date) {
    return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
  }
  /**
   * Takes a month and returns a new date in the same day and year as the currently active date.
   *  The returned date will have the same month as the argument date.
   */
  _getDateFromMonth(month) {
    const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
    return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
  }
  /** Creates an MatCalendarCell for the given month. */
  _createCellForMonth(month, monthName) {
    const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
    const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
    const cellClasses = this.dateClass ? this.dateClass(date, "year") : void 0;
    return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
  }
  /** Whether the given month is enabled. */
  _shouldEnableMonth(month) {
    const activeYear = this._dateAdapter.getYear(this.activeDate);
    if (month === void 0 || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
      return false;
    }
    if (!this.dateFilter) {
      return true;
    }
    const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
    for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
      if (this.dateFilter(date)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is after this.maxDate, considering
   * just the month and year of this.maxDate
   */
  _isYearAndMonthAfterMaxDate(year, month) {
    if (this.maxDate) {
      const maxYear = this._dateAdapter.getYear(this.maxDate);
      const maxMonth = this._dateAdapter.getMonth(this.maxDate);
      return year > maxYear || year === maxYear && month > maxMonth;
    }
    return false;
  }
  /**
   * Tests whether the combination month/year is before this.minDate, considering
   * just the month and year of this.minDate
   */
  _isYearAndMonthBeforeMinDate(year, month) {
    if (this.minDate) {
      const minYear = this._dateAdapter.getYear(this.minDate);
      const minMonth = this._dateAdapter.getMonth(this.minDate);
      return year < minYear || year === minYear && month < minMonth;
    }
    return false;
  }
  /** Determines whether the user has the RTL layout direction. */
  _isRtl() {
    return this._dir && this._dir.value === "rtl";
  }
  /** Sets the currently-selected month based on a model value. */
  _setSelectedMonth(value) {
    if (value instanceof DateRange) {
      this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
    } else {
      this._selectedMonth = this._getMonthInCurrentYear(value);
    }
  }
  static \u0275fac = function MatYearView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatYearView)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatYearView,
    selectors: [["mat-year-view"]],
    viewQuery: function MatYearView_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatCalendarBody, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._matCalendarBody = _t.first);
      }
    },
    inputs: {
      activeDate: "activeDate",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass"
    },
    outputs: {
      selectedChange: "selectedChange",
      monthSelected: "monthSelected",
      activeDateChange: "activeDateChange"
    },
    exportAs: ["matYearView"],
    decls: 5,
    vars: 9,
    consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell"]],
    template: function MatYearView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "table", 0)(1, "thead", 1)(2, "tr");
        \u0275\u0275element(3, "th", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "tbody", 3);
        \u0275\u0275listener("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
          return ctx._monthSelected($event);
        })("activeDateChange", function MatYearView_Template_tbody_activeDateChange_4_listener($event) {
          return ctx._updateActiveDate($event);
        })("keyup", function MatYearView_Template_tbody_keyup_4_listener($event) {
          return ctx._handleCalendarBodyKeyup($event);
        })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
          return ctx._handleCalendarBodyKeydown($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
      }
    },
    dependencies: [MatCalendarBody],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatYearView, [{
    type: Component,
    args: [{
      selector: "mat-year-view",
      exportAs: "matYearView",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatCalendarBody],
      template: '<table class="mat-calendar-table" role="grid">\n  <thead aria-hidden="true" class="mat-calendar-table-header">\n    <tr><th class="mat-calendar-table-header-divider" colspan="4"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]="_yearLabel"\n         [rows]="_months"\n         [todayValue]="_todayMonth!"\n         [startValue]="_selectedMonth!"\n         [endValue]="_selectedMonth!"\n         [labelMinRequiredCells]="2"\n         [numCols]="4"\n         [cellAspectRatio]="4 / 7"\n         [activeCell]="_dateAdapter.getMonth(activeDate)"\n         (selectedValueChange)="_monthSelected($event)"\n         (activeDateChange)="_updateActiveDate($event)"\n         (keyup)="_handleCalendarBodyKeyup($event)"\n         (keydown)="_handleCalendarBodyKeydown($event)">\n  </tbody>\n</table>\n'
    }]
  }], () => [], {
    activeDate: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    activeDateChange: [{
      type: Output
    }],
    _matCalendarBody: [{
      type: ViewChild,
      args: [MatCalendarBody]
    }]
  });
})();
var MatCalendarHeader = class _MatCalendarHeader {
  _intl = inject(MatDatepickerIntl);
  calendar = inject(MatCalendar);
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dateFormats = inject(MAT_DATE_FORMATS, {
    optional: true
  });
  _periodButtonText;
  _periodButtonDescription;
  _periodButtonLabel;
  _prevButtonLabel;
  _nextButtonLabel;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    const changeDetectorRef = inject(ChangeDetectorRef);
    this._updateLabels();
    this.calendar.stateChanges.subscribe(() => {
      this._updateLabels();
      changeDetectorRef.markForCheck();
    });
  }
  /** The display text for the current calendar view. */
  get periodButtonText() {
    return this._periodButtonText;
  }
  /** The aria description for the current calendar view. */
  get periodButtonDescription() {
    return this._periodButtonDescription;
  }
  /** The `aria-label` for changing the calendar view. */
  get periodButtonLabel() {
    return this._periodButtonLabel;
  }
  /** The label for the previous button. */
  get prevButtonLabel() {
    return this._prevButtonLabel;
  }
  /** The label for the next button. */
  get nextButtonLabel() {
    return this._nextButtonLabel;
  }
  /** Handles user clicks on the period label. */
  currentPeriodClicked() {
    this.calendar.currentView = this.calendar.currentView == "month" ? "multi-year" : "month";
  }
  /** Handles user clicks on the previous button. */
  previousClicked() {
    this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? -1 : -yearsPerPage);
  }
  /** Handles user clicks on the next button. */
  nextClicked() {
    this.calendar.activeDate = this.calendar.currentView == "month" ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == "year" ? 1 : yearsPerPage);
  }
  /** Whether the previous period button is enabled. */
  previousEnabled() {
    if (!this.calendar.minDate) {
      return true;
    }
    return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
  }
  /** Whether the next period button is enabled. */
  nextEnabled() {
    return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
  }
  /** Updates the labels for the various sections of the header. */
  _updateLabels() {
    const calendar = this.calendar;
    const intl = this._intl;
    const adapter = this._dateAdapter;
    if (calendar.currentView === "month") {
      this._periodButtonText = adapter.format(calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
      this._periodButtonDescription = adapter.format(calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
      this._periodButtonLabel = intl.switchToMultiYearViewLabel;
      this._prevButtonLabel = intl.prevMonthLabel;
      this._nextButtonLabel = intl.nextMonthLabel;
    } else if (calendar.currentView === "year") {
      this._periodButtonText = adapter.getYearName(calendar.activeDate);
      this._periodButtonDescription = adapter.getYearName(calendar.activeDate);
      this._periodButtonLabel = intl.switchToMonthViewLabel;
      this._prevButtonLabel = intl.prevYearLabel;
      this._nextButtonLabel = intl.nextYearLabel;
    } else {
      this._periodButtonText = intl.formatYearRange(...this._formatMinAndMaxYearLabels());
      this._periodButtonDescription = intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
      this._periodButtonLabel = intl.switchToMonthViewLabel;
      this._prevButtonLabel = intl.prevMultiYearLabel;
      this._nextButtonLabel = intl.nextMultiYearLabel;
    }
  }
  /** Whether the two dates represent the same view in the current view mode (month or year). */
  _isSameView(date1, date2) {
    if (this.calendar.currentView == "month") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
    }
    if (this.calendar.currentView == "year") {
      return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
    }
    return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
  }
  /**
   * Format two individual labels for the minimum year and maximum year available in the multi-year
   * calendar view. Returns an array of two strings where the first string is the formatted label
   * for the minimum year, and the second string is the formatted label for the maximum year.
   */
  _formatMinAndMaxYearLabels() {
    const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
    const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
    const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
    const minYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
    const maxYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
    return [minYearLabel, maxYearLabel];
  }
  _periodButtonLabelId = inject(_IdGenerator).getId("mat-calendar-period-label-");
  static \u0275fac = function MatCalendarHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCalendarHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCalendarHeader,
    selectors: [["mat-calendar-header"]],
    exportAs: ["matCalendarHeader"],
    ngContentSelectors: _c12,
    decls: 17,
    vars: 11,
    consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["aria-live", "polite", 1, "cdk-visually-hidden", 3, "id"], ["matButton", "", "type", "button", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["matIconButton", "", "type", "button", 1, "mat-calendar-previous-button", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["matIconButton", "", "type", "button", 1, "mat-calendar-next-button", 3, "click", "disabled"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],
    template: function MatCalendarHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 3);
        \u0275\u0275listener("click", function MatCalendarHeader_Template_button_click_4_listener() {
          return ctx.currentPeriodClicked();
        });
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 5);
        \u0275\u0275element(8, "polygon", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(9, "div", 7);
        \u0275\u0275projection(10);
        \u0275\u0275elementStart(11, "button", 8);
        \u0275\u0275listener("click", function MatCalendarHeader_Template_button_click_11_listener() {
          return ctx.previousClicked();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 9);
        \u0275\u0275element(13, "path", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "button", 11);
        \u0275\u0275listener("click", function MatCalendarHeader_Template_button_click_14_listener() {
          return ctx.nextClicked();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 9);
        \u0275\u0275element(16, "path", 12);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx._periodButtonLabelId);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.periodButtonDescription);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._periodButtonLabelId);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.periodButtonText);
        \u0275\u0275advance();
        \u0275\u0275classProp("mat-calendar-invert", ctx.calendar.currentView !== "month");
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.previousEnabled());
        \u0275\u0275attribute("aria-label", ctx.prevButtonLabel);
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.nextEnabled());
        \u0275\u0275attribute("aria-label", ctx.nextButtonLabel);
      }
    },
    dependencies: [MatButton, MatIconButton],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendarHeader, [{
    type: Component,
    args: [{
      selector: "mat-calendar-header",
      exportAs: "matCalendarHeader",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatButton, MatIconButton],
      template: `<div class="mat-calendar-header">
  <div class="mat-calendar-controls">
    <!-- [Firefox Issue: https://bugzilla.mozilla.org/show_bug.cgi?id=1880533]
      Relocated label next to related button and made visually hidden via cdk-visually-hidden
      to enable label to appear in a11y tree for SR when using Firefox -->
    <span [id]="_periodButtonLabelId" class="cdk-visually-hidden" aria-live="polite">{{periodButtonDescription}}</span>
    <button matButton type="button" class="mat-calendar-period-button"
            (click)="currentPeriodClicked()" [attr.aria-label]="periodButtonLabel"
            [attr.aria-describedby]="_periodButtonLabelId">
      <span aria-hidden="true">{{periodButtonText}}</span>
      <svg class="mat-calendar-arrow" [class.mat-calendar-invert]="calendar.currentView !== 'month'"
           viewBox="0 0 10 5" focusable="false" aria-hidden="true">
           <polygon points="0,0 5,5 10,0"/>
      </svg>
    </button>

    <div class="mat-calendar-spacer"></div>

    <ng-content></ng-content>

    <button matIconButton type="button" class="mat-calendar-previous-button"
            [disabled]="!previousEnabled()" (click)="previousClicked()"
            [attr.aria-label]="prevButtonLabel">
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
       </svg>
    </button>

    <button matIconButton type="button" class="mat-calendar-next-button"
            [disabled]="!nextEnabled()" (click)="nextClicked()"
            [attr.aria-label]="nextButtonLabel">
      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </svg>
    </button>
  </div>
</div>
`
    }]
  }], () => [], null);
})();
var MatCalendar = class _MatCalendar {
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dateFormats = inject(MAT_DATE_FORMATS, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  /** An input indicating the type of the header component, if set. */
  headerComponent;
  /** A portal containing the header component type for this calendar. */
  _calendarHeaderPortal;
  _intlChanges;
  /**
   * Used for scheduling that focus should be moved to the active cell on the next tick.
   * We need to schedule it, rather than do it immediately, because we have to wait
   * for Angular to re-evaluate the view children.
   */
  _moveFocusOnNextTick = false;
  /** A date representing the period (month or year) to start the calendar in. */
  get startAt() {
    return this._startAt;
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _startAt;
  /** Whether the calendar should be started in month or year view. */
  startView = "month";
  /** The currently selected date. */
  get selected() {
    return this._selected;
  }
  set selected(value) {
    if (value instanceof DateRange) {
      this._selected = value;
    } else {
      this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
  }
  _selected;
  /** The minimum selectable date. */
  get minDate() {
    return this._minDate;
  }
  set minDate(value) {
    this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _minDate;
  /** The maximum selectable date. */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(value) {
    this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _maxDate;
  /** Function used to filter which dates are selectable. */
  dateFilter;
  /** Function that can be used to add custom CSS classes to dates. */
  dateClass;
  /** Start of the comparison range. */
  comparisonStart;
  /** End of the comparison range. */
  comparisonEnd;
  /** ARIA Accessible name of the `<input matStartDate/>` */
  startDateAccessibleName;
  /** ARIA Accessible name of the `<input matEndDate/>` */
  endDateAccessibleName;
  /** Emits when the currently selected date changes. */
  selectedChange = new EventEmitter();
  /**
   * Emits the year chosen in multiyear view.
   * This doesn't imply a change on the selected date.
   */
  yearSelected = new EventEmitter();
  /**
   * Emits the month chosen in year view.
   * This doesn't imply a change on the selected date.
   */
  monthSelected = new EventEmitter();
  /**
   * Emits when the current view changes.
   */
  viewChanged = new EventEmitter(true);
  /** Emits when any date is selected. */
  _userSelection = new EventEmitter();
  /** Emits a new date range value when the user completes a drag drop operation. */
  _userDragDrop = new EventEmitter();
  /** Reference to the current month view component. */
  monthView;
  /** Reference to the current year view component. */
  yearView;
  /** Reference to the current multi-year view component. */
  multiYearView;
  /**
   * The current active date. This determines which time period is shown and which date is
   * highlighted when using keyboard navigation.
   */
  get activeDate() {
    return this._clampedActiveDate;
  }
  set activeDate(value) {
    this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
    this.stateChanges.next();
    this._changeDetectorRef.markForCheck();
  }
  _clampedActiveDate;
  /** Whether the calendar is in month view. */
  get currentView() {
    return this._currentView;
  }
  set currentView(value) {
    const viewChangedResult = this._currentView !== value ? value : null;
    this._currentView = value;
    this._moveFocusOnNextTick = true;
    this._changeDetectorRef.markForCheck();
    if (viewChangedResult) {
      this.stateChanges.next();
      this.viewChanged.emit(viewChangedResult);
    }
  }
  _currentView;
  /** Origin of active drag, or null when dragging is not active. */
  _activeDrag = null;
  /**
   * Emits whenever there is a state change that the header may need to respond to.
   */
  stateChanges = new Subject();
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._intlChanges = inject(MatDatepickerIntl).changes.subscribe(() => {
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    });
  }
  ngAfterContentInit() {
    this._calendarHeaderPortal = new ComponentPortal(this.headerComponent || MatCalendarHeader);
    this.activeDate = this.startAt || this._dateAdapter.today();
    this._currentView = this.startView;
  }
  ngAfterViewChecked() {
    if (this._moveFocusOnNextTick) {
      this._moveFocusOnNextTick = false;
      this.focusActiveCell();
    }
  }
  ngOnDestroy() {
    this._intlChanges.unsubscribe();
    this.stateChanges.complete();
  }
  ngOnChanges(changes) {
    const minDateChange = changes["minDate"] && !this._dateAdapter.sameDate(changes["minDate"].previousValue, changes["minDate"].currentValue) ? changes["minDate"] : void 0;
    const maxDateChange = changes["maxDate"] && !this._dateAdapter.sameDate(changes["maxDate"].previousValue, changes["maxDate"].currentValue) ? changes["maxDate"] : void 0;
    const changeRequiringRerender = minDateChange || maxDateChange || changes["dateFilter"];
    if (changeRequiringRerender && !changeRequiringRerender.firstChange) {
      const view = this._getCurrentViewComponent();
      if (view) {
        if (this._elementRef.nativeElement.contains(_getFocusedElementPierceShadowDom())) {
          this._moveFocusOnNextTick = true;
        }
        this._changeDetectorRef.detectChanges();
        view._init();
      }
    }
    this.stateChanges.next();
  }
  /** Focuses the active date. */
  focusActiveCell() {
    this._getCurrentViewComponent()._focusActiveCell(false);
  }
  /** Updates today's date after an update of the active date */
  updateTodaysDate() {
    this._getCurrentViewComponent()._init();
  }
  /** Handles date selection in the month view. */
  _dateSelected(event) {
    const date = event.value;
    if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
      this.selectedChange.emit(date);
    }
    this._userSelection.emit(event);
  }
  /** Handles year selection in the multiyear view. */
  _yearSelectedInMultiYearView(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Handles month selection in the year view. */
  _monthSelectedInYearView(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Handles year/month selection in the multi-year/year views. */
  _goToDateInView(date, view) {
    this.activeDate = date;
    this.currentView = view;
  }
  /** Called when the user starts dragging to change a date range. */
  _dragStarted(event) {
    this._activeDrag = event;
  }
  /**
   * Called when a drag completes. It may end in cancelation or in the selection
   * of a new range.
   */
  _dragEnded(event) {
    if (!this._activeDrag) return;
    if (event.value) {
      this._userDragDrop.emit(event);
    }
    this._activeDrag = null;
  }
  /** Returns the component instance that corresponds to the current calendar view. */
  _getCurrentViewComponent() {
    return this.monthView || this.yearView || this.multiYearView;
  }
  static \u0275fac = function MatCalendar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCalendar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCalendar,
    selectors: [["mat-calendar"]],
    viewQuery: function MatCalendar_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatMonthView, 5);
        \u0275\u0275viewQuery(MatYearView, 5);
        \u0275\u0275viewQuery(MatMultiYearView, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.monthView = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.yearView = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.multiYearView = _t.first);
      }
    },
    hostAttrs: [1, "mat-calendar"],
    inputs: {
      headerComponent: "headerComponent",
      startAt: "startAt",
      startView: "startView",
      selected: "selected",
      minDate: "minDate",
      maxDate: "maxDate",
      dateFilter: "dateFilter",
      dateClass: "dateClass",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd",
      startDateAccessibleName: "startDateAccessibleName",
      endDateAccessibleName: "endDateAccessibleName"
    },
    outputs: {
      selectedChange: "selectedChange",
      yearSelected: "yearSelected",
      monthSelected: "monthSelected",
      viewChanged: "viewChanged",
      _userSelection: "_userSelection",
      _userDragDrop: "_userDragDrop"
    },
    exportAs: ["matCalendar"],
    features: [\u0275\u0275ProvidersFeature([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), \u0275\u0275NgOnChangesFeature],
    decls: 5,
    vars: 2,
    consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "_userSelection", "dragStarted", "dragEnded", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDateChange", "monthSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "yearSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"]],
    template: function MatCalendar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275conditionalCreate(2, MatCalendar_Case_2_Template, 1, 11, "mat-month-view", 2)(3, MatCalendar_Case_3_Template, 1, 6, "mat-year-view", 3)(4, MatCalendar_Case_4_Template, 1, 6, "mat-multi-year-view", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275property("cdkPortalOutlet", ctx._calendarHeaderPortal);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_1_0 = ctx.currentView) === "month" ? 2 : tmp_1_0 === "year" ? 3 : tmp_1_0 === "multi-year" ? 4 : -1);
      }
    },
    dependencies: [CdkPortalOutlet, CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
    styles: ['.mat-calendar{display:block;line-height:normal;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size))}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));--mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant))}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant))}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}@media(forced-colors: active){.mat-calendar-arrow{fill:CanvasText}}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));font-size:var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight))}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color, transparent)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCalendar, [{
    type: Component,
    args: [{
      selector: "mat-calendar",
      host: {
        "class": "mat-calendar"
      },
      exportAs: "matCalendar",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
      imports: [CdkPortalOutlet, CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
      template: `<ng-template [cdkPortalOutlet]="_calendarHeaderPortal"></ng-template>

<div class="mat-calendar-content" cdkMonitorSubtreeFocus tabindex="-1">
  @switch (currentView) {
    @case ('month') {
        <mat-month-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            [comparisonStart]="comparisonStart"
            [comparisonEnd]="comparisonEnd"
            [startDateAccessibleName]="startDateAccessibleName"
            [endDateAccessibleName]="endDateAccessibleName"
            (_userSelection)="_dateSelected($event)"
            (dragStarted)="_dragStarted($event)"
            (dragEnded)="_dragEnded($event)"
            [activeDrag]="_activeDrag"></mat-month-view>
    }

    @case ('year') {
        <mat-year-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            (monthSelected)="_monthSelectedInYearView($event)"
            (selectedChange)="_goToDateInView($event, 'month')"></mat-year-view>
    }

    @case ('multi-year') {
        <mat-multi-year-view
            [(activeDate)]="activeDate"
            [selected]="selected"
            [dateFilter]="dateFilter"
            [maxDate]="maxDate"
            [minDate]="minDate"
            [dateClass]="dateClass"
            (yearSelected)="_yearSelectedInMultiYearView($event)"
            (selectedChange)="_goToDateInView($event, 'year')"></mat-multi-year-view>
    }
  }
</div>
`,
      styles: ['.mat-calendar{display:block;line-height:normal;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size))}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));--mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant))}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant))}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}@media(forced-colors: active){.mat-calendar-arrow{fill:CanvasText}}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));font-size:var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight))}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color, transparent)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    headerComponent: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    startView: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    dateFilter: [{
      type: Input
    }],
    dateClass: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }],
    startDateAccessibleName: [{
      type: Input
    }],
    endDateAccessibleName: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    viewChanged: [{
      type: Output
    }],
    _userSelection: [{
      type: Output
    }],
    _userDragDrop: [{
      type: Output
    }],
    monthView: [{
      type: ViewChild,
      args: [MatMonthView]
    }],
    yearView: [{
      type: ViewChild,
      args: [MatYearView]
    }],
    multiYearView: [{
      type: ViewChild,
      args: [MatMultiYearView]
    }]
  });
})();
var MAT_DATEPICKER_SCROLL_STRATEGY = new InjectionToken("mat-datepicker-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
var MatDatepickerContent = class _MatDatepickerContent {
  _elementRef = inject(ElementRef);
  _animationsDisabled = _animationsDisabled();
  _changeDetectorRef = inject(ChangeDetectorRef);
  _globalModel = inject(MatDateSelectionModel);
  _dateAdapter = inject(DateAdapter);
  _ngZone = inject(NgZone);
  _rangeSelectionStrategy = inject(MAT_DATE_RANGE_SELECTION_STRATEGY, {
    optional: true
  });
  _stateChanges;
  _model;
  _eventCleanups;
  _animationFallback;
  /** Reference to the internal calendar component. */
  _calendar;
  /**
   * Theme color of the internal calendar. This API is supported in M2 themes
   * only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/datepicker/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Reference to the datepicker that created the overlay. */
  datepicker;
  /** Start of the comparison range. */
  comparisonStart;
  /** End of the comparison range. */
  comparisonEnd;
  /** ARIA Accessible name of the `<input matStartDate/>` */
  startDateAccessibleName;
  /** ARIA Accessible name of the `<input matEndDate/>` */
  endDateAccessibleName;
  /** Whether the datepicker is above or below the input. */
  _isAbove;
  /** Emits when an animation has finished. */
  _animationDone = new Subject();
  /** Whether there is an in-progress animation. */
  _isAnimating = false;
  /** Text for the close button. */
  _closeButtonText;
  /** Whether the close button currently has focus. */
  _closeButtonFocused;
  /** Portal with projected action buttons. */
  _actionsPortal = null;
  /** Id of the label for the `role="dialog"` element. */
  _dialogLabelId;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    this._closeButtonText = inject(MatDatepickerIntl).closeCalendarLabel;
    if (!this._animationsDisabled) {
      const element = this._elementRef.nativeElement;
      const renderer = inject(Renderer2);
      this._eventCleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(element, "animationstart", this._handleAnimationEvent), renderer.listen(element, "animationend", this._handleAnimationEvent), renderer.listen(element, "animationcancel", this._handleAnimationEvent)]);
    }
  }
  ngAfterViewInit() {
    this._stateChanges = this.datepicker.stateChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
    this._calendar.focusActiveCell();
  }
  ngOnDestroy() {
    clearTimeout(this._animationFallback);
    this._eventCleanups?.forEach((cleanup) => cleanup());
    this._stateChanges?.unsubscribe();
    this._animationDone.complete();
  }
  _handleUserSelection(event) {
    const selection = this._model.selection;
    const value = event.value;
    const isRange = selection instanceof DateRange;
    if (isRange && this._rangeSelectionStrategy) {
      const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
      this._model.updateSelection(newSelection, this);
    } else if (value && (isRange || !this._dateAdapter.sameDate(value, selection))) {
      this._model.add(value);
    }
    if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
      this.datepicker.close();
    }
  }
  _handleUserDragDrop(event) {
    this._model.updateSelection(event.value, this);
  }
  _startExitAnimation() {
    this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit");
    if (this._animationsDisabled) {
      this._animationDone.next();
    } else {
      clearTimeout(this._animationFallback);
      this._animationFallback = setTimeout(() => {
        if (!this._isAnimating) {
          this._animationDone.next();
        }
      }, 200);
    }
  }
  _handleAnimationEvent = (event) => {
    const element = this._elementRef.nativeElement;
    if (event.target !== element || !event.animationName.startsWith("_mat-datepicker-content")) {
      return;
    }
    clearTimeout(this._animationFallback);
    this._isAnimating = event.type === "animationstart";
    element.classList.toggle("mat-datepicker-content-animating", this._isAnimating);
    if (!this._isAnimating) {
      this._animationDone.next();
    }
  };
  _getSelected() {
    return this._model.selection;
  }
  /** Applies the current pending selection to the global model. */
  _applyPendingSelection() {
    if (this._model !== this._globalModel) {
      this._globalModel.updateSelection(this._model.selection, this);
    }
  }
  /**
   * Assigns a new portal containing the datepicker actions.
   * @param portal Portal with the actions to be assigned.
   * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
   * necessary if the portal is assigned during initialization, but it may be required if it's
   * added at a later point.
   */
  _assignActions(portal, forceRerender) {
    this._model = portal ? this._globalModel.clone() : this._globalModel;
    this._actionsPortal = portal;
    if (forceRerender) {
      this._changeDetectorRef.detectChanges();
    }
  }
  static \u0275fac = function MatDatepickerContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerContent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDatepickerContent,
    selectors: [["mat-datepicker-content"]],
    viewQuery: function MatDatepickerContent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatCalendar, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._calendar = _t.first);
      }
    },
    hostAttrs: [1, "mat-datepicker-content"],
    hostVars: 6,
    hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-datepicker-content-touch", ctx.datepicker.touchUi)("mat-datepicker-content-animations-enabled", !ctx._animationsDisabled);
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matDatepickerContent"],
    decls: 5,
    vars: 26,
    consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop", "id", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], [3, "cdkPortalOutlet"], ["type", "button", "matButton", "elevated", 1, "mat-datepicker-close-button", 3, "focus", "blur", "click", "color"]],
    template: function MatDatepickerContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-calendar", 1);
        \u0275\u0275listener("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) {
          return ctx.datepicker._selectYear($event);
        })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) {
          return ctx.datepicker._selectMonth($event);
        })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) {
          return ctx.datepicker._viewChanged($event);
        })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) {
          return ctx._handleUserSelection($event);
        })("_userDragDrop", function MatDatepickerContent_Template_mat_calendar__userDragDrop_1_listener($event) {
          return ctx._handleUserDragDrop($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementStart(3, "button", 3);
        \u0275\u0275listener("focus", function MatDatepickerContent_Template_button_focus_3_listener() {
          return ctx._closeButtonFocused = true;
        })("blur", function MatDatepickerContent_Template_button_blur_3_listener() {
          return ctx._closeButtonFocused = false;
        })("click", function MatDatepickerContent_Template_button_click_3_listener() {
          return ctx.datepicker.close();
        });
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-datepicker-content-container-with-custom-header", ctx.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
        \u0275\u0275attribute("aria-modal", true)("aria-labelledby", ctx._dialogLabelId ?? void 0);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.datepicker.panelClass);
        \u0275\u0275property("id", ctx.datepicker.id)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
        \u0275\u0275advance();
        \u0275\u0275property("cdkPortalOutlet", ctx._actionsPortal);
        \u0275\u0275advance();
        \u0275\u0275classProp("cdk-visually-hidden", !ctx._closeButtonFocused);
        \u0275\u0275property("color", ctx.color || "primary");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx._closeButtonText);
      }
    },
    dependencies: [CdkTrapFocus, MatCalendar, CdkPortalOutlet, MatButton],
    styles: ["@keyframes _mat-datepicker-content-dropdown-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-datepicker-content-dialog-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-datepicker-content-exit{from{opacity:1}to{opacity:0}}.mat-datepicker-content{display:block;background-color:var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));color:var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));border-radius:var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large))}.mat-datepicker-content.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));border-radius:var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));position:relative;overflow:visible}.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1)}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-exit 100ms linear}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerContent, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-content",
      host: {
        "class": "mat-datepicker-content",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-datepicker-content-touch]": "datepicker.touchUi",
        "[class.mat-datepicker-content-animations-enabled]": "!_animationsDisabled"
      },
      exportAs: "matDatepickerContent",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CdkTrapFocus, MatCalendar, CdkPortalOutlet, MatButton],
      template: `<div
  cdkTrapFocus
  role="dialog"
  [attr.aria-modal]="true"
  [attr.aria-labelledby]="_dialogLabelId ?? undefined"
  class="mat-datepicker-content-container"
  [class.mat-datepicker-content-container-with-custom-header]="datepicker.calendarHeaderComponent"
  [class.mat-datepicker-content-container-with-actions]="_actionsPortal">
  <mat-calendar
    [id]="datepicker.id"
    [class]="datepicker.panelClass"
    [startAt]="datepicker.startAt"
    [startView]="datepicker.startView"
    [minDate]="datepicker._getMinDate()"
    [maxDate]="datepicker._getMaxDate()"
    [dateFilter]="datepicker._getDateFilter()"
    [headerComponent]="datepicker.calendarHeaderComponent"
    [selected]="_getSelected()"
    [dateClass]="datepicker.dateClass"
    [comparisonStart]="comparisonStart"
    [comparisonEnd]="comparisonEnd"
    [startDateAccessibleName]="startDateAccessibleName"
    [endDateAccessibleName]="endDateAccessibleName"
    (yearSelected)="datepicker._selectYear($event)"
    (monthSelected)="datepicker._selectMonth($event)"
    (viewChanged)="datepicker._viewChanged($event)"
    (_userSelection)="_handleUserSelection($event)"
    (_userDragDrop)="_handleUserDragDrop($event)"></mat-calendar>

  <ng-template [cdkPortalOutlet]="_actionsPortal"></ng-template>

  <!-- Invisible close button for screen reader users. -->
  <button
    type="button"
    matButton="elevated"
    [color]="color || 'primary'"
    class="mat-datepicker-close-button"
    [class.cdk-visually-hidden]="!_closeButtonFocused"
    (focus)="_closeButtonFocused = true"
    (blur)="_closeButtonFocused = false"
    (click)="datepicker.close()">{{ _closeButtonText }}</button>
</div>
`,
      styles: ["@keyframes _mat-datepicker-content-dropdown-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-datepicker-content-dialog-enter{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:none}}@keyframes _mat-datepicker-content-exit{from{opacity:1}to{opacity:0}}.mat-datepicker-content{display:block;background-color:var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));color:var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));border-radius:var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large))}.mat-datepicker-content.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));border-radius:var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));position:relative;overflow:visible}.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1)}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled{animation:_mat-datepicker-content-exit 100ms linear}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n"]
    }]
  }], () => [], {
    _calendar: [{
      type: ViewChild,
      args: [MatCalendar]
    }],
    color: [{
      type: Input
    }]
  });
})();
var MatDatepickerBase = class _MatDatepickerBase {
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dir = inject(Directionality, {
    optional: true
  });
  _model = inject(MatDateSelectionModel);
  _animationsDisabled = _animationsDisabled();
  _scrollStrategy = inject(MAT_DATEPICKER_SCROLL_STRATEGY);
  _inputStateChanges = Subscription.EMPTY;
  _document = inject(DOCUMENT);
  /** An input indicating the type of the custom header component for the calendar, if set. */
  calendarHeaderComponent;
  /** The date to open the calendar to initially. */
  get startAt() {
    return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
  }
  set startAt(value) {
    this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
  }
  _startAt;
  /** The view that the calendar should start in. */
  startView = "month";
  /**
   * Theme color of the datepicker's calendar. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/datepicker/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : void 0);
  }
  set color(value) {
    this._color = value;
  }
  _color;
  /**
   * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
   * than a dropdown and elements have more padding to allow for bigger touch targets.
   */
  touchUi = false;
  /** Whether the datepicker pop-up should be disabled. */
  get disabled() {
    return this._disabled === void 0 && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled;
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this.stateChanges.next(void 0);
    }
  }
  _disabled;
  /** Preferred position of the datepicker in the X axis. */
  xPosition = "start";
  /** Preferred position of the datepicker in the Y axis. */
  yPosition = "below";
  /**
   * Whether to restore focus to the previously-focused element when the calendar is closed.
   * Note that automatic focus restoration is an accessibility feature and it is recommended that
   * you provide your own equivalent, if you decide to turn it off.
   */
  restoreFocus = true;
  /**
   * Emits selected year in multiyear view.
   * This doesn't imply a change on the selected date.
   */
  yearSelected = new EventEmitter();
  /**
   * Emits selected month in year view.
   * This doesn't imply a change on the selected date.
   */
  monthSelected = new EventEmitter();
  /**
   * Emits when the current view changes.
   */
  viewChanged = new EventEmitter(true);
  /** Function that can be used to add custom CSS classes to dates. */
  dateClass;
  /** Emits when the datepicker has been opened. */
  openedStream = new EventEmitter();
  /** Emits when the datepicker has been closed. */
  closedStream = new EventEmitter();
  /** Classes to be passed to the date picker panel. */
  get panelClass() {
    return this._panelClass;
  }
  set panelClass(value) {
    this._panelClass = coerceStringArray(value);
  }
  _panelClass;
  /** Whether the calendar is open. */
  get opened() {
    return this._opened;
  }
  set opened(value) {
    if (value) {
      this.open();
    } else {
      this.close();
    }
  }
  _opened = false;
  /** The id for the datepicker calendar. */
  id = inject(_IdGenerator).getId("mat-datepicker-");
  /** The minimum selectable date. */
  _getMinDate() {
    return this.datepickerInput && this.datepickerInput.min;
  }
  /** The maximum selectable date. */
  _getMaxDate() {
    return this.datepickerInput && this.datepickerInput.max;
  }
  _getDateFilter() {
    return this.datepickerInput && this.datepickerInput.dateFilter;
  }
  /** A reference to the overlay into which we've rendered the calendar. */
  _overlayRef;
  /** Reference to the component instance rendered in the overlay. */
  _componentRef;
  /** The element that was focused before the datepicker was opened. */
  _focusedElementBeforeOpen = null;
  /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
  _backdropHarnessClass = `${this.id}-backdrop`;
  /** Currently-registered actions portal. */
  _actionsPortal;
  /** The input element this datepicker is associated with. */
  datepickerInput;
  /** Emits when the datepicker's state changes. */
  stateChanges = new Subject();
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    if (!this._dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    this._model.selectionChanged.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const positionChange = changes["xPosition"] || changes["yPosition"];
    if (positionChange && !positionChange.firstChange && this._overlayRef) {
      const positionStrategy = this._overlayRef.getConfig().positionStrategy;
      if (positionStrategy instanceof FlexibleConnectedPositionStrategy) {
        this._setConnectedPositions(positionStrategy);
        if (this.opened) {
          this._overlayRef.updatePosition();
        }
      }
    }
    this.stateChanges.next(void 0);
  }
  ngOnDestroy() {
    this._destroyOverlay();
    this.close();
    this._inputStateChanges.unsubscribe();
    this.stateChanges.complete();
  }
  /** Selects the given date */
  select(date) {
    this._model.add(date);
  }
  /** Emits the selected year in multiyear view */
  _selectYear(normalizedYear) {
    this.yearSelected.emit(normalizedYear);
  }
  /** Emits selected month in year view */
  _selectMonth(normalizedMonth) {
    this.monthSelected.emit(normalizedMonth);
  }
  /** Emits changed view */
  _viewChanged(view) {
    this.viewChanged.emit(view);
  }
  /**
   * Register an input with this datepicker.
   * @param input The datepicker input to register with this datepicker.
   * @returns Selection model that the input should hook itself up to.
   */
  registerInput(input) {
    if (this.datepickerInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("A MatDatepicker can only be associated with a single input.");
    }
    this._inputStateChanges.unsubscribe();
    this.datepickerInput = input;
    this._inputStateChanges = input.stateChanges.subscribe(() => this.stateChanges.next(void 0));
    return this._model;
  }
  /**
   * Registers a portal containing action buttons with the datepicker.
   * @param portal Portal to be registered.
   */
  registerActions(portal) {
    if (this._actionsPortal && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("A MatDatepicker can only be associated with a single actions row.");
    }
    this._actionsPortal = portal;
    this._componentRef?.instance._assignActions(portal, true);
  }
  /**
   * Removes a portal containing action buttons from the datepicker.
   * @param portal Portal to be removed.
   */
  removeActions(portal) {
    if (portal === this._actionsPortal) {
      this._actionsPortal = null;
      this._componentRef?.instance._assignActions(null, true);
    }
  }
  /** Open the calendar. */
  open() {
    if (this._opened || this.disabled || this._componentRef?.instance._isAnimating) {
      return;
    }
    if (!this.datepickerInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Attempted to open an MatDatepicker with no associated input.");
    }
    this._focusedElementBeforeOpen = _getFocusedElementPierceShadowDom();
    this._openOverlay();
    this._opened = true;
    this.openedStream.emit();
  }
  /** Close the calendar. */
  close() {
    if (!this._opened || this._componentRef?.instance._isAnimating) {
      return;
    }
    const canRestoreFocus = this.restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === "function";
    const completeClose = () => {
      if (this._opened) {
        this._opened = false;
        this.closedStream.emit();
      }
    };
    if (this._componentRef) {
      const {
        instance,
        location
      } = this._componentRef;
      instance._animationDone.pipe(take(1)).subscribe(() => {
        const activeElement = this._document.activeElement;
        if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
          this._focusedElementBeforeOpen.focus();
        }
        this._focusedElementBeforeOpen = null;
        this._destroyOverlay();
      });
      instance._startExitAnimation();
    }
    if (canRestoreFocus) {
      setTimeout(completeClose);
    } else {
      completeClose();
    }
  }
  /** Applies the current pending selection on the overlay to the model. */
  _applyPendingSelection() {
    this._componentRef?.instance?._applyPendingSelection();
  }
  /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
  _forwardContentValues(instance) {
    instance.datepicker = this;
    instance.color = this.color;
    instance._dialogLabelId = this.datepickerInput.getOverlayLabelId();
    instance._assignActions(this._actionsPortal, false);
  }
  /** Opens the overlay with the calendar. */
  _openOverlay() {
    this._destroyOverlay();
    const isDialog = this.touchUi;
    const portal = new ComponentPortal(MatDatepickerContent, this._viewContainerRef);
    const overlayRef = this._overlayRef = createOverlayRef(this._injector, new OverlayConfig({
      positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
      hasBackdrop: true,
      backdropClass: [isDialog ? "cdk-overlay-dark-backdrop" : "mat-overlay-transparent-backdrop", this._backdropHarnessClass],
      direction: this._dir || "ltr",
      scrollStrategy: isDialog ? createBlockScrollStrategy(this._injector) : this._scrollStrategy(),
      panelClass: `mat-datepicker-${isDialog ? "dialog" : "popup"}`,
      disableAnimations: this._animationsDisabled
    }));
    this._getCloseStream(overlayRef).subscribe((event) => {
      if (event) {
        event.preventDefault();
      }
      this.close();
    });
    overlayRef.keydownEvents().subscribe((event) => {
      const keyCode = event.keyCode;
      if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === PAGE_UP || keyCode === PAGE_DOWN) {
        event.preventDefault();
      }
    });
    this._componentRef = overlayRef.attach(portal);
    this._forwardContentValues(this._componentRef.instance);
    if (!isDialog) {
      afterNextRender(() => {
        overlayRef.updatePosition();
      }, {
        injector: this._injector
      });
    }
  }
  /** Destroys the current overlay. */
  _destroyOverlay() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = this._componentRef = null;
    }
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDialogStrategy() {
    return createGlobalPositionStrategy(this._injector).centerHorizontally().centerVertically();
  }
  /** Gets a position strategy that will open the calendar as a dropdown. */
  _getDropdownStrategy() {
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
    return this._setConnectedPositions(strategy);
  }
  /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
  _setConnectedPositions(strategy) {
    const primaryX = this.xPosition === "end" ? "end" : "start";
    const secondaryX = primaryX === "start" ? "end" : "start";
    const primaryY = this.yPosition === "above" ? "bottom" : "top";
    const secondaryY = primaryY === "top" ? "bottom" : "top";
    return strategy.withPositions([{
      originX: primaryX,
      originY: secondaryY,
      overlayX: primaryX,
      overlayY: primaryY
    }, {
      originX: primaryX,
      originY: primaryY,
      overlayX: primaryX,
      overlayY: secondaryY
    }, {
      originX: secondaryX,
      originY: secondaryY,
      overlayX: secondaryX,
      overlayY: primaryY
    }, {
      originX: secondaryX,
      originY: primaryY,
      overlayX: secondaryX,
      overlayY: secondaryY
    }]);
  }
  /** Gets an observable that will emit when the overlay is supposed to be closed. */
  _getCloseStream(overlayRef) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    return merge(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe(filter((event) => {
      return event.keyCode === ESCAPE && !hasModifierKey(event) || this.datepickerInput && hasModifierKey(event, "altKey") && event.keyCode === UP_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    })));
  }
  static \u0275fac = function MatDatepickerBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerBase,
    inputs: {
      calendarHeaderComponent: "calendarHeaderComponent",
      startAt: "startAt",
      startView: "startView",
      color: "color",
      touchUi: [2, "touchUi", "touchUi", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      xPosition: "xPosition",
      yPosition: "yPosition",
      restoreFocus: [2, "restoreFocus", "restoreFocus", booleanAttribute],
      dateClass: "dateClass",
      panelClass: "panelClass",
      opened: [2, "opened", "opened", booleanAttribute]
    },
    outputs: {
      yearSelected: "yearSelected",
      monthSelected: "monthSelected",
      viewChanged: "viewChanged",
      openedStream: "opened",
      closedStream: "closed"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerBase, [{
    type: Directive
  }], () => [], {
    calendarHeaderComponent: [{
      type: Input
    }],
    startAt: [{
      type: Input
    }],
    startView: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    touchUi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    xPosition: [{
      type: Input
    }],
    yPosition: [{
      type: Input
    }],
    restoreFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    yearSelected: [{
      type: Output
    }],
    monthSelected: [{
      type: Output
    }],
    viewChanged: [{
      type: Output
    }],
    dateClass: [{
      type: Input
    }],
    openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    panelClass: [{
      type: Input
    }],
    opened: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatDatepicker = class _MatDatepicker extends MatDatepickerBase {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDatepicker_BaseFactory;
    return function MatDatepicker_Factory(__ngFactoryType__) {
      return (\u0275MatDatepicker_BaseFactory || (\u0275MatDatepicker_BaseFactory = \u0275\u0275getInheritedFactory(_MatDatepicker)))(__ngFactoryType__ || _MatDatepicker);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDatepicker,
    selectors: [["mat-datepicker"]],
    exportAs: ["matDatepicker"],
    features: [\u0275\u0275ProvidersFeature([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
      provide: MatDatepickerBase,
      useExisting: _MatDatepicker
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 0,
    vars: 0,
    template: function MatDatepicker_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepicker, [{
    type: Component,
    args: [{
      selector: "mat-datepicker",
      template: "",
      exportAs: "matDatepicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDatepicker
      }]
    }]
  }], null, null);
})();
var MatDatepickerInputEvent = class {
  target;
  targetElement;
  /** The new value for the target datepicker input. */
  value;
  constructor(target, targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
};
var MatDatepickerInputBase = class _MatDatepickerInputBase {
  _elementRef = inject(ElementRef);
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _dateFormats = inject(MAT_DATE_FORMATS, {
    optional: true
  });
  /** Whether the component has been initialized. */
  _isInitialized;
  /** The value of the input. */
  get value() {
    return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
  }
  set value(value) {
    this._assignValueProgrammatically(value);
  }
  _model;
  /** Whether the datepicker-input is disabled. */
  get disabled() {
    return !!this._disabled || this._parentDisabled();
  }
  set disabled(value) {
    const newValue = value;
    const element = this._elementRef.nativeElement;
    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this.stateChanges.next(void 0);
    }
    if (newValue && this._isInitialized && element.blur) {
      element.blur();
    }
  }
  _disabled;
  /** Emits when a `change` event is fired on this `<input>`. */
  dateChange = new EventEmitter();
  /** Emits when an `input` event is fired on this `<input>`. */
  dateInput = new EventEmitter();
  /** Emits when the internal state has changed */
  stateChanges = new Subject();
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _cvaOnChange = () => {
  };
  _valueChangesSubscription = Subscription.EMPTY;
  _localeSubscription = Subscription.EMPTY;
  /**
   * Since the value is kept on the model which is assigned in an Input,
   * we might get a value before we have a model. This property keeps track
   * of the value until we have somewhere to assign it.
   */
  _pendingValue;
  /** The form control validator for whether the input parses. */
  _parseValidator = () => {
    return this._lastValueValid ? null : {
      "matDatepickerParse": {
        "text": this._elementRef.nativeElement.value
      }
    };
  };
  /** The form control validator for the date filter. */
  _filterValidator = (control) => {
    const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
    return !controlValue || this._matchesFilter(controlValue) ? null : {
      "matDatepickerFilter": true
    };
  };
  /** The form control validator for the min date. */
  _minValidator = (control) => {
    const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
    const min = this._getMinDate();
    return !min || !controlValue || this._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
      "matDatepickerMin": {
        "min": min,
        "actual": controlValue
      }
    };
  };
  /** The form control validator for the max date. */
  _maxValidator = (control) => {
    const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
    const max = this._getMaxDate();
    return !max || !controlValue || this._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
      "matDatepickerMax": {
        "max": max,
        "actual": controlValue
      }
    };
  };
  /** Gets the base validator functions. */
  _getValidators() {
    return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
  }
  /** Registers a date selection model with the input. */
  _registerModel(model) {
    this._model = model;
    this._valueChangesSubscription.unsubscribe();
    if (this._pendingValue) {
      this._assignValue(this._pendingValue);
    }
    this._valueChangesSubscription = this._model.selectionChanged.subscribe((event) => {
      if (this._shouldHandleChangeEvent(event)) {
        const value = this._getValueFromModel(event.selection);
        this._lastValueValid = this._isValidValue(value);
        this._cvaOnChange(value);
        this._onTouched();
        this._formatValue(value);
        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
      }
    });
  }
  /** Whether the last value set on the input was valid. */
  _lastValueValid = false;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._dateAdapter) {
        throw createMissingDateImplError("DateAdapter");
      }
      if (!this._dateFormats) {
        throw createMissingDateImplError("MAT_DATE_FORMATS");
      }
    }
    this._localeSubscription = this._dateAdapter.localeChanges.subscribe(() => {
      this._assignValueProgrammatically(this.value);
    });
  }
  ngAfterViewInit() {
    this._isInitialized = true;
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._valueChangesSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** @docs-private */
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  /** @docs-private */
  validate(c) {
    return this._validator ? this._validator(c) : null;
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this._assignValueProgrammatically(value);
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._cvaOnChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _onKeydown(event) {
    const ctrlShiftMetaModifiers = ["ctrlKey", "shiftKey", "metaKey"];
    const isAltDownArrow = hasModifierKey(event, "altKey") && event.keyCode === DOWN_ARROW && ctrlShiftMetaModifiers.every((modifier) => !hasModifierKey(event, modifier));
    if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
      this._openPopup();
      event.preventDefault();
    }
  }
  _onInput(event) {
    const value = event.target.value;
    const lastValueWasValid = this._lastValueValid;
    let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
    this._lastValueValid = this._isValidValue(date);
    date = this._dateAdapter.getValidDateOrNull(date);
    const hasChanged = !this._dateAdapter.sameDate(date, this.value);
    if (!date || hasChanged) {
      this._cvaOnChange(date);
    } else {
      if (value && !this.value) {
        this._cvaOnChange(date);
      }
      if (lastValueWasValid !== this._lastValueValid) {
        this._validatorOnChange();
      }
    }
    if (hasChanged) {
      this._assignValue(date);
      this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
  }
  _onChange() {
    this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
  }
  /** Handles blur events on the input. */
  _onBlur() {
    if (this.value) {
      this._formatValue(this.value);
    }
    this._onTouched();
  }
  /** Formats a value and sets it on the input element. */
  _formatValue(value) {
    this._elementRef.nativeElement.value = value != null ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : "";
  }
  /** Assigns a value to the model. */
  _assignValue(value) {
    if (this._model) {
      this._assignValueToModel(value);
      this._pendingValue = null;
    } else {
      this._pendingValue = value;
    }
  }
  /** Whether a value is considered valid. */
  _isValidValue(value) {
    return !value || this._dateAdapter.isValid(value);
  }
  /**
   * Checks whether a parent control is disabled. This is in place so that it can be overridden
   * by inputs extending this one which can be placed inside of a group that can be disabled.
   */
  _parentDisabled() {
    return false;
  }
  /** Programmatically assigns a value to the input. */
  _assignValueProgrammatically(value) {
    value = this._dateAdapter.deserialize(value);
    this._lastValueValid = this._isValidValue(value);
    value = this._dateAdapter.getValidDateOrNull(value);
    this._assignValue(value);
    this._formatValue(value);
  }
  /** Gets whether a value matches the current date filter. */
  _matchesFilter(value) {
    const filter2 = this._getDateFilter();
    return !filter2 || filter2(value);
  }
  static \u0275fac = function MatDatepickerInputBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerInputBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerInputBase,
    inputs: {
      value: "value",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      dateChange: "dateChange",
      dateInput: "dateInput"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerInputBase, [{
    type: Directive
  }], () => [], {
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dateChange: [{
      type: Output
    }],
    dateInput: [{
      type: Output
    }]
  });
})();
function dateInputsHaveChanged(changes, adapter) {
  const keys = Object.keys(changes);
  for (let key of keys) {
    const {
      previousValue,
      currentValue
    } = changes[key];
    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}
var MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatDatepickerInput),
  multi: true
};
var MAT_DATEPICKER_VALIDATORS = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MatDatepickerInput),
  multi: true
};
var MatDatepickerInput = class _MatDatepickerInput extends MatDatepickerInputBase {
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _closedSubscription = Subscription.EMPTY;
  _openedSubscription = Subscription.EMPTY;
  /** The datepicker that this input is associated with. */
  set matDatepicker(datepicker) {
    if (datepicker) {
      this._datepicker = datepicker;
      this._ariaOwns.set(datepicker.opened ? datepicker.id : null);
      this._closedSubscription = datepicker.closedStream.subscribe(() => {
        this._onTouched();
        this._ariaOwns.set(null);
      });
      this._openedSubscription = datepicker.openedStream.subscribe(() => {
        this._ariaOwns.set(datepicker.id);
      });
      this._registerModel(datepicker.registerInput(this));
    }
  }
  _datepicker;
  /** The id of the panel owned by this input. */
  _ariaOwns = signal(null);
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._validatorOnChange();
    }
  }
  _min;
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._validatorOnChange();
    }
  }
  _max;
  /** Function that can be used to filter out dates within the datepicker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const wasMatchingValue = this._matchesFilter(this.value);
    this._dateFilter = value;
    if (this._matchesFilter(this.value) !== wasMatchingValue) {
      this._validatorOnChange();
    }
  }
  _dateFilter;
  /** The combined form control validator for this input. */
  _validator;
  constructor() {
    super();
    this._validator = Validators.compose(super._getValidators());
  }
  /**
   * Gets the element that the datepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    if (this._formField) {
      return this._formField.getLabelId();
    }
    return this._elementRef.nativeElement.getAttribute("aria-labelledby");
  }
  /** Returns the palette used by the input's form field, if any. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the value at which the calendar should start. */
  getStartValue() {
    return this.value;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._closedSubscription.unsubscribe();
    this._openedSubscription.unsubscribe();
  }
  /** Opens the associated datepicker. */
  _openPopup() {
    if (this._datepicker) {
      this._datepicker.open();
    }
  }
  _getValueFromModel(modelValue) {
    return modelValue;
  }
  _assignValueToModel(value) {
    if (this._model) {
      this._model.updateSelection(value, this);
    }
  }
  /** Gets the input's minimum date. */
  _getMinDate() {
    return this._min;
  }
  /** Gets the input's maximum date. */
  _getMaxDate() {
    return this._max;
  }
  /** Gets the input's date filtering function. */
  _getDateFilter() {
    return this._dateFilter;
  }
  _shouldHandleChangeEvent(event) {
    return event.source !== this;
  }
  static \u0275fac = function MatDatepickerInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerInput)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerInput,
    selectors: [["input", "matDatepicker", ""]],
    hostAttrs: [1, "mat-datepicker-input"],
    hostVars: 6,
    hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function MatDatepickerInput_input_HostBindingHandler($event) {
          return ctx._onInput($event);
        })("change", function MatDatepickerInput_change_HostBindingHandler() {
          return ctx._onChange();
        })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
          return ctx._onKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("disabled", ctx.disabled);
        \u0275\u0275attribute("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", ctx._ariaOwns())("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
      }
    },
    inputs: {
      matDatepicker: "matDatepicker",
      min: "min",
      max: "max",
      dateFilter: [0, "matDatepickerFilter", "dateFilter"]
    },
    exportAs: ["matDatepickerInput"],
    features: [\u0275\u0275ProvidersFeature([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
      provide: MAT_INPUT_VALUE_ACCESSOR,
      useExisting: _MatDatepickerInput
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerInput, [{
    type: Directive,
    args: [{
      selector: "input[matDatepicker]",
      providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
        provide: MAT_INPUT_VALUE_ACCESSOR,
        useExisting: MatDatepickerInput
      }],
      host: {
        "class": "mat-datepicker-input",
        "[attr.aria-haspopup]": '_datepicker ? "dialog" : null',
        "[attr.aria-owns]": "_ariaOwns()",
        "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
        "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "_datepicker ? _datepicker.id : null",
        "[disabled]": "disabled",
        "(input)": "_onInput($event)",
        "(change)": "_onChange()",
        "(blur)": "_onBlur()",
        "(keydown)": "_onKeydown($event)"
      },
      exportAs: "matDatepickerInput"
    }]
  }], () => [], {
    matDatepicker: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    dateFilter: [{
      type: Input,
      args: ["matDatepickerFilter"]
    }]
  });
})();
var MatDatepickerToggleIcon = class _MatDatepickerToggleIcon {
  static \u0275fac = function MatDatepickerToggleIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerToggleIcon)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerToggleIcon,
    selectors: [["", "matDatepickerToggleIcon", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerToggleIcon, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerToggleIcon]"
    }]
  }], null, null);
})();
var MatDatepickerToggle = class _MatDatepickerToggle {
  _intl = inject(MatDatepickerIntl);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _stateChanges = Subscription.EMPTY;
  /** Datepicker instance that the button will toggle. */
  datepicker;
  /** Tabindex for the toggle. */
  tabIndex;
  /** Screen-reader label for the button. */
  ariaLabel;
  /** Whether the toggle button is disabled. */
  get disabled() {
    if (this._disabled === void 0 && this.datepicker) {
      return this.datepicker.disabled;
    }
    return !!this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled;
  /** Whether ripples on the toggle should be disabled. */
  disableRipple;
  /** Custom icon set by the consumer. */
  _customIcon;
  /** Underlying button element. */
  _button;
  constructor() {
    const defaultTabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  ngOnChanges(changes) {
    if (changes["datepicker"]) {
      this._watchStateChanges();
    }
  }
  ngOnDestroy() {
    this._stateChanges.unsubscribe();
  }
  ngAfterContentInit() {
    this._watchStateChanges();
  }
  _open(event) {
    if (this.datepicker && !this.disabled) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }
  _watchStateChanges() {
    const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : of();
    const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : of();
    const datepickerToggled = this.datepicker ? merge(this.datepicker.openedStream, this.datepicker.closedStream) : of();
    this._stateChanges.unsubscribe();
    this._stateChanges = merge(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  static \u0275fac = function MatDatepickerToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDatepickerToggle,
    selectors: [["mat-datepicker-toggle"]],
    contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatDatepickerToggleIcon, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._customIcon = _t.first);
      }
    },
    viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c22, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._button = _t.first);
      }
    },
    hostAttrs: [1, "mat-datepicker-toggle"],
    hostVars: 8,
    hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDatepickerToggle_click_HostBindingHandler($event) {
          return ctx._open($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
        \u0275\u0275classProp("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
      }
    },
    inputs: {
      datepicker: [0, "for", "datepicker"],
      tabIndex: "tabIndex",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: "disableRipple"
    },
    exportAs: ["matDatepickerToggle"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c42,
    decls: 4,
    vars: 7,
    consts: [["button", ""], ["matIconButton", "", "type", "button", 3, "tabIndex", "disabled", "disableRipple"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
    template: function MatDatepickerToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c32);
        \u0275\u0275elementStart(0, "button", 1, 0);
        \u0275\u0275conditionalCreate(2, MatDatepickerToggle_Conditional_2_Template, 2, 0, ":svg:svg", 2);
        \u0275\u0275projection(3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("tabIndex", ctx.disabled ? -1 : ctx.tabIndex)("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        \u0275\u0275attribute("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("aria-expanded", ctx.datepicker ? ctx.datepicker.opened : null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx._customIcon ? 2 : -1);
      }
    },
    dependencies: [MatIconButton],
    styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant))}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-on-surface-variant))}@media(forced-colors: active){.mat-datepicker-toggle-default-icon{color:CanvasText}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerToggle, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-toggle",
      host: {
        "class": "mat-datepicker-toggle",
        "[attr.tabindex]": "null",
        "[class.mat-datepicker-toggle-active]": "datepicker && datepicker.opened",
        "[class.mat-accent]": 'datepicker && datepicker.color === "accent"',
        "[class.mat-warn]": 'datepicker && datepicker.color === "warn"',
        // Used by the test harness to tie this toggle to its datepicker.
        "[attr.data-mat-calendar]": "datepicker ? datepicker.id : null",
        // Bind the `click` on the host, rather than the inner `button`, so that we can call
        // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
        // it so that the input doesn't get focused automatically by the form field (See #21836).
        "(click)": "_open($event)"
      },
      exportAs: "matDatepickerToggle",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatIconButton],
      template: `<button
  #button
  matIconButton
  type="button"
  [attr.aria-haspopup]="datepicker ? 'dialog' : null"
  [attr.aria-label]="ariaLabel || _intl.openCalendarLabel"
  [tabIndex]="disabled ? -1 : tabIndex"
  [attr.aria-expanded]="datepicker ? datepicker.opened : null"
  [disabled]="disabled"
  [disableRipple]="disableRipple">

  @if (!_customIcon) {
    <svg
      class="mat-datepicker-toggle-default-icon"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="currentColor"
      focusable="false"
      aria-hidden="true">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </svg>
  }

  <ng-content select="[matDatepickerToggleIcon]"></ng-content>
</button>
`,
      styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant))}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-on-surface-variant))}@media(forced-colors: active){.mat-datepicker-toggle-default-icon{color:CanvasText}}\n"]
    }]
  }], () => [], {
    datepicker: [{
      type: Input,
      args: ["for"]
    }],
    tabIndex: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input
    }],
    _customIcon: [{
      type: ContentChild,
      args: [MatDatepickerToggleIcon]
    }],
    _button: [{
      type: ViewChild,
      args: ["button"]
    }]
  });
})();
var MatDateRangeInput = class _MatDateRangeInput {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dateAdapter = inject(DateAdapter, {
    optional: true
  });
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _closedSubscription = Subscription.EMPTY;
  _openedSubscription = Subscription.EMPTY;
  _startInput;
  _endInput;
  /** Current value of the range input. */
  get value() {
    return this._model ? this._model.selection : null;
  }
  /** Unique ID for the group. */
  id = inject(_IdGenerator).getId("mat-date-range-input-");
  /** Whether the control is focused. */
  focused = false;
  /** Whether the control's label should float. */
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  /** Name of the form control. */
  controlType = "mat-date-range-input";
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * Set the placeholder attribute on `matStartDate` and `matEndDate`.
   * @docs-private
   */
  get placeholder() {
    const start = this._startInput?._getPlaceholder() || "";
    const end = this._endInput?._getPlaceholder() || "";
    return start || end ? `${start} ${this.separator} ${end}` : "";
  }
  /** The range picker that this input is associated with. */
  get rangePicker() {
    return this._rangePicker;
  }
  set rangePicker(rangePicker) {
    if (rangePicker) {
      this._model = rangePicker.registerInput(this);
      this._rangePicker = rangePicker;
      this._closedSubscription.unsubscribe();
      this._openedSubscription.unsubscribe();
      this._ariaOwns.set(this.rangePicker.opened ? rangePicker.id : null);
      this._closedSubscription = rangePicker.closedStream.subscribe(() => {
        this._startInput?._onTouched();
        this._endInput?._onTouched();
        this._ariaOwns.set(null);
      });
      this._openedSubscription = rangePicker.openedStream.subscribe(() => {
        this._ariaOwns.set(rangePicker.id);
      });
      this._registerModel(this._model);
    }
  }
  _rangePicker;
  /** The id of the panel owned by this input. */
  _ariaOwns = signal(null);
  /** Whether the input is required. */
  get required() {
    return this._required ?? (this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) ?? false;
  }
  set required(value) {
    this._required = value;
  }
  _required;
  /** Function that can be used to filter out dates within the date range picker. */
  get dateFilter() {
    return this._dateFilter;
  }
  set dateFilter(value) {
    const start = this._startInput;
    const end = this._endInput;
    const wasMatchingStart = start && start._matchesFilter(start.value);
    const wasMatchingEnd = end && end._matchesFilter(start.value);
    this._dateFilter = value;
    if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
      start._validatorOnChange();
    }
    if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
      end._validatorOnChange();
    }
  }
  _dateFilter;
  /** The minimum valid date. */
  get min() {
    return this._min;
  }
  set min(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._min)) {
      this._min = validValue;
      this._revalidate();
    }
  }
  _min;
  /** The maximum valid date. */
  get max() {
    return this._max;
  }
  set max(value) {
    const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    if (!this._dateAdapter.sameDate(validValue, this._max)) {
      this._max = validValue;
      this._revalidate();
    }
  }
  _max;
  /** Whether the input is disabled. */
  get disabled() {
    return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
  }
  set disabled(value) {
    if (value !== this._groupDisabled) {
      this._groupDisabled = value;
      this.stateChanges.next(void 0);
    }
  }
  _groupDisabled = false;
  /** Whether the input is in an error state. */
  get errorState() {
    if (this._startInput && this._endInput) {
      return this._startInput.errorState || this._endInput.errorState;
    }
    return false;
  }
  /** Whether the datepicker input is empty. */
  get empty() {
    const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
    const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
    return startEmpty && endEmpty;
  }
  /** Value for the `aria-describedby` attribute of the inputs. */
  _ariaDescribedBy = null;
  /** Date selection model currently registered with the input. */
  _model;
  /** Separator text to be shown between the inputs. */
  separator = "\u2013";
  /** Start of the comparison range that should be shown in the calendar. */
  comparisonStart = null;
  /** End of the comparison range that should be shown in the calendar. */
  comparisonEnd = null;
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * TODO(crisbeto): change type to `AbstractControlDirective` after #18206 lands.
   * @docs-private
   */
  ngControl;
  /** Emits when the input's state has changed. */
  stateChanges = new Subject();
  /**
   * Disable the automatic labeling to avoid issues like #27241.
   * @docs-private
   */
  disableAutomaticLabeling = true;
  constructor() {
    if (!this._dateAdapter && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw createMissingDateImplError("DateAdapter");
    }
    if (this._formField?._elementRef.nativeElement.classList.contains("mat-mdc-form-field")) {
      this._elementRef.nativeElement.classList.add("mat-mdc-input-element", "mat-mdc-form-field-input-control", "mdc-text-field__input");
    }
    this.ngControl = inject(ControlContainer, {
      optional: true,
      self: true
    });
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  setDescribedByIds(ids) {
    this._ariaDescribedBy = ids.length ? ids.join(" ") : null;
  }
  /**
   * Implemented as a part of `MatFormFieldControl`.
   * @docs-private
   */
  onContainerClick() {
    if (!this.focused && !this.disabled) {
      if (!this._model || !this._model.selection.start) {
        this._startInput.focus();
      } else {
        this._endInput.focus();
      }
    }
  }
  ngAfterContentInit() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._startInput) {
        throw Error("mat-date-range-input must contain a matStartDate input");
      }
      if (!this._endInput) {
        throw Error("mat-date-range-input must contain a matEndDate input");
      }
    }
    if (this._model) {
      this._registerModel(this._model);
    }
    merge(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
      this.stateChanges.next(void 0);
    });
  }
  ngOnChanges(changes) {
    if (dateInputsHaveChanged(changes, this._dateAdapter)) {
      this.stateChanges.next(void 0);
    }
  }
  ngOnDestroy() {
    this._closedSubscription.unsubscribe();
    this._openedSubscription.unsubscribe();
    this.stateChanges.complete();
  }
  /** Gets the date at which the calendar should start. */
  getStartValue() {
    return this.value ? this.value.start : null;
  }
  /** Gets the input's theme palette. */
  getThemePalette() {
    return this._formField ? this._formField.color : void 0;
  }
  /** Gets the element to which the calendar overlay should be attached. */
  getConnectedOverlayOrigin() {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }
  /** Gets the ID of an element that should be used a description for the calendar overlay. */
  getOverlayLabelId() {
    return this._formField ? this._formField.getLabelId() : null;
  }
  /** Gets the value that is used to mirror the state input. */
  _getInputMirrorValue(part) {
    const input = part === "start" ? this._startInput : this._endInput;
    return input ? input.getMirrorValue() : "";
  }
  /** Whether the input placeholders should be hidden. */
  _shouldHidePlaceholders() {
    return this._startInput ? !this._startInput.isEmpty() : false;
  }
  /** Handles the value in one of the child inputs changing. */
  _handleChildValueChange() {
    this.stateChanges.next(void 0);
    this._changeDetectorRef.markForCheck();
  }
  /** Opens the date range picker associated with the input. */
  _openDatepicker() {
    if (this._rangePicker) {
      this._rangePicker.open();
    }
  }
  /** Whether the separate text should be hidden. */
  _shouldHideSeparator() {
    return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty;
  }
  /** Gets the value for the `aria-labelledby` attribute of the inputs. */
  _getAriaLabelledby() {
    const formField = this._formField;
    return formField && formField._hasFloatingLabel() ? formField._labelId : null;
  }
  _getStartDateAccessibleName() {
    return this._startInput._getAccessibleName();
  }
  _getEndDateAccessibleName() {
    return this._endInput._getAccessibleName();
  }
  /** Updates the focused state of the range input. */
  _updateFocus(origin) {
    this.focused = origin !== null;
    this.stateChanges.next();
  }
  /** Re-runs the validators on the start/end inputs. */
  _revalidate() {
    if (this._startInput) {
      this._startInput._validatorOnChange();
    }
    if (this._endInput) {
      this._endInput._validatorOnChange();
    }
  }
  /** Registers the current date selection model with the start/end inputs. */
  _registerModel(model) {
    if (this._startInput) {
      this._startInput._registerModel(model);
    }
    if (this._endInput) {
      this._endInput._registerModel(model);
    }
  }
  /** Checks whether a specific range input directive is required. */
  _isTargetRequired(target) {
    return target?.ngControl?.control?.hasValidator(Validators.required);
  }
  static \u0275fac = function MatDateRangeInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDateRangeInput)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDateRangeInput,
    selectors: [["mat-date-range-input"]],
    hostAttrs: ["role", "group", 1, "mat-date-range-input"],
    hostVars: 8,
    hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
        \u0275\u0275classProp("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
      }
    },
    inputs: {
      rangePicker: "rangePicker",
      required: [2, "required", "required", booleanAttribute],
      dateFilter: "dateFilter",
      min: "min",
      max: "max",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      separator: "separator",
      comparisonStart: "comparisonStart",
      comparisonEnd: "comparisonEnd"
    },
    exportAs: ["matDateRangeInput"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatDateRangeInput
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c62,
    decls: 11,
    vars: 5,
    consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]],
    template: function MatDateRangeInput_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c52);
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275listener("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
          return ctx._updateFocus($event);
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementStart(3, "span", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275projection(8, 1);
        \u0275\u0275elementStart(9, "span", 2);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx._getInputMirrorValue("start"));
        \u0275\u0275advance();
        \u0275\u0275classProp("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.separator);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx._getInputMirrorValue("end"));
      }
    },
    dependencies: [CdkMonitorFocus],
    styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color, var(--mat-sys-on-surface))}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangeInput, [{
    type: Component,
    args: [{
      selector: "mat-date-range-input",
      exportAs: "matDateRangeInput",
      host: {
        "class": "mat-date-range-input",
        "[class.mat-date-range-input-hide-placeholders]": "_shouldHidePlaceholders()",
        "[class.mat-date-range-input-required]": "required",
        "[attr.id]": "id",
        "role": "group",
        "[attr.aria-labelledby]": "_getAriaLabelledby()",
        "[attr.aria-describedby]": "_ariaDescribedBy",
        // Used by the test harness to tie this input to its calendar. We can't depend on
        // `aria-owns` for this, because it's only defined while the calendar is open.
        "[attr.data-mat-calendar]": "rangePicker ? rangePicker.id : null"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatDateRangeInput
      }],
      imports: [CdkMonitorFocus],
      template: `<div
  class="mat-date-range-input-container"
  cdkMonitorSubtreeFocus
  (cdkFocusChange)="_updateFocus($event)">
  <div class="mat-date-range-input-wrapper">
    <ng-content select="input[matStartDate]"></ng-content>
    <span
      class="mat-date-range-input-mirror"
      aria-hidden="true">{{_getInputMirrorValue('start')}}</span>
  </div>

  <span
    class="mat-date-range-input-separator"
    [class.mat-date-range-input-separator-hidden]="_shouldHideSeparator()">{{separator}}</span>

  <div class="mat-date-range-input-wrapper mat-date-range-input-end-wrapper">
    <ng-content select="input[matEndDate]"></ng-content>
    <span
      class="mat-date-range-input-mirror"
      aria-hidden="true">{{_getInputMirrorValue('end')}}</span>
  </div>
</div>

`,
      styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color, var(--mat-sys-on-surface))}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}@media(forced-colors: active){.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}\n"]
    }]
  }], () => [], {
    rangePicker: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dateFilter: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    separator: [{
      type: Input
    }],
    comparisonStart: [{
      type: Input
    }],
    comparisonEnd: [{
      type: Input
    }]
  });
})();
function _computeAriaAccessibleName(element) {
  return _computeAriaAccessibleNameInternal(element, true);
}
function ssrSafeIsElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
function ssrSafeIsHTMLInputElement(node) {
  return node.nodeName === "INPUT";
}
function ssrSafeIsHTMLTextAreaElement(node) {
  return node.nodeName === "TEXTAREA";
}
function _computeAriaAccessibleNameInternal(currentNode, isDirectlyReferenced) {
  if (ssrSafeIsElement(currentNode) && isDirectlyReferenced) {
    const labelledbyIds = currentNode.getAttribute?.("aria-labelledby")?.split(/\s+/g) || [];
    const validIdRefs = labelledbyIds.reduce((validIds, id) => {
      const elem = document.getElementById(id);
      if (elem) {
        validIds.push(elem);
      }
      return validIds;
    }, []);
    if (validIdRefs.length) {
      return validIdRefs.map((idRef) => {
        return _computeAriaAccessibleNameInternal(idRef, false);
      }).join(" ");
    }
  }
  if (ssrSafeIsElement(currentNode)) {
    const ariaLabel = currentNode.getAttribute("aria-label")?.trim();
    if (ariaLabel) {
      return ariaLabel;
    }
  }
  if (ssrSafeIsHTMLInputElement(currentNode) || ssrSafeIsHTMLTextAreaElement(currentNode)) {
    if (currentNode.labels?.length) {
      return Array.from(currentNode.labels).map((x) => _computeAriaAccessibleNameInternal(x, false)).join(" ");
    }
    const placeholder = currentNode.getAttribute("placeholder")?.trim();
    if (placeholder) {
      return placeholder;
    }
    const title = currentNode.getAttribute("title")?.trim();
    if (title) {
      return title;
    }
  }
  return (currentNode.textContent || "").replace(/\s+/g, " ").trim();
}
var MatDateRangeInputPartBase = class _MatDateRangeInputPartBase extends MatDatepickerInputBase {
  _rangeInput = inject(MatDateRangeInput);
  _elementRef = inject(ElementRef);
  _defaultErrorStateMatcher = inject(ErrorStateMatcher);
  _injector = inject(Injector);
  _rawValue = signal("");
  _parentForm = inject(NgForm, {
    optional: true
  });
  _parentFormGroup = inject(FormGroupDirective, {
    optional: true
  });
  /**
   * Form control bound to this input part.
   * @docs-private
   */
  ngControl;
  _dir = inject(Directionality, {
    optional: true
  });
  _errorStateTracker;
  /** Object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Whether the input is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  constructor() {
    super();
    this._errorStateTracker = new _ErrorStateTracker(this._defaultErrorStateMatcher, null, this._parentFormGroup, this._parentForm, this.stateChanges);
  }
  ngOnInit() {
    const ngControl = this._injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    if (ngControl) {
      this.ngControl = ngControl;
      this._errorStateTracker.ngControl = ngControl;
    }
  }
  ngAfterContentInit() {
    this._register();
  }
  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
    this._rawValue.set(this._elementRef.nativeElement.value);
  }
  /** Gets whether the input is empty. */
  isEmpty() {
    return this._rawValue().length === 0;
  }
  /** Gets the placeholder of the input. */
  _getPlaceholder() {
    return this._elementRef.nativeElement.placeholder;
  }
  /** Focuses the input. */
  focus() {
    this._elementRef.nativeElement.focus();
  }
  /** Gets the value that should be used when mirroring the input's size. */
  getMirrorValue() {
    const value = this._rawValue();
    return value.length > 0 ? value : this._getPlaceholder();
  }
  /** Refreshes the error state of the input. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Handles `input` events on the input element. */
  _onInput(event) {
    super._onInput(event);
    this._rangeInput._handleChildValueChange();
  }
  /** Opens the datepicker associated with the input. */
  _openPopup() {
    this._rangeInput._openDatepicker();
  }
  /** Gets the minimum date from the range input. */
  _getMinDate() {
    return this._rangeInput.min;
  }
  /** Gets the maximum date from the range input. */
  _getMaxDate() {
    return this._rangeInput.max;
  }
  /** Gets the date filter function from the range input. */
  _getDateFilter() {
    return this._rangeInput.dateFilter;
  }
  _parentDisabled() {
    return this._rangeInput._groupDisabled;
  }
  _shouldHandleChangeEvent({
    source
  }) {
    return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
  }
  _assignValueProgrammatically(value) {
    super._assignValueProgrammatically(value);
    const opposite = this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput;
    opposite?._validatorOnChange();
    this._rawValue.set(this._elementRef.nativeElement.value);
  }
  _formatValue(value) {
    super._formatValue(value);
    this._rangeInput._handleChildValueChange();
  }
  /** return the ARIA accessible name of the input element */
  _getAccessibleName() {
    return _computeAriaAccessibleName(this._elementRef.nativeElement);
  }
  static \u0275fac = function MatDateRangeInputPartBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDateRangeInputPartBase)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDateRangeInputPartBase,
    inputs: {
      errorStateMatcher: "errorStateMatcher"
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangeInputPartBase, [{
    type: Directive
  }], () => [], {
    errorStateMatcher: [{
      type: Input
    }]
  });
})();
var MatStartDate = class _MatStartDate extends MatDateRangeInputPartBase {
  /** Validator that checks that the start date isn't after the end date. */
  _startValidator = (control) => {
    const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
    const end = this._model ? this._model.selection.end : null;
    return !start || !end || this._dateAdapter.compareDate(start, end) <= 0 ? null : {
      "matStartDateInvalid": {
        "end": end,
        "actual": start
      }
    };
  };
  _validator = Validators.compose([...super._getValidators(), this._startValidator]);
  _register() {
    this._rangeInput._startInput = this;
  }
  _getValueFromModel(modelValue) {
    return modelValue.start;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.start ? !!change.selection.start : !change.selection.start || !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range2 = new DateRange(value, this._model.selection.end);
      this._model.updateSelection(range2, this);
      this._rangeInput._handleChildValueChange();
    }
  }
  _onKeydown(event) {
    const endInput = this._rangeInput._endInput;
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== "rtl";
    if ((event.keyCode === RIGHT_ARROW && isLtr || event.keyCode === LEFT_ARROW && !isLtr) && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) {
      event.preventDefault();
      endInput._elementRef.nativeElement.setSelectionRange(0, 0);
      endInput.focus();
    } else {
      super._onKeydown(event);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatStartDate_BaseFactory;
    return function MatStartDate_Factory(__ngFactoryType__) {
      return (\u0275MatStartDate_BaseFactory || (\u0275MatStartDate_BaseFactory = \u0275\u0275getInheritedFactory(_MatStartDate)))(__ngFactoryType__ || _MatStartDate);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatStartDate,
    selectors: [["input", "matStartDate", ""]],
    hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
    hostVars: 5,
    hostBindings: function MatStartDate_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function MatStartDate_input_HostBindingHandler($event) {
          return ctx._onInput($event);
        })("change", function MatStartDate_change_HostBindingHandler() {
          return ctx._onChange();
        })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
          return ctx._onKeydown($event);
        })("blur", function MatStartDate_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("disabled", ctx.disabled);
        \u0275\u0275attribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", ctx._rangeInput._ariaOwns() || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
      }
    },
    outputs: {
      dateChange: "dateChange",
      dateInput: "dateInput"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _MatStartDate,
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatStartDate,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatStartDate, [{
    type: Directive,
    args: [{
      selector: "input[matStartDate]",
      host: {
        "class": "mat-start-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "_rangeInput._ariaOwns() || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()!) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()!) : null",
        "(blur)": "_onBlur()",
        "type": "text"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MatStartDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatStartDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"]
    }]
  }], null, null);
})();
var MatEndDate = class _MatEndDate extends MatDateRangeInputPartBase {
  /** Validator that checks that the end date isn't before the start date. */
  _endValidator = (control) => {
    const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
    const start = this._model ? this._model.selection.start : null;
    return !end || !start || this._dateAdapter.compareDate(end, start) >= 0 ? null : {
      "matEndDateInvalid": {
        "start": start,
        "actual": end
      }
    };
  };
  _register() {
    this._rangeInput._endInput = this;
  }
  _validator = Validators.compose([...super._getValidators(), this._endValidator]);
  _getValueFromModel(modelValue) {
    return modelValue.end;
  }
  _shouldHandleChangeEvent(change) {
    if (!super._shouldHandleChangeEvent(change)) {
      return false;
    } else {
      return !change.oldValue?.end ? !!change.selection.end : !change.selection.end || !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
    }
  }
  _assignValueToModel(value) {
    if (this._model) {
      const range2 = new DateRange(this._model.selection.start, value);
      this._model.updateSelection(range2, this);
    }
  }
  _moveCaretToEndOfStartInput() {
    const startInput = this._rangeInput._startInput._elementRef.nativeElement;
    const value = startInput.value;
    if (value.length > 0) {
      startInput.setSelectionRange(value.length, value.length);
    }
    startInput.focus();
  }
  _onKeydown(event) {
    const element = this._elementRef.nativeElement;
    const isLtr = this._dir?.value !== "rtl";
    if (event.keyCode === BACKSPACE && !element.value) {
      this._moveCaretToEndOfStartInput();
    } else if ((event.keyCode === LEFT_ARROW && isLtr || event.keyCode === RIGHT_ARROW && !isLtr) && element.selectionStart === 0 && element.selectionEnd === 0) {
      event.preventDefault();
      this._moveCaretToEndOfStartInput();
    } else {
      super._onKeydown(event);
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatEndDate_BaseFactory;
    return function MatEndDate_Factory(__ngFactoryType__) {
      return (\u0275MatEndDate_BaseFactory || (\u0275MatEndDate_BaseFactory = \u0275\u0275getInheritedFactory(_MatEndDate)))(__ngFactoryType__ || _MatEndDate);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatEndDate,
    selectors: [["input", "matEndDate", ""]],
    hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
    hostVars: 5,
    hostBindings: function MatEndDate_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function MatEndDate_input_HostBindingHandler($event) {
          return ctx._onInput($event);
        })("change", function MatEndDate_change_HostBindingHandler() {
          return ctx._onChange();
        })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
          return ctx._onKeydown($event);
        })("blur", function MatEndDate_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("disabled", ctx.disabled);
        \u0275\u0275attribute("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", ctx._rangeInput._ariaOwns() || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
      }
    },
    outputs: {
      dateChange: "dateChange",
      dateInput: "dateInput"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _MatEndDate,
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatEndDate,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatEndDate, [{
    type: Directive,
    args: [{
      selector: "input[matEndDate]",
      host: {
        "class": "mat-end-date mat-date-range-input-inner",
        "[disabled]": "disabled",
        "(input)": "_onInput($event)",
        "(change)": "_onChange()",
        "(keydown)": "_onKeydown($event)",
        "[attr.aria-haspopup]": '_rangeInput.rangePicker ? "dialog" : null',
        "[attr.aria-owns]": "_rangeInput._ariaOwns() || null",
        "[attr.min]": "_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()!) : null",
        "[attr.max]": "_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()!) : null",
        "(blur)": "_onBlur()",
        "type": "text"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MatEndDate,
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatEndDate,
        multi: true
      }],
      // These need to be specified explicitly, because some tooling doesn't
      // seem to pick them up from the base class. See #20932.
      outputs: ["dateChange", "dateInput"]
    }]
  }], null, null);
})();
var MatDateRangePicker = class _MatDateRangePicker extends MatDatepickerBase {
  _forwardContentValues(instance) {
    super._forwardContentValues(instance);
    const input = this.datepickerInput;
    if (input) {
      instance.comparisonStart = input.comparisonStart;
      instance.comparisonEnd = input.comparisonEnd;
      instance.startDateAccessibleName = input._getStartDateAccessibleName();
      instance.endDateAccessibleName = input._getEndDateAccessibleName();
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatDateRangePicker_BaseFactory;
    return function MatDateRangePicker_Factory(__ngFactoryType__) {
      return (\u0275MatDateRangePicker_BaseFactory || (\u0275MatDateRangePicker_BaseFactory = \u0275\u0275getInheritedFactory(_MatDateRangePicker)))(__ngFactoryType__ || _MatDateRangePicker);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDateRangePicker,
    selectors: [["mat-date-range-picker"]],
    exportAs: ["matDateRangePicker"],
    features: [\u0275\u0275ProvidersFeature([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
      provide: MatDatepickerBase,
      useExisting: _MatDateRangePicker
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 0,
    vars: 0,
    template: function MatDateRangePicker_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDateRangePicker, [{
    type: Component,
    args: [{
      selector: "mat-date-range-picker",
      template: "",
      exportAs: "matDateRangePicker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
        provide: MatDatepickerBase,
        useExisting: MatDateRangePicker
      }]
    }]
  }], null, null);
})();
var MatDatepickerApply = class _MatDatepickerApply {
  _datepicker = inject(MatDatepickerBase);
  constructor() {
  }
  _applySelection() {
    this._datepicker._applyPendingSelection();
    this._datepicker.close();
  }
  static \u0275fac = function MatDatepickerApply_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerApply)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerApply,
    selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]],
    hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDatepickerApply_click_HostBindingHandler() {
          return ctx._applySelection();
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerApply, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerApply], [matDateRangePickerApply]",
      host: {
        "(click)": "_applySelection()"
      }
    }]
  }], () => [], null);
})();
var MatDatepickerCancel = class _MatDatepickerCancel {
  _datepicker = inject(MatDatepickerBase);
  constructor() {
  }
  static \u0275fac = function MatDatepickerCancel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerCancel)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatDatepickerCancel,
    selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]],
    hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatDatepickerCancel_click_HostBindingHandler() {
          return ctx._datepicker.close();
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerCancel, [{
    type: Directive,
    args: [{
      selector: "[matDatepickerCancel], [matDateRangePickerCancel]",
      host: {
        "(click)": "_datepicker.close()"
      }
    }]
  }], () => [], null);
})();
var MatDatepickerActions = class _MatDatepickerActions {
  _datepicker = inject(MatDatepickerBase);
  _viewContainerRef = inject(ViewContainerRef);
  _template;
  _portal;
  constructor() {
  }
  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._template, this._viewContainerRef);
    this._datepicker.registerActions(this._portal);
  }
  ngOnDestroy() {
    this._datepicker.removeActions(this._portal);
    if (this._portal && this._portal.isAttached) {
      this._portal?.detach();
    }
  }
  static \u0275fac = function MatDatepickerActions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerActions)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatDatepickerActions,
    selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]],
    viewQuery: function MatDatepickerActions_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._template = _t.first);
      }
    },
    ngContentSelectors: _c12,
    decls: 1,
    vars: 0,
    consts: [[1, "mat-datepicker-actions"]],
    template: function MatDatepickerActions_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
      }
    },
    styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerActions, [{
    type: Component,
    args: [{
      selector: "mat-datepicker-actions, mat-date-range-picker-actions",
      template: `
    <ng-template>
      <div class="mat-datepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], () => [], {
    _template: [{
      type: ViewChild,
      args: [TemplateRef]
    }]
  });
})();
var MatDatepickerModule = class _MatDatepickerModule {
  static \u0275fac = function MatDatepickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDatepickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatDatepickerModule,
    imports: [MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
    exports: [CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
    imports: [MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatDatepickerContent, MatDatepickerToggle, MatCalendarHeader, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDatepickerModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, OverlayModule, A11yModule, PortalModule, MatCommonModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      exports: [CdkScrollableModule, MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply],
      providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/option-BzhYL_xC.mjs
var _c03 = ["*", [["mat-option"], ["ng-container"]]];
var _c13 = ["*", "mat-option, ng-container"];
var _c23 = ["text"];
var _c33 = [[["mat-icon"]], "*"];
var _c43 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
  }
}
function MatOption_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled);
  }
}
function MatOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.group.label, ")");
  }
}
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var MatOptgroup = class _MatOptgroup {
  /** Label for the option group. */
  label;
  /** whether the option group is disabled. */
  disabled = false;
  /** Unique id for the underlying label. */
  _labelId = inject(_IdGenerator).getId("mat-optgroup-label-");
  /** Whether the group is in inert a11y mode. */
  _inert;
  constructor() {
    const parent = inject(MAT_OPTION_PARENT_COMPONENT, {
      optional: true
    });
    this._inert = parent?.inertGroups ?? false;
  }
  static \u0275fac = function MatOptgroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatOptgroup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatOptgroup,
    selectors: [["mat-optgroup"]],
    hostAttrs: [1, "mat-mdc-optgroup"],
    hostVars: 3,
    hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
      }
    },
    inputs: {
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    exportAs: ["matOptgroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_OPTGROUP,
      useExisting: _MatOptgroup
    }])],
    ngContentSelectors: _c13,
    decls: 5,
    vars: 4,
    consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
    template: function MatOptgroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c03);
        \u0275\u0275elementStart(0, "span", 0)(1, "span", 1);
        \u0275\u0275text(2);
        \u0275\u0275projection(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275projection(4, 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("mdc-list-item--disabled", ctx.disabled);
        \u0275\u0275property("id", ctx._labelId);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.label, " ");
      }
    },
    styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptgroup, [{
    type: Component,
    args: [{
      selector: "mat-optgroup",
      exportAs: "matOptgroup",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
      styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"]
    }]
  }], () => [], {
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatOptionSelectionChange = class {
  source;
  isUserInput;
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var MatOption = class _MatOption {
  _element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parent = inject(MAT_OPTION_PARENT_COMPONENT, {
    optional: true
  });
  group = inject(MAT_OPTGROUP, {
    optional: true
  });
  _signalDisableRipple = false;
  _selected = false;
  _active = false;
  _mostRecentViewValue = "";
  /** Whether the wrapping component is in multiple selection mode. */
  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */
  get selected() {
    return this._selected;
  }
  /** The form value of the option. */
  value;
  /** The unique ID of the option. */
  id = inject(_IdGenerator).getId("mat-option-");
  /** Whether the option is disabled. */
  get disabled() {
    return this.group && this.group.disabled || this._disabled();
  }
  set disabled(value) {
    this._disabled.set(value);
  }
  _disabled = signal(false);
  /** Whether ripples for the option are disabled. */
  get disableRipple() {
    return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
  }
  /** Whether to display checkmark for single-selection. */
  get hideSingleSelectionIndicator() {
    return !!(this._parent && this._parent.hideSingleSelectionIndicator);
  }
  /** Event emitted when the option is selected or deselected. */
  // tslint:disable-next-line:no-output-on-prefix
  onSelectionChange = new EventEmitter();
  /** Element containing the option's text. */
  _text;
  /** Emits when the state of the option changes and any parents have to be notified. */
  _stateChanges = new Subject();
  constructor() {
    const styleLoader = inject(_CdkPrivateStyleLoader);
    styleLoader.load(_StructuralStylesLoader);
    styleLoader.load(_VisuallyHiddenLoader);
    this._signalDisableRipple = !!this._parent && isSignal(this._parent.disableRipple);
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */
  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */
  get viewValue() {
    return (this._text?.nativeElement.textContent || "").trim();
  }
  /** Selects the option. */
  select(emitEvent = true) {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Deselects the option. */
  deselect(emitEvent = true) {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Sets focus onto this option. */
  focus(_origin, options) {
    const element = this._getHostElement();
    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
      this._selectViaInteraction();
      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */
  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }
  /** Returns the correct tabindex for the option depending on disabled state. */
  // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
  // That's because `MatLegacyOption` use `MatOption` type in a few places such as
  // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Gets the host DOM element. */
  _getHostElement() {
    return this._element.nativeElement;
  }
  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.viewValue;
      if (viewValue !== this._mostRecentViewValue) {
        if (this._mostRecentViewValue) {
          this._stateChanges.next();
        }
        this._mostRecentViewValue = viewValue;
      }
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */
  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }
  static \u0275fac = function MatOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatOption)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatOption,
    selectors: [["mat-option"]],
    viewQuery: function MatOption_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c23, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._text = _t.first);
      }
    },
    hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
    hostVars: 11,
    hostBindings: function MatOption_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatOption_click_HostBindingHandler() {
          return ctx._selectViaInteraction();
        })("keydown", function MatOption_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
        \u0275\u0275classProp("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
      }
    },
    inputs: {
      value: "value",
      id: "id",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      onSelectionChange: "onSelectionChange"
    },
    exportAs: ["matOption"],
    ngContentSelectors: _c43,
    decls: 8,
    vars: 5,
    consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
    template: function MatOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c33);
        \u0275\u0275conditionalCreate(0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
        \u0275\u0275projection(1);
        \u0275\u0275elementStart(2, "span", 2, 0);
        \u0275\u0275projection(4, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3);
        \u0275\u0275conditionalCreate(6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
        \u0275\u0275element(7, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.multiple ? 0 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.group && ctx.group._inert ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
      }
    },
    dependencies: [MatPseudoCheckbox, MatRipple],
    styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOption, [{
    type: Component,
    args: [{
      selector: "mat-option",
      exportAs: "matOption",
      host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        // Set aria-selected to false for non-selected items and true for selected items. Conform to
        // [WAI ARIA Listbox authoring practices guide](
        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
        // selected option has either aria-selected or aria-checked  set to true. All options that are
        // selectable but not selected have either aria-selected or aria-checked set to false." Align
        // aria-selected implementation of Chips and List components.
        //
        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
        // every option as "selected" (#21491).
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatPseudoCheckbox, MatRipple],
      template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
      styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onSelectionChange: [{
      type: Output
    }],
    _text: [{
      type: ViewChild,
      args: ["text", {
        static: true
      }]
    }]
  });
})();
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}

// node_modules/@angular/material/fesm2022/index-DwiL-HGk.mjs
var MatOptionModule = class _MatOptionModule {
  static \u0275fac = function MatOptionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatOptionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatOptionModule,
    imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
    exports: [MatOption, MatOptgroup]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptionModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
      exports: [MatOption, MatOptgroup]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/module-B0CLRw5e.mjs
var _c04 = ["trigger"];
var _c14 = ["panel"];
var _c24 = [[["mat-select-trigger"]], "*"];
var _c34 = ["mat-select-trigger", "*"];
function MatSelect_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.placeholder);
  }
}
function MatSelect_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatSelect_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.triggerValue);
  }
}
function MatSelect_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275conditionalCreate(1, MatSelect_Conditional_5_Conditional_1_Template, 1, 0)(2, MatSelect_Conditional_5_Conditional_2_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.customTrigger ? 1 : 2);
  }
}
function MatSelect_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12, 1);
    \u0275\u0275listener("keydown", function MatSelect_ng_template_10_Template_div_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._handleKeydown($event));
    });
    \u0275\u0275projection(2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ", ctx_r1._getPanelTheme()));
    \u0275\u0275classProp("mat-select-panel-animations-enabled", !ctx_r1._animationsDisabled);
    \u0275\u0275property("ngClass", ctx_r1.panelClass);
    \u0275\u0275attribute("id", ctx_r1.id + "-panel")("aria-multiselectable", ctx_r1.multiple)("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby());
  }
}
function getMatSelectDynamicMultipleError() {
  return Error("Cannot change `multiple` mode of select after initialization.");
}
function getMatSelectNonArrayValueError() {
  return Error("Value must be an array in multiple-selection mode.");
}
function getMatSelectNonFunctionValueError() {
  return Error("`compareWith` must be a function.");
}
var MAT_SELECT_SCROLL_STRATEGY = new InjectionToken("mat-select-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_SELECT_CONFIG = new InjectionToken("MAT_SELECT_CONFIG");
var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var MAT_SELECT_TRIGGER = new InjectionToken("MatSelectTrigger");
var MatSelectChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatSelect = class _MatSelect {
  _viewportRuler = inject(ViewportRuler);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _idGenerator = inject(_IdGenerator);
  _renderer = inject(Renderer2);
  _parentFormField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  ngControl = inject(NgControl, {
    self: true,
    optional: true
  });
  _liveAnnouncer = inject(LiveAnnouncer);
  _defaultOptions = inject(MAT_SELECT_CONFIG, {
    optional: true
  });
  _animationsDisabled = _animationsDisabled();
  _initialized = new Subject();
  _cleanupDetach;
  /** All of the defined select options. */
  options;
  // TODO(crisbeto): this is only necessary for the non-MDC select, but it's technically a
  // public API so we have to keep it. It should be deprecated and removed eventually.
  /** All of the defined groups of options. */
  optionGroups;
  /** User-supplied override of the trigger element. */
  customTrigger;
  /**
   * This position config ensures that the top "start" corner of the overlay
   * is aligned with with the top "start" of the origin by default (overlapping
   * the trigger completely). If the panel cannot fit below the trigger, it
   * will fall back to a position above the trigger.
   */
  _positions = [{
    originX: "start",
    originY: "bottom",
    overlayX: "start",
    overlayY: "top"
  }, {
    originX: "end",
    originY: "bottom",
    overlayX: "end",
    overlayY: "top"
  }, {
    originX: "start",
    originY: "top",
    overlayX: "start",
    overlayY: "bottom",
    panelClass: "mat-mdc-select-panel-above"
  }, {
    originX: "end",
    originY: "top",
    overlayX: "end",
    overlayY: "bottom",
    panelClass: "mat-mdc-select-panel-above"
  }];
  /** Scrolls a particular option into the view. */
  _scrollOptionIntoView(index) {
    const option = this.options.toArray()[index];
    if (option) {
      const panel = this.panel.nativeElement;
      const labelCount = _countGroupLabelsBeforeOption(index, this.options, this.optionGroups);
      const element = option._getHostElement();
      if (index === 0 && labelCount === 1) {
        panel.scrollTop = 0;
      } else {
        panel.scrollTop = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
      }
    }
  }
  /** Called when the panel has been opened and the overlay has settled on its final position. */
  _positioningSettled() {
    this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
  }
  /** Creates a change event object that should be emitted by the select. */
  _getChangeEvent(value) {
    return new MatSelectChange(this, value);
  }
  /** Factory function used to create a scroll strategy for this select. */
  _scrollStrategyFactory = inject(MAT_SELECT_SCROLL_STRATEGY);
  /** Whether or not the overlay panel is open. */
  _panelOpen = false;
  /** Comparison function to specify which option is displayed. Defaults to object equality. */
  _compareWith = (o1, o2) => o1 === o2;
  /** Unique id for this input. */
  _uid = this._idGenerator.getId("mat-select-");
  /** Current `aria-labelledby` value for the select trigger. */
  _triggerAriaLabelledBy = null;
  /**
   * Keeps track of the previous form control assigned to the select.
   * Used to detect if it has changed.
   */
  _previousControl;
  /** Emits whenever the component is destroyed. */
  _destroy = new Subject();
  /** Tracks the error state of the select. */
  _errorStateTracker;
  /**
   * Emits whenever the component state changes and should cause the parent
   * form-field to update. Implemented as part of `MatFormFieldControl`.
   * @docs-private
   */
  stateChanges = new Subject();
  /**
   * Disable the automatic labeling to avoid issues like #27241.
   * @docs-private
   */
  disableAutomaticLabeling = true;
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  userAriaDescribedBy;
  /** Deals with the selection logic. */
  _selectionModel;
  /** Manages keyboard events for options in the panel. */
  _keyManager;
  /** Ideal origin for the overlay panel. */
  _preferredOverlayOrigin;
  /** Width of the overlay panel. */
  _overlayWidth;
  /** `View -> model callback called when value changes` */
  _onChange = () => {
  };
  /** `View -> model callback called when select has been touched` */
  _onTouched = () => {
  };
  /** ID for the DOM node containing the select's value. */
  _valueId = this._idGenerator.getId("mat-select-value-");
  /** Strategy that will be used to handle scrolling while the select panel is open. */
  _scrollStrategy;
  _overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
  /** Whether the select is focused. */
  get focused() {
    return this._focused || this._panelOpen;
  }
  _focused = false;
  /** A name for this control that can be used by `mat-form-field`. */
  controlType = "mat-select";
  /** Trigger that opens the select. */
  trigger;
  /** Panel containing the select options. */
  panel;
  /** Overlay pane containing the options. */
  _overlayDir;
  /** Classes to be passed to the select panel. Supports the same syntax as `ngClass`. */
  panelClass;
  /** Whether the select is disabled. */
  disabled = false;
  /** Whether ripples in the select are disabled. */
  get disableRipple() {
    return this._disableRipple();
  }
  set disableRipple(value) {
    this._disableRipple.set(value);
  }
  _disableRipple = signal(false);
  /** Tab index of the select. */
  tabIndex = 0;
  /** Whether checkmark indicator for single-selection options is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  /** Placeholder to be shown if no value has been selected. */
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  _placeholder;
  /** Whether the component is required. */
  get required() {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }
  set required(value) {
    this._required = value;
    this.stateChanges.next();
  }
  _required;
  /** Whether the user should be allowed to select multiple options. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    if (this._selectionModel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatSelectDynamicMultipleError();
    }
    this._multiple = value;
  }
  _multiple = false;
  /** Whether to center the active option over the trigger. */
  disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
  /**
   * Function to compare the option values with the selected values. The first argument
   * is a value from an option. The second is a value from the selection. A boolean
   * should be returned.
   */
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatSelectNonFunctionValueError();
    }
    this._compareWith = fn;
    if (this._selectionModel) {
      this._initializeSelection();
    }
  }
  /** Value of the select control. */
  get value() {
    return this._value;
  }
  set value(newValue) {
    const hasAssigned = this._assignValue(newValue);
    if (hasAssigned) {
      this._onChange(newValue);
    }
  }
  _value;
  /** Aria label of the select. */
  ariaLabel = "";
  /** Input that can be used to specify the `aria-labelledby` attribute. */
  ariaLabelledby;
  /** Object used to control when error messages are shown. */
  get errorStateMatcher() {
    return this._errorStateTracker.matcher;
  }
  set errorStateMatcher(value) {
    this._errorStateTracker.matcher = value;
  }
  /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */
  typeaheadDebounceInterval;
  /**
   * Function used to sort the values in a select in multiple mode.
   * Follows the same logic as `Array.prototype.sort`.
   */
  sortComparator;
  /** Unique id of the element. */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
    this.stateChanges.next();
  }
  _id;
  /** Whether the select is in an error state. */
  get errorState() {
    return this._errorStateTracker.errorState;
  }
  set errorState(value) {
    this._errorStateTracker.errorState = value;
  }
  /**
   * Width of the panel. If set to `auto`, the panel will match the trigger width.
   * If set to null or an empty string, the panel will grow to match the longest option's text.
   */
  panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== "undefined" ? this._defaultOptions.panelWidth : "auto";
  /**
   * By default selecting an option with a `null` or `undefined` value will reset the select's
   * value. Enable this option if the reset behavior doesn't match your requirements and instead
   * the nullable options should become selected. The value of this input can be controlled app-wide
   * using the `MAT_SELECT_CONFIG` injection token.
   */
  canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? false;
  /** Combined stream of all of the child options' change events. */
  optionSelectionChanges = defer(() => {
    const options = this.options;
    if (options) {
      return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
    }
    return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
  });
  /** Event emitted when the select panel has been toggled. */
  openedChange = new EventEmitter();
  /** Event emitted when the select has been opened. */
  _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
  }));
  /** Event emitted when the select has been closed. */
  _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
  }));
  /** Event emitted when the selected value has been changed by the user. */
  selectionChange = new EventEmitter();
  /**
   * Event that emits whenever the raw value of the select changes. This is here primarily
   * to facilitate the two-way binding for the `value` input.
   * @docs-private
   */
  valueChange = new EventEmitter();
  constructor() {
    const defaultErrorStateMatcher = inject(ErrorStateMatcher);
    const parentForm = inject(NgForm, {
      optional: true
    });
    const parentFormGroup = inject(FormGroupDirective, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
    if (this._defaultOptions?.typeaheadDebounceInterval != null) {
      this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval;
    }
    this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
    this._scrollStrategy = this._scrollStrategyFactory();
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this.id;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple);
    this.stateChanges.next();
    this._viewportRuler.change().pipe(takeUntil(this._destroy)).subscribe(() => {
      if (this.panelOpen) {
        this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
        this._changeDetectorRef.detectChanges();
      }
    });
  }
  ngAfterContentInit() {
    this._initialized.next();
    this._initialized.complete();
    this._initKeyManager();
    this._selectionModel.changed.pipe(takeUntil(this._destroy)).subscribe((event) => {
      event.added.forEach((option) => option.select());
      event.removed.forEach((option) => option.deselect());
    });
    this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
      this._resetOptions();
      this._initializeSelection();
    });
  }
  ngDoCheck() {
    const newAriaLabelledby = this._getTriggerAriaLabelledby();
    const ngControl = this.ngControl;
    if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
      const element = this._elementRef.nativeElement;
      this._triggerAriaLabelledBy = newAriaLabelledby;
      if (newAriaLabelledby) {
        element.setAttribute("aria-labelledby", newAriaLabelledby);
      } else {
        element.removeAttribute("aria-labelledby");
      }
    }
    if (ngControl) {
      if (this._previousControl !== ngControl.control) {
        if (this._previousControl !== void 0 && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
          this.disabled = ngControl.disabled;
        }
        this._previousControl = ngControl.control;
      }
      this.updateErrorState();
    }
  }
  ngOnChanges(changes) {
    if (changes["disabled"] || changes["userAriaDescribedBy"]) {
      this.stateChanges.next();
    }
    if (changes["typeaheadDebounceInterval"] && this._keyManager) {
      this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
    }
  }
  ngOnDestroy() {
    this._cleanupDetach?.();
    this._keyManager?.destroy();
    this._destroy.next();
    this._destroy.complete();
    this.stateChanges.complete();
    this._clearFromModal();
  }
  /** Toggles the overlay panel open or closed. */
  toggle() {
    this.panelOpen ? this.close() : this.open();
  }
  /** Opens the overlay panel. */
  open() {
    if (!this._canOpen()) {
      return;
    }
    if (this._parentFormField) {
      this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
    }
    this._cleanupDetach?.();
    this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
    this._applyModalPanelOwnership();
    this._panelOpen = true;
    this._overlayDir.positionChange.pipe(take(1)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this._positioningSettled();
    });
    this._overlayDir.attachOverlay();
    this._keyManager.withHorizontalOrientation(null);
    this._highlightCorrectOption();
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
    Promise.resolve().then(() => this.openedChange.emit(true));
  }
  /**
   * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
   * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
   * panel. Track the modal we have changed so we can undo the changes on destroy.
   */
  _trackedModal = null;
  /**
   * If the autocomplete trigger is inside of an `aria-modal` element, connect
   * that modal to the options panel with `aria-owns`.
   *
   * For some browser + screen reader combinations, when navigation is inside
   * of an `aria-modal` element, the screen reader treats everything outside
   * of that modal as hidden or invisible.
   *
   * This causes a problem when the combobox trigger is _inside_ of a modal, because the
   * options panel is rendered _outside_ of that modal, preventing screen reader navigation
   * from reaching the panel.
   *
   * We can work around this issue by applying `aria-owns` to the modal with the `id` of
   * the options panel. This effectively communicates to assistive technology that the
   * options panel is part of the same interaction as the modal.
   *
   * At time of this writing, this issue is present in VoiceOver.
   * See https://github.com/angular/components/issues/20694
   */
  _applyModalPanelOwnership() {
    const modal = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
    if (!modal) {
      return;
    }
    const panelId = `${this.id}-panel`;
    if (this._trackedModal) {
      removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    }
    addAriaReferencedId(modal, "aria-owns", panelId);
    this._trackedModal = modal;
  }
  /** Clears the reference to the listbox overlay element from the modal it was added to. */
  _clearFromModal() {
    if (!this._trackedModal) {
      return;
    }
    const panelId = `${this.id}-panel`;
    removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
    this._trackedModal = null;
  }
  /** Closes the overlay panel and focuses the host element. */
  close() {
    if (this._panelOpen) {
      this._panelOpen = false;
      this._exitAndDetach();
      this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr");
      this._changeDetectorRef.markForCheck();
      this._onTouched();
      this.stateChanges.next();
      Promise.resolve().then(() => this.openedChange.emit(false));
    }
  }
  /** Triggers the exit animation and detaches the overlay at the end. */
  _exitAndDetach() {
    if (this._animationsDisabled || !this.panel) {
      this._detachOverlay();
      return;
    }
    this._cleanupDetach?.();
    this._cleanupDetach = () => {
      cleanupEvent();
      clearTimeout(exitFallbackTimer);
      this._cleanupDetach = void 0;
    };
    const panel = this.panel.nativeElement;
    const cleanupEvent = this._renderer.listen(panel, "animationend", (event) => {
      if (event.animationName === "_mat-select-exit") {
        this._cleanupDetach?.();
        this._detachOverlay();
      }
    });
    const exitFallbackTimer = setTimeout(() => {
      this._cleanupDetach?.();
      this._detachOverlay();
    }, 200);
    panel.classList.add("mat-select-panel-exit");
  }
  /** Detaches the current overlay directive. */
  _detachOverlay() {
    this._overlayDir.detachOverlay();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */
  writeValue(value) {
    this._assignValue(value);
  }
  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Disables the select. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  /** Whether or not the overlay panel is open. */
  get panelOpen() {
    return this._panelOpen;
  }
  /** The currently selected option. */
  get selected() {
    return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
  }
  /** The value displayed in the trigger. */
  get triggerValue() {
    if (this.empty) {
      return "";
    }
    if (this._multiple) {
      const selectedOptions = this._selectionModel.selected.map((option) => option.viewValue);
      if (this._isRtl()) {
        selectedOptions.reverse();
      }
      return selectedOptions.join(", ");
    }
    return this._selectionModel.selected[0].viewValue;
  }
  /** Refreshes the error state of the select. */
  updateErrorState() {
    this._errorStateTracker.updateErrorState();
  }
  /** Whether the element is in RTL mode. */
  _isRtl() {
    return this._dir ? this._dir.value === "rtl" : false;
  }
  /** Handles all keydown events on the select. */
  _handleKeydown(event) {
    if (!this.disabled) {
      this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
    }
  }
  /** Handles keyboard events while the select is closed. */
  _handleClosedKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW;
    const isOpenKey = keyCode === ENTER || keyCode === SPACE;
    const manager = this._keyManager;
    if (!manager.isTyping() && isOpenKey && !hasModifierKey(event) || (this.multiple || event.altKey) && isArrowKey) {
      event.preventDefault();
      this.open();
    } else if (!this.multiple) {
      const previouslySelectedOption = this.selected;
      manager.onKeydown(event);
      const selectedOption = this.selected;
      if (selectedOption && previouslySelectedOption !== selectedOption) {
        this._liveAnnouncer.announce(selectedOption.viewValue, 1e4);
      }
    }
  }
  /** Handles keyboard events when the selected is open. */
  _handleOpenKeydown(event) {
    const manager = this._keyManager;
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW;
    const isTyping = manager.isTyping();
    if (isArrowKey && event.altKey) {
      event.preventDefault();
      this.close();
    } else if (!isTyping && (keyCode === ENTER || keyCode === SPACE) && manager.activeItem && !hasModifierKey(event)) {
      event.preventDefault();
      manager.activeItem._selectViaInteraction();
    } else if (!isTyping && this._multiple && keyCode === A && event.ctrlKey) {
      event.preventDefault();
      const hasDeselectedOptions = this.options.some((opt) => !opt.disabled && !opt.selected);
      this.options.forEach((option) => {
        if (!option.disabled) {
          hasDeselectedOptions ? option.select() : option.deselect();
        }
      });
    } else {
      const previouslyFocusedIndex = manager.activeItemIndex;
      manager.onKeydown(event);
      if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
        manager.activeItem._selectViaInteraction();
      }
    }
  }
  /** Handles keyboard events coming from the overlay. */
  _handleOverlayKeydown(event) {
    if (event.keyCode === ESCAPE && !hasModifierKey(event)) {
      event.preventDefault();
      this.close();
    }
  }
  _onFocus() {
    if (!this.disabled) {
      this._focused = true;
      this.stateChanges.next();
    }
  }
  /**
   * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
   * "blur" to the panel when it opens, causing a false positive.
   */
  _onBlur() {
    this._focused = false;
    this._keyManager?.cancelTypeahead();
    if (!this.disabled && !this.panelOpen) {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
      this.stateChanges.next();
    }
  }
  /** Returns the theme to be used on the panel. */
  _getPanelTheme() {
    return this._parentFormField ? `mat-${this._parentFormField.color}` : "";
  }
  /** Whether the select has a value. */
  get empty() {
    return !this._selectionModel || this._selectionModel.isEmpty();
  }
  _initializeSelection() {
    Promise.resolve().then(() => {
      if (this.ngControl) {
        this._value = this.ngControl.value;
      }
      this._setSelectionByValue(this._value);
      this.stateChanges.next();
    });
  }
  /**
   * Sets the selected option based on a value. If no option can be
   * found with the designated value, the select trigger is cleared.
   */
  _setSelectionByValue(value) {
    this.options.forEach((option) => option.setInactiveStyles());
    this._selectionModel.clear();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getMatSelectNonArrayValueError();
      }
      value.forEach((currentValue) => this._selectOptionByValue(currentValue));
      this._sortValues();
    } else {
      const correspondingOption = this._selectOptionByValue(value);
      if (correspondingOption) {
        this._keyManager.updateActiveItem(correspondingOption);
      } else if (!this.panelOpen) {
        this._keyManager.updateActiveItem(-1);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Finds and selects and option based on its value.
   * @returns Option that has the corresponding value.
   */
  _selectOptionByValue(value) {
    const correspondingOption = this.options.find((option) => {
      if (this._selectionModel.isSelected(option)) {
        return false;
      }
      try {
        return (option.value != null || this.canSelectNullableOptions) && this._compareWith(option.value, value);
      } catch (error) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          console.warn(error);
        }
        return false;
      }
    });
    if (correspondingOption) {
      this._selectionModel.select(correspondingOption);
    }
    return correspondingOption;
  }
  /** Assigns a specific value to the select. Returns whether the value has changed. */
  _assignValue(newValue) {
    if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
      if (this.options) {
        this._setSelectionByValue(newValue);
      }
      this._value = newValue;
      return true;
    }
    return false;
  }
  // `skipPredicate` determines if key manager should avoid putting a given option in the tab
  // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
  // recommendation.
  //
  // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
  // makes a few exceptions for compound widgets.
  //
  // From [Developing a Keyboard Interface](
  // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
  //   "For the following composite widget elements, keep them focusable when disabled: Options in a
  //   Listbox..."
  //
  // The user can focus disabled options using the keyboard, but the user cannot click disabled
  // options.
  _skipPredicate = (option) => {
    if (this.panelOpen) {
      return false;
    }
    return option.disabled;
  };
  /** Gets how wide the overlay panel should be. */
  _getOverlayWidth(preferredOrigin) {
    if (this.panelWidth === "auto") {
      const refToMeasure = preferredOrigin instanceof CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
      return refToMeasure.nativeElement.getBoundingClientRect().width;
    }
    return this.panelWidth === null ? "" : this.panelWidth;
  }
  /** Syncs the parent state with the individual options. */
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  /** Sets up a key manager to listen to keyboard events on the overlay panel. */
  _initKeyManager() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate);
    this._keyManager.tabOut.subscribe(() => {
      if (this.panelOpen) {
        if (!this.multiple && this._keyManager.activeItem) {
          this._keyManager.activeItem._selectViaInteraction();
        }
        this.focus();
        this.close();
      }
    });
    this._keyManager.change.subscribe(() => {
      if (this._panelOpen && this.panel) {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
        this._keyManager.activeItem._selectViaInteraction();
      }
    });
  }
  /** Drops current option subscriptions and IDs and resets from scratch. */
  _resetOptions() {
    const changedOrDestroyed = merge(this.options.changes, this._destroy);
    this.optionSelectionChanges.pipe(takeUntil(changedOrDestroyed)).subscribe((event) => {
      this._onSelect(event.source, event.isUserInput);
      if (event.isUserInput && !this.multiple && this._panelOpen) {
        this.close();
        this.focus();
      }
    });
    merge(...this.options.map((option) => option._stateChanges)).pipe(takeUntil(changedOrDestroyed)).subscribe(() => {
      this._changeDetectorRef.detectChanges();
      this.stateChanges.next();
    });
  }
  /** Invoked when an option is clicked. */
  _onSelect(option, isUserInput) {
    const wasSelected = this._selectionModel.isSelected(option);
    if (!this.canSelectNullableOptions && option.value == null && !this._multiple) {
      option.deselect();
      this._selectionModel.clear();
      if (this.value != null) {
        this._propagateChanges(option.value);
      }
    } else {
      if (wasSelected !== option.selected) {
        option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
      }
      if (isUserInput) {
        this._keyManager.setActiveItem(option);
      }
      if (this.multiple) {
        this._sortValues();
        if (isUserInput) {
          this.focus();
        }
      }
    }
    if (wasSelected !== this._selectionModel.isSelected(option)) {
      this._propagateChanges();
    }
    this.stateChanges.next();
  }
  /** Sorts the selected values in the selected based on their order in the panel. */
  _sortValues() {
    if (this.multiple) {
      const options = this.options.toArray();
      this._selectionModel.sort((a, b) => {
        return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
      });
      this.stateChanges.next();
    }
  }
  /** Emits change event to set the model value. */
  _propagateChanges(fallbackValue) {
    let valueToEmit;
    if (this.multiple) {
      valueToEmit = this.selected.map((option) => option.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }
    this._value = valueToEmit;
    this.valueChange.emit(valueToEmit);
    this._onChange(valueToEmit);
    this.selectionChange.emit(this._getChangeEvent(valueToEmit));
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Highlights the selected item. If no option is selected, it will highlight
   * the first *enabled* option.
   */
  _highlightCorrectOption() {
    if (this._keyManager) {
      if (this.empty) {
        let firstEnabledOptionIndex = -1;
        for (let index = 0; index < this.options.length; index++) {
          const option = this.options.get(index);
          if (!option.disabled) {
            firstEnabledOptionIndex = index;
            break;
          }
        }
        this._keyManager.setActiveItem(firstEnabledOptionIndex);
      } else {
        this._keyManager.setActiveItem(this._selectionModel.selected[0]);
      }
    }
  }
  /** Whether the panel is allowed to open. */
  _canOpen() {
    return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir;
  }
  /** Focuses the select element. */
  focus(options) {
    this._elementRef.nativeElement.focus(options);
  }
  /** Gets the aria-labelledby for the select panel. */
  _getPanelAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    const labelId = this._parentFormField?.getLabelId() || null;
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  /** Determines the `aria-activedescendant` to be set on the host. */
  _getAriaActiveDescendant() {
    if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
      return this._keyManager.activeItem.id;
    }
    return null;
  }
  /** Gets the aria-labelledby of the select component trigger. */
  _getTriggerAriaLabelledby() {
    if (this.ariaLabel) {
      return null;
    }
    let value = this._parentFormField?.getLabelId() || "";
    if (this.ariaLabelledby) {
      value += " " + this.ariaLabelledby;
    }
    if (!value) {
      value = this._valueId;
    }
    return value;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get describedByIds() {
    const element = this._elementRef.nativeElement;
    const existingDescribedBy = element.getAttribute("aria-describedby");
    return existingDescribedBy?.split(" ") || [];
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  setDescribedByIds(ids) {
    if (ids.length) {
      this._elementRef.nativeElement.setAttribute("aria-describedby", ids.join(" "));
    } else {
      this._elementRef.nativeElement.removeAttribute("aria-describedby");
    }
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  onContainerClick() {
    this.focus();
    this.open();
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */
  get shouldLabelFloat() {
    return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
  }
  static \u0275fac = function MatSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelect)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSelect,
    selectors: [["mat-select"]],
    contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SELECT_TRIGGER, 5);
        \u0275\u0275contentQuery(dirIndex, MatOption, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.customTrigger = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.options = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionGroups = _t);
      }
    },
    viewQuery: function MatSelect_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
        \u0275\u0275viewQuery(_c14, 5);
        \u0275\u0275viewQuery(CdkConnectedOverlay, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trigger = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._overlayDir = _t.first);
      }
    },
    hostAttrs: ["role", "combobox", "aria-haspopup", "listbox", 1, "mat-mdc-select"],
    hostVars: 19,
    hostBindings: function MatSelect_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatSelect_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("focus", function MatSelect_focus_HostBindingHandler() {
          return ctx._onFocus();
        })("blur", function MatSelect_blur_HostBindingHandler() {
          return ctx._onBlur();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-activedescendant", ctx._getAriaActiveDescendant());
        \u0275\u0275classProp("mat-mdc-select-disabled", ctx.disabled)("mat-mdc-select-invalid", ctx.errorState)("mat-mdc-select-required", ctx.required)("mat-mdc-select-empty", ctx.empty)("mat-mdc-select-multiple", ctx.multiple);
      }
    },
    inputs: {
      userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
      panelClass: "panelClass",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      placeholder: "placeholder",
      required: [2, "required", "required", booleanAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      disableOptionCentering: [2, "disableOptionCentering", "disableOptionCentering", booleanAttribute],
      compareWith: "compareWith",
      value: "value",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      errorStateMatcher: "errorStateMatcher",
      typeaheadDebounceInterval: [2, "typeaheadDebounceInterval", "typeaheadDebounceInterval", numberAttribute],
      sortComparator: "sortComparator",
      id: "id",
      panelWidth: "panelWidth",
      canSelectNullableOptions: [2, "canSelectNullableOptions", "canSelectNullableOptions", booleanAttribute]
    },
    outputs: {
      openedChange: "openedChange",
      _openedStream: "opened",
      _closedStream: "closed",
      selectionChange: "selectionChange",
      valueChange: "valueChange"
    },
    exportAs: ["matSelect"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MatFormFieldControl,
      useExisting: _MatSelect
    }, {
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: _MatSelect
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c34,
    decls: 11,
    vars: 9,
    consts: [["fallbackOverlayOrigin", "cdkOverlayOrigin", "trigger", ""], ["panel", ""], ["cdk-overlay-origin", "", 1, "mat-mdc-select-trigger", 3, "click"], [1, "mat-mdc-select-value"], [1, "mat-mdc-select-placeholder", "mat-mdc-select-min-line"], [1, "mat-mdc-select-value-text"], [1, "mat-mdc-select-arrow-wrapper"], [1, "mat-mdc-select-arrow"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "focusable", "false", "aria-hidden", "true"], ["d", "M7 10l5 5 5-5z"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "detach", "backdropClick", "overlayKeydown", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayWidth", "cdkConnectedOverlayFlexibleDimensions"], [1, "mat-mdc-select-min-line"], ["role", "listbox", "tabindex", "-1", 3, "keydown", "ngClass"]],
    template: function MatSelect_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c24);
        \u0275\u0275elementStart(0, "div", 2, 0);
        \u0275\u0275listener("click", function MatSelect_Template_div_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.open());
        });
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275conditionalCreate(4, MatSelect_Conditional_4_Template, 2, 1, "span", 4)(5, MatSelect_Conditional_5_Template, 3, 1, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 8);
        \u0275\u0275element(9, "path", 9);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(10, MatSelect_ng_template_10_Template, 3, 10, "ng-template", 10);
        \u0275\u0275listener("detach", function MatSelect_Template_ng_template_detach_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close());
        })("backdropClick", function MatSelect_Template_ng_template_backdropClick_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.close());
        })("overlayKeydown", function MatSelect_Template_ng_template_overlayKeydown_10_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._handleOverlayKeydown($event));
        });
      }
      if (rf & 2) {
        const fallbackOverlayOrigin_r4 = \u0275\u0275reference(1);
        \u0275\u0275advance(3);
        \u0275\u0275attribute("id", ctx._valueId);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.empty ? 4 : 5);
        \u0275\u0275advance(6);
        \u0275\u0275property("cdkConnectedOverlayDisableClose", true)("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", ctx._preferredOverlayOrigin || fallbackOverlayOrigin_r4)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayWidth", ctx._overlayWidth)("cdkConnectedOverlayFlexibleDimensions", true);
      }
    },
    dependencies: [CdkOverlayOrigin, CdkConnectedOverlay, NgClass],
    styles: ['@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelect, [{
    type: Component,
    args: [{
      selector: "mat-select",
      exportAs: "matSelect",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "role": "combobox",
        "aria-haspopup": "listbox",
        "class": "mat-mdc-select",
        "[attr.id]": "id",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": 'panelOpen ? id + "-panel" : null',
        "[attr.aria-expanded]": "panelOpen",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.aria-required]": "required.toString()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[attr.aria-activedescendant]": "_getAriaActiveDescendant()",
        "[class.mat-mdc-select-disabled]": "disabled",
        "[class.mat-mdc-select-invalid]": "errorState",
        "[class.mat-mdc-select-required]": "required",
        "[class.mat-mdc-select-empty]": "empty",
        "[class.mat-mdc-select-multiple]": "multiple",
        "(keydown)": "_handleKeydown($event)",
        "(focus)": "_onFocus()",
        "(blur)": "_onBlur()"
      },
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MatSelect
      }, {
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatSelect
      }],
      imports: [CdkOverlayOrigin, CdkConnectedOverlay, NgClass],
      template: `<div cdk-overlay-origin
     class="mat-mdc-select-trigger"
     (click)="open()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>

  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ['@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n']
    }]
  }], () => [], {
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    customTrigger: [{
      type: ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }],
    userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    trigger: [{
      type: ViewChild,
      args: ["trigger"]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    _overlayDir: [{
      type: ViewChild,
      args: [CdkConnectedOverlay]
    }],
    panelClass: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableOptionCentering: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    errorStateMatcher: [{
      type: Input
    }],
    typeaheadDebounceInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortComparator: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    panelWidth: [{
      type: Input
    }],
    canSelectNullableOptions: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    openedChange: [{
      type: Output
    }],
    _openedStream: [{
      type: Output,
      args: ["opened"]
    }],
    _closedStream: [{
      type: Output,
      args: ["closed"]
    }],
    selectionChange: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }]
  });
})();
var MatSelectTrigger = class _MatSelectTrigger {
  static \u0275fac = function MatSelectTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSelectTrigger,
    selectors: [["mat-select-trigger"]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SELECT_TRIGGER,
      useExisting: _MatSelectTrigger
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectTrigger, [{
    type: Directive,
    args: [{
      selector: "mat-select-trigger",
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }]
    }]
  }], null, null);
})();
var MatSelectModule = class _MatSelectModule {
  static \u0275fac = function MatSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSelectModule,
    imports: [OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger],
    exports: [CdkScrollableModule, MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
    imports: [OverlayModule, MatOptionModule, MatCommonModule, CdkScrollableModule, MatFormFieldModule, MatOptionModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger],
      exports: [CdkScrollableModule, MatFormFieldModule, MatSelect, MatSelectTrigger, MatOptionModule, MatCommonModule],
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/core.mjs
var VERSION = new Version("20.0.5");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
var TIME_REGEX = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  /**
   * @deprecated No longer being used. To be removed.
   * @breaking-change 14.0.0
   */
  useUtcForDisplay = false;
  /** The injected locale. */
  _matDateLocale = inject(MAT_DATE_LOCALE, {
    optional: true
  });
  constructor() {
    super();
    const matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    if (typeof Intl !== "undefined" && Intl.Locale) {
      const locale = new Intl.Locale(this.locale);
      const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
      return firstDay === 7 ? 0 : firstDay;
    }
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  setTime(target, hours, minutes, seconds) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!inRange(hours, 0, 23)) {
        throw Error(`Invalid hours "${hours}". Hours value must be between 0 and 23.`);
      }
      if (!inRange(minutes, 0, 59)) {
        throw Error(`Invalid minutes "${minutes}". Minutes value must be between 0 and 59.`);
      }
      if (!inRange(seconds, 0, 59)) {
        throw Error(`Invalid seconds "${seconds}". Seconds value must be between 0 and 59.`);
      }
    }
    const clone = this.clone(target);
    clone.setHours(hours, minutes, seconds, 0);
    return clone;
  }
  getHours(date) {
    return date.getHours();
  }
  getMinutes(date) {
    return date.getMinutes();
  }
  getSeconds(date) {
    return date.getSeconds();
  }
  parseTime(userValue, parseFormat) {
    if (typeof userValue !== "string") {
      return userValue instanceof Date ? new Date(userValue.getTime()) : null;
    }
    const value = userValue.trim();
    if (value.length === 0) {
      return null;
    }
    let result = this._parseTimeString(value);
    if (result === null) {
      const withoutExtras = value.replace(/[^0-9:(AM|PM)]/gi, "").trim();
      if (withoutExtras.length > 0) {
        result = this._parseTimeString(withoutExtras);
      }
    }
    return result || this.invalid();
  }
  addSeconds(date, amount) {
    return new Date(date.getTime() + amount * 1e3);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
  /**
   * Attempts to parse a time string into a date object. Returns null if it cannot be parsed.
   * @param value Time string to parse.
   */
  _parseTimeString(value) {
    const parsed = value.toUpperCase().match(TIME_REGEX);
    if (parsed) {
      let hours = parseInt(parsed[1]);
      const minutes = parseInt(parsed[2]);
      let seconds = parsed[3] == null ? void 0 : parseInt(parsed[3]);
      const amPm = parsed[4];
      if (hours === 12) {
        hours = amPm === "AM" ? 0 : hours;
      } else if (amPm === "PM") {
        hours += 12;
      }
      if (inRange(hours, 0, 23) && inRange(minutes, 0, 59) && (seconds == null || inRange(seconds, 0, 59))) {
        return this.setTime(this.today(), hours, minutes, seconds || 0);
      }
    }
    return null;
  }
  static \u0275fac = function NativeDateAdapter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeDateAdapter)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NativeDateAdapter,
    factory: _NativeDateAdapter.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Injectable
  }], () => [], null);
})();
function inRange(value, min, max) {
  return !isNaN(value) && value >= min && value <= max;
}
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null,
    timeInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    timeInput: {
      hour: "numeric",
      minute: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    },
    timeOptionLabel: {
      hour: "numeric",
      minute: "numeric"
    }
  }
};
var NativeDateModule = class _NativeDateModule {
  static \u0275fac = function NativeDateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeDateModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NativeDateModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [{
      provide: DateAdapter,
      useClass: NativeDateAdapter
    }]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var MatNativeDateModule = class _MatNativeDateModule {
  static \u0275fac = function MatNativeDateModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatNativeDateModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatNativeDateModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [provideNativeDateAdapter()]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}

// src/app/shared/components/users/profile-editor/profile-editor.ts
function ProfileEditor_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Display Name cannot be null.");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditor_Conditional_0_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const timeZone_r3 = ctx.$implicit;
    \u0275\u0275property("value", timeZone_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(timeZone_r3.name);
  }
}
function ProfileEditor_Conditional_0_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const locale_r4 = ctx.$implicit;
    \u0275\u0275property("value", locale_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(locale_r4.name);
  }
}
function ProfileEditor_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 1)(1, "div", 2);
    \u0275\u0275element(2, "user-avatar", 3);
    \u0275\u0275elementStart(3, "deepin-file-uploader", 4);
    \u0275\u0275listener("fileUploaded", function ProfileEditor_Conditional_0_Template_deepin_file_uploader_fileUploaded_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAvatarUploaded($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-form-field", 5)(5, "mat-label");
    \u0275\u0275text(6, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 5)(9, "mat-label");
    \u0275\u0275text(10, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 5)(13, "mat-label");
    \u0275\u0275text(14, "Display Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 8);
    \u0275\u0275conditionalCreate(16, ProfileEditor_Conditional_0_Conditional_16_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 5)(18, "mat-label");
    \u0275\u0275text(19, "BirthDate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 9)(21, "mat-datepicker-toggle", 10)(22, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 5)(25, "mat-label");
    \u0275\u0275text(26, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 5)(29, "mat-label");
    \u0275\u0275text(30, "TimeZone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-select", 12);
    \u0275\u0275repeaterCreate(32, ProfileEditor_Conditional_0_For_33_Template, 2, 2, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "mat-form-field", 5)(35, "mat-label");
    \u0275\u0275text(36, "Locale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-select", 14);
    \u0275\u0275repeaterCreate(38, ProfileEditor_Conditional_0_For_39_Template, 2, 2, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "mat-form-field", 5)(41, "mat-label");
    \u0275\u0275text(42, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "textarea", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const picker_r5 = \u0275\u0275reference(23);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", "large")("profile", ctx_r1.profile);
    \u0275\u0275advance();
    \u0275\u0275property("multiple", false)("accept", "image/*");
    \u0275\u0275advance(13);
    \u0275\u0275conditional(((tmp_7_0 = ctx_r1.formControlErrors("name")) == null ? null : tmp_7_0["required"]) ? 16 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", picker_r5);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r5);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.timeZones);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.locales);
  }
}
var ProfileEditor = class _ProfileEditor {
  fb;
  userService;
  form;
  isLoading = true;
  profile;
  timeZones = [
    { name: "Asia/Shanghai", value: "Asia/Shanghai" },
    { name: "Asia/Tokyo", value: "Asia/Tokyo" },
    { name: "America/New_York", value: "America/New_York" },
    { name: "Europe/London", value: "Europe/London" },
    { name: "Europe/Berlin", value: "Europe/Berlin" },
    { name: "America/Los_Angeles", value: "America/Los_Angeles" },
    { name: "Australia/Sydney", value: "Australia/Sydney" },
    { name: "UTC", value: "UTC" }
  ];
  locales = [
    { name: "Chinese (Simplified)", value: "zh-CN" },
    { name: "Chinese (Traditional)", value: "zh-TW" },
    { name: "English (United States)", value: "en-US" },
    { name: "English (United Kingdom)", value: "en-GB" },
    { name: "French (France)", value: "fr-FR" },
    { name: "German (Germany)", value: "de-DE" },
    { name: "Japanese", value: "ja-JP" },
    { name: "Korean", value: "ko-KR" },
    { name: "Portuguese (Brazil)", value: "pt-BR" },
    { name: "Spanish (Spain)", value: "es-ES" },
    { name: "Russian", value: "ru-RU" }
  ];
  constructor(fb, userService) {
    this.fb = fb;
    this.userService = userService;
  }
  ngOnInit() {
    this.userService.getMyProfile().subscribe({
      next: (profile) => {
        this.profile = profile;
        this.buildForm(profile);
      },
      error: (error) => {
        console.error("Error loading user profile:", error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
  buildForm(profile) {
    this.form = this.fb.group({
      name: this.fb.control(profile.name || "", []),
      firstName: this.fb.control(profile.firstName || "", []),
      lastName: this.fb.control(profile.lastName || "", []),
      bio: this.fb.control(profile.bio || "", []),
      locale: this.fb.control(profile.locale || "", []),
      location: this.fb.control(profile.location || "", []),
      zoneInfo: this.fb.control(profile.zoneInfo || "", []),
      birthDate: this.fb.control(profile.birthDate || "", []),
      pictureId: this.fb.control(profile.pictureId || "", [])
    });
  }
  onAvatarUploaded(files) {
    const file = files[0];
    if (!file) {
      console.error("No file uploaded");
      return;
    }
    console.log("Avatar uploaded:", file);
    if (this.profile) {
      this.profile.pictureId = file.id;
    }
    this.form?.get("pictureId")?.setValue(file.id);
  }
  formControlErrors(name) {
    return this.form?.get(name)?.errors;
  }
  onSubmit() {
    return new Promise((resolve, reject) => {
      if (!this.form || this.form.invalid) {
        reject("Form is invalid");
        return;
      }
      this.isLoading = true;
      const profileData = __spreadValues(__spreadValues({}, this.profile), this.form.value);
      const request = this.form.value;
      this.userService.updateProfile(profileData).subscribe({
        next: (profile) => {
          console.log("Profile updated successfully:", profile);
        },
        error: (error) => {
          console.error("Error updating profile:", error);
          reject(error);
        },
        complete: () => {
          this.isLoading = false;
          resolve();
        }
      });
    });
  }
  static \u0275fac = function ProfileEditor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileEditor)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileEditor, selectors: [["profile-editor"]], features: [\u0275\u0275ProvidersFeature([provideNativeDateAdapter()])], decls: 1, vars: 1, consts: [["picker", ""], [3, "formGroup"], [1, "user-avatar"], [3, "size", "profile"], [3, "fileUploaded", "multiple", "accept"], ["appearance", "outline"], ["matInput", "", "formControlName", "firstName"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "birthDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matInput", "", "formControlName", "location"], ["formControlName", "zoneInfo"], [3, "value"], ["formControlName", "locale"], ["matInput", "", "formControlName", "bio"]], template: function ProfileEditor_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProfileEditor_Conditional_0_Template, 44, 8, "form", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.profile && ctx.form ? 0 : -1);
    }
  }, dependencies: [
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatFormField,
    MatLabel,
    MatError,
    MatInputModule,
    MatInput,
    MatSuffix,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatSelectModule,
    MatSelect,
    MatOption,
    UserAvatar,
    FileUploaderComponent,
    MatListModule
  ], styles: ["\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=profile-editor.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileEditor, [{
    type: Component,
    args: [{ selector: "profile-editor", providers: [provideNativeDateAdapter()], imports: [
      ReactiveFormsModule,
      MatFormField,
      MatLabel,
      MatError,
      MatInputModule,
      MatDatepickerModule,
      MatSelectModule,
      UserAvatar,
      FileUploaderComponent,
      MatListModule
    ], template: `@if (profile && form) {
<form [formGroup]="form">
    <div class="user-avatar">
        <user-avatar [size]="'large'" [profile]="profile"></user-avatar>
        <deepin-file-uploader (fileUploaded)="onAvatarUploaded($event)" [multiple]="false"
            [accept]="'image/*'"></deepin-file-uploader>
    </div>
    <mat-form-field appearance="outline">
        <mat-label>First Name</mat-label>
        <input matInput formControlName="firstName">
    </mat-form-field>
    <mat-form-field appearance="outline">
        <mat-label>Last Name</mat-label>
        <input matInput formControlName="lastName">
    </mat-form-field>
    <mat-form-field appearance="outline">
        <mat-label>Display Name</mat-label>
        <input matInput formControlName="name">
        @if (formControlErrors('name')?.['required']) {
        <mat-error>Display Name cannot be null.</mat-error>
        }
    </mat-form-field>
    <mat-form-field appearance="outline">
        <mat-label>BirthDate</mat-label>
        <input matInput [matDatepicker]="picker" formControlName="birthDate">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    <mat-form-field appearance="outline">
        <mat-label>Location</mat-label>
        <input matInput formControlName="location">
    </mat-form-field>
    <mat-form-field appearance="outline">
        <mat-label>TimeZone</mat-label>
        <mat-select formControlName="zoneInfo">
            @for (timeZone of timeZones; track timeZone) {
            <mat-option [value]="timeZone.value">{{timeZone.name}}</mat-option>
            }
        </mat-select>
    </mat-form-field>
    <mat-form-field appearance="outline">
        <mat-label>Locale</mat-label>
        <mat-select formControlName="locale">
            @for (locale of locales; track locale) {
            <mat-option [value]="locale.value">{{locale.name}}</mat-option>
            }
        </mat-select>
    </mat-form-field>
    <mat-form-field appearance="outline">
        <mat-label>Description</mat-label>
        <textarea matInput formControlName="bio"></textarea>
    </mat-form-field>
</form>
}`, styles: ["/* src/app/shared/components/users/profile-editor/profile-editor.scss */\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=profile-editor.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileEditor, { className: "ProfileEditor", filePath: "src/app/shared/components/users/profile-editor/profile-editor.ts", lineNumber: 35 });
})();

// src/app/shared/components/users/profile-editor-dialog/profile-editor-dialog.ts
var _c05 = ["profileEditor"];
function ProfileEditorDialog_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
var ProfileEditorDialog = class _ProfileEditorDialog {
  dialogRef;
  snackBar;
  profileEditor;
  constructor(dialogRef, snackBar) {
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
  }
  onSubmit() {
    this.profileEditor.onSubmit().then(() => {
      this.dialogRef.close();
      this.snackBar.open("Profile updated successfully", "Close", {
        duration: 3e3
      });
    });
  }
  onCancel() {
    this.dialogRef.close();
  }
  static \u0275fac = function ProfileEditorDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileEditorDialog)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileEditorDialog, selectors: [["profile-editor-dialog"]], viewQuery: function ProfileEditorDialog_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c05, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.profileEditor = _t.first);
    }
  }, decls: 11, vars: 3, consts: [["profileEditor", ""], ["mat-dialog-title", ""], ["type", "button", "mat-button", "", 3, "click", "disabled"], ["type", "button", "mat-flat-button", "", 3, "click", "disabled"], ["diameter", "16"]], template: function ProfileEditorDialog_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "h2", 1);
      \u0275\u0275text(1, " Edit profile\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content");
      \u0275\u0275element(3, "profile-editor", null, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-dialog-actions")(6, "button", 2);
      \u0275\u0275listener("click", function ProfileEditorDialog_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275text(7, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function ProfileEditorDialog_Template_button_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275conditionalCreate(9, ProfileEditorDialog_Conditional_9_Template, 2, 0, "mat-icon");
      \u0275\u0275text(10, " Save ");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const profileEditor_r2 = \u0275\u0275reference(4);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", profileEditor_r2.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", profileEditor_r2.isLoading || (profileEditor_r2.form == null ? null : profileEditor_r2.form.invalid));
      \u0275\u0275advance();
      \u0275\u0275conditional(profileEditor_r2.isLoading ? 9 : -1);
    }
  }, dependencies: [
    MatDialogModule,
    MatDialogTitle,
    MatDialogActions,
    MatDialogContent,
    MatIcon,
    MatProgressSpinner,
    MatButton,
    ProfileEditor
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileEditorDialog, [{
    type: Component,
    args: [{ selector: "profile-editor-dialog", imports: [
      MatDialogModule,
      MatIcon,
      MatProgressSpinner,
      MatButton,
      ProfileEditor
    ], template: '<h2 mat-dialog-title>\n    Edit profile\n</h2>\n<mat-dialog-content>\n    <profile-editor #profileEditor></profile-editor>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button type="button" [disabled]="profileEditor.isLoading" mat-button (click)="onCancel()">Cancel</button>\n    <button type="button" [disabled]="profileEditor.isLoading || profileEditor.form?.invalid" mat-flat-button\n        (click)="onSubmit()">\n        @if (profileEditor.isLoading) {\n        <mat-icon>\n            <mat-spinner diameter="16"></mat-spinner>\n        </mat-icon>\n        }\n        Save\n    </button>\n</mat-dialog-actions>' }]
  }], () => [{ type: MatDialogRef }, { type: MatSnackBar }], { profileEditor: [{
    type: ViewChild,
    args: ["profileEditor"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileEditorDialog, { className: "ProfileEditorDialog", filePath: "src/app/shared/components/users/profile-editor-dialog/profile-editor-dialog.ts", lineNumber: 21 });
})();

// src/app/core/services/layout.service.ts
var LayoutService = class _LayoutService {
  document;
  _theme = new BehaviorSubject(this.defaultTheme);
  theme = this._theme.asObservable();
  constructor(document2) {
    this.document = document2;
  }
  changeTheme(theme) {
    this._theme.next(theme);
    const localStorage = this.document?.defaultView?.localStorage;
    if (localStorage) {
      localStorage.setItem("theme", theme);
    }
    this.document.documentElement.style.colorScheme = theme;
  }
  get defaultTheme() {
    const localStorage = this.document?.defaultView?.localStorage;
    if (localStorage) {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme;
      }
    }
    return this.document?.documentElement.style.colorScheme ?? "light";
  }
  static \u0275fac = function LayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutService)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();

// src/app/shared/components/sidebar/sidebar.component.ts
function SidebarComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
    \u0275\u0275pipe(1, "fileUrl");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, ctx_r2.profile.pictureId)), \u0275\u0275sanitizeUrl);
  }
}
function SidebarComponent_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "account_circle");
    \u0275\u0275elementEnd();
  }
}
function SidebarComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SidebarComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openProfileEditor());
    });
    \u0275\u0275conditionalCreate(1, SidebarComponent_Conditional_20_Conditional_1_Template, 3, 5, "img", 16)(2, SidebarComponent_Conditional_20_Conditional_2_Template, 2, 0, "mat-icon");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.profile.pictureId ? 1 : 2);
  }
}
function SidebarComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10)(1, "mat-icon");
    \u0275\u0275text(2, "account_circle");
    \u0275\u0275elementEnd()();
  }
}
var SidebarComponent = class _SidebarComponent {
  dialog;
  layoutService;
  userService;
  theme;
  profile;
  constructor(dialog, layoutService, userService) {
    this.dialog = dialog;
    this.layoutService = layoutService;
    this.userService = userService;
    this.theme = this.layoutService.defaultTheme;
    this.layoutService.theme.subscribe((res) => {
      this.theme = res;
    });
    this.userService.user.subscribe((user) => {
      this.profile = user;
    });
  }
  toggleTheme() {
    const nextTheme = this.theme === "light" ? "dark" : "light";
    this.layoutService.changeTheme(nextTheme);
  }
  createGroup() {
    this.dialog.open(ChatEditorComponent, {
      data: { type: "group" },
      minWidth: 400,
      height: "auto"
    });
  }
  createChannel() {
    this.dialog.open(ChatEditorComponent, {
      data: { type: "channel" },
      minWidth: 400,
      height: "auto"
    });
  }
  openProfileEditor() {
    this.dialog.open(ProfileEditorDialog, {
      minWidth: 400,
      height: "auto"
    });
  }
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["deepin-sidebar"]], decls: 57, vars: 3, consts: [["addMenu", "matMenu"], ["profileMenu", "matMenu"], [1, "sidebar"], ["mat-icon-button", "", "routerLink", "/home", "routerLinkActive", "active"], ["mat-icon-button", "", "routerLink", "/search", "routerLinkActive", "active"], ["mat-icon-button", "", "routerLink", "/chats", "routerLinkActive", "active"], ["mat-icon-button", "", "routerLink", "/spaces", "routerLinkActive", "active"], ["mat-icon-button", "", "routerLink", "/drive", "routerLinkActive", "active"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["matListItemIcon", ""], ["mat-icon-button", ""], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "routerLink", "/settings"], ["yPosition", "above", "xPosition", "before"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["alt", "Profile Picture", 1, "profile-picture", 3, "src"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "a", 3)(2, "mat-icon");
      \u0275\u0275text(3, "home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "a", 4)(5, "mat-icon");
      \u0275\u0275text(6, "search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 5)(8, "mat-icon");
      \u0275\u0275text(9, "chat");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "a", 6)(11, "mat-icon");
      \u0275\u0275text(12, "group");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "a", 7)(14, "mat-icon");
      \u0275\u0275text(15, "cloud");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 2)(17, "button", 8)(18, "mat-icon", 9);
      \u0275\u0275text(19, "add");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(20, SidebarComponent_Conditional_20_Template, 3, 1, "button", 10)(21, SidebarComponent_Conditional_21_Template, 3, 0, "button", 10);
      \u0275\u0275elementStart(22, "button", 11);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleTheme());
      });
      \u0275\u0275elementStart(23, "mat-icon");
      \u0275\u0275text(24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "a", 12)(26, "mat-icon");
      \u0275\u0275text(27, "settings");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "mat-menu", 13, 0)(30, "button", 14)(31, "mat-icon");
      \u0275\u0275text(32, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "Add Frends");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "button", 15);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_35_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.createGroup());
      });
      \u0275\u0275elementStart(36, "mat-icon");
      \u0275\u0275text(37, "group_add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "Create Group");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "button", 15);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_40_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.createChannel());
      });
      \u0275\u0275elementStart(41, "mat-icon");
      \u0275\u0275text(42, "campaign");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44, "Create Channel");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "mat-menu", 13, 1)(47, "button", 15);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_47_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openProfileEditor());
      });
      \u0275\u0275elementStart(48, "mat-icon");
      \u0275\u0275text(49, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span");
      \u0275\u0275text(51, "View Profile");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "button", 15);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_52_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openProfileEditor());
      });
      \u0275\u0275elementStart(53, "mat-icon");
      \u0275\u0275text(54, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "span");
      \u0275\u0275text(56, "Edit Profile");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const addMenu_r4 = \u0275\u0275reference(29);
      \u0275\u0275advance(17);
      \u0275\u0275property("matMenuTriggerFor", addMenu_r4);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.profile ? 20 : 21);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.theme == "light" ? "dark_mode" : "light_mode", " ");
    }
  }, dependencies: [
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatListItemIcon,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDialogModule,
    MatButtonModule,
    MatIconButton,
    AsyncPipe,
    FileUrlPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: space-between;\n  --mat-button-filled-container-color: orange;\n  --mat-button-filled-label-text-color: red;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: var(--mat-sys-background);\n  padding: 0.5rem 0;\n}\na.active[_ngcontent-%COMP%] {\n  background-color: var(--mat-sys-primary-container);\n}\n/*# sourceMappingURL=sidebar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "deepin-sidebar", imports: [
      RouterLink,
      RouterLinkActive,
      MatListModule,
      MatIcon,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDialogModule,
      MatButtonModule,
      AsyncPipe,
      FileUrlPipe
    ], template: `<div class="sidebar">
    <a mat-icon-button routerLink="/home" routerLinkActive="active">
        <mat-icon>home</mat-icon>
    </a>
    <a mat-icon-button routerLink="/search" routerLinkActive="active">
        <mat-icon>search</mat-icon>
    </a>
    <a mat-icon-button routerLink="/chats" routerLinkActive="active">
        <mat-icon>chat</mat-icon>
    </a>
    <a mat-icon-button routerLink="/spaces" routerLinkActive="active">
        <mat-icon>group</mat-icon>
    </a>
    <a mat-icon-button routerLink="/drive" routerLinkActive="active">
        <mat-icon>cloud</mat-icon>
    </a>
</div>
<div class="sidebar">
    <button mat-icon-button [matMenuTriggerFor]="addMenu">
        <mat-icon matListItemIcon>add</mat-icon>
    </button>

    @if(profile) {
    <button mat-icon-button (click)="openProfileEditor()">
        @if(profile.pictureId){
        <img [src]="profile.pictureId | fileUrl | async" alt="Profile Picture" class="profile-picture">
        }@else {
        <mat-icon>account_circle</mat-icon>
        }
    </button>
    } @else {
    <button mat-icon-button>
        <mat-icon>account_circle</mat-icon>
    </button>
    }
    <button mat-icon-button (click)="toggleTheme()">
        <mat-icon>
            {{ theme == 'light' ? 'dark_mode' : 'light_mode' }}
        </mat-icon>
    </button>
    <a mat-icon-button routerLink="/settings">
        <mat-icon>settings</mat-icon>
    </a>
</div>
<mat-menu #addMenu="matMenu" yPosition="above" xPosition="before">
    <button mat-menu-item>
        <mat-icon>person_add</mat-icon>
        <span>Add Frends</span>
    </button>
    <button mat-menu-item (click)="createGroup()">
        <mat-icon>group_add</mat-icon>
        <span>Create Group</span>
    </button>
    <button mat-menu-item (click)="createChannel()">
        <mat-icon>campaign</mat-icon>
        <span>Create Channel</span>
    </button>
</mat-menu>
<mat-menu #profileMenu="matMenu" yPosition="above" xPosition="before">
    <button mat-menu-item (click)="openProfileEditor()">
        <mat-icon>person_add</mat-icon>
        <span>View Profile</span>
    </button>
    <button mat-menu-item (click)="openProfileEditor()">
        <mat-icon>person_add</mat-icon>
        <span>Edit Profile</span>
    </button>
</mat-menu>`, styles: ["/* src/app/shared/components/sidebar/sidebar.component.scss */\n:host {\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: space-between;\n  --mat-button-filled-container-color: orange;\n  --mat-button-filled-label-text-color: red;\n}\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: var(--mat-sys-background);\n  padding: 0.5rem 0;\n}\na.active {\n  background-color: var(--mat-sys-primary-container);\n}\n/*# sourceMappingURL=sidebar.component.css.map */\n"] }]
  }], () => [{ type: MatDialog }, { type: LayoutService }, { type: UserService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/shared/components/sidebar/sidebar.component.ts", lineNumber: 36 });
})();

// src/app/shared/components/layout/layout.component.ts
var LayoutComponent = class _LayoutComponent {
  userService;
  chatHubService;
  constructor(userService, chatHubService) {
    this.userService = userService;
    this.chatHubService = chatHubService;
  }
  ngOnInit() {
    this.userService.init();
    this.chatHubService.start();
  }
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ChatHubService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], decls: 6, vars: 1, consts: [["mode", "side", "opened", ""], [3, "vertical"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "mat-sidenav-container")(1, "mat-sidenav", 0);
      \u0275\u0275element(2, "deepin-sidebar");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "mat-divider", 1);
      \u0275\u0275elementStart(4, "mat-sidenav-content");
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("vertical", true);
    }
  }, dependencies: [
    RouterOutlet,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatDivider,
    SidebarComponent
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\nmat-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 64px;\n}\nmat-sidenav-content[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--mat-sys-outline-variant);\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", imports: [
      RouterOutlet,
      MatSidenavContainer,
      MatSidenav,
      MatSidenavContent,
      MatDivider,
      SidebarComponent
    ], template: '<mat-sidenav-container>\n    <mat-sidenav mode="side" opened>\n        <deepin-sidebar></deepin-sidebar>\n    </mat-sidenav>\n    <mat-divider [vertical]="true"></mat-divider>\n    <mat-sidenav-content>\n        <router-outlet></router-outlet>\n    </mat-sidenav-content>\n</mat-sidenav-container>', styles: ["/* src/app/shared/components/layout/layout.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\nmat-sidenav-container {\n  flex: 1 1 auto;\n}\nmat-sidenav {\n  width: 64px;\n}\nmat-sidenav-content {\n  border-left: 1px solid var(--mat-sys-outline-variant);\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=layout.component.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: ChatHubService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/components/layout/layout.component.ts", lineNumber: 22 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import("./chunk-7SJ555JY.js")
      },
      {
        path: "chats",
        loadChildren: () => import("./chunk-2DBPM7KR.js")
      },
      {
        path: "search",
        loadChildren: () => import("./chunk-RTRMHLJB.js")
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};

// src/app/app.ts
var App = class _App {
  layoutService;
  constructor(layoutService) {
    this.layoutService = layoutService;
    this.layoutService.changeTheme(this.layoutService.defaultTheme);
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet />" }]
  }], () => [{ type: LayoutService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
