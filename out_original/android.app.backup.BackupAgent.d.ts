/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.backup.BackupDataInput.d.ts" />
/// <reference path="./android.app.backup.BackupDataOutput.d.ts" />
/// <reference path="./android.app.backup.FullBackupDataOutput.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.File.d.ts" />

declare module android {
	export module app {
		export module backup {
			export class BackupAgent {
				public constructor(param0: android.content.Context);
				public constructor();
				public onCreate(): void;
				public onDestroy(): void;
				public onBackup(param0: android.os.ParcelFileDescriptor, param1: android.app.backup.BackupDataOutput, param2: android.os.ParcelFileDescriptor): void;
				public onRestore(param0: android.app.backup.BackupDataInput, param1: number, param2: android.os.ParcelFileDescriptor): void;
				public onFullBackup(param0: android.app.backup.FullBackupDataOutput): void;
				public fullBackupFile(param0: java.io.File, param1: android.app.backup.FullBackupDataOutput): void;
				public onRestoreFile(param0: android.os.ParcelFileDescriptor, param1: number, param2: java.io.File, param3: number, param4: number, param5: number): void;
				public onRestoreFinished(): void;
				public static TYPE_DIRECTORY: number;
				public static TYPE_FILE: number;
			}
		}
	}
}
