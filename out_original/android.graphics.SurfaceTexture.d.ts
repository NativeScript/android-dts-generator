/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module graphics {
		export class SurfaceTexture {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: boolean);
			public setOnFrameAvailableListener(param0: android.graphics.SurfaceTexture.OnFrameAvailableListener): void;
			public setOnFrameAvailableListener(param0: android.graphics.SurfaceTexture.OnFrameAvailableListener, param1: android.os.Handler): void;
			public setDefaultBufferSize(param0: number, param1: number): void;
			public updateTexImage(): void;
			public releaseTexImage(): void;
			public detachFromGLContext(): void;
			public attachToGLContext(param0: number): void;
			public getTransformMatrix(param0: native.Array<number>): void;
			public getTimestamp(): number;
			public release(): void;
			public finalize(): void;
		}
		export module SurfaceTexture {
			export class OnFrameAvailableListener {
				public onFrameAvailable(param0: android.graphics.SurfaceTexture): void;
			}
			export class OutOfResourcesException {
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
				public constructor(param0: string);
			}
		}
	}
}
