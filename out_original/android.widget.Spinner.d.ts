/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.SpinnerAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module widget {
		export class Spinner {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number, param4: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number, param4: number, param5: android.content.res.Resources.Theme);
			public getPopupContext(): android.content.Context;
			public setPopupBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
			public setPopupBackgroundResource(param0: number): void;
			public getPopupBackground(): android.graphics.drawable.Drawable;
			public setDropDownVerticalOffset(param0: number): void;
			public getDropDownVerticalOffset(): number;
			public setDropDownHorizontalOffset(param0: number): void;
			public getDropDownHorizontalOffset(): number;
			public setDropDownWidth(param0: number): void;
			public getDropDownWidth(): number;
			public setEnabled(param0: boolean): void;
			public setGravity(param0: number): void;
			public getGravity(): number;
			public setAdapter(param0: android.widget.Adapter): void;
			public setAdapter(param0: android.widget.SpinnerAdapter): void;
			public getBaseline(): number;
			public onDetachedFromWindow(): void;
			public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onMeasure(param0: number, param1: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public performClick(): boolean;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public getAccessibilityClassName(): string;
			public setPrompt(param0: string): void;
			public setPromptId(param0: number): void;
			public getPrompt(): string;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public static MODE_DIALOG: number;
			public static MODE_DROPDOWN: number;
		}
	}
}
