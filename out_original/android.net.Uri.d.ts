/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module net {
		export class Uri {
			public isHierarchical(): boolean;
			public isOpaque(): boolean;
			public isRelative(): boolean;
			public isAbsolute(): boolean;
			public getScheme(): string;
			public getSchemeSpecificPart(): string;
			public getEncodedSchemeSpecificPart(): string;
			public getAuthority(): string;
			public getEncodedAuthority(): string;
			public getUserInfo(): string;
			public getEncodedUserInfo(): string;
			public getHost(): string;
			public getPort(): number;
			public getPath(): string;
			public getEncodedPath(): string;
			public getQuery(): string;
			public getEncodedQuery(): string;
			public getFragment(): string;
			public getEncodedFragment(): string;
			public getPathSegments(): java.util.List;
			public getLastPathSegment(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public compareTo(param0: android.net.Uri): number;
			public toString(): string;
			public buildUpon(): android.net.Uri.Builder;
			public static parse(param0: string): android.net.Uri;
			public static fromFile(param0: java.io.File): android.net.Uri;
			public static fromParts(param0: string, param1: string, param2: string): android.net.Uri;
			public getQueryParameterNames(): java.util.Set;
			public getQueryParameters(param0: string): java.util.List;
			public getQueryParameter(param0: string): string;
			public getBooleanQueryParameter(param0: string, param1: boolean): boolean;
			public normalizeScheme(): android.net.Uri;
			public static writeToParcel(param0: android.os.Parcel, param1: android.net.Uri): void;
			public static encode(param0: string): string;
			public static encode(param0: string, param1: string): string;
			public static decode(param0: string): string;
			public static withAppendedPath(param0: android.net.Uri, param1: string): android.net.Uri;
			public static CREATOR: android.os.Parcelable.Creator;
			public static EMPTY: android.net.Uri;
		}
		export module Uri {
			export class Builder {
				public constructor();
				public scheme(param0: string): android.net.Uri.Builder;
				public opaquePart(param0: string): android.net.Uri.Builder;
				public encodedOpaquePart(param0: string): android.net.Uri.Builder;
				public authority(param0: string): android.net.Uri.Builder;
				public encodedAuthority(param0: string): android.net.Uri.Builder;
				public path(param0: string): android.net.Uri.Builder;
				public encodedPath(param0: string): android.net.Uri.Builder;
				public appendPath(param0: string): android.net.Uri.Builder;
				public appendEncodedPath(param0: string): android.net.Uri.Builder;
				public query(param0: string): android.net.Uri.Builder;
				public encodedQuery(param0: string): android.net.Uri.Builder;
				public fragment(param0: string): android.net.Uri.Builder;
				public encodedFragment(param0: string): android.net.Uri.Builder;
				public appendQueryParameter(param0: string, param1: string): android.net.Uri.Builder;
				public clearQuery(): android.net.Uri.Builder;
				public build(): android.net.Uri;
				public toString(): string;
			}
		}
	}
}
