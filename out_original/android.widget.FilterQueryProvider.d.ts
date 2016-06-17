/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module widget {
		export class FilterQueryProvider {
			public runQuery(param0: string): android.database.Cursor;
		}
	}
}
