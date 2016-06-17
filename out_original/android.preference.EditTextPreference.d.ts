/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.EditText.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module preference {
		export class EditTextPreference {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public setText(param0: string): void;
			public getText(): string;
			public onBindDialogView(param0: android.view.View): void;
			public onAddEditTextToDialogView(param0: android.view.View, param1: android.widget.EditText): void;
			public onDialogClosed(param0: boolean): void;
			public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): java.lang.Object;
			public onSetInitialValue(param0: boolean, param1: java.lang.Object): void;
			public shouldDisableDependents(): boolean;
			public getEditText(): android.widget.EditText;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
		}
	}
}
