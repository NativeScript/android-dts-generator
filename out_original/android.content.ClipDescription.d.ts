/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class ClipDescription {
			public constructor();
			public constructor(param0: string, param1: native.Array<string>);
			public constructor(param0: android.content.ClipDescription);
			public static compareMimeTypes(param0: string, param1: string): boolean;
			public getLabel(): string;
			public hasMimeType(param0: string): boolean;
			public filterMimeTypes(param0: string): native.Array<string>;
			public getMimeTypeCount(): number;
			public getMimeType(param0: number): string;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static MIMETYPE_TEXT_HTML: string;
			public static MIMETYPE_TEXT_INTENT: string;
			public static MIMETYPE_TEXT_PLAIN: string;
			public static MIMETYPE_TEXT_URILIST: string;
		}
	}
}
