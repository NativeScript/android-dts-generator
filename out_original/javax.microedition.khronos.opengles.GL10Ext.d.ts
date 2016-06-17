/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />

declare module javax {
	export module microedition {
		export module khronos {
			export module opengles {
				export class GL10Ext {
					public glQueryMatrixxOES(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): number;
					public glQueryMatrixxOES(param0: java.nio.IntBuffer, param1: java.nio.IntBuffer): number;
				}
			}
		}
	}
}
