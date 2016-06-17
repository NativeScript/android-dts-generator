/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.gesture.GestureLibrary.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module gesture {
		export class GestureLibraries {
			public static fromFile(param0: string): android.gesture.GestureLibrary;
			public static fromFile(param0: java.io.File): android.gesture.GestureLibrary;
			public static fromPrivateFile(param0: android.content.Context, param1: string): android.gesture.GestureLibrary;
			public static fromRawResource(param0: android.content.Context, param1: number): android.gesture.GestureLibrary;
		}
	}
}
