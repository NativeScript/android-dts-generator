/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.File.d.ts" />

declare module android {
	export module os {
		export class RecoverySystem {
			public static verifyPackage(param0: java.io.File, param1: android.os.RecoverySystem.ProgressListener, param2: java.io.File): void;
			public static installPackage(param0: android.content.Context, param1: java.io.File): void;
			public static rebootWipeUserData(param0: android.content.Context): void;
			public static rebootWipeCache(param0: android.content.Context): void;
		}
		export module RecoverySystem {
			export class ProgressListener {
				public onProgress(param0: number): void;
			}
		}
	}
}
