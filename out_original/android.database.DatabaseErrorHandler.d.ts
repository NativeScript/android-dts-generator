/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />

declare module android {
	export module database {
		export class DatabaseErrorHandler {
			public onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;
		}
	}
}
