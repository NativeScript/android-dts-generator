/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module hardware {
		export module camera2 {
			export class CameraAccessException {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Exception);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: number);
				public constructor(param0: number, param1: string);
				public constructor(param0: number, param1: string, param2: java.lang.Throwable);
				public constructor(param0: number, param1: java.lang.Throwable);
				public getReason(): number;
				public static CAMERA_DISABLED: number;
				public static CAMERA_DISCONNECTED: number;
				public static CAMERA_ERROR: number;
				public static CAMERA_IN_USE: number;
				public static MAX_CAMERAS_IN_USE: number;
			}
		}
	}
}
