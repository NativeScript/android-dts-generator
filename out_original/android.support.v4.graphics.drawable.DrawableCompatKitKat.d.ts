/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class DrawableCompatKitKat {
						public static setAutoMirrored(param0: android.graphics.drawable.Drawable, param1: boolean): void;
						public static isAutoMirrored(param0: android.graphics.drawable.Drawable): boolean;
						public static wrapForTinting(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
						public static getAlpha(param0: android.graphics.drawable.Drawable): number;
					}
				}
			}
		}
	}
}
