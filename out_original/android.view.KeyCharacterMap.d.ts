/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module view {
		export class KeyCharacterMap {
			public finalize(): void;
			public static load(param0: number): android.view.KeyCharacterMap;
			public get(param0: number, param1: number): number;
			public getNumber(param0: number): string;
			public getMatch(param0: number, param1: native.Array<string>): string;
			public getMatch(param0: number, param1: native.Array<string>, param2: number): string;
			public getDisplayLabel(param0: number): string;
			public static getDeadChar(param0: number, param1: number): number;
			public getKeyData(param0: number, param1: android.view.KeyCharacterMap.KeyData): boolean;
			public getEvents(param0: native.Array<string>): native.Array<android.view.KeyEvent>;
			public isPrintingKey(param0: number): boolean;
			public getKeyboardType(): number;
			public getModifierBehavior(): number;
			public static deviceHasKey(param0: number): boolean;
			public static deviceHasKeys(param0: native.Array<number>): native.Array<boolean>;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public static ALPHA: number;
			public static BUILT_IN_KEYBOARD: number;
			public static COMBINING_ACCENT: number;
			public static COMBINING_ACCENT_MASK: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static FULL: number;
			public static HEX_INPUT: string;
			public static MODIFIER_BEHAVIOR_CHORDED: number;
			public static MODIFIER_BEHAVIOR_CHORDED_OR_TOGGLED: number;
			public static NUMERIC: number;
			public static PICKER_DIALOG_INPUT: string;
			public static PREDICTIVE: number;
			public static SPECIAL_FUNCTION: number;
			public static VIRTUAL_KEYBOARD: number;
		}
		export module KeyCharacterMap {
			export class KeyData {
				public constructor();
				public static META_LENGTH: number;
				public displayLabel: string;
				public meta: native.Array<string>;
				public number: string;
			}
			export class UnavailableException {
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Exception);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: string);
			}
		}
	}
}
