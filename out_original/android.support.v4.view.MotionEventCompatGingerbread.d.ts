/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class MotionEventCompatGingerbread {
					public static getSource(param0: android.view.MotionEvent): number;
				}
			}
		}
	}
}
