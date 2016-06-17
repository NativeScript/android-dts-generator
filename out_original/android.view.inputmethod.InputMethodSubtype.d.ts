/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ApplicationInfo.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class InputMethodSubtype {
				public constructor();
				public constructor(param0: number, param1: number, param2: string, param3: string, param4: string, param5: boolean, param6: boolean);
				public constructor(param0: number, param1: number, param2: string, param3: string, param4: string, param5: boolean, param6: boolean, param7: number);
				public getNameResId(): number;
				public getIconResId(): number;
				public getLocale(): string;
				public getMode(): string;
				public getExtraValue(): string;
				public isAuxiliary(): boolean;
				public overridesImplicitlyEnabledSubtype(): boolean;
				public isAsciiCapable(): boolean;
				public getDisplayName(param0: android.content.Context, param1: string, param2: android.content.pm.ApplicationInfo): string;
				public containsExtraValueKey(param0: string): boolean;
				public getExtraValueOf(param0: string): string;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export module InputMethodSubtype {
				export class InputMethodSubtypeBuilder {
					public constructor();
					public setIsAuxiliary(param0: boolean): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;
					public setOverridesImplicitlyEnabledSubtype(param0: boolean): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;
					public setIsAsciiCapable(param0: boolean): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;
					public setSubtypeIconResId(param0: number): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;
					public setSubtypeNameResId(param0: number): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;
					public setSubtypeId(param0: number): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;
					public setSubtypeLocale(param0: string): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;
					public setSubtypeMode(param0: string): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;
					public setSubtypeExtraValue(param0: string): android.view.inputmethod.InputMethodSubtype.InputMethodSubtypeBuilder;
					public build(): android.view.inputmethod.InputMethodSubtype;
				}
			}
		}
	}
}
