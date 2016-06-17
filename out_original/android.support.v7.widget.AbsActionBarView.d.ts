/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.support.v7.widget.ActionMenuPresenter.d.ts" />
/// <reference path="./android.support.v7.widget.ActionMenuView.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AbsActionBarView {
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onHoverEvent(param0: android.view.MotionEvent): boolean;
					public setContentHeight(param0: number): void;
					public getContentHeight(): number;
					public getAnimatedVisibility(): number;
					public setupAnimatorToVisibility(param0: number, param1: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public animateToVisibility(param0: number): void;
					public setVisibility(param0: number): void;
					public showOverflowMenu(): boolean;
					public postShowOverflowMenu(): void;
					public hideOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
					public isOverflowMenuShowPending(): boolean;
					public isOverflowReserved(): boolean;
					public canShowOverflowMenu(): boolean;
					public dismissPopupMenus(): void;
					public measureChildView(param0: android.view.View, param1: number, param2: number, param3: number): number;
					public static next(param0: number, param1: number, param2: boolean): number;
					public positionChild(param0: android.view.View, param1: number, param2: number, param3: number, param4: boolean): number;
					public mVisAnimListener: android.support.v7.widget.AbsActionBarView.VisibilityAnimListener;
					public mPopupContext: android.content.Context;
					public mMenuView: android.support.v7.widget.ActionMenuView;
					public mActionMenuPresenter: android.support.v7.widget.ActionMenuPresenter;
					public mContentHeight: number;
					public mVisibilityAnim: android.support.v4.view.ViewPropertyAnimatorCompat;
				}
				export module AbsActionBarView {
					export class VisibilityAnimListener {
						public constructor();
						public constructor(param0: android.support.v7.widget.AbsActionBarView);
						public withFinalVisibility(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: number): android.support.v7.widget.AbsActionBarView.VisibilityAnimListener;
						public onAnimationStart(param0: android.view.View): void;
						public onAnimationEnd(param0: android.view.View): void;
						public onAnimationCancel(param0: android.view.View): void;
					}
				}
			}
		}
	}
}
