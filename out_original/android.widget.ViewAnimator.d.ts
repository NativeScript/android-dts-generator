/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />

declare module android {
	export module widget {
		export class ViewAnimator {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public setDisplayedChild(param0: number): void;
			public getDisplayedChild(): number;
			public showNext(): void;
			public showPrevious(): void;
			public addView(param0: android.view.View): void;
			public addView(param0: android.view.View, param1: number): void;
			public addView(param0: android.view.View, param1: number, param2: number): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
			public removeAllViews(): void;
			public removeView(param0: android.view.View): void;
			public removeViewAt(param0: number): void;
			public removeViewInLayout(param0: android.view.View): void;
			public removeViews(param0: number, param1: number): void;
			public removeViewsInLayout(param0: number, param1: number): void;
			public getCurrentView(): android.view.View;
			public getInAnimation(): android.view.animation.Animation;
			public setInAnimation(param0: android.view.animation.Animation): void;
			public getOutAnimation(): android.view.animation.Animation;
			public setOutAnimation(param0: android.view.animation.Animation): void;
			public setInAnimation(param0: android.content.Context, param1: number): void;
			public setOutAnimation(param0: android.content.Context, param1: number): void;
			public getAnimateFirstView(): boolean;
			public setAnimateFirstView(param0: boolean): void;
			public getBaseline(): number;
			public getAccessibilityClassName(): string;
		}
	}
}
