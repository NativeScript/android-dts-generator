/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class WebSettings {
			public constructor();
			public setSupportZoom(param0: boolean): void;
			public supportZoom(): boolean;
			public setMediaPlaybackRequiresUserGesture(param0: boolean): void;
			public getMediaPlaybackRequiresUserGesture(): boolean;
			public setBuiltInZoomControls(param0: boolean): void;
			public getBuiltInZoomControls(): boolean;
			public setDisplayZoomControls(param0: boolean): void;
			public getDisplayZoomControls(): boolean;
			public setAllowFileAccess(param0: boolean): void;
			public getAllowFileAccess(): boolean;
			public setAllowContentAccess(param0: boolean): void;
			public getAllowContentAccess(): boolean;
			public setLoadWithOverviewMode(param0: boolean): void;
			public getLoadWithOverviewMode(): boolean;
			public setEnableSmoothTransition(param0: boolean): void;
			public enableSmoothTransition(): boolean;
			public setSaveFormData(param0: boolean): void;
			public getSaveFormData(): boolean;
			public setSavePassword(param0: boolean): void;
			public getSavePassword(): boolean;
			public setTextZoom(param0: number): void;
			public getTextZoom(): number;
			public setTextSize(param0: android.webkit.WebSettings.TextSize): void;
			public getTextSize(): android.webkit.WebSettings.TextSize;
			public setDefaultZoom(param0: android.webkit.WebSettings.ZoomDensity): void;
			public getDefaultZoom(): android.webkit.WebSettings.ZoomDensity;
			public setLightTouchEnabled(param0: boolean): void;
			public getLightTouchEnabled(): boolean;
			public setUseWideViewPort(param0: boolean): void;
			public getUseWideViewPort(): boolean;
			public setSupportMultipleWindows(param0: boolean): void;
			public supportMultipleWindows(): boolean;
			public setLayoutAlgorithm(param0: android.webkit.WebSettings.LayoutAlgorithm): void;
			public getLayoutAlgorithm(): android.webkit.WebSettings.LayoutAlgorithm;
			public setStandardFontFamily(param0: string): void;
			public getStandardFontFamily(): string;
			public setFixedFontFamily(param0: string): void;
			public getFixedFontFamily(): string;
			public setSansSerifFontFamily(param0: string): void;
			public getSansSerifFontFamily(): string;
			public setSerifFontFamily(param0: string): void;
			public getSerifFontFamily(): string;
			public setCursiveFontFamily(param0: string): void;
			public getCursiveFontFamily(): string;
			public setFantasyFontFamily(param0: string): void;
			public getFantasyFontFamily(): string;
			public setMinimumFontSize(param0: number): void;
			public getMinimumFontSize(): number;
			public setMinimumLogicalFontSize(param0: number): void;
			public getMinimumLogicalFontSize(): number;
			public setDefaultFontSize(param0: number): void;
			public getDefaultFontSize(): number;
			public setDefaultFixedFontSize(param0: number): void;
			public getDefaultFixedFontSize(): number;
			public setLoadsImagesAutomatically(param0: boolean): void;
			public getLoadsImagesAutomatically(): boolean;
			public setBlockNetworkImage(param0: boolean): void;
			public getBlockNetworkImage(): boolean;
			public setBlockNetworkLoads(param0: boolean): void;
			public getBlockNetworkLoads(): boolean;
			public setJavaScriptEnabled(param0: boolean): void;
			public setAllowUniversalAccessFromFileURLs(param0: boolean): void;
			public setAllowFileAccessFromFileURLs(param0: boolean): void;
			public setPluginState(param0: android.webkit.WebSettings.PluginState): void;
			public setDatabasePath(param0: string): void;
			public setGeolocationDatabasePath(param0: string): void;
			public setAppCacheEnabled(param0: boolean): void;
			public setAppCachePath(param0: string): void;
			public setAppCacheMaxSize(param0: number): void;
			public setDatabaseEnabled(param0: boolean): void;
			public setDomStorageEnabled(param0: boolean): void;
			public getDomStorageEnabled(): boolean;
			public getDatabasePath(): string;
			public getDatabaseEnabled(): boolean;
			public setGeolocationEnabled(param0: boolean): void;
			public getJavaScriptEnabled(): boolean;
			public getAllowUniversalAccessFromFileURLs(): boolean;
			public getAllowFileAccessFromFileURLs(): boolean;
			public getPluginState(): android.webkit.WebSettings.PluginState;
			public setJavaScriptCanOpenWindowsAutomatically(param0: boolean): void;
			public getJavaScriptCanOpenWindowsAutomatically(): boolean;
			public setDefaultTextEncodingName(param0: string): void;
			public getDefaultTextEncodingName(): string;
			public setUserAgentString(param0: string): void;
			public getUserAgentString(): string;
			public static getDefaultUserAgent(param0: android.content.Context): string;
			public setNeedInitialFocus(param0: boolean): void;
			public setRenderPriority(param0: android.webkit.WebSettings.RenderPriority): void;
			public setCacheMode(param0: number): void;
			public getCacheMode(): number;
			public setMixedContentMode(param0: number): void;
			public getMixedContentMode(): number;
			public setOffscreenPreRaster(param0: boolean): void;
			public getOffscreenPreRaster(): boolean;
			public static LOAD_CACHE_ELSE_NETWORK: number;
			public static LOAD_CACHE_ONLY: number;
			public static LOAD_DEFAULT: number;
			public static LOAD_NORMAL: number;
			public static LOAD_NO_CACHE: number;
			public static MIXED_CONTENT_ALWAYS_ALLOW: number;
			public static MIXED_CONTENT_COMPATIBILITY_MODE: number;
			public static MIXED_CONTENT_NEVER_ALLOW: number;
		}
		export module WebSettings {
			export class LayoutAlgorithm {
				public static values(): native.Array<android.webkit.WebSettings.LayoutAlgorithm>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.webkit.WebSettings.LayoutAlgorithm;
				public static NARROW_COLUMNS: android.webkit.WebSettings.LayoutAlgorithm;
				public static NORMAL: android.webkit.WebSettings.LayoutAlgorithm;
				public static SINGLE_COLUMN: android.webkit.WebSettings.LayoutAlgorithm;
				public static TEXT_AUTOSIZING: android.webkit.WebSettings.LayoutAlgorithm;
			}
			export class PluginState {
				public static values(): native.Array<android.webkit.WebSettings.PluginState>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.webkit.WebSettings.PluginState;
				public static OFF: android.webkit.WebSettings.PluginState;
				public static ON: android.webkit.WebSettings.PluginState;
				public static ON_DEMAND: android.webkit.WebSettings.PluginState;
			}
			export class RenderPriority {
				public static values(): native.Array<android.webkit.WebSettings.RenderPriority>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.webkit.WebSettings.RenderPriority;
				public static HIGH: android.webkit.WebSettings.RenderPriority;
				public static LOW: android.webkit.WebSettings.RenderPriority;
				public static NORMAL: android.webkit.WebSettings.RenderPriority;
			}
			export class TextSize {
				public static values(): native.Array<android.webkit.WebSettings.TextSize>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.webkit.WebSettings.TextSize;
				public static LARGER: android.webkit.WebSettings.TextSize;
				public static LARGEST: android.webkit.WebSettings.TextSize;
				public static NORMAL: android.webkit.WebSettings.TextSize;
				public static SMALLER: android.webkit.WebSettings.TextSize;
				public static SMALLEST: android.webkit.WebSettings.TextSize;
			}
			export class ZoomDensity {
				public static values(): native.Array<android.webkit.WebSettings.ZoomDensity>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.webkit.WebSettings.ZoomDensity;
				public static CLOSE: android.webkit.WebSettings.ZoomDensity;
				public static FAR: android.webkit.WebSettings.ZoomDensity;
				public static MEDIUM: android.webkit.WebSettings.ZoomDensity;
			}
		}
	}
}
