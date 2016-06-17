/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class GravityCompatJellybeanMr1 {
					public static getAbsoluteGravity(param0: number, param1: number): number;
					public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: android.graphics.Rect, param5: number): void;
					public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: number, param5: number, param6: android.graphics.Rect, param7: number): void;
					public static applyDisplay(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect, param3: number): void;
				}
			}
		}
	}
}
