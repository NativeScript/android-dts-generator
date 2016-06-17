/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.style.TtsSpan.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module telephony {
		export class PhoneNumberUtils {
			public constructor();
			public static isISODigit(param0: string): boolean;
			public static is12Key(param0: string): boolean;
			public static isDialable(param0: string): boolean;
			public static isReallyDialable(param0: string): boolean;
			public static isNonSeparator(param0: string): boolean;
			public static isStartsPostDial(param0: string): boolean;
			public static getNumberFromIntent(param0: android.content.Intent, param1: android.content.Context): string;
			public static extractNetworkPortion(param0: string): string;
			public static stripSeparators(param0: string): string;
			public static extractPostDialPortion(param0: string): string;
			public static compare(param0: string, param1: string): boolean;
			public static compare(param0: android.content.Context, param1: string, param2: string): boolean;
			public static toCallerIDMinMatch(param0: string): string;
			public static getStrippedReversed(param0: string): string;
			public static stringFromStringAndTOA(param0: string, param1: number): string;
			public static toaFromString(param0: string): number;
			public static calledPartyBCDToString(param0: native.Array<number>, param1: number, param2: number): string;
			public static calledPartyBCDFragmentToString(param0: native.Array<number>, param1: number, param2: number): string;
			public static isWellFormedSmsAddress(param0: string): boolean;
			public static isGlobalPhoneNumber(param0: string): boolean;
			public static networkPortionToCalledPartyBCD(param0: string): native.Array<number>;
			public static networkPortionToCalledPartyBCDWithLength(param0: string): native.Array<number>;
			public static numberToCalledPartyBCD(param0: string): native.Array<number>;
			public static formatNumber(param0: string): string;
			public static getFormatTypeForLocale(param0: java.util.Locale): number;
			public static formatNumber(param0: android.text.Editable, param1: number): void;
			public static formatNanpNumber(param0: android.text.Editable): void;
			public static formatJapaneseNumber(param0: android.text.Editable): void;
			public static formatNumberToE164(param0: string, param1: string): string;
			public static formatNumberToRFC3966(param0: string, param1: string): string;
			public static formatNumber(param0: string, param1: string): string;
			public static formatNumber(param0: string, param1: string, param2: string): string;
			public static normalizeNumber(param0: string): string;
			public static replaceUnicodeDigits(param0: string): string;
			public static isEmergencyNumber(param0: string): boolean;
			public static isLocalEmergencyNumber(param0: android.content.Context, param1: string): boolean;
			public static isVoiceMailNumber(param0: string): boolean;
			public static convertKeypadLettersToDigits(param0: string): string;
			public static createTtsSpannable(param0: string): string;
			public static addTtsSpan(param0: android.text.Spannable, param1: number, param2: number): void;
			public static createTtsSpan(param0: string): android.text.style.TtsSpan;
			public static FORMAT_JAPAN: number;
			public static FORMAT_NANP: number;
			public static FORMAT_UNKNOWN: number;
			public static PAUSE: string;
			public static TOA_International: number;
			public static TOA_Unknown: number;
			public static WAIT: string;
			public static WILD: string;
		}
	}
}
