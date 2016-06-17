/// <reference path="./_helpers.d.ts" />

declare module android {
	export module opengl {
		export class Visibility {
			public constructor();
			public static visibilityTest(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<string>, param5: number, param6: number): number;
			public static frustumCullSpheres(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: native.Array<number>, param6: number, param7: number): number;
			public static computeBoundingSphere(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: number): void;
		}
	}
}
