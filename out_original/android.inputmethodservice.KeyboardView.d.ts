/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.inputmethodservice.Keyboard.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module inputmethodservice {
		export class KeyboardView {
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setOnKeyboardActionListener(param0: android.inputmethodservice.KeyboardView.OnKeyboardActionListener): void;
			public getOnKeyboardActionListener(): android.inputmethodservice.KeyboardView.OnKeyboardActionListener;
			public setKeyboard(param0: android.inputmethodservice.Keyboard): void;
			public getKeyboard(): android.inputmethodservice.Keyboard;
			public setShifted(param0: boolean): boolean;
			public isShifted(): boolean;
			public setPreviewEnabled(param0: boolean): void;
			public isPreviewEnabled(): boolean;
			public setVerticalCorrection(param0: number): void;
			public setPopupParent(param0: android.view.View): void;
			public setPopupOffset(param0: number, param1: number): void;
			public setProximityCorrectionEnabled(param0: boolean): void;
			public isProximityCorrectionEnabled(): boolean;
			public onMeasure(param0: number, param1: number): void;
			public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			public onDraw(param0: android.graphics.Canvas): void;
			public invalidateAllKeys(): void;
			public invalidateKey(param0: number): void;
			public onLongPress(param0: android.inputmethodservice.Keyboard.Key): boolean;
			public onHoverEvent(param0: android.view.MotionEvent): boolean;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public swipeRight(): void;
			public swipeLeft(): void;
			public swipeUp(): void;
			public swipeDown(): void;
			public closing(): void;
			public onDetachedFromWindow(): void;
			public handleBack(): boolean;
			public onClick(param0: android.view.View): void;
		}
		export module KeyboardView {
			export class OnKeyboardActionListener {
				public onPress(param0: number): void;
				public onRelease(param0: number): void;
				public onKey(param0: number, param1: native.Array<number>): void;
				public onText(param0: string): void;
				public swipeLeft(): void;
				public swipeRight(): void;
				public swipeDown(): void;
				public swipeUp(): void;
			}
		}
	}
}
