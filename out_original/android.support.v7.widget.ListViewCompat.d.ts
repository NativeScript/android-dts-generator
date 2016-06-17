/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ListViewCompat {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setSelector(param0: number): void;
					public setSelector(param0: android.graphics.drawable.Drawable): void;
					public drawableStateChanged(): void;
					public dispatchDraw(param0: android.graphics.Canvas): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public updateSelectorStateCompat(): void;
					public shouldShowSelectorCompat(): boolean;
					public touchModeDrawsInPressedStateCompat(): boolean;
					public drawSelectorCompat(param0: android.graphics.Canvas): void;
					public lookForSelectablePosition(param0: number, param1: boolean): number;
					public positionSelectorLikeTouchCompat(param0: number, param1: android.view.View, param2: number, param3: number): void;
					public positionSelectorLikeFocusCompat(param0: number, param1: android.view.View): void;
					public positionSelectorCompat(param0: number, param1: android.view.View): void;
					public measureHeightOfChildrenCompat(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public setSelectorEnabled(param0: boolean): void;
					public static INVALID_POSITION: number;
					public static NO_POSITION: number;
					public mMotionPosition: number;
				}
				export module ListViewCompat {
					export class GateKeeperDrawable {
						public constructor();
						public constructor(param0: android.graphics.drawable.Drawable);
						public setState(param0: native.Array<number>): boolean;
						public draw(param0: android.graphics.Canvas): void;
						public setHotspot(param0: number, param1: number): void;
						public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
						public setVisible(param0: boolean, param1: boolean): boolean;
					}
				}
			}
		}
	}
}
