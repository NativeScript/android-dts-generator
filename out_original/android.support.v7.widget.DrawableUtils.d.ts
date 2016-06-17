/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class DrawableUtils {
					public static getOpticalBounds(param0: android.graphics.drawable.Drawable): android.graphics.Rect;
					public static canSafelyMutateDrawable(param0: android.graphics.drawable.Drawable): boolean;
					public static INSETS_NONE: android.graphics.Rect;
				}
			}
		}
	}
}
