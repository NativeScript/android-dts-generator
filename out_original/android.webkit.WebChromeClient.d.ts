/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.webkit.ConsoleMessage.d.ts" />
/// <reference path="./android.webkit.JsPromptResult.d.ts" />
/// <reference path="./android.webkit.JsResult.d.ts" />
/// <reference path="./android.webkit.PermissionRequest.d.ts" />
/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class WebChromeClient {
			public constructor();
			public onProgressChanged(param0: android.webkit.WebView, param1: number): void;
			public onReceivedTitle(param0: android.webkit.WebView, param1: string): void;
			public onReceivedIcon(param0: android.webkit.WebView, param1: android.graphics.Bitmap): void;
			public onReceivedTouchIconUrl(param0: android.webkit.WebView, param1: string, param2: boolean): void;
			public onShowCustomView(param0: android.view.View, param1: android.webkit.WebChromeClient.CustomViewCallback): void;
			public onShowCustomView(param0: android.view.View, param1: number, param2: android.webkit.WebChromeClient.CustomViewCallback): void;
			public onHideCustomView(): void;
			public onCreateWindow(param0: android.webkit.WebView, param1: boolean, param2: boolean, param3: android.os.Message): boolean;
			public onRequestFocus(param0: android.webkit.WebView): void;
			public onCloseWindow(param0: android.webkit.WebView): void;
			public onJsAlert(param0: android.webkit.WebView, param1: string, param2: string, param3: android.webkit.JsResult): boolean;
			public onJsConfirm(param0: android.webkit.WebView, param1: string, param2: string, param3: android.webkit.JsResult): boolean;
			public onJsPrompt(param0: android.webkit.WebView, param1: string, param2: string, param3: string, param4: android.webkit.JsPromptResult): boolean;
			public onJsBeforeUnload(param0: android.webkit.WebView, param1: string, param2: string, param3: android.webkit.JsResult): boolean;
			public onExceededDatabaseQuota(param0: string, param1: string, param2: number, param3: number, param4: number, param5: android.webkit.WebStorage.QuotaUpdater): void;
			public onReachedMaxAppCacheSize(param0: number, param1: number, param2: android.webkit.WebStorage.QuotaUpdater): void;
			public onGeolocationPermissionsShowPrompt(param0: string, param1: android.webkit.GeolocationPermissions.Callback): void;
			public onGeolocationPermissionsHidePrompt(): void;
			public onPermissionRequest(param0: android.webkit.PermissionRequest): void;
			public onPermissionRequestCanceled(param0: android.webkit.PermissionRequest): void;
			public onJsTimeout(): boolean;
			public onConsoleMessage(param0: string, param1: number, param2: string): void;
			public onConsoleMessage(param0: android.webkit.ConsoleMessage): boolean;
			public getDefaultVideoPoster(): android.graphics.Bitmap;
			public getVideoLoadingProgressView(): android.view.View;
			public getVisitedHistory(param0: android.webkit.ValueCallback): void;
			public onShowFileChooser(param0: android.webkit.WebView, param1: android.webkit.ValueCallback, param2: android.webkit.WebChromeClient.FileChooserParams): boolean;
		}
		export module WebChromeClient {
			export class CustomViewCallback {
				public onCustomViewHidden(): void;
			}
			export class FileChooserParams {
				public constructor();
				public static parseResult(param0: number, param1: android.content.Intent): native.Array<android.net.Uri>;
				public getMode(): number;
				public getAcceptTypes(): native.Array<string>;
				public isCaptureEnabled(): boolean;
				public getTitle(): string;
				public getFilenameHint(): string;
				public createIntent(): android.content.Intent;
				public static MODE_OPEN: number;
				public static MODE_OPEN_MULTIPLE: number;
				public static MODE_SAVE: number;
			}
		}
	}
}
