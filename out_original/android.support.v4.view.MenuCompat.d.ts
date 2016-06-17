/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class MenuCompat {
					public static setShowAsAction(param0: android.view.MenuItem, param1: number): void;
				}
			}
		}
	}
}
