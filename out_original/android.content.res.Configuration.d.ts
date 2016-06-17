/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module content {
		export module res {
			export class Configuration {
				public constructor();
				public constructor(param0: android.content.res.Configuration);
				public isLayoutSizeAtLeast(param0: number): boolean;
				public setTo(param0: android.content.res.Configuration): void;
				public toString(): string;
				public setToDefaults(): void;
				public updateFrom(param0: android.content.res.Configuration): number;
				public diff(param0: android.content.res.Configuration): number;
				public static needNewResources(param0: number, param1: number): boolean;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public compareTo(param0: android.content.res.Configuration): number;
				public equals(param0: java.lang.Object): boolean;
				public equals(param0: android.content.res.Configuration): boolean;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public setLocale(param0: java.util.Locale): void;
				public getLayoutDirection(): number;
				public setLayoutDirection(param0: java.util.Locale): void;
				public isScreenRound(): boolean;
				public static CREATOR: android.os.Parcelable.Creator;
				public static DENSITY_DPI_UNDEFINED: number;
				public static HARDKEYBOARDHIDDEN_NO: number;
				public static HARDKEYBOARDHIDDEN_UNDEFINED: number;
				public static HARDKEYBOARDHIDDEN_YES: number;
				public static KEYBOARDHIDDEN_NO: number;
				public static KEYBOARDHIDDEN_UNDEFINED: number;
				public static KEYBOARDHIDDEN_YES: number;
				public static KEYBOARD_12KEY: number;
				public static KEYBOARD_NOKEYS: number;
				public static KEYBOARD_QWERTY: number;
				public static KEYBOARD_UNDEFINED: number;
				public static MNC_ZERO: number;
				public static NAVIGATIONHIDDEN_NO: number;
				public static NAVIGATIONHIDDEN_UNDEFINED: number;
				public static NAVIGATIONHIDDEN_YES: number;
				public static NAVIGATION_DPAD: number;
				public static NAVIGATION_NONAV: number;
				public static NAVIGATION_TRACKBALL: number;
				public static NAVIGATION_UNDEFINED: number;
				public static NAVIGATION_WHEEL: number;
				public static ORIENTATION_LANDSCAPE: number;
				public static ORIENTATION_PORTRAIT: number;
				public static ORIENTATION_SQUARE: number;
				public static ORIENTATION_UNDEFINED: number;
				public static SCREENLAYOUT_LAYOUTDIR_LTR: number;
				public static SCREENLAYOUT_LAYOUTDIR_MASK: number;
				public static SCREENLAYOUT_LAYOUTDIR_RTL: number;
				public static SCREENLAYOUT_LAYOUTDIR_SHIFT: number;
				public static SCREENLAYOUT_LAYOUTDIR_UNDEFINED: number;
				public static SCREENLAYOUT_LONG_MASK: number;
				public static SCREENLAYOUT_LONG_NO: number;
				public static SCREENLAYOUT_LONG_UNDEFINED: number;
				public static SCREENLAYOUT_LONG_YES: number;
				public static SCREENLAYOUT_ROUND_MASK: number;
				public static SCREENLAYOUT_ROUND_NO: number;
				public static SCREENLAYOUT_ROUND_UNDEFINED: number;
				public static SCREENLAYOUT_ROUND_YES: number;
				public static SCREENLAYOUT_SIZE_LARGE: number;
				public static SCREENLAYOUT_SIZE_MASK: number;
				public static SCREENLAYOUT_SIZE_NORMAL: number;
				public static SCREENLAYOUT_SIZE_SMALL: number;
				public static SCREENLAYOUT_SIZE_UNDEFINED: number;
				public static SCREENLAYOUT_SIZE_XLARGE: number;
				public static SCREENLAYOUT_UNDEFINED: number;
				public static SCREEN_HEIGHT_DP_UNDEFINED: number;
				public static SCREEN_WIDTH_DP_UNDEFINED: number;
				public static SMALLEST_SCREEN_WIDTH_DP_UNDEFINED: number;
				public static TOUCHSCREEN_FINGER: number;
				public static TOUCHSCREEN_NOTOUCH: number;
				public static TOUCHSCREEN_STYLUS: number;
				public static TOUCHSCREEN_UNDEFINED: number;
				public static UI_MODE_NIGHT_MASK: number;
				public static UI_MODE_NIGHT_NO: number;
				public static UI_MODE_NIGHT_UNDEFINED: number;
				public static UI_MODE_NIGHT_YES: number;
				public static UI_MODE_TYPE_APPLIANCE: number;
				public static UI_MODE_TYPE_CAR: number;
				public static UI_MODE_TYPE_DESK: number;
				public static UI_MODE_TYPE_MASK: number;
				public static UI_MODE_TYPE_NORMAL: number;
				public static UI_MODE_TYPE_TELEVISION: number;
				public static UI_MODE_TYPE_UNDEFINED: number;
				public static UI_MODE_TYPE_WATCH: number;
				public densityDpi: number;
				public fontScale: number;
				public hardKeyboardHidden: number;
				public keyboard: number;
				public keyboardHidden: number;
				public locale: java.util.Locale;
				public mcc: number;
				public mnc: number;
				public navigation: number;
				public navigationHidden: number;
				public orientation: number;
				public screenHeightDp: number;
				public screenLayout: number;
				public screenWidthDp: number;
				public smallestScreenWidthDp: number;
				public touchscreen: number;
				public uiMode: number;
			}
		}
	}
}
