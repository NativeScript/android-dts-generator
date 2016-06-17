/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class AvoidXfermode {
			public constructor();
			public constructor(param0: number, param1: number, param2: android.graphics.AvoidXfermode.Mode);
		}
		export module AvoidXfermode {
			export class Mode {
				public static values(): native.Array<android.graphics.AvoidXfermode.Mode>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.AvoidXfermode.Mode;
				public static AVOID: android.graphics.AvoidXfermode.Mode;
				public static TARGET: android.graphics.AvoidXfermode.Mode;
			}
		}
	}
}
