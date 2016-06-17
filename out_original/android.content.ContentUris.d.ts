/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />

declare module android {
	export module content {
		export class ContentUris {
			public constructor();
			public static parseId(param0: android.net.Uri): number;
			public static appendId(param0: android.net.Uri.Builder, param1: number): android.net.Uri.Builder;
			public static withAppendedId(param0: android.net.Uri, param1: number): android.net.Uri;
		}
	}
}
