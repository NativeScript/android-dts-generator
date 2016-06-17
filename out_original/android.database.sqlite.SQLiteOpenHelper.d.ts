/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module database {
		export module sqlite {
			export class SQLiteOpenHelper {
				public constructor();
				public constructor(param0: android.content.Context, param1: string, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);
				public constructor(param0: android.content.Context, param1: string, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: number, param4: android.database.DatabaseErrorHandler);
				public getDatabaseName(): string;
				public setWriteAheadLoggingEnabled(param0: boolean): void;
				public getWritableDatabase(): android.database.sqlite.SQLiteDatabase;
				public getReadableDatabase(): android.database.sqlite.SQLiteDatabase;
				public close(): void;
				public onConfigure(param0: android.database.sqlite.SQLiteDatabase): void;
				public onCreate(param0: android.database.sqlite.SQLiteDatabase): void;
				public onUpgrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public onDowngrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public onOpen(param0: android.database.sqlite.SQLiteDatabase): void;
			}
		}
	}
}
