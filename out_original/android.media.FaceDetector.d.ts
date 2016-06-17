/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />

declare module android {
	export module media {
		export class FaceDetector {
			public constructor();
			public constructor(param0: number, param1: number, param2: number);
			public findFaces(param0: android.graphics.Bitmap, param1: native.Array<android.media.FaceDetector.Face>): number;
			public finalize(): void;
		}
		export module FaceDetector {
			export class Face {
				public confidence(): number;
				public getMidPoint(param0: android.graphics.PointF): void;
				public eyesDistance(): number;
				public pose(param0: number): number;
				public static CONFIDENCE_THRESHOLD: number;
				public static EULER_X: number;
				public static EULER_Y: number;
				public static EULER_Z: number;
			}
		}
	}
}
