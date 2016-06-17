/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class DrawableWrapperLollipop {
						public setHotspot(param0: number, param1: number): void;
						public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getOutline(param0: android.graphics.Outline): void;
						public getDirtyBounds(): android.graphics.Rect;
						public setTintList(param0: android.content.res.ColorStateList): void;
						public setTint(param0: number): void;
						public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
						public setState(param0: native.Array<number>): boolean;
						public isCompatTintEnabled(): boolean;
					}
					export module DrawableWrapperLollipop {
						export class DrawableWrapperStateLollipop {
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
