/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class PopupMenuCompat {
					public static getDragToOpenListener(param0: java.lang.Object): android.view.View.OnTouchListener;
				}
				export module PopupMenuCompat {
					export class BasePopupMenuImpl {
						public getDragToOpenListener(param0: java.lang.Object): android.view.View.OnTouchListener;
					}
					export class KitKatPopupMenuImpl {
						public getDragToOpenListener(param0: java.lang.Object): android.view.View.OnTouchListener;
					}
					export class PopupMenuImpl {
						public getDragToOpenListener(param0: java.lang.Object): android.view.View.OnTouchListener;
					}
				}
			}
		}
	}
}
