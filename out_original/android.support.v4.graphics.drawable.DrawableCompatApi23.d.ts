/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class DrawableCompatApi23 {
						public static setLayoutDirection(param0: android.graphics.drawable.Drawable, param1: number): void;
						public static getLayoutDirection(param0: android.graphics.drawable.Drawable): number;
					}
				}
			}
		}
	}
}
