/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />

declare module android {
	export module app {
		export module backup {
			export class FileBackupHelperBase {
				public finalize(): void;
				public writeNewStateDescription(param0: android.os.ParcelFileDescriptor): void;
			}
		}
	}
}
