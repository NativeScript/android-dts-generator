/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module view {
		export class SurfaceHolder {
			public addCallback(param0: android.view.SurfaceHolder.Callback): void;
			public removeCallback(param0: android.view.SurfaceHolder.Callback): void;
			public isCreating(): boolean;
			public setType(param0: number): void;
			public setFixedSize(param0: number, param1: number): void;
			public setSizeFromLayout(): void;
			public setFormat(param0: number): void;
			public setKeepScreenOn(param0: boolean): void;
			public lockCanvas(): android.graphics.Canvas;
			public lockCanvas(param0: android.graphics.Rect): android.graphics.Canvas;
			public unlockCanvasAndPost(param0: android.graphics.Canvas): void;
			public getSurfaceFrame(): android.graphics.Rect;
			public getSurface(): android.view.Surface;
			public static SURFACE_TYPE_GPU: number;
			public static SURFACE_TYPE_HARDWARE: number;
			public static SURFACE_TYPE_NORMAL: number;
			public static SURFACE_TYPE_PUSH_BUFFERS: number;
		}
		export module SurfaceHolder {
			export class BadSurfaceTypeException {
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
				public constructor(param0: string);
			}
			export class Callback {
				public surfaceCreated(param0: android.view.SurfaceHolder): void;
				public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
				public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
			}
			export class Callback2 {
				public surfaceRedrawNeeded(param0: android.view.SurfaceHolder): void;
			}
		}
	}
}
