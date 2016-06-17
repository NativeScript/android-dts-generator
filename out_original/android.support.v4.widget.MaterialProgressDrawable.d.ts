/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class MaterialProgressDrawable {
					public constructor();
					public constructor(param0: android.content.Context, param1: android.view.View);
					public updateSizes(param0: number): void;
					public showArrow(param0: boolean): void;
					public setArrowScale(param0: number): void;
					public setStartEndTrim(param0: number, param1: number): void;
					public setProgressRotation(param0: number): void;
					public setBackgroundColor(param0: number): void;
					public setColorSchemeColors(param0: native.Array<number>): void;
					public getIntrinsicHeight(): number;
					public getIntrinsicWidth(): number;
					public draw(param0: android.graphics.Canvas): void;
					public setAlpha(param0: number): void;
					public getAlpha(): number;
					public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public getOpacity(): number;
					public isRunning(): boolean;
					public start(): void;
					public stop(): void;
				}
				export module MaterialProgressDrawable {
					export class ProgressDrawableSize {
					}
					export class Ring {
						public constructor();
						public constructor(param0: android.graphics.drawable.Drawable.Callback);
						public setBackgroundColor(param0: number): void;
						public setArrowDimensions(param0: number, param1: number): void;
						public draw(param0: android.graphics.Canvas, param1: android.graphics.Rect): void;
						public setColors(param0: native.Array<number>): void;
						public setColor(param0: number): void;
						public setColorIndex(param0: number): void;
						public getNextColor(): number;
						public goToNextColor(): void;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public setAlpha(param0: number): void;
						public getAlpha(): number;
						public setStrokeWidth(param0: number): void;
						public getStrokeWidth(): number;
						public setStartTrim(param0: number): void;
						public getStartTrim(): number;
						public getStartingStartTrim(): number;
						public getStartingEndTrim(): number;
						public getStartingColor(): number;
						public setEndTrim(param0: number): void;
						public getEndTrim(): number;
						public setRotation(param0: number): void;
						public getRotation(): number;
						public setInsets(param0: number, param1: number): void;
						public getInsets(): number;
						public setCenterRadius(param0: number): void;
						public getCenterRadius(): number;
						public setShowArrow(param0: boolean): void;
						public setArrowScale(param0: number): void;
						public getStartingRotation(): number;
						public storeOriginals(): void;
						public resetOriginals(): void;
					}
				}
			}
		}
	}
}
