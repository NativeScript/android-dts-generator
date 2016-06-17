/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module widget {
		export class ZoomButton {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public setZoomSpeed(param0: number): void;
			public onLongClick(param0: android.view.View): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public setEnabled(param0: boolean): void;
			public dispatchUnhandledMove(param0: android.view.View, param1: number): boolean;
			public getAccessibilityClassName(): string;
		}
	}
}
