/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.preference.PreferenceManager.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module preference {
		export class RingtonePreference {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public getRingtoneType(): number;
			public setRingtoneType(param0: number): void;
			public getShowDefault(): boolean;
			public setShowDefault(param0: boolean): void;
			public getShowSilent(): boolean;
			public setShowSilent(param0: boolean): void;
			public onClick(): void;
			public onPrepareRingtonePickerIntent(param0: android.content.Intent): void;
			public onSaveRingtone(param0: android.net.Uri): void;
			public onRestoreRingtone(): android.net.Uri;
			public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): java.lang.Object;
			public onSetInitialValue(param0: boolean, param1: java.lang.Object): void;
			public onAttachedToHierarchy(param0: android.preference.PreferenceManager): void;
			public onActivityResult(param0: number, param1: number, param2: android.content.Intent): boolean;
		}
	}
}
