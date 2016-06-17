/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module webkit {
		export class WebResourceRequest {
			public getUrl(): android.net.Uri;
			public isForMainFrame(): boolean;
			public hasGesture(): boolean;
			public getMethod(): string;
			public getRequestHeaders(): java.util.Map;
		}
	}
}
