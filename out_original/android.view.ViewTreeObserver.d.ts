/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module view {
		export class ViewTreeObserver {
			public addOnWindowAttachListener(param0: android.view.ViewTreeObserver.OnWindowAttachListener): void;
			public removeOnWindowAttachListener(param0: android.view.ViewTreeObserver.OnWindowAttachListener): void;
			public addOnWindowFocusChangeListener(param0: android.view.ViewTreeObserver.OnWindowFocusChangeListener): void;
			public removeOnWindowFocusChangeListener(param0: android.view.ViewTreeObserver.OnWindowFocusChangeListener): void;
			public addOnGlobalFocusChangeListener(param0: android.view.ViewTreeObserver.OnGlobalFocusChangeListener): void;
			public removeOnGlobalFocusChangeListener(param0: android.view.ViewTreeObserver.OnGlobalFocusChangeListener): void;
			public addOnGlobalLayoutListener(param0: android.view.ViewTreeObserver.OnGlobalLayoutListener): void;
			public removeGlobalOnLayoutListener(param0: android.view.ViewTreeObserver.OnGlobalLayoutListener): void;
			public removeOnGlobalLayoutListener(param0: android.view.ViewTreeObserver.OnGlobalLayoutListener): void;
			public addOnPreDrawListener(param0: android.view.ViewTreeObserver.OnPreDrawListener): void;
			public removeOnPreDrawListener(param0: android.view.ViewTreeObserver.OnPreDrawListener): void;
			public addOnDrawListener(param0: android.view.ViewTreeObserver.OnDrawListener): void;
			public removeOnDrawListener(param0: android.view.ViewTreeObserver.OnDrawListener): void;
			public addOnScrollChangedListener(param0: android.view.ViewTreeObserver.OnScrollChangedListener): void;
			public removeOnScrollChangedListener(param0: android.view.ViewTreeObserver.OnScrollChangedListener): void;
			public addOnTouchModeChangeListener(param0: android.view.ViewTreeObserver.OnTouchModeChangeListener): void;
			public removeOnTouchModeChangeListener(param0: android.view.ViewTreeObserver.OnTouchModeChangeListener): void;
			public isAlive(): boolean;
			public dispatchOnGlobalLayout(): void;
			public dispatchOnPreDraw(): boolean;
			public dispatchOnDraw(): void;
		}
		export module ViewTreeObserver {
			export class OnDrawListener {
				public onDraw(): void;
			}
			export class OnGlobalFocusChangeListener {
				public onGlobalFocusChanged(param0: android.view.View, param1: android.view.View): void;
			}
			export class OnGlobalLayoutListener {
				public onGlobalLayout(): void;
			}
			export class OnPreDrawListener {
				public onPreDraw(): boolean;
			}
			export class OnScrollChangedListener {
				public onScrollChanged(): void;
			}
			export class OnTouchModeChangeListener {
				public onTouchModeChanged(param0: boolean): void;
			}
			export class OnWindowAttachListener {
				public onWindowAttached(): void;
				public onWindowDetached(): void;
			}
			export class OnWindowFocusChangeListener {
				public onWindowFocusChanged(param0: boolean): void;
			}
		}
	}
}
