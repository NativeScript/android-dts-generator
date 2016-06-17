/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module preference {
		export class TwoStatePreference {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public onClick(): void;
			public setChecked(param0: boolean): void;
			public isChecked(): boolean;
			public shouldDisableDependents(): boolean;
			public setSummaryOn(param0: string): void;
			public setSummaryOn(param0: number): void;
			public getSummaryOn(): string;
			public setSummaryOff(param0: string): void;
			public setSummaryOff(param0: number): void;
			public getSummaryOff(): string;
			public getDisableDependentsState(): boolean;
			public setDisableDependentsState(param0: boolean): void;
			public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): java.lang.Object;
			public onSetInitialValue(param0: boolean, param1: java.lang.Object): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
		}
	}
}
