/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLConfig.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLContext.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLDisplay.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLSurface.d.ts" />

declare module javax {
	export module microedition {
		export module khronos {
			export module egl {
				export class EGL10 {
					public eglChooseConfig(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<number>, param2: native.Array<javax.microedition.khronos.egl.EGLConfig>, param3: number, param4: native.Array<number>): boolean;
					public eglCopyBuffers(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: java.lang.Object): boolean;
					public eglCreateContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: javax.microedition.khronos.egl.EGLContext, param3: native.Array<number>): javax.microedition.khronos.egl.EGLContext;
					public eglCreatePbufferSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;
					public eglCreatePixmapSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: java.lang.Object, param3: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;
					public eglCreateWindowSurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: java.lang.Object, param3: native.Array<number>): javax.microedition.khronos.egl.EGLSurface;
					public eglDestroyContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLContext): boolean;
					public eglDestroySurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface): boolean;
					public eglGetConfigAttrib(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLConfig, param2: number, param3: native.Array<number>): boolean;
					public eglGetConfigs(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<javax.microedition.khronos.egl.EGLConfig>, param2: number, param3: native.Array<number>): boolean;
					public eglGetCurrentContext(): javax.microedition.khronos.egl.EGLContext;
					public eglGetCurrentDisplay(): javax.microedition.khronos.egl.EGLDisplay;
					public eglGetCurrentSurface(param0: number): javax.microedition.khronos.egl.EGLSurface;
					public eglGetDisplay(param0: java.lang.Object): javax.microedition.khronos.egl.EGLDisplay;
					public eglGetError(): number;
					public eglInitialize(param0: javax.microedition.khronos.egl.EGLDisplay, param1: native.Array<number>): boolean;
					public eglMakeCurrent(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: javax.microedition.khronos.egl.EGLSurface, param3: javax.microedition.khronos.egl.EGLContext): boolean;
					public eglQueryContext(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLContext, param2: number, param3: native.Array<number>): boolean;
					public eglQueryString(param0: javax.microedition.khronos.egl.EGLDisplay, param1: number): string;
					public eglQuerySurface(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface, param2: number, param3: native.Array<number>): boolean;
					public eglSwapBuffers(param0: javax.microedition.khronos.egl.EGLDisplay, param1: javax.microedition.khronos.egl.EGLSurface): boolean;
					public eglTerminate(param0: javax.microedition.khronos.egl.EGLDisplay): boolean;
					public eglWaitGL(): boolean;
					public eglWaitNative(param0: number, param1: java.lang.Object): boolean;
					public static EGL_ALPHA_FORMAT: number;
					public static EGL_ALPHA_MASK_SIZE: number;
					public static EGL_ALPHA_SIZE: number;
					public static EGL_BAD_ACCESS: number;
					public static EGL_BAD_ALLOC: number;
					public static EGL_BAD_ATTRIBUTE: number;
					public static EGL_BAD_CONFIG: number;
					public static EGL_BAD_CONTEXT: number;
					public static EGL_BAD_CURRENT_SURFACE: number;
					public static EGL_BAD_DISPLAY: number;
					public static EGL_BAD_MATCH: number;
					public static EGL_BAD_NATIVE_PIXMAP: number;
					public static EGL_BAD_NATIVE_WINDOW: number;
					public static EGL_BAD_PARAMETER: number;
					public static EGL_BAD_SURFACE: number;
					public static EGL_BLUE_SIZE: number;
					public static EGL_BUFFER_SIZE: number;
					public static EGL_COLORSPACE: number;
					public static EGL_COLOR_BUFFER_TYPE: number;
					public static EGL_CONFIG_CAVEAT: number;
					public static EGL_CONFIG_ID: number;
					public static EGL_CORE_NATIVE_ENGINE: number;
					public static EGL_DEFAULT_DISPLAY: java.lang.Object;
					public static EGL_DEPTH_SIZE: number;
					public static EGL_DONT_CARE: number;
					public static EGL_DRAW: number;
					public static EGL_EXTENSIONS: number;
					public static EGL_GREEN_SIZE: number;
					public static EGL_HEIGHT: number;
					public static EGL_HORIZONTAL_RESOLUTION: number;
					public static EGL_LARGEST_PBUFFER: number;
					public static EGL_LEVEL: number;
					public static EGL_LUMINANCE_BUFFER: number;
					public static EGL_LUMINANCE_SIZE: number;
					public static EGL_MAX_PBUFFER_HEIGHT: number;
					public static EGL_MAX_PBUFFER_PIXELS: number;
					public static EGL_MAX_PBUFFER_WIDTH: number;
					public static EGL_NATIVE_RENDERABLE: number;
					public static EGL_NATIVE_VISUAL_ID: number;
					public static EGL_NATIVE_VISUAL_TYPE: number;
					public static EGL_NONE: number;
					public static EGL_NON_CONFORMANT_CONFIG: number;
					public static EGL_NOT_INITIALIZED: number;
					public static EGL_NO_CONTEXT: javax.microedition.khronos.egl.EGLContext;
					public static EGL_NO_DISPLAY: javax.microedition.khronos.egl.EGLDisplay;
					public static EGL_NO_SURFACE: javax.microedition.khronos.egl.EGLSurface;
					public static EGL_PBUFFER_BIT: number;
					public static EGL_PIXEL_ASPECT_RATIO: number;
					public static EGL_PIXMAP_BIT: number;
					public static EGL_READ: number;
					public static EGL_RED_SIZE: number;
					public static EGL_RENDERABLE_TYPE: number;
					public static EGL_RENDER_BUFFER: number;
					public static EGL_RGB_BUFFER: number;
					public static EGL_SAMPLES: number;
					public static EGL_SAMPLE_BUFFERS: number;
					public static EGL_SINGLE_BUFFER: number;
					public static EGL_SLOW_CONFIG: number;
					public static EGL_STENCIL_SIZE: number;
					public static EGL_SUCCESS: number;
					public static EGL_SURFACE_TYPE: number;
					public static EGL_TRANSPARENT_BLUE_VALUE: number;
					public static EGL_TRANSPARENT_GREEN_VALUE: number;
					public static EGL_TRANSPARENT_RED_VALUE: number;
					public static EGL_TRANSPARENT_RGB: number;
					public static EGL_TRANSPARENT_TYPE: number;
					public static EGL_VENDOR: number;
					public static EGL_VERSION: number;
					public static EGL_VERTICAL_RESOLUTION: number;
					public static EGL_WIDTH: number;
					public static EGL_WINDOW_BIT: number;
				}
			}
		}
	}
}
