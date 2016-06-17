/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />

declare module android {
	export module webkit {
		export class WebViewFragment {
			public constructor();
			public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
			public onPause(): void;
			public onResume(): void;
			public onDestroyView(): void;
			public onDestroy(): void;
			public getWebView(): android.webkit.WebView;
		}
	}
}
