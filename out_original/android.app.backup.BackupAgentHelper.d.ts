/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.backup.BackupDataInput.d.ts" />
/// <reference path="./android.app.backup.BackupDataOutput.d.ts" />
/// <reference path="./android.app.backup.BackupHelper.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export module backup {
			export class BackupAgentHelper {
				public constructor(param0: android.content.Context);
				public constructor();
				public onBackup(param0: android.os.ParcelFileDescriptor, param1: android.app.backup.BackupDataOutput, param2: android.os.ParcelFileDescriptor): void;
				public onRestore(param0: android.app.backup.BackupDataInput, param1: number, param2: android.os.ParcelFileDescriptor): void;
				public addHelper(param0: string, param1: android.app.backup.BackupHelper): void;
			}
		}
	}
}
