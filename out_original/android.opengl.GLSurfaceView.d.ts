/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGL10.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLConfig.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLContext.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLDisplay.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGLSurface.d.ts" />
/// <reference path="./javax.microedition.khronos.opengles.GL.d.ts" />
/// <reference path="./javax.microedition.khronos.opengles.GL10.d.ts" />

declare module android {
	export module opengl {
		export class GLSurfaceView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public finalize(): void;
			public setGLWrapper(param0: android.opengl.GLSurfaceView.GLWrapper): void;
			public setDebugFlags(param0: number): void;
			public getDebugFlags(): number;
			public setPreserveEGLContextOnPause(param0: boolean): void;
			public getPreserveEGLContextOnPause(): boolean;
			public setRenderer(param0: android.opengl.GLSurfaceView.Renderer): void;
			public setEGLContextFactory(param0: android.opengl.GLSurfaceView.EGLContextFactory): void;
			public setEGLWindowSurfaceFactory(param0: android.opengl.GLSurfaceView.EGLWindowSurfaceFactory): void;
			public setEGLConfigChooser(param0: android.opengl.GLSurfaceView.EGLConfigChooser): void;
			public setEGLConfigChooser(param0: boolean): void;
			public setEGLConfigChooser(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public setEGLContextClientVersion(param0: number): void;
			public setRenderMode(param0: number): void;
			public getRenderMode(): number;
			public requestRender(): void;
			public surfaceCreated(param0: android.view.SurfaceHolder): void;
			public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
			public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
			public onPause(): void;
			public onResume(): void;
			public queueEvent(param0: java.lang.Runnable): void;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public static DEBUG_CHECK_GL_ERROR: number;
			public static DEBUG_LOG_GL_CALLS: number;
			public static RENDERMODE_CONTINUOUSLY: number;
			public static RENDERMODE_WHEN_DIRTY: number;
		}
		export module GLSurfaceView {
			export class EGLConfigChooser {
				public chooseConfig(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay): javax.microedition.khronos.egl.EGLConfig;
			}
			export class EGLContextFactory {
				public createContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig): javax.microedition.khronos.egl.EGLContext;
				public destroyContext(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLContext): void;
			}
			export class EGLWindowSurfaceFactory {
				public createWindowSurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLConfig, param3: java.lang.Object): javax.microedition.khronos.egl.EGLSurface;
				public destroySurface(param0: javax.microedition.khronos.egl.EGL10, param1: javax.microedition.khronos.egl.EGLDisplay, param2: javax.microedition.khronos.egl.EGLSurface): void;
			}
			export class GLWrapper {
				public wrap(param0: javax.microedition.khronos.opengles.GL): javax.microedition.khronos.opengles.GL;
			}
			export class Renderer {
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
			}
		}
	}
}
