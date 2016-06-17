/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export module params {
				export class TonemapCurve {
					public constructor();
					public constructor(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>);
					public getPointCount(param0: number): number;
					public getPoint(param0: number, param1: number): android.graphics.PointF;
					public copyColorCurve(param0: number, param1: native.Array<number>, param2: number): void;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public toString(): string;
					public static CHANNEL_BLUE: number;
					public static CHANNEL_GREEN: number;
					public static CHANNEL_RED: number;
					public static LEVEL_BLACK: number;
					public static LEVEL_WHITE: number;
					public static POINT_SIZE: number;
				}
			}
		}
	}
}
