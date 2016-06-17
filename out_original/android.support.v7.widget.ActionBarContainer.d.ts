/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.support.v7.view.ActionMode.d.ts" />
/// <reference path="./android.support.v7.widget.ScrollingTabContainerView.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionBarContainer {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public onFinishInflate(): void;
					public setPrimaryBackground(param0: android.graphics.drawable.Drawable): void;
					public setStackedBackground(param0: android.graphics.drawable.Drawable): void;
					public setSplitBackground(param0: android.graphics.drawable.Drawable): void;
					public setVisibility(param0: number): void;
					public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
					public drawableStateChanged(): void;
					public jumpDrawablesToCurrentState(): void;
					public setTransitioning(param0: boolean): void;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public setTabContainer(param0: android.support.v7.widget.ScrollingTabContainerView): void;
					public getTabContainer(): android.view.View;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public onMeasure(param0: number, param1: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				}
			}
		}
	}
}
