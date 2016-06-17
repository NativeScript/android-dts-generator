/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.microedition.khronos.opengles.GL10.d.ts" />

declare module android {
	export module opengl {
		export class GLU {
			public constructor();
			public static gluErrorString(param0: number): string;
			public static gluLookAt(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
			public static gluOrtho2D(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number, param3: number, param4: number): void;
			public static gluPerspective(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number, param3: number, param4: number): void;
			public static gluProject(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>, param10: number): number;
			public static gluUnProject(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number, param5: native.Array<number>, param6: number, param7: native.Array<number>, param8: number, param9: native.Array<number>, param10: number): number;
		}
	}
}
