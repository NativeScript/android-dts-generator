/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ClipDescription.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class ClipData {
			public constructor();
			public constructor(param0: string, param1: native.Array<string>, param2: android.content.ClipData.Item);
			public constructor(param0: android.content.ClipDescription, param1: android.content.ClipData.Item);
			public constructor(param0: android.content.ClipData);
			public static newPlainText(param0: string, param1: string): android.content.ClipData;
			public static newHtmlText(param0: string, param1: string, param2: string): android.content.ClipData;
			public static newIntent(param0: string, param1: android.content.Intent): android.content.ClipData;
			public static newUri(param0: android.content.ContentResolver, param1: string, param2: android.net.Uri): android.content.ClipData;
			public static newRawUri(param0: string, param1: android.net.Uri): android.content.ClipData;
			public getDescription(): android.content.ClipDescription;
			public addItem(param0: android.content.ClipData.Item): void;
			public getItemCount(): number;
			public getItemAt(param0: number): android.content.ClipData.Item;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module ClipData {
			export class Item {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: string, param1: string);
				public constructor(param0: android.content.Intent);
				public constructor(param0: android.net.Uri);
				public constructor(param0: string, param1: android.content.Intent, param2: android.net.Uri);
				public constructor(param0: string, param1: string, param2: android.content.Intent, param3: android.net.Uri);
				public getText(): string;
				public getHtmlText(): string;
				public getIntent(): android.content.Intent;
				public getUri(): android.net.Uri;
				public coerceToText(param0: android.content.Context): string;
				public coerceToStyledText(param0: android.content.Context): string;
				public coerceToHtmlText(param0: android.content.Context): string;
				public toString(): string;
			}
		}
	}
}
