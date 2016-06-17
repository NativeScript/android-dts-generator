/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class DrawableWrapperEclair {
						public newDrawableFromState(param0: android.graphics.drawable.Drawable.ConstantState, param1: android.content.res.Resources): android.graphics.drawable.Drawable;
					}
					export module DrawableWrapperEclair {
						export class DrawableWrapperStateEclair {
							public newDrawable(): android.graphics.drawable.Drawable;
							public newDrawable(param0: android.content.res.Resources, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
							public newDrawable(param0: android.content.res.Resources): android.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}
