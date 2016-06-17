/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module graphics {
				export module drawable {
					export class DrawerArrowDrawable {
						public constructor();
						public constructor(param0: android.content.Context);
						public setArrowHeadLength(param0: number): void;
						public getArrowHeadLength(): number;
						public setArrowShaftLength(param0: number): void;
						public getArrowShaftLength(): number;
						public getBarLength(): number;
						public setBarLength(param0: number): void;
						public setColor(param0: number): void;
						public getColor(): number;
						public setBarThickness(param0: number): void;
						public getBarThickness(): number;
						public getGapSize(): number;
						public setGapSize(param0: number): void;
						public setDirection(param0: number): void;
						public isSpinEnabled(): boolean;
						public setSpinEnabled(param0: boolean): void;
						public getDirection(): number;
						public setVerticalMirror(param0: boolean): void;
						public draw(param0: android.graphics.Canvas): void;
						public setAlpha(param0: number): void;
						public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public getIntrinsicHeight(): number;
						public getIntrinsicWidth(): number;
						public getOpacity(): number;
						public getProgress(): number;
						public setProgress(param0: number): void;
						public getPaint(): android.graphics.Paint;
						public static ARROW_DIRECTION_LEFT: number;
						public static ARROW_DIRECTION_RIGHT: number;
						public static ARROW_DIRECTION_START: number;
						public static ARROW_DIRECTION_END: number;
					}
					export module DrawerArrowDrawable {
						export class ArrowDirection {
						}
					}
				}
			}
		}
	}
}
