/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />

declare module android {
	export module opengl {
		export class GLUtils {
			public static getInternalFormat(param0: android.graphics.Bitmap): number;
			public static getType(param0: android.graphics.Bitmap): number;
			public static texImage2D(param0: number, param1: number, param2: number, param3: android.graphics.Bitmap, param4: number): void;
			public static texImage2D(param0: number, param1: number, param2: number, param3: android.graphics.Bitmap, param4: number, param5: number): void;
			public static texImage2D(param0: number, param1: number, param2: android.graphics.Bitmap, param3: number): void;
			public static texSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Bitmap): void;
			public static texSubImage2D(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Bitmap, param5: number, param6: number): void;
			public static getEGLErrorString(param0: number): string;
		}
	}
}
