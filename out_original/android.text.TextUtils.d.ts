/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.regex.Pattern.d.ts" />

declare module android {
	export module text {
		export class TextUtils {
			public static getChars(param0: string, param1: number, param2: number, param3: native.Array<string>, param4: number): void;
			public static indexOf(param0: string, param1: string): number;
			public static indexOf(param0: string, param1: string, param2: number): number;
			public static indexOf(param0: string, param1: string, param2: number, param3: number): number;
			public static lastIndexOf(param0: string, param1: string): number;
			public static lastIndexOf(param0: string, param1: string, param2: number): number;
			public static lastIndexOf(param0: string, param1: string, param2: number, param3: number): number;
			public static indexOf(param0: string, param1: string): number;
			public static indexOf(param0: string, param1: string, param2: number): number;
			public static indexOf(param0: string, param1: string, param2: number, param3: number): number;
			public static regionMatches(param0: string, param1: number, param2: string, param3: number, param4: number): boolean;
			public static substring(param0: string, param1: number, param2: number): string;
			public static join(param0: string, param1: native.Array<java.lang.Object>): string;
			public static join(param0: string, param1: java.lang.Iterable): string;
			public static split(param0: string, param1: string): native.Array<string>;
			public static split(param0: string, param1: java.util.regex.Pattern): native.Array<string>;
			public static stringOrSpannedString(param0: string): string;
			public static isEmpty(param0: string): boolean;
			public static getTrimmedLength(param0: string): number;
			public equals(param0: java.lang.Object): boolean;
			public static equals(param0: string, param1: string): boolean;
			public static getReverse(param0: string, param1: number, param2: number): string;
			public static writeToParcel(param0: string, param1: android.os.Parcel, param2: number): void;
			public static dumpSpans(param0: string, param1: android.util.Printer, param2: string): void;
			public static replace(param0: string, param1: native.Array<string>, param2: native.Array<java.lang.CharSequence>): string;
			public static expandTemplate(param0: string, param1: native.Array<java.lang.CharSequence>): string;
			public static getOffsetBefore(param0: string, param1: number): number;
			public static getOffsetAfter(param0: string, param1: number): number;
			public static copySpansFrom(param0: android.text.Spanned, param1: number, param2: number, param3: java.lang.Class, param4: android.text.Spannable, param5: number): void;
			public static ellipsize(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.TextUtils.TruncateAt): string;
			public static ellipsize(param0: string, param1: android.text.TextPaint, param2: number, param3: android.text.TextUtils.TruncateAt, param4: boolean, param5: android.text.TextUtils.EllipsizeCallback): string;
			public static commaEllipsize(param0: string, param1: android.text.TextPaint, param2: number, param3: string, param4: string): string;
			public static htmlEncode(param0: string): string;
			public static concat(param0: native.Array<java.lang.CharSequence>): string;
			public static isGraphic(param0: string): boolean;
			public static isGraphic(param0: string): boolean;
			public static isDigitsOnly(param0: string): boolean;
			public static getCapsMode(param0: string, param1: number, param2: number): number;
			public static getLayoutDirectionFromLocale(param0: java.util.Locale): number;
			public static CAP_MODE_CHARACTERS: number;
			public static CAP_MODE_SENTENCES: number;
			public static CAP_MODE_WORDS: number;
			public static CHAR_SEQUENCE_CREATOR: android.os.Parcelable.Creator;
		}
		export module TextUtils {
			export class EllipsizeCallback {
				public ellipsized(param0: number, param1: number): void;
			}
			export class SimpleStringSplitter {
				public constructor();
				public constructor(param0: string);
				public setString(param0: string): void;
				public iterator(): java.util.Iterator;
				public hasNext(): boolean;
				public next(): string;
				public remove(): void;
			}
			export class StringSplitter {
				public setString(param0: string): void;
			}
			export class TruncateAt {
				public static values(): native.Array<android.text.TextUtils.TruncateAt>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.text.TextUtils.TruncateAt;
				public static END: android.text.TextUtils.TruncateAt;
				public static MARQUEE: android.text.TextUtils.TruncateAt;
				public static MIDDLE: android.text.TextUtils.TruncateAt;
				public static START: android.text.TextUtils.TruncateAt;
			}
		}
	}
}
