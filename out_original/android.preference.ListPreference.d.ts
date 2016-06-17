/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module preference {
		export class ListPreference {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public setEntries(param0: native.Array<java.lang.CharSequence>): void;
			public setEntries(param0: number): void;
			public getEntries(): native.Array<java.lang.CharSequence>;
			public setEntryValues(param0: native.Array<java.lang.CharSequence>): void;
			public setEntryValues(param0: number): void;
			public getEntryValues(): native.Array<java.lang.CharSequence>;
			public setValue(param0: string): void;
			public getSummary(): string;
			public setSummary(param0: number): void;
			public setSummary(param0: string): void;
			public setValueIndex(param0: number): void;
			public getValue(): string;
			public getEntry(): string;
			public findIndexOfValue(param0: string): number;
			public onPrepareDialogBuilder(param0: android.app.AlertDialog.Builder): void;
			public onDialogClosed(param0: boolean): void;
			public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): java.lang.Object;
			public onSetInitialValue(param0: boolean, param1: java.lang.Object): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
		}
	}
}
