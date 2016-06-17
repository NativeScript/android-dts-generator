/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module webkit {
		export class WebHistoryItem {
			public constructor();
			public getUrl(): string;
			public getOriginalUrl(): string;
			public getTitle(): string;
			public getFavicon(): android.graphics.Bitmap;
			public clone(): java.lang.Object;
			public clone(): android.webkit.WebHistoryItem;
		}
	}
}
