/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.transition.Transition.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module widget {
		export class PopupWindow {
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.view.View);
			public constructor(param0: number, param1: number);
			public constructor(param0: android.view.View, param1: number, param2: number);
			public constructor(param0: android.view.View, param1: number, param2: number, param3: boolean);
			public setEnterTransition(param0: android.transition.Transition): void;
			public setExitTransition(param0: android.transition.Transition): void;
			public getBackground(): android.graphics.drawable.Drawable;
			public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
			public getElevation(): number;
			public setElevation(param0: number): void;
			public getAnimationStyle(): number;
			public setIgnoreCheekPress(): void;
			public setAnimationStyle(param0: number): void;
			public getContentView(): android.view.View;
			public setContentView(param0: android.view.View): void;
			public setTouchInterceptor(param0: android.view.View.OnTouchListener): void;
			public isFocusable(): boolean;
			public setFocusable(param0: boolean): void;
			public getInputMethodMode(): number;
			public setInputMethodMode(param0: number): void;
			public setSoftInputMode(param0: number): void;
			public getSoftInputMode(): number;
			public isTouchable(): boolean;
			public setTouchable(param0: boolean): void;
			public isOutsideTouchable(): boolean;
			public setOutsideTouchable(param0: boolean): void;
			public isClippingEnabled(): boolean;
			public setClippingEnabled(param0: boolean): void;
			public isSplitTouchEnabled(): boolean;
			public setSplitTouchEnabled(param0: boolean): void;
			public isAttachedInDecor(): boolean;
			public setAttachedInDecor(param0: boolean): void;
			public setWindowLayoutType(param0: number): void;
			public getWindowLayoutType(): number;
			public setWindowLayoutMode(param0: number, param1: number): void;
			public getHeight(): number;
			public setHeight(param0: number): void;
			public getWidth(): number;
			public setWidth(param0: number): void;
			public setOverlapAnchor(param0: boolean): void;
			public getOverlapAnchor(): boolean;
			public isShowing(): boolean;
			public showAtLocation(param0: android.view.View, param1: number, param2: number, param3: number): void;
			public showAsDropDown(param0: android.view.View): void;
			public showAsDropDown(param0: android.view.View, param1: number, param2: number): void;
			public showAsDropDown(param0: android.view.View, param1: number, param2: number, param3: number): void;
			public isAboveAnchor(): boolean;
			public getMaxAvailableHeight(param0: android.view.View): number;
			public getMaxAvailableHeight(param0: android.view.View, param1: number): number;
			public dismiss(): void;
			public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
			public update(): void;
			public update(param0: number, param1: number): void;
			public update(param0: number, param1: number, param2: number, param3: number): void;
			public update(param0: number, param1: number, param2: number, param3: number, param4: boolean): void;
			public update(param0: android.view.View, param1: number, param2: number): void;
			public update(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public static INPUT_METHOD_FROM_FOCUSABLE: number;
			public static INPUT_METHOD_NEEDED: number;
			public static INPUT_METHOD_NOT_NEEDED: number;
		}
		export module PopupWindow {
			export class OnDismissListener {
				public onDismiss(): void;
			}
		}
	}
}
