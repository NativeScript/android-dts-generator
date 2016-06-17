/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module database {
		export module sqlite {
			export class SQLiteQueryBuilder {
				public constructor();
				public setDistinct(param0: boolean): void;
				public getTables(): string;
				public setTables(param0: string): void;
				public appendWhere(param0: string): void;
				public appendWhereEscapeString(param0: string): void;
				public setProjectionMap(param0: java.util.Map): void;
				public setCursorFactory(param0: android.database.sqlite.SQLiteDatabase.CursorFactory): void;
				public setStrict(param0: boolean): void;
				public static buildQueryString(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string, param7: string): string;
				public static appendColumns(param0: java.lang.StringBuilder, param1: native.Array<string>): void;
				public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): android.database.Cursor;
				public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): android.database.Cursor;
				public query(param0: android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string, param8: android.os.CancellationSignal): android.database.Cursor;
				public buildQuery(param0: native.Array<string>, param1: string, param2: string, param3: string, param4: string, param5: string): string;
				public buildQuery(param0: native.Array<string>, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string): string;
				public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: java.util.Set, param3: number, param4: string, param5: string, param6: string, param7: string): string;
				public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: java.util.Set, param3: number, param4: string, param5: string, param6: native.Array<string>, param7: string, param8: string): string;
				public buildUnionQuery(param0: native.Array<string>, param1: string, param2: string): string;
			}
		}
	}
}
