/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.PopupWindow.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class PopupWindowCompatKitKat {
					public static showAsDropDown(param0: android.widget.PopupWindow, param1: android.view.View, param2: number, param3: number, param4: number): void;
				}
			}
		}
	}
}
