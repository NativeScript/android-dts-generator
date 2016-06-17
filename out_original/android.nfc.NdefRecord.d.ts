/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module nfc {
		export class NdefRecord {
			public constructor();
			public constructor(param0: number, param1: native.Array<number>, param2: native.Array<number>, param3: native.Array<number>);
			public constructor(param0: native.Array<number>);
			public static createApplicationRecord(param0: string): android.nfc.NdefRecord;
			public static createUri(param0: android.net.Uri): android.nfc.NdefRecord;
			public static createUri(param0: string): android.nfc.NdefRecord;
			public static createMime(param0: string, param1: native.Array<number>): android.nfc.NdefRecord;
			public static createExternal(param0: string, param1: string, param2: native.Array<number>): android.nfc.NdefRecord;
			public static createTextRecord(param0: string, param1: string): android.nfc.NdefRecord;
			public getTnf(): number;
			public getType(): native.Array<number>;
			public getId(): native.Array<number>;
			public getPayload(): native.Array<number>;
			public toByteArray(): native.Array<number>;
			public toMimeType(): string;
			public toUri(): android.net.Uri;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static RTD_ALTERNATIVE_CARRIER: native.Array<number>;
			public static RTD_HANDOVER_CARRIER: native.Array<number>;
			public static RTD_HANDOVER_REQUEST: native.Array<number>;
			public static RTD_HANDOVER_SELECT: native.Array<number>;
			public static RTD_SMART_POSTER: native.Array<number>;
			public static RTD_TEXT: native.Array<number>;
			public static RTD_URI: native.Array<number>;
			public static TNF_ABSOLUTE_URI: number;
			public static TNF_EMPTY: number;
			public static TNF_EXTERNAL_TYPE: number;
			public static TNF_MIME_MEDIA: number;
			public static TNF_UNCHANGED: number;
			public static TNF_UNKNOWN: number;
			public static TNF_WELL_KNOWN: number;
		}
	}
}
