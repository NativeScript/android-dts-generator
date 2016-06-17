/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class TintableCompoundButton {
					public setSupportButtonTintList(param0: android.content.res.ColorStateList): void;
					public getSupportButtonTintList(): android.content.res.ColorStateList;
					public setSupportButtonTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getSupportButtonTintMode(): android.graphics.PorterDuff.Mode;
				}
			}
		}
	}
}
