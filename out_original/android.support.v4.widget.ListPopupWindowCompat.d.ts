/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class ListPopupWindowCompat {
					public static createDragToOpenListener(param0: java.lang.Object, param1: android.view.View): android.view.View.OnTouchListener;
				}
				export module ListPopupWindowCompat {
					export class BaseListPopupWindowImpl {
						public createDragToOpenListener(param0: java.lang.Object, param1: android.view.View): android.view.View.OnTouchListener;
					}
					export class KitKatListPopupWindowImpl {
						public createDragToOpenListener(param0: java.lang.Object, param1: android.view.View): android.view.View.OnTouchListener;
					}
					export class ListPopupWindowImpl {
						public createDragToOpenListener(param0: java.lang.Object, param1: android.view.View): android.view.View.OnTouchListener;
					}
				}
			}
		}
	}
}
