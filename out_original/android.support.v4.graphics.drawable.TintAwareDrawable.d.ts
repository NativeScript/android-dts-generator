/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class TintAwareDrawable {
						public setTint(param0: number): void;
						public setTintList(param0: android.content.res.ColorStateList): void;
						public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
					}
				}
			}
		}
	}
}
