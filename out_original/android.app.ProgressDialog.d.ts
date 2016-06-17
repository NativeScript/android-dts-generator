/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.NumberFormat.d.ts" />

declare module android {
	export module app {
		export class ProgressDialog {
			public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
			public constructor(param0: android.content.Context, param1: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: number);
			public show(): void;
			public static show(param0: android.content.Context, param1: string, param2: string): android.app.ProgressDialog;
			public static show(param0: android.content.Context, param1: string, param2: string, param3: boolean): android.app.ProgressDialog;
			public static show(param0: android.content.Context, param1: string, param2: string, param3: boolean, param4: boolean): android.app.ProgressDialog;
			public static show(param0: android.content.Context, param1: string, param2: string, param3: boolean, param4: boolean, param5: android.content.DialogInterface.OnCancelListener): android.app.ProgressDialog;
			public onCreate(param0: android.os.Bundle): void;
			public onStart(): void;
			public onStop(): void;
			public setProgress(param0: number): void;
			public setSecondaryProgress(param0: number): void;
			public getProgress(): number;
			public getSecondaryProgress(): number;
			public getMax(): number;
			public setMax(param0: number): void;
			public incrementProgressBy(param0: number): void;
			public incrementSecondaryProgressBy(param0: number): void;
			public setProgressDrawable(param0: android.graphics.drawable.Drawable): void;
			public setIndeterminateDrawable(param0: android.graphics.drawable.Drawable): void;
			public setIndeterminate(param0: boolean): void;
			public isIndeterminate(): boolean;
			public setMessage(param0: string): void;
			public setProgressStyle(param0: number): void;
			public setProgressNumberFormat(param0: string): void;
			public setProgressPercentFormat(param0: java.text.NumberFormat): void;
			public static STYLE_HORIZONTAL: number;
			public static STYLE_SPINNER: number;
		}
	}
}
