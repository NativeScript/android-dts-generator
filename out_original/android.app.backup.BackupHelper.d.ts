/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.backup.BackupDataInputStream.d.ts" />
/// <reference path="./android.app.backup.BackupDataOutput.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />

declare module android {
	export module app {
		export module backup {
			export class BackupHelper {
				public performBackup(param0: android.os.ParcelFileDescriptor, param1: android.app.backup.BackupDataOutput, param2: android.os.ParcelFileDescriptor): void;
				public restoreEntity(param0: android.app.backup.BackupDataInputStream): void;
				public writeNewStateDescription(param0: android.os.ParcelFileDescriptor): void;
			}
		}
	}
}
