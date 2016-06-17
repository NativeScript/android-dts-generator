/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.display.VirtualDisplay.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export module projection {
			export class MediaProjection {
				public registerCallback(param0: android.media.projection.MediaProjection.Callback, param1: android.os.Handler): void;
				public unregisterCallback(param0: android.media.projection.MediaProjection.Callback): void;
				public createVirtualDisplay(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.view.Surface, param6: android.hardware.display.VirtualDisplay.Callback, param7: android.os.Handler): android.hardware.display.VirtualDisplay;
				public stop(): void;
			}
			export module MediaProjection {
				export class Callback {
					public constructor();
					public onStop(): void;
				}
			}
		}
	}
}
