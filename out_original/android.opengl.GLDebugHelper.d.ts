/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGL.d.ts" />
/// <reference path="./javax.microedition.khronos.opengles.GL.d.ts" />

declare module android {
	export module opengl {
		export class GLDebugHelper {
			public constructor();
			public static wrap(param0: javax.microedition.khronos.opengles.GL, param1: number, param2: java.io.Writer): javax.microedition.khronos.opengles.GL;
			public static wrap(param0: javax.microedition.khronos.egl.EGL, param1: number, param2: java.io.Writer): javax.microedition.khronos.egl.EGL;
			public static CONFIG_CHECK_GL_ERROR: number;
			public static CONFIG_CHECK_THREAD: number;
			public static CONFIG_LOG_ARGUMENT_NAMES: number;
			public static ERROR_WRONG_THREAD: number;
		}
	}
}
