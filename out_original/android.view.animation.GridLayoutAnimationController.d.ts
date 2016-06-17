/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />

declare module android {
	export module view {
		export module animation {
			export class GridLayoutAnimationController {
				public constructor(param0: android.view.animation.Animation);
				public constructor(param0: android.view.animation.Animation, param1: number);
				public constructor();
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: android.view.animation.Animation);
				public constructor(param0: android.view.animation.Animation, param1: number, param2: number);
				public getColumnDelay(): number;
				public setColumnDelay(param0: number): void;
				public getRowDelay(): number;
				public setRowDelay(param0: number): void;
				public getDirection(): number;
				public setDirection(param0: number): void;
				public getDirectionPriority(): number;
				public setDirectionPriority(param0: number): void;
				public willOverlap(): boolean;
				public getDelayForView(param0: android.view.View): number;
				public static DIRECTION_BOTTOM_TO_TOP: number;
				public static DIRECTION_HORIZONTAL_MASK: number;
				public static DIRECTION_LEFT_TO_RIGHT: number;
				public static DIRECTION_RIGHT_TO_LEFT: number;
				public static DIRECTION_TOP_TO_BOTTOM: number;
				public static DIRECTION_VERTICAL_MASK: number;
				public static PRIORITY_COLUMN: number;
				public static PRIORITY_NONE: number;
				public static PRIORITY_ROW: number;
			}
			export module GridLayoutAnimationController {
				export class AnimationParameters {
					public constructor();
					public column: number;
					public columnsCount: number;
					public row: number;
					public rowsCount: number;
				}
			}
		}
	}
}
