/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.display.VirtualDisplay.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module hardware {
		export module display {
			export class DisplayManager {
				public getDisplay(param0: number): android.view.Display;
				public getDisplays(): native.Array<android.view.Display>;
				public getDisplays(param0: string): native.Array<android.view.Display>;
				public registerDisplayListener(param0: android.hardware.display.DisplayManager.DisplayListener, param1: android.os.Handler): void;
				public unregisterDisplayListener(param0: android.hardware.display.DisplayManager.DisplayListener): void;
				public createVirtualDisplay(param0: string, param1: number, param2: number, param3: number, param4: android.view.Surface, param5: number): android.hardware.display.VirtualDisplay;
				public createVirtualDisplay(param0: string, param1: number, param2: number, param3: number, param4: android.view.Surface, param5: number, param6: android.hardware.display.VirtualDisplay.Callback, param7: android.os.Handler): android.hardware.display.VirtualDisplay;
				public static DISPLAY_CATEGORY_PRESENTATION: string;
				public static VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR: number;
				public static VIRTUAL_DISPLAY_FLAG_OWN_CONTENT_ONLY: number;
				public static VIRTUAL_DISPLAY_FLAG_PRESENTATION: number;
				public static VIRTUAL_DISPLAY_FLAG_PUBLIC: number;
				public static VIRTUAL_DISPLAY_FLAG_SECURE: number;
			}
			export module DisplayManager {
				export class DisplayListener {
					public onDisplayAdded(param0: number): void;
					public onDisplayRemoved(param0: number): void;
					public onDisplayChanged(param0: number): void;
				}
			}
		}
	}
}
