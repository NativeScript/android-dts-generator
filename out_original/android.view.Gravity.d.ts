/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />

declare module android {
	export module view {
		export class Gravity {
			public constructor();
			public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: android.graphics.Rect): void;
			public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: android.graphics.Rect, param5: number): void;
			public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: number, param5: number, param6: android.graphics.Rect): void;
			public static apply(param0: number, param1: number, param2: number, param3: android.graphics.Rect, param4: number, param5: number, param6: android.graphics.Rect, param7: number): void;
			public static applyDisplay(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect): void;
			public static applyDisplay(param0: number, param1: android.graphics.Rect, param2: android.graphics.Rect, param3: number): void;
			public static isVertical(param0: number): boolean;
			public static isHorizontal(param0: number): boolean;
			public static getAbsoluteGravity(param0: number, param1: number): number;
			public static AXIS_CLIP: number;
			public static AXIS_PULL_AFTER: number;
			public static AXIS_PULL_BEFORE: number;
			public static AXIS_SPECIFIED: number;
			public static AXIS_X_SHIFT: number;
			public static AXIS_Y_SHIFT: number;
			public static BOTTOM: number;
			public static CENTER: number;
			public static CENTER_HORIZONTAL: number;
			public static CENTER_VERTICAL: number;
			public static CLIP_HORIZONTAL: number;
			public static CLIP_VERTICAL: number;
			public static DISPLAY_CLIP_HORIZONTAL: number;
			public static DISPLAY_CLIP_VERTICAL: number;
			public static END: number;
			public static FILL: number;
			public static FILL_HORIZONTAL: number;
			public static FILL_VERTICAL: number;
			public static HORIZONTAL_GRAVITY_MASK: number;
			public static LEFT: number;
			public static NO_GRAVITY: number;
			public static RELATIVE_HORIZONTAL_GRAVITY_MASK: number;
			public static RELATIVE_LAYOUT_DIRECTION: number;
			public static RIGHT: number;
			public static START: number;
			public static TOP: number;
			public static VERTICAL_GRAVITY_MASK: number;
		}
	}
}
