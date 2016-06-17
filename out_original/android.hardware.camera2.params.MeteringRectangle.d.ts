/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export module params {
				export class MeteringRectangle {
					public constructor();
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
					public constructor(param0: android.graphics.Point, param1: android.util.Size, param2: number);
					public constructor(param0: android.graphics.Rect, param1: number);
					public getX(): number;
					public getY(): number;
					public getWidth(): number;
					public getHeight(): number;
					public getMeteringWeight(): number;
					public getUpperLeftPoint(): android.graphics.Point;
					public getSize(): android.util.Size;
					public getRect(): android.graphics.Rect;
					public equals(param0: java.lang.Object): boolean;
					public equals(param0: android.hardware.camera2.params.MeteringRectangle): boolean;
					public hashCode(): number;
					public toString(): string;
					public static METERING_WEIGHT_DONT_CARE: number;
					public static METERING_WEIGHT_MAX: number;
					public static METERING_WEIGHT_MIN: number;
				}
			}
		}
	}
}
