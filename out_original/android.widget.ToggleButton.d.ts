/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module widget {
		export class ToggleButton {
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public setChecked(param0: boolean): void;
			public getTextOn(): string;
			public setTextOn(param0: string): void;
			public getTextOff(): string;
			public setTextOff(param0: string): void;
			public onFinishInflate(): void;
			public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
			public drawableStateChanged(): void;
			public getAccessibilityClassName(): string;
		}
	}
}
