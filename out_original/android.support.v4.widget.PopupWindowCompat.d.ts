/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.PopupWindow.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class PopupWindowCompat {
					public static showAsDropDown(param0: android.widget.PopupWindow, param1: android.view.View, param2: number, param3: number, param4: number): void;
					public static setOverlapAnchor(param0: android.widget.PopupWindow, param1: boolean): void;
					public static getOverlapAnchor(param0: android.widget.PopupWindow): boolean;
					public static setWindowLayoutType(param0: android.widget.PopupWindow, param1: number): void;
					public static getWindowLayoutType(param0: android.widget.PopupWindow): number;
				}
				export module PopupWindowCompat {
					export class Api21PopupWindowImpl {
						public setOverlapAnchor(param0: android.widget.PopupWindow, param1: boolean): void;
						public getOverlapAnchor(param0: android.widget.PopupWindow): boolean;
					}
					export class Api23PopupWindowImpl {
						public setOverlapAnchor(param0: android.widget.PopupWindow, param1: boolean): void;
						public getOverlapAnchor(param0: android.widget.PopupWindow): boolean;
						public setWindowLayoutType(param0: android.widget.PopupWindow, param1: number): void;
						public getWindowLayoutType(param0: android.widget.PopupWindow): number;
					}
					export class BasePopupWindowImpl {
						public showAsDropDown(param0: android.widget.PopupWindow, param1: android.view.View, param2: number, param3: number, param4: number): void;
						public setOverlapAnchor(param0: android.widget.PopupWindow, param1: boolean): void;
						public getOverlapAnchor(param0: android.widget.PopupWindow): boolean;
						public setWindowLayoutType(param0: android.widget.PopupWindow, param1: number): void;
						public getWindowLayoutType(param0: android.widget.PopupWindow): number;
					}
					export class GingerbreadPopupWindowImpl {
						public setWindowLayoutType(param0: android.widget.PopupWindow, param1: number): void;
						public getWindowLayoutType(param0: android.widget.PopupWindow): number;
					}
					export class KitKatPopupWindowImpl {
						public showAsDropDown(param0: android.widget.PopupWindow, param1: android.view.View, param2: number, param3: number, param4: number): void;
					}
					export class PopupWindowImpl {
						public showAsDropDown(param0: android.widget.PopupWindow, param1: android.view.View, param2: number, param3: number, param4: number): void;
						public setOverlapAnchor(param0: android.widget.PopupWindow, param1: boolean): void;
						public getOverlapAnchor(param0: android.widget.PopupWindow): boolean;
						public setWindowLayoutType(param0: android.widget.PopupWindow, param1: number): void;
						public getWindowLayoutType(param0: android.widget.PopupWindow): number;
					}
				}
			}
		}
	}
}
