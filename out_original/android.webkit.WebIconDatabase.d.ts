/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class WebIconDatabase {
			public constructor();
			public open(param0: string): void;
			public close(): void;
			public removeAllIcons(): void;
			public requestIconForPageUrl(param0: string, param1: android.webkit.WebIconDatabase.IconListener): void;
			public retainIconForPageUrl(param0: string): void;
			public releaseIconForPageUrl(param0: string): void;
			public static getInstance(): android.webkit.WebIconDatabase;
		}
		export module WebIconDatabase {
			export class IconListener {
				public onReceivedIcon(param0: string, param1: android.graphics.Bitmap): void;
			}
		}
	}
}
