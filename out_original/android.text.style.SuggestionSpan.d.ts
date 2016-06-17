/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module text {
		export module style {
			export class SuggestionSpan {
				public constructor();
				public constructor(param0: android.content.Context, param1: native.Array<string>, param2: number);
				public constructor(param0: java.util.Locale, param1: native.Array<string>, param2: number);
				public constructor(param0: android.content.Context, param1: java.util.Locale, param2: native.Array<string>, param3: number, param4: java.lang.Class);
				public constructor(param0: android.os.Parcel);
				public getSuggestions(): native.Array<string>;
				public getLocale(): string;
				public getFlags(): number;
				public setFlags(param0: number): void;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getSpanTypeId(): number;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public updateDrawState(param0: android.text.TextPaint): void;
				public static ACTION_SUGGESTION_PICKED: string;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FLAG_AUTO_CORRECTION: number;
				public static FLAG_EASY_CORRECT: number;
				public static FLAG_MISSPELLED: number;
				public static SUGGESTIONS_MAX_SIZE: number;
				public static SUGGESTION_SPAN_PICKED_AFTER: string;
				public static SUGGESTION_SPAN_PICKED_BEFORE: string;
				public static SUGGESTION_SPAN_PICKED_HASHCODE: string;
			}
		}
	}
}
