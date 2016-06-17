/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class Shader {
			public constructor();
			public getLocalMatrix(param0: android.graphics.Matrix): boolean;
			public setLocalMatrix(param0: android.graphics.Matrix): void;
			public finalize(): void;
		}
		export module Shader {
			export class TileMode {
				public static values(): native.Array<android.graphics.Shader.TileMode>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Shader.TileMode;
				public static CLAMP: android.graphics.Shader.TileMode;
				public static MIRROR: android.graphics.Shader.TileMode;
				public static REPEAT: android.graphics.Shader.TileMode;
			}
		}
	}
}
