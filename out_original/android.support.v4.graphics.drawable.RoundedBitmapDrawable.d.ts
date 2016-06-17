/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class RoundedBitmapDrawable {
						public getPaint(): android.graphics.Paint;
						public getBitmap(): android.graphics.Bitmap;
						public setTargetDensity(param0: android.graphics.Canvas): void;
						public setTargetDensity(param0: android.util.DisplayMetrics): void;
						public setTargetDensity(param0: number): void;
						public getGravity(): number;
						public setGravity(param0: number): void;
						public setMipMap(param0: boolean): void;
						public hasMipMap(): boolean;
						public setAntiAlias(param0: boolean): void;
						public hasAntiAlias(): boolean;
						public setFilterBitmap(param0: boolean): void;
						public setDither(param0: boolean): void;
						public draw(param0: android.graphics.Canvas): void;
						public setAlpha(param0: number): void;
						public getAlpha(): number;
						public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public getColorFilter(): android.graphics.ColorFilter;
						public setCircular(param0: boolean): void;
						public isCircular(): boolean;
						public setCornerRadius(param0: number): void;
						public onBoundsChange(param0: android.graphics.Rect): void;
						public getCornerRadius(): number;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public getOpacity(): number;
					}
				}
			}
		}
	}
}
