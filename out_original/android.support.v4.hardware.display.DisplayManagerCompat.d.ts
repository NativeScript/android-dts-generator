/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module hardware {
				export module display {
					export class DisplayManagerCompat {
						public static getInstance(param0: android.content.Context): android.support.v4.hardware.display.DisplayManagerCompat;
						public getDisplay(param0: number): android.view.Display;
						public getDisplays(): native.Array<android.view.Display>;
						public getDisplays(param0: string): native.Array<android.view.Display>;
						public static DISPLAY_CATEGORY_PRESENTATION: string;
					}
					export module DisplayManagerCompat {
						export class JellybeanMr1Impl {
							public constructor();
							public constructor(param0: android.content.Context);
							public getDisplay(param0: number): android.view.Display;
							public getDisplays(param0: string): native.Array<android.view.Display>;
							public getDisplays(): native.Array<android.view.Display>;
							public getDisplays(param0: string): native.Array<android.view.Display>;
						}
						export class LegacyImpl {
							public constructor();
							public constructor(param0: android.content.Context);
							public getDisplay(param0: number): android.view.Display;
							public getDisplays(param0: string): native.Array<android.view.Display>;
							public getDisplays(): native.Array<android.view.Display>;
							public getDisplays(param0: string): native.Array<android.view.Display>;
						}
					}
				}
			}
		}
	}
}
