/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module widget {
		export class ZoomControls {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public setOnZoomInClickListener(param0: android.view.View.OnClickListener): void;
			public setOnZoomOutClickListener(param0: android.view.View.OnClickListener): void;
			public setZoomSpeed(param0: number): void;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public show(): void;
			public hide(): void;
			public setIsZoomInEnabled(param0: boolean): void;
			public setIsZoomOutEnabled(param0: boolean): void;
			public hasFocus(): boolean;
			public getAccessibilityClassName(): string;
		}
	}
}
