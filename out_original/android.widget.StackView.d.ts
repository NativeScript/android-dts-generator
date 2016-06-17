/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module widget {
		export class StackView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public showNext(): void;
			public showPrevious(): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public advance(): void;
			public onMeasure(param0: number, param1: number): void;
			public getAccessibilityClassName(): string;
		}
	}
}
