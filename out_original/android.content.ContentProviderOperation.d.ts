/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.ContentProviderResult.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class ContentProviderOperation {
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static newInsert(param0: android.net.Uri): android.content.ContentProviderOperation.Builder;
			public static newUpdate(param0: android.net.Uri): android.content.ContentProviderOperation.Builder;
			public static newDelete(param0: android.net.Uri): android.content.ContentProviderOperation.Builder;
			public static newAssertQuery(param0: android.net.Uri): android.content.ContentProviderOperation.Builder;
			public getUri(): android.net.Uri;
			public isYieldAllowed(): boolean;
			public isInsert(): boolean;
			public isDelete(): boolean;
			public isUpdate(): boolean;
			public isAssertQuery(): boolean;
			public isWriteOperation(): boolean;
			public isReadOperation(): boolean;
			public apply(param0: android.content.ContentProvider, param1: native.Array<android.content.ContentProviderResult>, param2: number): android.content.ContentProviderResult;
			public resolveValueBackReferences(param0: native.Array<android.content.ContentProviderResult>, param1: number): android.content.ContentValues;
			public resolveSelectionArgsBackReferences(param0: native.Array<android.content.ContentProviderResult>, param1: number): native.Array<string>;
			public toString(): string;
			public describeContents(): number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module ContentProviderOperation {
			export class Builder {
				public build(): android.content.ContentProviderOperation;
				public withValueBackReferences(param0: android.content.ContentValues): android.content.ContentProviderOperation.Builder;
				public withValueBackReference(param0: string, param1: number): android.content.ContentProviderOperation.Builder;
				public withSelectionBackReference(param0: number, param1: number): android.content.ContentProviderOperation.Builder;
				public withValues(param0: android.content.ContentValues): android.content.ContentProviderOperation.Builder;
				public withValue(param0: string, param1: java.lang.Object): android.content.ContentProviderOperation.Builder;
				public withSelection(param0: string, param1: native.Array<string>): android.content.ContentProviderOperation.Builder;
				public withExpectedCount(param0: number): android.content.ContentProviderOperation.Builder;
				public withYieldAllowed(param0: boolean): android.content.ContentProviderOperation.Builder;
			}
		}
	}
}
