/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.http.SslError.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.InputEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.webkit.ClientCertRequest.d.ts" />
/// <reference path="./android.webkit.HttpAuthHandler.d.ts" />
/// <reference path="./android.webkit.SslErrorHandler.d.ts" />
/// <reference path="./android.webkit.WebResourceError.d.ts" />
/// <reference path="./android.webkit.WebResourceRequest.d.ts" />
/// <reference path="./android.webkit.WebResourceResponse.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class WebViewClient {
			public constructor();
			public shouldOverrideUrlLoading(param0: android.webkit.WebView, param1: string): boolean;
			public onPageStarted(param0: android.webkit.WebView, param1: string, param2: android.graphics.Bitmap): void;
			public onPageFinished(param0: android.webkit.WebView, param1: string): void;
			public onLoadResource(param0: android.webkit.WebView, param1: string): void;
			public onPageCommitVisible(param0: android.webkit.WebView, param1: string): void;
			public shouldInterceptRequest(param0: android.webkit.WebView, param1: string): android.webkit.WebResourceResponse;
			public shouldInterceptRequest(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest): android.webkit.WebResourceResponse;
			public onTooManyRedirects(param0: android.webkit.WebView, param1: android.os.Message, param2: android.os.Message): void;
			public onReceivedError(param0: android.webkit.WebView, param1: number, param2: string, param3: string): void;
			public onReceivedError(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: android.webkit.WebResourceError): void;
			public onReceivedHttpError(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: android.webkit.WebResourceResponse): void;
			public onFormResubmission(param0: android.webkit.WebView, param1: android.os.Message, param2: android.os.Message): void;
			public doUpdateVisitedHistory(param0: android.webkit.WebView, param1: string, param2: boolean): void;
			public onReceivedSslError(param0: android.webkit.WebView, param1: android.webkit.SslErrorHandler, param2: android.net.http.SslError): void;
			public onReceivedClientCertRequest(param0: android.webkit.WebView, param1: android.webkit.ClientCertRequest): void;
			public onReceivedHttpAuthRequest(param0: android.webkit.WebView, param1: android.webkit.HttpAuthHandler, param2: string, param3: string): void;
			public shouldOverrideKeyEvent(param0: android.webkit.WebView, param1: android.view.KeyEvent): boolean;
			public onUnhandledKeyEvent(param0: android.webkit.WebView, param1: android.view.KeyEvent): void;
			public onUnhandledInputEvent(param0: android.webkit.WebView, param1: android.view.InputEvent): void;
			public onScaleChanged(param0: android.webkit.WebView, param1: number, param2: number): void;
			public onReceivedLoginRequest(param0: android.webkit.WebView, param1: string, param2: string, param3: string): void;
			public static ERROR_AUTHENTICATION: number;
			public static ERROR_BAD_URL: number;
			public static ERROR_CONNECT: number;
			public static ERROR_FAILED_SSL_HANDSHAKE: number;
			public static ERROR_FILE: number;
			public static ERROR_FILE_NOT_FOUND: number;
			public static ERROR_HOST_LOOKUP: number;
			public static ERROR_IO: number;
			public static ERROR_PROXY_AUTHENTICATION: number;
			public static ERROR_REDIRECT_LOOP: number;
			public static ERROR_TIMEOUT: number;
			public static ERROR_TOO_MANY_REQUESTS: number;
			public static ERROR_UNKNOWN: number;
			public static ERROR_UNSUPPORTED_AUTH_SCHEME: number;
			public static ERROR_UNSUPPORTED_SCHEME: number;
		}
	}
}
