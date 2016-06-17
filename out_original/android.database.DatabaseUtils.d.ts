/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteProgram.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteStatement.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />

declare module android {
	export module database {
		export class DatabaseUtils {
			public constructor();
			public static writeExceptionToParcel(param0: android.os.Parcel, param1: java.lang.Exception): void;
			public static readExceptionFromParcel(param0: android.os.Parcel): void;
			public static readExceptionWithFileNotFoundExceptionFromParcel(param0: android.os.Parcel): void;
			public static readExceptionWithOperationApplicationExceptionFromParcel(param0: android.os.Parcel): void;
			public static bindObjectToProgram(param0: android.database.sqlite.SQLiteProgram, param1: number, param2: java.lang.Object): void;
			public static appendEscapedSQLString(param0: java.lang.StringBuilder, param1: string): void;
			public static sqlEscapeString(param0: string): string;
			public static appendValueToSql(param0: java.lang.StringBuilder, param1: java.lang.Object): void;
			public static concatenateWhere(param0: string, param1: string): string;
			public static getCollationKey(param0: string): string;
			public static getHexCollationKey(param0: string): string;
			public static dumpCursor(param0: android.database.Cursor): void;
			public static dumpCursor(param0: android.database.Cursor, param1: java.io.PrintStream): void;
			public static dumpCursor(param0: android.database.Cursor, param1: java.lang.StringBuilder): void;
			public static dumpCursorToString(param0: android.database.Cursor): string;
			public static dumpCurrentRow(param0: android.database.Cursor): void;
			public static dumpCurrentRow(param0: android.database.Cursor, param1: java.io.PrintStream): void;
			public static dumpCurrentRow(param0: android.database.Cursor, param1: java.lang.StringBuilder): void;
			public static dumpCurrentRowToString(param0: android.database.Cursor): string;
			public static cursorStringToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;
			public static cursorStringToInsertHelper(param0: android.database.Cursor, param1: string, param2: android.database.DatabaseUtils.InsertHelper, param3: number): void;
			public static cursorStringToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;
			public static cursorIntToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;
			public static cursorIntToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;
			public static cursorLongToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;
			public static cursorLongToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;
			public static cursorDoubleToCursorValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues): void;
			public static cursorDoubleToContentValues(param0: android.database.Cursor, param1: string, param2: android.content.ContentValues, param3: string): void;
			public static cursorRowToContentValues(param0: android.database.Cursor, param1: android.content.ContentValues): void;
			public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string): number;
			public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: string): number;
			public static queryNumEntries(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: string, param3: native.Array<string>): number;
			public static longForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): number;
			public static longForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): number;
			public static stringForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): string;
			public static stringForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): string;
			public static blobFileDescriptorForQuery(param0: android.database.sqlite.SQLiteDatabase, param1: string, param2: native.Array<string>): android.os.ParcelFileDescriptor;
			public static blobFileDescriptorForQuery(param0: android.database.sqlite.SQLiteStatement, param1: native.Array<string>): android.os.ParcelFileDescriptor;
			public static cursorStringToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;
			public static cursorLongToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;
			public static cursorShortToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;
			public static cursorIntToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;
			public static cursorFloatToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;
			public static cursorDoubleToContentValuesIfPresent(param0: android.database.Cursor, param1: android.content.ContentValues, param2: string): void;
			public static createDbFromSqlStatements(param0: android.content.Context, param1: string, param2: number, param3: string): void;
			public static getSqlStatementType(param0: string): number;
			public static appendSelectionArgs(param0: native.Array<string>, param1: native.Array<string>): native.Array<string>;
			public static STATEMENT_ABORT: number;
			public static STATEMENT_ATTACH: number;
			public static STATEMENT_BEGIN: number;
			public static STATEMENT_COMMIT: number;
			public static STATEMENT_DDL: number;
			public static STATEMENT_OTHER: number;
			public static STATEMENT_PRAGMA: number;
			public static STATEMENT_SELECT: number;
			public static STATEMENT_UNPREPARED: number;
			public static STATEMENT_UPDATE: number;
		}
		export module DatabaseUtils {
			export class InsertHelper {
				public constructor();
				public constructor(param0: android.database.sqlite.SQLiteDatabase, param1: string);
				public getColumnIndex(param0: string): number;
				public bind(param0: number, param1: number): void;
				public bind(param0: number, param1: number): void;
				public bind(param0: number, param1: number): void;
				public bind(param0: number, param1: number): void;
				public bind(param0: number, param1: boolean): void;
				public bindNull(param0: number): void;
				public bind(param0: number, param1: native.Array<number>): void;
				public bind(param0: number, param1: string): void;
				public insert(param0: android.content.ContentValues): number;
				public execute(): number;
				public prepareForInsert(): void;
				public prepareForReplace(): void;
				public replace(param0: android.content.ContentValues): number;
				public close(): void;
			}
		}
	}
}
