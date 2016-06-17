/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class GravityCompat {
					public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: android.graphics.Rect, param5: number): void;
					public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: number, param5: number, param6: android.graphics.Rect, param7: number): void;
					public static applyDisplay(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect, param3: number): void;
					public static getAbsoluteGravity(param0: number, param1: number): number;
					public static RELATIVE_LAYOUT_DIRECTION: number;
					public static START: number;
					public static END: number;
					public static RELATIVE_HORIZONTAL_GRAVITY_MASK: number;
				}
				export module GravityCompat {
					export class GravityCompatImpl {
						public getAbsoluteGravity(param0: number, param1: number): number;
						public apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: android.graphics.Rect, param5: number): void;
						public apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: number, param5: number, param6: android.graphics.Rect, param7: number): void;
						public applyDisplay(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect, param3: number): void;
					}
					export class GravityCompatImplBase {
						public getAbsoluteGravity(param0: number, param1: number): number;
						public apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: android.graphics.Rect, param5: number): void;
						public apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: number, param5: number, param6: android.graphics.Rect, param7: number): void;
						public applyDisplay(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect, param3: number): void;
					}
					export class GravityCompatImplJellybeanMr1 {
						public getAbsoluteGravity(param0: number, param1: number): number;
						public apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: android.graphics.Rect, param5: number): void;
						public apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: number, param5: number, param6: android.graphics.Rect, param7: number): void;
						public applyDisplay(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect, param3: number): void;
					}
				}
			}
		}
	}
}
