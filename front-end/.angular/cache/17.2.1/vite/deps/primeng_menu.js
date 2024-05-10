import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-ZA53L2HZ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-G4OVEOLW.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler,
  Ripple,
  RippleModule
} from "./chunk-2N4U3PXA.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-3FG2ALKC.js";
import {
  DomSanitizer
} from "./chunk-5ND6GWAE.js";
import "./chunk-PZ3PDJQY.js";
import {
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  UniqueComponentId,
  zindexutils
} from "./chunk-VLWECKG5.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-LDCJVNPO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  InputFlags,
  NgModule,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  computed,
  forwardRef,
  setClassMetadata,
  signal,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-ADC7WMBP.js";
import "./chunk-WSA2QMXP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WKYGNSYM.js";

// node_modules/primeng/fesm2022/primeng-menu.mjs
var _c0 = ["pMenuItemContent", ""];
function MenuItemContent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c1 = (a0) => ({
  "p-disabled": a0
});
var _c2 = (a0) => ({
  $implicit: a0
});
function MenuItemContent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 5);
    ɵɵtemplate(1, MenuItemContent_ng_container_1_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    const _r3 = ɵɵreference(4);
    ɵɵproperty("target", ctx_r4.item.target)("ngClass", ɵɵpureFunction1(10, _c1, ctx_r4.item.disabled));
    ɵɵattribute("title", ctx_r4.item.title)("href", ctx_r4.item.url || null, ɵɵsanitizeUrl)("data-automationid", ctx_r4.item.automationId)("tabindex", -1)("data-pc-section", "action")("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction1(12, _c2, ctx_r4.item));
  }
}
function MenuItemContent_ng_container_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c3 = () => ({
  exact: false
});
function MenuItemContent_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 7);
    ɵɵtemplate(1, MenuItemContent_ng_container_1_a_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    const _r3 = ɵɵreference(4);
    ɵɵproperty("routerLink", ctx_r5.item.routerLink)("queryParams", ctx_r5.item.queryParams)("routerLinkActiveOptions", ctx_r5.item.routerLinkActiveOptions || ɵɵpureFunction0(18, _c3))("target", ctx_r5.item.target)("ngClass", ɵɵpureFunction1(19, _c1, ctx_r5.item.disabled))("fragment", ctx_r5.item.fragment)("queryParamsHandling", ctx_r5.item.queryParamsHandling)("preserveFragment", ctx_r5.item.preserveFragment)("skipLocationChange", ctx_r5.item.skipLocationChange)("replaceUrl", ctx_r5.item.replaceUrl)("state", ctx_r5.item.state);
    ɵɵattribute("data-automationid", ctx_r5.item.automationId)("tabindex", -1)("data-pc-section", "action")("aria-hidden", true)("title", ctx_r5.item.title);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction1(21, _c2, ctx_r5.item));
  }
}
function MenuItemContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenuItemContent_ng_container_1_a_1_Template, 2, 14, "a", 3)(2, MenuItemContent_ng_container_1_a_2_Template, 2, 23, "a", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r0.item == null ? null : ctx_r0.item.routerLink));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item == null ? null : ctx_r0.item.routerLink);
  }
}
function MenuItemContent_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function MenuItemContent_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MenuItemContent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenuItemContent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MenuItemContent_ng_container_2_1_Template, 1, 0, null, 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r10.item.iconClass);
    ɵɵproperty("ngClass", ctx_r10.item.icon)("ngStyle", ctx_r10.item.iconStyle);
  }
}
function MenuItemContent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r11.item.label);
  }
}
function MenuItemContent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 14);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, ctx_r12.item.label), ɵɵsanitizeHtml);
  }
}
function MenuItemContent_ng_template_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r14.item.badgeStyleClass);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r14.item.badge);
  }
}
function MenuItemContent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MenuItemContent_ng_template_3_span_0_Template, 1, 4, "span", 8)(1, MenuItemContent_ng_template_3_span_1_Template, 2, 1, "span", 9)(2, MenuItemContent_ng_template_3_ng_template_2_Template, 2, 3, "ng-template", null, 10, ɵɵtemplateRefExtractor)(4, MenuItemContent_ng_template_3_span_4_Template, 2, 2, "span", 11);
  }
  if (rf & 2) {
    const _r13 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.item.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.item.escape !== false)("ngIfElse", _r13);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.item.badge);
  }
}
var _c4 = ["list"];
var _c5 = ["container"];
function Menu_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Menu_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, Menu_div_0_div_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "start");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.startTemplate);
  }
}
var _c6 = (a0) => ({
  "p-hidden": a0
});
function Menu_div_0_5_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 13);
  }
  if (rf & 2) {
    const submenu_r9 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c6, submenu_r9.visible === false));
  }
}
function Menu_div_0_5_ng_template_0_li_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const submenu_r9 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(submenu_r9.label);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 17);
    ɵɵpipe(1, "safeHtml");
  }
  if (rf & 2) {
    const submenu_r9 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, submenu_r9.label), ɵɵsanitizeHtml);
  }
}
var _c7 = (a0, a1) => ({
  "p-hidden": a0,
  flex: a1
});
function Menu_div_0_5_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 14);
    ɵɵtemplate(1, Menu_div_0_5_ng_template_0_li_1_span_1_Template, 2, 1, "span", 15)(2, Menu_div_0_5_ng_template_0_li_1_ng_template_2_Template, 2, 3, "ng-template", null, 16, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r17 = ɵɵreference(3);
    const ctx_r20 = ɵɵnextContext();
    const submenu_r9 = ctx_r20.$implicit;
    const i_r10 = ctx_r20.index;
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction2(6, _c7, submenu_r9.visible === false, submenu_r9.visible))("tooltipOptions", submenu_r9.tooltipOptions);
    ɵɵattribute("data-automationid", submenu_r9.automationId)("id", ctx_r12.menuitemId(submenu_r9, ctx_r12.id, i_r10));
    ɵɵadvance();
    ɵɵproperty("ngIf", submenu_r9.escape !== false)("ngIfElse", _r17);
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 13);
  }
  if (rf & 2) {
    const item_r21 = ɵɵnextContext().$implicit;
    const submenu_r9 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c6, item_r21.visible === false || submenu_r9.visible === false));
  }
}
var _c8 = (a0, a1, a2) => ({
  "p-hidden": a0,
  "p-focus": a1,
  "p-disabled": a2
});
function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 19);
    ɵɵlistener("onMenuItemClick", function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template_li_onMenuItemClick_0_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r27 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r27.itemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r29 = ɵɵnextContext();
    const item_r21 = ctx_r29.$implicit;
    const j_r22 = ctx_r29.index;
    const ctx_r30 = ɵɵnextContext();
    const submenu_r9 = ctx_r30.$implicit;
    const i_r10 = ctx_r30.index;
    const ctx_r24 = ɵɵnextContext(3);
    ɵɵclassMap(item_r21.styleClass);
    ɵɵproperty("pMenuItemContent", item_r21)("itemTemplate", ctx_r24.itemTemplate)("ngClass", ɵɵpureFunction3(13, _c8, item_r21.visible === false || submenu_r9.visible === false, ctx_r24.focusedOptionId() && ctx_r24.menuitemId(item_r21, ctx_r24.id, i_r10, j_r22) === ctx_r24.focusedOptionId(), ctx_r24.disabled(item_r21.disabled)))("ngStyle", item_r21.style)("tooltipOptions", item_r21.tooltipOptions);
    ɵɵattribute("data-pc-section", "menuitem")("aria-label", ctx_r24.label(item_r21.label))("data-p-focused", ctx_r24.isItemFocused(ctx_r24.menuitemId(item_r21, ctx_r24.id, i_r10, j_r22)))("data-p-disabled", ctx_r24.disabled(item_r21.disabled))("aria-disabled", ctx_r24.disabled(item_r21.disabled))("id", ctx_r24.menuitemId(item_r21, ctx_r24.id, i_r10, j_r22));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template, 1, 3, "li", 11)(1, Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template, 1, 17, "li", 18);
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    ɵɵproperty("ngIf", item_r21.separator);
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r21.separator);
  }
}
function Menu_div_0_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_5_ng_template_0_li_0_Template, 1, 3, "li", 11)(1, Menu_div_0_5_ng_template_0_li_1_Template, 4, 9, "li", 12)(2, Menu_div_0_5_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", 10);
  }
  if (rf & 2) {
    const submenu_r9 = ctx.$implicit;
    ɵɵproperty("ngIf", submenu_r9.separator);
    ɵɵadvance();
    ɵɵproperty("ngIf", !submenu_r9.separator);
    ɵɵadvance();
    ɵɵproperty("ngForOf", submenu_r9.items);
  }
}
function Menu_div_0_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_5_ng_template_0_Template, 3, 3, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r4.model);
  }
}
function Menu_div_0_6_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 13);
  }
  if (rf & 2) {
    const item_r32 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c6, item_r32.visible === false));
  }
}
function Menu_div_0_6_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 19);
    ɵɵlistener("onMenuItemClick", function Menu_div_0_6_ng_template_0_li_1_Template_li_onMenuItemClick_0_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r37.itemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r39 = ɵɵnextContext();
    const item_r32 = ctx_r39.$implicit;
    const i_r33 = ctx_r39.index;
    const ctx_r35 = ɵɵnextContext(3);
    ɵɵclassMap(item_r32.styleClass);
    ɵɵproperty("pMenuItemContent", item_r32)("itemTemplate", ctx_r35.itemTemplate)("ngClass", ɵɵpureFunction3(13, _c8, item_r32.visible === false, ctx_r35.focusedOptionId() && ctx_r35.menuitemId(item_r32, ctx_r35.id, i_r33, ctx_r35.j) === ctx_r35.focusedOptionId(), ctx_r35.disabled(item_r32.disabled)))("ngStyle", item_r32.style)("tooltipOptions", item_r32.tooltipOptions);
    ɵɵattribute("data-pc-section", "menuitem")("aria-label", ctx_r35.label(item_r32.label))("data-p-focused", ctx_r35.isItemFocused(ctx_r35.menuitemId(item_r32, ctx_r35.id, i_r33)))("data-p-disabled", ctx_r35.disabled(item_r32.disabled))("aria-disabled", ctx_r35.disabled(item_r32.disabled))("id", ctx_r35.menuitemId(item_r32, ctx_r35.id, i_r33));
  }
}
function Menu_div_0_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_6_ng_template_0_li_0_Template, 1, 3, "li", 11)(1, Menu_div_0_6_ng_template_0_li_1_Template, 1, 17, "li", 18);
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    ɵɵproperty("ngIf", item_r32.separator);
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r32.separator);
  }
}
function Menu_div_0_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Menu_div_0_6_ng_template_0_Template, 2, 2, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r5.model);
  }
}
function Menu_div_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Menu_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtemplate(1, Menu_div_0_div_7_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "end");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r6.endTemplate);
  }
}
var _c9 = (a1) => ({
  "p-menu p-component": true,
  "p-menu-overlay": a1
});
var _c10 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c11 = (a1) => ({
  value: "visible",
  params: a1
});
function Menu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1, 2);
    ɵɵlistener("click", function Menu_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r42);
      const ctx_r41 = ɵɵnextContext();
      return ɵɵresetView(ctx_r41.onOverlayClick($event));
    })("@overlayAnimation.start", function Menu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r42);
      const ctx_r43 = ɵɵnextContext();
      return ɵɵresetView(ctx_r43.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Menu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r42);
      const ctx_r44 = ɵɵnextContext();
      return ɵɵresetView(ctx_r44.onOverlayAnimationEnd($event));
    });
    ɵɵtemplate(2, Menu_div_0_div_2_Template, 2, 2, "div", 3);
    ɵɵelementStart(3, "ul", 4, 5);
    ɵɵlistener("focus", function Menu_div_0_Template_ul_focus_3_listener($event) {
      ɵɵrestoreView(_r42);
      const ctx_r45 = ɵɵnextContext();
      return ɵɵresetView(ctx_r45.onListFocus($event));
    })("blur", function Menu_div_0_Template_ul_blur_3_listener($event) {
      ɵɵrestoreView(_r42);
      const ctx_r46 = ɵɵnextContext();
      return ɵɵresetView(ctx_r46.onListBlur($event));
    })("keydown", function Menu_div_0_Template_ul_keydown_3_listener($event) {
      ɵɵrestoreView(_r42);
      const ctx_r47 = ɵɵnextContext();
      return ɵɵresetView(ctx_r47.onListKeyDown($event));
    });
    ɵɵtemplate(5, Menu_div_0_5_Template, 1, 1, null, 6)(6, Menu_div_0_6_Template, 1, 1, null, 6);
    ɵɵelementEnd();
    ɵɵtemplate(7, Menu_div_0_div_7_Template, 2, 2, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction1(18, _c9, ctx_r0.popup))("ngStyle", ctx_r0.style)("@overlayAnimation", ɵɵpureFunction1(23, _c11, ɵɵpureFunction2(20, _c10, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)))("@.disabled", ctx_r0.popup !== true);
    ɵɵattribute("data-pc-name", "menu")("id", ctx_r0.id);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.startTemplate);
    ɵɵadvance();
    ɵɵproperty("tabindex", ctx_r0.tabindex);
    ɵɵattribute("id", ctx_r0.id + "_list")("data-pc-section", "menu")("aria-activedescendant", ctx_r0.activedescendant())("aria-label", ctx_r0.ariaLabel)("aria-labelledBy", ctx_r0.ariaLabelledBy);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.hasSubMenu());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.hasSubMenu());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.endTemplate);
  }
}
var SafeHtmlPipe = class _SafeHtmlPipe {
  platformId;
  sanitizer;
  constructor(platformId, sanitizer) {
    this.platformId = platformId;
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (!value || !isPlatformBrowser(this.platformId)) {
      return value;
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static ɵfac = function SafeHtmlPipe_Factory(t) {
    return new (t || _SafeHtmlPipe)(ɵɵdirectiveInject(PLATFORM_ID, 16), ɵɵdirectiveInject(DomSanitizer, 16));
  };
  static ɵpipe = ɵɵdefinePipe({
    name: "safeHtml",
    type: _SafeHtmlPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: DomSanitizer
    }];
  }, null);
})();
var MenuItemContent = class _MenuItemContent {
  item;
  itemTemplate;
  id;
  onMenuItemClick = new EventEmitter();
  menu;
  constructor(menu) {
    this.menu = menu;
  }
  onItemClick(event, item) {
    this.onMenuItemClick.emit({
      originalEvent: event,
      item: __spreadProps(__spreadValues({}, item), {
        id: this.id
      })
    });
  }
  static ɵfac = function MenuItemContent_Factory(t) {
    return new (t || _MenuItemContent)(ɵɵdirectiveInject(forwardRef(() => Menu)));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MenuItemContent,
    selectors: [["", "pMenuItemContent", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      item: [InputFlags.None, "pMenuItemContent", "item"],
      itemTemplate: "itemTemplate",
      id: "id"
    },
    outputs: {
      onMenuItemClick: "onMenuItemClick"
    },
    attrs: _c0,
    decls: 5,
    vars: 3,
    consts: [[1, "p-menuitem-content", 3, "click"], [4, "ngIf"], ["itemContent", ""], ["class", "p-menuitem-link", "pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["routerLinkActive", "p-menuitem-link-active", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 1, "p-menuitem-link", 3, "target", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["routerLinkActive", "p-menuitem-link-active", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["class", "p-menuitem-icon", 3, "ngClass", "class", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"]],
    template: function MenuItemContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function MenuItemContent_Template_div_click_0_listener($event) {
          return ctx.onItemClick($event, ctx.item);
        });
        ɵɵtemplate(1, MenuItemContent_ng_container_1_Template, 3, 2, "ng-container", 1)(2, MenuItemContent_ng_container_2_Template, 2, 4, "ng-container", 1)(3, MenuItemContent_ng_template_3_Template, 5, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵattribute("data-pc-section", "content");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.itemTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.itemTemplate);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, SafeHtmlPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemContent, [{
    type: Component,
    args: [{
      selector: "[pMenuItemContent]",
      template: `
        <div [attr.data-pc-section]="'content'" class="p-menuitem-content" (click)="onItemClick($event, item)">
            <ng-container *ngIf="!itemTemplate">
                <a
                    *ngIf="!item?.routerLink"
                    [attr.title]="item.title"
                    [attr.href]="item.url || null"
                    [attr.data-automationid]="item.automationId"
                    [attr.tabindex]="-1"
                    [attr.data-pc-section]="'action'"
                    [attr.aria-hidden]="true"
                    class="p-menuitem-link"
                    [target]="item.target"
                    [ngClass]="{ 'p-disabled': item.disabled }"
                    pRipple
                >
                    <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
                </a>
                <a
                    *ngIf="item?.routerLink"
                    [routerLink]="item.routerLink"
                    [attr.data-automationid]="item.automationId"
                    [attr.tabindex]="-1"
                    [attr.data-pc-section]="'action'"
                    [attr.aria-hidden]="true"
                    [attr.title]="item.title"
                    [queryParams]="item.queryParams"
                    routerLinkActive="p-menuitem-link-active"
                    [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                    class="p-menuitem-link"
                    [target]="item.target"
                    [ngClass]="{ 'p-disabled': item.disabled }"
                    [fragment]="item.fragment"
                    [queryParamsHandling]="item.queryParamsHandling"
                    [preserveFragment]="item.preserveFragment"
                    [skipLocationChange]="item.skipLocationChange"
                    [replaceUrl]="item.replaceUrl"
                    [state]="item.state"
                    pRipple
                >
                    <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
                </a>
            </ng-container>

            <ng-container *ngIf="itemTemplate">
                <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>
            </ng-container>

            <ng-template #itemContent>
                <span class="p-menuitem-icon" *ngIf="item.icon" [ngClass]="item.icon" [class]="item.iconClass" [ngStyle]="item.iconStyle"></span>
                <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label | safeHtml"></span></ng-template>
                <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ item.badge }}</span>
            </ng-template>
        </div>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Menu,
      decorators: [{
        type: Inject,
        args: [forwardRef(() => Menu)]
      }]
    }];
  }, {
    item: [{
      type: Input,
      args: ["pMenuItemContent"]
    }],
    itemTemplate: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    onMenuItemClick: [{
      type: Output
    }]
  });
})();
var Menu = class _Menu {
  document;
  platformId;
  el;
  renderer;
  cd;
  config;
  overlayService;
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the list loses focus.
   * @param {Event} event - blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when the list receives focus.
   * @param {Event} event - focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  listViewChild;
  containerViewChild;
  templates;
  startTemplate;
  endTemplate;
  itemTemplate;
  container;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  preventDocumentDefault;
  target;
  visible;
  focusedOptionId = computed(() => {
    return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
  });
  focusedOptionIndex = signal(-1);
  selectedOptionIndex = signal(-1);
  focused = false;
  overlayVisible = false;
  relativeAlign;
  constructor(document, platformId, el, renderer, cd, config, overlayService) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.id = this.id || UniqueComponentId();
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    if (this.visible)
      this.hide();
    else
      this.show(event);
    this.preventDocumentDefault = true;
  }
  /**
   * Displays the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  show(event) {
    this.target = event.currentTarget;
    this.relativeAlign = event.relativeAlign;
    this.visible = true;
    this.preventDocumentDefault = true;
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  ngOnInit() {
    if (!this.popup) {
      this.bindDocumentClickListener();
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this.startTemplate = item.template;
          break;
        case "end":
          this.endTemplate = item.template;
          break;
        case "itemTemplate":
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.popup) {
          this.container = event.element;
          this.moveOnTop();
          this.onShow.emit({});
          this.appendOverlay();
          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          DomHandler.focus(this.listViewChild.nativeElement);
          this.changeFocusedOptionIndex(0);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event.element);
        }
        break;
    }
  }
  alignOverlay() {
    if (this.relativeAlign)
      DomHandler.relativePosition(this.container, this.target);
    else
      DomHandler.absolutePosition(this.container, this.target);
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body")
        this.renderer.appendChild(this.document.body, this.container);
      else
        DomHandler.appendChild(this.container, this.appendTo);
    }
  }
  restoreOverlayAppend() {
    if (this.container && this.appendTo) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide() {
    this.visible = false;
    this.relativeAlign = false;
    this.cd.markForCheck();
  }
  onWindowResize() {
    if (this.visible && !DomHandler.isTouchDevice()) {
      this.hide();
    }
  }
  menuitemId(item, id, index, childIndex) {
    return item?.id ?? `${id}_${index}${childIndex !== void 0 ? "_" + childIndex : ""}`;
  }
  isItemFocused(id) {
    return this.focusedOptionId() === id;
  }
  label(label) {
    return typeof label === "function" ? label() : label;
  }
  disabled(disabled) {
    return typeof disabled === "function" ? disabled() : typeof disabled === "undefined" ? false : disabled;
  }
  activedescendant() {
    return this.focused ? this.focusedOptionId() : void 0;
  }
  onListFocus(event) {
    this.focused = true;
    if (!this.popup) {
      if (this.selectedOptionIndex() !== -1) {
        this.changeFocusedOptionIndex(this.selectedOptionIndex());
        this.selectedOptionIndex.set(-1);
      } else {
        this.changeFocusedOptionIndex(0);
      }
    }
    this.onFocus.emit(event);
  }
  onListBlur(event) {
    this.focused = false;
    this.changeFocusedOptionIndex(-1);
    this.selectedOptionIndex.set(-1);
    this.focusedOptionIndex.set(-1);
    this.onBlur.emit(event);
  }
  onListKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Escape":
        if (this.popup) {
          DomHandler.focus(this.target);
          this.hide();
        }
        break;
      case "Tab":
        this.overlayVisible && this.hide();
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.popup) {
      DomHandler.focus(this.target);
      this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedOptionIndex(0);
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedOptionIndex(DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
    event.preventDefault();
  }
  onEnterKey(event) {
    const element = DomHandler.findSingle(this.containerViewChild.nativeElement, `li[id="${`${this.focusedOptionIndex()}`}"]`);
    const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');
    this.popup && DomHandler.focus(this.target);
    anchorElement ? anchorElement.click() : element && element.click();
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextOptionIndex(index) {
    const links = DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index) {
    const links = DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  changeFocusedOptionIndex(index) {
    const links = DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    if (links.length > 0) {
      let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
      order > -1 && this.focusedOptionIndex.set(links[order].getAttribute("id"));
    }
  }
  itemClick(event) {
    const {
      originalEvent,
      item
    } = event;
    if (item.disabled) {
      originalEvent.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      originalEvent.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent,
        item
      });
    }
    if (this.popup) {
      this.hide();
    }
    if (!this.popup && this.focusedOptionIndex() !== item.id) {
      this.focusedOptionIndex.set(item.id);
    }
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
    this.preventDocumentDefault = true;
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener && isPlatformBrowser(this.platformId)) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
        const isOutsideContainer = this.containerViewChild.nativeElement && !this.containerViewChild.nativeElement.contains(event.target);
        const isOutsideTarget = !(this.target && (this.target === event.target || this.target.contains(event.target)));
        if (!this.popup && isOutsideContainer && isOutsideTarget) {
          this.onListBlur(event);
        }
        if (this.preventDocumentDefault && this.overlayVisible && isOutsideContainer && isOutsideTarget) {
          this.hide();
          this.preventDocumentDefault = false;
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && isPlatformBrowser(this.platformId)) {
      const window = this.document.defaultView;
      this.documentResizeListener = this.renderer.listen(window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler && isPlatformBrowser(this.platformId)) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler?.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.preventDocumentDefault = false;
    if (!this.cd.destroyed) {
      this.target = null;
    }
  }
  ngOnDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.container && this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    if (!this.popup) {
      this.unbindDocumentClickListener();
    }
  }
  hasSubMenu() {
    if (this.model) {
      for (var item of this.model) {
        if (item.items) {
          return true;
        }
      }
    }
    return false;
  }
  isItemHidden(item) {
    if (item.separator) {
      return item.visible === false || item.items && item.items.some((subitem) => subitem.visible !== false);
    }
    return item.visible === false;
  }
  static ɵfac = function Menu_Factory(t) {
    return new (t || _Menu)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Menu,
    selectors: [["p-menu"]],
    contentQueries: function Menu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Menu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c4, 5);
        ɵɵviewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      popup: "popup",
      style: "style",
      styleClass: "styleClass",
      appendTo: "appendTo",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      id: "id",
      tabindex: "tabindex"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      onBlur: "onBlur",
      onFocus: "onFocus"
    },
    decls: 1,
    vars: 1,
    consts: [[3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "ngClass", "ngStyle", "click"], ["container", ""], ["class", "p-menu-start", 4, "ngIf"], ["role", "menu", 1, "p-menu-list", "p-reset", 3, "tabindex", "focus", "blur", "keydown"], ["list", ""], [4, "ngIf"], ["class", "p-menu-end", 4, "ngIf"], [1, "p-menu-start"], [4, "ngTemplateOutlet"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menuitem-separator", "role", "separator", 3, "ngClass", 4, "ngIf"], ["class", "p-submenu-header", "pTooltip", "", "role", "none", 3, "ngClass", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menuitem-separator", 3, "ngClass"], ["pTooltip", "", "role", "none", 1, "p-submenu-header", 3, "ngClass", "tooltipOptions"], [4, "ngIf", "ngIfElse"], ["htmlSubmenuLabel", ""], [3, "innerHTML"], ["class", "p-menuitem", "pTooltip", "", "role", "menuitem", 3, "pMenuItemContent", "itemTemplate", "ngClass", "ngStyle", "class", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 1, "p-menuitem", 3, "pMenuItemContent", "itemTemplate", "ngClass", "ngStyle", "tooltipOptions", "onMenuItemClick"], [1, "p-menu-end"]],
    template: function Menu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Menu_div_0_Template, 8, 25, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.popup || ctx.visible);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Tooltip, MenuItemContent, SafeHtmlPipe],
    styles: ["@layer primeng{.p-menu-overlay{position:absolute;top:0;left:0}.p-menu ul{margin:0;padding:0;list-style:none}.p-menu .p-submenu-header{align-items:center}.p-menu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-menu .p-menuitem-text{line-height:1}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Menu, [{
    type: Component,
    args: [{
      selector: "p-menu",
      template: `
        <div
            #container
            [ngClass]="{ 'p-menu p-component': true, 'p-menu-overlay': popup }"
            [class]="styleClass"
            [ngStyle]="style"
            *ngIf="!popup || visible"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            [@.disabled]="popup !== true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            [attr.data-pc-name]="'menu'"
            [attr.id]="id"
        >
            <div *ngIf="startTemplate" class="p-menu-start" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </div>
            <ul
                #list
                class="p-menu-list p-reset"
                role="menu"
                [attr.id]="id + '_list'"
                [tabindex]="tabindex"
                [attr.data-pc-section]="'menu'"
                [attr.aria-activedescendant]="activedescendant()"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                (focus)="onListFocus($event)"
                (blur)="onListBlur($event)"
                (keydown)="onListKeyDown($event)"
            >
                <ng-template ngFor let-submenu let-i="index" [ngForOf]="model" *ngIf="hasSubMenu()">
                    <li class="p-menuitem-separator" *ngIf="submenu.separator" [ngClass]="{ 'p-hidden': submenu.visible === false }" role="separator"></li>
                    <li
                        class="p-submenu-header"
                        [attr.data-automationid]="submenu.automationId"
                        *ngIf="!submenu.separator"
                        [ngClass]="{ 'p-hidden': submenu.visible === false, flex: submenu.visible }"
                        pTooltip
                        [tooltipOptions]="submenu.tooltipOptions"
                        role="none"
                        [attr.id]="menuitemId(submenu, id, i)"
                    >
                        <span *ngIf="submenu.escape !== false; else htmlSubmenuLabel">{{ submenu.label }}</span>
                        <ng-template #htmlSubmenuLabel><span [innerHTML]="submenu.label | safeHtml"></span></ng-template>
                    </li>
                    <ng-template ngFor let-item let-j="index" [ngForOf]="submenu.items">
                        <li class="p-menuitem-separator" *ngIf="item.separator" [ngClass]="{ 'p-hidden': item.visible === false || submenu.visible === false }" role="separator"></li>
                        <li
                            class="p-menuitem"
                            *ngIf="!item.separator"
                            [pMenuItemContent]="item"
                            [itemTemplate]="itemTemplate"
                            [ngClass]="{ 'p-hidden': item.visible === false || submenu.visible === false, 'p-focus': focusedOptionId() && menuitemId(item, id, i, j) === focusedOptionId(), 'p-disabled': disabled(item.disabled) }"
                            [ngStyle]="item.style"
                            [class]="item.styleClass"
                            (onMenuItemClick)="itemClick($event)"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                            role="menuitem"
                            [attr.data-pc-section]="'menuitem'"
                            [attr.aria-label]="label(item.label)"
                            [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i, j))"
                            [attr.data-p-disabled]="disabled(item.disabled)"
                            [attr.aria-disabled]="disabled(item.disabled)"
                            [attr.id]="menuitemId(item, id, i, j)"
                        ></li>
                    </ng-template>
                </ng-template>
                <ng-template ngFor let-item let-i="index" [ngForOf]="model" *ngIf="!hasSubMenu()">
                    <li class="p-menuitem-separator" *ngIf="item.separator" [ngClass]="{ 'p-hidden': item.visible === false }" role="separator"></li>
                    <li
                        class="p-menuitem"
                        *ngIf="!item.separator"
                        [pMenuItemContent]="item"
                        [itemTemplate]="itemTemplate"
                        [ngClass]="{ 'p-hidden': item.visible === false, 'p-focus': focusedOptionId() && menuitemId(item, id, i, j) === focusedOptionId(), 'p-disabled': disabled(item.disabled) }"
                        [ngStyle]="item.style"
                        [class]="item.styleClass"
                        (onMenuItemClick)="itemClick($event)"
                        pTooltip
                        [tooltipOptions]="item.tooltipOptions"
                        role="menuitem"
                        [attr.data-pc-section]="'menuitem'"
                        [attr.aria-label]="label(item.label)"
                        [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i))"
                        [attr.data-p-disabled]="disabled(item.disabled)"
                        [attr.aria-disabled]="disabled(item.disabled)"
                        [attr.id]="menuitemId(item, id, i)"
                    ></li>
                </ng-template>
            </ul>
            <div *ngIf="endTemplate" class="p-menu-end" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-menu-overlay{position:absolute;top:0;left:0}.p-menu ul{margin:0;padding:0;list-style:none}.p-menu .p-submenu-header{align-items:center}.p-menu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-menu .p-menuitem-text{line-height:1}}\n"]
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: PrimeNGConfig
    }, {
      type: OverlayService
    }];
  }, {
    model: [{
      type: Input
    }],
    popup: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MenuModule = class _MenuModule {
  static ɵfac = function MenuModule_Factory(t) {
    return new (t || _MenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MenuModule,
    declarations: [Menu, MenuItemContent, SafeHtmlPipe],
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule],
    exports: [Menu, RouterModule, TooltipModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, RouterModule, TooltipModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule],
      exports: [Menu, RouterModule, TooltipModule],
      declarations: [Menu, MenuItemContent, SafeHtmlPipe]
    }]
  }], null, null);
})();
export {
  Menu,
  MenuItemContent,
  MenuModule,
  SafeHtmlPipe
};
//# sourceMappingURL=primeng_menu.js.map
