/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module view {
		export module accessibility {
			export class CaptioningManager {
				public isEnabled(): boolean;
				public getLocale(): java.util.Locale;
				public getFontScale(): number;
				public getUserStyle(): android.view.accessibility.CaptioningManager.CaptionStyle;
				public addCaptioningChangeListener(param0: android.view.accessibility.CaptioningManager.CaptioningChangeListener): void;
				public removeCaptioningChangeListener(param0: android.view.accessibility.CaptioningManager.CaptioningChangeListener): void;
			}
			export module CaptioningManager {
				export class CaptionStyle {
					public hasBackgroundColor(): boolean;
					public hasForegroundColor(): boolean;
					public hasEdgeType(): boolean;
					public hasEdgeColor(): boolean;
					public hasWindowColor(): boolean;
					public getTypeface(): android.graphics.Typeface;
					public static EDGE_TYPE_DEPRESSED: number;
					public static EDGE_TYPE_DROP_SHADOW: number;
					public static EDGE_TYPE_NONE: number;
					public static EDGE_TYPE_OUTLINE: number;
					public static EDGE_TYPE_RAISED: number;
					public static EDGE_TYPE_UNSPECIFIED: number;
					public backgroundColor: number;
					public edgeColor: number;
					public edgeType: number;
					public foregroundColor: number;
					public windowColor: number;
				}
				export class CaptioningChangeListener {
					public constructor();
					public onEnabledChanged(param0: boolean): void;
					public onUserStyleChanged(param0: android.view.accessibility.CaptioningManager.CaptionStyle): void;
					public onLocaleChanged(param0: java.util.Locale): void;
					public onFontScaleChanged(param0: number): void;
				}
			}
		}
	}
}
