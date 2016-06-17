/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteCursorDriver.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module database {
		export module sqlite {
			export class SQLiteCursor {
				public constructor();
				public constructor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery);
				public constructor(param0: android.database.sqlite.SQLiteCursorDriver, param1: string, param2: android.database.sqlite.SQLiteQuery);
				public getDatabase(): android.database.sqlite.SQLiteDatabase;
				public onMove(param0: number, param1: number): boolean;
				public getCount(): number;
				public getColumnIndex(param0: string): number;
				public getColumnNames(): native.Array<string>;
				public deactivate(): void;
				public close(): void;
				public requery(): boolean;
				public setWindow(param0: android.database.CursorWindow): void;
				public setSelectionArguments(param0: native.Array<string>): void;
				public finalize(): void;
			}
		}
	}
}
