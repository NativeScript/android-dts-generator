/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Picture.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.net.http.SslCertificate.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.print.PrintDocumentAdapter.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewStructure.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeProvider.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.webkit.DownloadListener.d.ts" />
/// <reference path="./android.webkit.ValueCallback.d.ts" />
/// <reference path="./android.webkit.WebBackForwardList.d.ts" />
/// <reference path="./android.webkit.WebChromeClient.d.ts" />
/// <reference path="./android.webkit.WebMessage.d.ts" />
/// <reference path="./android.webkit.WebMessagePort.d.ts" />
/// <reference path="./android.webkit.WebSettings.d.ts" />
/// <reference path="./android.webkit.WebViewClient.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module webkit {
		export class WebView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: boolean);
			public setHorizontalScrollbarOverlay(param0: boolean): void;
			public setVerticalScrollbarOverlay(param0: boolean): void;
			public overlayHorizontalScrollbar(): boolean;
			public overlayVerticalScrollbar(): boolean;
			public getCertificate(): android.net.http.SslCertificate;
			public setCertificate(param0: android.net.http.SslCertificate): void;
			public savePassword(param0: string, param1: string, param2: string): void;
			public setHttpAuthUsernamePassword(param0: string, param1: string, param2: string, param3: string): void;
			public getHttpAuthUsernamePassword(param0: string, param1: string): native.Array<string>;
			public destroy(): void;
			public setNetworkAvailable(param0: boolean): void;
			public saveState(param0: android.os.Bundle): android.webkit.WebBackForwardList;
			public restoreState(param0: android.os.Bundle): android.webkit.WebBackForwardList;
			public loadUrl(param0: string, param1: java.util.Map): void;
			public loadUrl(param0: string): void;
			public postUrl(param0: string, param1: native.Array<number>): void;
			public loadData(param0: string, param1: string, param2: string): void;
			public loadDataWithBaseURL(param0: string, param1: string, param2: string, param3: string, param4: string): void;
			public evaluateJavascript(param0: string, param1: android.webkit.ValueCallback): void;
			public saveWebArchive(param0: string): void;
			public saveWebArchive(param0: string, param1: boolean, param2: android.webkit.ValueCallback): void;
			public stopLoading(): void;
			public reload(): void;
			public canGoBack(): boolean;
			public goBack(): void;
			public canGoForward(): boolean;
			public goForward(): void;
			public canGoBackOrForward(param0: number): boolean;
			public goBackOrForward(param0: number): void;
			public isPrivateBrowsingEnabled(): boolean;
			public pageUp(param0: boolean): boolean;
			public pageDown(param0: boolean): boolean;
			public postVisualStateCallback(param0: number, param1: android.webkit.WebView.VisualStateCallback): void;
			public clearView(): void;
			public capturePicture(): android.graphics.Picture;
			public createPrintDocumentAdapter(): android.print.PrintDocumentAdapter;
			public createPrintDocumentAdapter(param0: string): android.print.PrintDocumentAdapter;
			public getScale(): number;
			public setInitialScale(param0: number): void;
			public invokeZoomPicker(): void;
			public getHitTestResult(): android.webkit.WebView.HitTestResult;
			public requestFocusNodeHref(param0: android.os.Message): void;
			public requestImageRef(param0: android.os.Message): void;
			public getUrl(): string;
			public getOriginalUrl(): string;
			public getTitle(): string;
			public getFavicon(): android.graphics.Bitmap;
			public getProgress(): number;
			public getContentHeight(): number;
			public pauseTimers(): void;
			public resumeTimers(): void;
			public onPause(): void;
			public onResume(): void;
			public freeMemory(): void;
			public clearCache(param0: boolean): void;
			public clearFormData(): void;
			public clearHistory(): void;
			public clearSslPreferences(): void;
			public static clearClientCertPreferences(param0: java.lang.Runnable): void;
			public copyBackForwardList(): android.webkit.WebBackForwardList;
			public setFindListener(param0: android.webkit.WebView.FindListener): void;
			public findNext(param0: boolean): void;
			public findAll(param0: string): number;
			public findAllAsync(param0: string): void;
			public showFindDialog(param0: string, param1: boolean): boolean;
			public static findAddress(param0: string): string;
			public static enableSlowWholeDocumentDraw(): void;
			public clearMatches(): void;
			public documentHasImages(param0: android.os.Message): void;
			public setWebViewClient(param0: android.webkit.WebViewClient): void;
			public setDownloadListener(param0: android.webkit.DownloadListener): void;
			public setWebChromeClient(param0: android.webkit.WebChromeClient): void;
			public setPictureListener(param0: android.webkit.WebView.PictureListener): void;
			public addJavascriptInterface(param0: java.lang.Object, param1: string): void;
			public removeJavascriptInterface(param0: string): void;
			public createWebMessageChannel(): native.Array<android.webkit.WebMessagePort>;
			public postWebMessage(param0: android.webkit.WebMessage, param1: android.net.Uri): void;
			public getSettings(): android.webkit.WebSettings;
			public static setWebContentsDebuggingEnabled(param0: boolean): void;
			public onChildViewAdded(param0: android.view.View, param1: android.view.View): void;
			public onChildViewRemoved(param0: android.view.View, param1: android.view.View): void;
			public onGlobalFocusChanged(param0: android.view.View, param1: android.view.View): void;
			public setMapTrackballToArrowKeys(param0: boolean): void;
			public flingScroll(param0: number, param1: number): void;
			public canZoomIn(): boolean;
			public canZoomOut(): boolean;
			public zoomBy(param0: number): void;
			public zoomIn(): boolean;
			public zoomOut(): boolean;
			public onAttachedToWindow(): void;
			public setLayoutParams(param0: android.view.ViewGroup.LayoutParams): void;
			public setOverScrollMode(param0: number): void;
			public setScrollBarStyle(param0: number): void;
			public computeHorizontalScrollRange(): number;
			public computeHorizontalScrollOffset(): number;
			public computeVerticalScrollRange(): number;
			public computeVerticalScrollOffset(): number;
			public computeVerticalScrollExtent(): number;
			public computeScroll(): void;
			public onHoverEvent(param0: android.view.MotionEvent): boolean;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onTrackballEvent(param0: android.view.MotionEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public getAccessibilityNodeProvider(): android.view.accessibility.AccessibilityNodeProvider;
			public shouldDelayChildPressedState(): boolean;
			public getAccessibilityClassName(): string;
			public onProvideVirtualStructure(param0: android.view.ViewStructure): void;
			public onOverScrolled(param0: number, param1: number, param2: boolean, param3: boolean): void;
			public onWindowVisibilityChanged(param0: number): void;
			public onDraw(param0: android.graphics.Canvas): void;
			public performLongClick(): boolean;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
			public onVisibilityChanged(param0: android.view.View, param1: number): void;
			public onWindowFocusChanged(param0: boolean): void;
			public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
			public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
			public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public requestFocus(): boolean;
			public requestFocus(param0: number): boolean;
			public requestFocus(param0: number, param1: android.graphics.Rect): boolean;
			public onMeasure(param0: number, param1: number): void;
			public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
			public setBackgroundColor(param0: number): void;
			public setLayerType(param0: number, param1: android.graphics.Paint): void;
			public dispatchDraw(param0: android.graphics.Canvas): void;
			public onStartTemporaryDetach(): void;
			public onFinishTemporaryDetach(): void;
			public static SCHEME_GEO: string;
			public static SCHEME_MAILTO: string;
			public static SCHEME_TEL: string;
		}
		export module WebView {
			export class FindListener {
				public onFindResultReceived(param0: number, param1: number, param2: boolean): void;
			}
			export class HitTestResult {
				public getType(): number;
				public getExtra(): string;
				public static ANCHOR_TYPE: number;
				public static EDIT_TEXT_TYPE: number;
				public static EMAIL_TYPE: number;
				public static GEO_TYPE: number;
				public static IMAGE_ANCHOR_TYPE: number;
				public static IMAGE_TYPE: number;
				public static PHONE_TYPE: number;
				public static SRC_ANCHOR_TYPE: number;
				public static SRC_IMAGE_ANCHOR_TYPE: number;
				public static UNKNOWN_TYPE: number;
			}
			export class PictureListener {
				public onNewPicture(param0: android.webkit.WebView, param1: android.graphics.Picture): void;
			}
			export class VisualStateCallback {
				public constructor();
				public onComplete(param0: number): void;
			}
			export class WebViewTransport {
				public constructor();
				public constructor(param0: android.webkit.WebView);
				public setWebView(param0: android.webkit.WebView): void;
				public getWebView(): android.webkit.WebView;
			}
		}
	}
}
