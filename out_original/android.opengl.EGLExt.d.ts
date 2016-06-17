/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.opengl.EGLDisplay.d.ts" />
/// <reference path="./android.opengl.EGLSurface.d.ts" />

declare module android {
	export module opengl {
		export class EGLExt {
			public constructor();
			public static eglPresentationTimeANDROID(param0: android.opengl.EGLDisplay, param1: android.opengl.EGLSurface, param2: number): boolean;
			public static EGL_CONTEXT_FLAGS_KHR: number;
			public static EGL_CONTEXT_MAJOR_VERSION_KHR: number;
			public static EGL_CONTEXT_MINOR_VERSION_KHR: number;
			public static EGL_OPENGL_ES3_BIT_KHR: number;
		}
	}
}
