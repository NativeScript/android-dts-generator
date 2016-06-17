/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module hardware {
				export module display {
					export class DisplayManagerJellybeanMr1 {
						public static getDisplayManager(param0: android.content.Context): java.lang.Object;
						public static getDisplay(param0: java.lang.Object, param1: number): android.view.Display;
						public static getDisplays(param0: java.lang.Object): native.Array<android.view.Display>;
						public static getDisplays(param0: java.lang.Object, param1: string): native.Array<android.view.Display>;
					}
				}
			}
		}
	}
}
