/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.gesture.Gesture.d.ts" />
/// <reference path="./android.gesture.GestureStroke.d.ts" />
/// <reference path="./android.gesture.OrientedBoundingBox.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module gesture {
		export class GestureUtils {
			public static spatialSampling(param0: android.gesture.Gesture, param1: number): native.Array<number>;
			public static spatialSampling(param0: android.gesture.Gesture, param1: number, param2: boolean): native.Array<number>;
			public static temporalSampling(param0: android.gesture.GestureStroke, param1: number): native.Array<number>;
			public static computeOrientedBoundingBox(param0: java.util.ArrayList): android.gesture.OrientedBoundingBox;
			public static computeOrientedBoundingBox(param0: native.Array<number>): android.gesture.OrientedBoundingBox;
		}
	}
}
