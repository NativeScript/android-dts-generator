/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />
/// <reference path="./java.nio.ShortBuffer.d.ts" />

declare module javax {
	export module microedition {
		export module khronos {
			export module opengles {
				export class GL11Ext {
					public glTexParameterfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
					public glCurrentPaletteMatrixOES(param0: number): void;
					public glDrawTexfOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public glDrawTexfvOES(param0: native.Array<number>, param1: number): void;
					public glDrawTexfvOES(param0: java.nio.FloatBuffer): void;
					public glDrawTexiOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public glDrawTexivOES(param0: native.Array<number>, param1: number): void;
					public glDrawTexivOES(param0: java.nio.IntBuffer): void;
					public glDrawTexsOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public glDrawTexsvOES(param0: native.Array<number>, param1: number): void;
					public glDrawTexsvOES(param0: java.nio.ShortBuffer): void;
					public glDrawTexxOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public glDrawTexxvOES(param0: native.Array<number>, param1: number): void;
					public glDrawTexxvOES(param0: java.nio.IntBuffer): void;
					public glEnable(param0: number): void;
					public glEnableClientState(param0: number): void;
					public glLoadPaletteFromModelViewMatrixOES(): void;
					public glMatrixIndexPointerOES(param0: number, param1: number, param2: number, param3: java.nio.Buffer): void;
					public glMatrixIndexPointerOES(param0: number, param1: number, param2: number, param3: number): void;
					public glWeightPointerOES(param0: number, param1: number, param2: number, param3: java.nio.Buffer): void;
					public glWeightPointerOES(param0: number, param1: number, param2: number, param3: number): void;
					public static GL_MATRIX_INDEX_ARRAY_BUFFER_BINDING_OES: number;
					public static GL_MATRIX_INDEX_ARRAY_OES: number;
					public static GL_MATRIX_INDEX_ARRAY_POINTER_OES: number;
					public static GL_MATRIX_INDEX_ARRAY_SIZE_OES: number;
					public static GL_MATRIX_INDEX_ARRAY_STRIDE_OES: number;
					public static GL_MATRIX_INDEX_ARRAY_TYPE_OES: number;
					public static GL_MATRIX_PALETTE_OES: number;
					public static GL_MAX_PALETTE_MATRICES_OES: number;
					public static GL_MAX_VERTEX_UNITS_OES: number;
					public static GL_TEXTURE_CROP_RECT_OES: number;
					public static GL_WEIGHT_ARRAY_BUFFER_BINDING_OES: number;
					public static GL_WEIGHT_ARRAY_OES: number;
					public static GL_WEIGHT_ARRAY_POINTER_OES: number;
					public static GL_WEIGHT_ARRAY_SIZE_OES: number;
					public static GL_WEIGHT_ARRAY_STRIDE_OES: number;
					public static GL_WEIGHT_ARRAY_TYPE_OES: number;
				}
			}
		}
	}
}
