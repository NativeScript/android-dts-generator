/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module android {
	export module database {
		export class CursorJoiner {
			public constructor();
			public constructor(param0: android.database.Cursor, param1: native.Array<string>, param2: android.database.Cursor, param3: native.Array<string>);
			public iterator(): java.util.Iterator;
			public hasNext(): boolean;
			public next(): android.database.CursorJoiner.Result;
			public remove(): void;
		}
		export module CursorJoiner {
			export class Result {
				public static values(): native.Array<android.database.CursorJoiner.Result>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.database.CursorJoiner.Result;
				public static BOTH: android.database.CursorJoiner.Result;
				public static LEFT: android.database.CursorJoiner.Result;
				public static RIGHT: android.database.CursorJoiner.Result;
			}
		}
	}
}
