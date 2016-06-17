/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class TintInfo {
					public mTintList: android.content.res.ColorStateList;
					public mTintMode: android.graphics.PorterDuff.Mode;
					public mHasTintMode: boolean;
					public mHasTintList: boolean;
				}
			}
		}
	}
}
