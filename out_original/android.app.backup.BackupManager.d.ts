/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.backup.RestoreObserver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export module backup {
			export class BackupManager {
				public constructor();
				public constructor(param0: android.content.Context);
				public dataChanged(): void;
				public static dataChanged(param0: string): void;
				public requestRestore(param0: android.app.backup.RestoreObserver): number;
			}
		}
	}
}
