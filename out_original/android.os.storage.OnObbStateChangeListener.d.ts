/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export module storage {
			export class OnObbStateChangeListener {
				public constructor();
				public onObbStateChange(param0: string, param1: number): void;
				public static ERROR_ALREADY_MOUNTED: number;
				public static ERROR_COULD_NOT_MOUNT: number;
				public static ERROR_COULD_NOT_UNMOUNT: number;
				public static ERROR_INTERNAL: number;
				public static ERROR_NOT_MOUNTED: number;
				public static ERROR_PERMISSION_DENIED: number;
				public static MOUNTED: number;
				public static UNMOUNTED: number;
			}
		}
	}
}
