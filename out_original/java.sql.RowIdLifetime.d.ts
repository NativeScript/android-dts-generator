/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module sql {
		export class RowIdLifetime {
			public static values(): native.Array<java.sql.RowIdLifetime>;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static valueOf(param0: string): java.sql.RowIdLifetime;
			public static ROWID_UNSUPPORTED: java.sql.RowIdLifetime;
			public static ROWID_VALID_FOREVER: java.sql.RowIdLifetime;
			public static ROWID_VALID_OTHER: java.sql.RowIdLifetime;
			public static ROWID_VALID_SESSION: java.sql.RowIdLifetime;
			public static ROWID_VALID_TRANSACTION: java.sql.RowIdLifetime;
		}
	}
}
