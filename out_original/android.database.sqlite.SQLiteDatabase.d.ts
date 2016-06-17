/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteCursorDriver.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteQuery.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteStatement.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteTransactionListener.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module database {
		export module sqlite {
			export class SQLiteDatabase {
				public finalize(): void;
				public onAllReferencesReleased(): void;
				public static releaseMemory(): number;
				public setLockingEnabled(param0: boolean): void;
				public beginTransaction(): void;
				public beginTransactionNonExclusive(): void;
				public beginTransactionWithListener(param0: android.database.sqlite.SQLiteTransactionListener): void;
				public beginTransactionWithListenerNonExclusive(param0: android.database.sqlite.SQLiteTransactionListener): void;
				public endTransaction(): void;
				public setTransactionSuccessful(): void;
				public inTransaction(): boolean;
				public isDbLockedByCurrentThread(): boolean;
				public isDbLockedByOtherThreads(): boolean;
				public yieldIfContended(): boolean;
				public yieldIfContendedSafely(): boolean;
				public yieldIfContendedSafely(param0: number): boolean;
				public getSyncedTables(): java.util.Map;
				public static openDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: number): android.database.sqlite.SQLiteDatabase;
				public static openDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: number, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;
				public static openOrCreateDatabase(param0: java.io.File, param1: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;
				public static openOrCreateDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;
				public static openOrCreateDatabase(param0: string, param1: android.database.sqlite.SQLiteDatabase.CursorFactory, param2: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;
				public static deleteDatabase(param0: java.io.File): boolean;
				public static create(param0: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;
				public getVersion(): number;
				public setVersion(param0: number): void;
				public getMaximumSize(): number;
				public setMaximumSize(param0: number): number;
				public getPageSize(): number;
				public setPageSize(param0: number): void;
				public markTableSyncable(param0: string, param1: string): void;
				public markTableSyncable(param0: string, param1: string, param2: string): void;
				public static findEditTable(param0: string): string;
				public compileStatement(param0: string): android.database.sqlite.SQLiteStatement;
				public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: string): android.database.Cursor;
				public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: string, param7: string, param8: string, param9: android.os.CancellationSignal): android.database.Cursor;
				public queryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: string, param8: string, param9: string): android.database.Cursor;
				public queryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string, param7: string, param8: string, param9: string, param10: android.os.CancellationSignal): android.database.Cursor;
				public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): android.database.Cursor;
				public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): android.database.Cursor;
				public rawQuery(param0: string, param1: native.Array<string>): android.database.Cursor;
				public rawQuery(param0: string, param1: native.Array<string>, param2: android.os.CancellationSignal): android.database.Cursor;
				public rawQueryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<string>, param3: string): android.database.Cursor;
				public rawQueryWithFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<string>, param3: string, param4: android.os.CancellationSignal): android.database.Cursor;
				public insert(param0: string, param1: string, param2: android.content.ContentValues): number;
				public insertOrThrow(param0: string, param1: string, param2: android.content.ContentValues): number;
				public replace(param0: string, param1: string, param2: android.content.ContentValues): number;
				public replaceOrThrow(param0: string, param1: string, param2: android.content.ContentValues): number;
				public insertWithOnConflict(param0: string, param1: string, param2: android.content.ContentValues, param3: number): number;
				public delete(param0: string, param1: string, param2: native.Array<string>): number;
				public update(param0: string, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;
				public updateWithOnConflict(param0: string, param1: android.content.ContentValues, param2: string, param3: native.Array<string>, param4: number): number;
				public execSQL(param0: string): void;
				public execSQL(param0: string, param1: native.Array<java.lang.Object>): void;
				public isReadOnly(): boolean;
				public isOpen(): boolean;
				public needUpgrade(param0: number): boolean;
				public getPath(): string;
				public setLocale(param0: java.util.Locale): void;
				public setMaxSqlCacheSize(param0: number): void;
				public setForeignKeyConstraintsEnabled(param0: boolean): void;
				public enableWriteAheadLogging(): boolean;
				public disableWriteAheadLogging(): void;
				public isWriteAheadLoggingEnabled(): boolean;
				public getAttachedDbs(): java.util.List;
				public isDatabaseIntegrityOk(): boolean;
				public toString(): string;
				public static CONFLICT_ABORT: number;
				public static CONFLICT_FAIL: number;
				public static CONFLICT_IGNORE: number;
				public static CONFLICT_NONE: number;
				public static CONFLICT_REPLACE: number;
				public static CONFLICT_ROLLBACK: number;
				public static CREATE_IF_NECESSARY: number;
				public static ENABLE_WRITE_AHEAD_LOGGING: number;
				public static MAX_SQL_CACHE_SIZE: number;
				public static NO_LOCALIZED_COLLATORS: number;
				public static OPEN_READONLY: number;
				public static OPEN_READWRITE: number;
				public static SQLITE_MAX_LIKE_PATTERN_LENGTH: number;
			}
			export module SQLiteDatabase {
				export class CursorFactory {
					public newCursor(param0: android.database.sqlite.SQLiteDatabase, param1: android.database.sqlite.SQLiteCursorDriver, param2: string, param3: android.database.sqlite.SQLiteQuery): android.database.Cursor;
				}
			}
		}
	}
}
