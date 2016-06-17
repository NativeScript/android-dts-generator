/// <reference path="./_helpers.d.ts" />

declare module android {
	export module opengl {
		export class Matrix {
			public constructor();
			public static multiplyMM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): void;
			public static multiplyMV(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: native.Array<number>, param5: number): void;
			public static transposeM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): void;
			public static invertM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): boolean;
			public static orthoM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public static frustumM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public static perspectiveM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public static length(param0: number, param1: number, param2: number): number;
			public static setIdentityM(param0: native.Array<number>, param1: number): void;
			public static scaleM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number): void;
			public static scaleM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): void;
			public static translateM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number): void;
			public static translateM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): void;
			public static rotateM(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: number, param6: number, param7: number): void;
			public static rotateM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public static setRotateM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public static setRotateEulerM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): void;
			public static setLookAtM(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): void;
		}
	}
}
