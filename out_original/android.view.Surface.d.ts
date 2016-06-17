/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.SurfaceTexture.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module view {
		export class Surface {
			public constructor();
			public constructor(param0: android.graphics.SurfaceTexture);
			public finalize(): void;
			public release(): void;
			public isValid(): boolean;
			public lockCanvas(param0: android.graphics.Rect): android.graphics.Canvas;
			public unlockCanvasAndPost(param0: android.graphics.Canvas): void;
			public lockHardwareCanvas(): android.graphics.Canvas;
			public unlockCanvas(param0: android.graphics.Canvas): void;
			public describeContents(): number;
			public readFromParcel(param0: android.os.Parcel): void;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static ROTATION_0: number;
			public static ROTATION_180: number;
			public static ROTATION_270: number;
			public static ROTATION_90: number;
		}
		export module Surface {
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
