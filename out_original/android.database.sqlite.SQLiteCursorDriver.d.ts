/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />

declare module android {
	export module database {
		export module sqlite {
			export class SQLiteCursorDriver {
				public query(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<string>): android.database.Cursor;
				public cursorDeactivated(): void;
				public cursorRequeried(param0: android.database.Cursor): void;
				public cursorClosed(): void;
				public setBindArguments(param0: native.Array<string>): void;
			}
		}
	}
}
