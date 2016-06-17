/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />

declare module android {
	export module opengl {
		export class GLES10Ext {
			public constructor();
			public static glQueryMatrixxOES(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): number;
			public static glQueryMatrixxOES(param0: java.nio.IntBuffer, param1: java.nio.IntBuffer): number;
		}
	}
}
