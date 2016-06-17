/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.webkit.WebHistoryItem.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module webkit {
		export class WebBackForwardList {
			public constructor();
			public getCurrentItem(): android.webkit.WebHistoryItem;
			public getCurrentIndex(): number;
			public getItemAtIndex(param0: number): android.webkit.WebHistoryItem;
			public getSize(): number;
			public clone(): java.lang.Object;
			public clone(): android.webkit.WebBackForwardList;
		}
	}
}
