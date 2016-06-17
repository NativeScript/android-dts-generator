/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class DrawableCompatHoneycomb {
						public static jumpToCurrentState(param0: android.graphics.drawable.Drawable): void;
						public static wrapForTinting(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
					}
				}
			}
		}
	}
}
