/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class TintableBackgroundView {
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				}
			}
		}
	}
}
