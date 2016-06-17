/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.storage.OnObbStateChangeListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export module storage {
			export class StorageManager {
				public mountObb(param0: string, param1: string, param2: android.os.storage.OnObbStateChangeListener): boolean;
				public unmountObb(param0: string, param1: boolean, param2: android.os.storage.OnObbStateChangeListener): boolean;
				public isObbMounted(param0: string): boolean;
				public getMountedObbPath(param0: string): string;
			}
		}
	}
}
