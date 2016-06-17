/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class CursorFilter {
					public convertResultToString(param0: java.lang.Object): string;
					public performFiltering(param0: string): android.widget.Filter.FilterResults;
					public publishResults(param0: string, param1: android.widget.Filter.FilterResults): void;
				}
				export module CursorFilter {
					export class CursorFilterClient {
						public convertToString(param0: android.database.Cursor): string;
						public runQueryOnBackgroundThread(param0: string): android.database.Cursor;
						public getCursor(): android.database.Cursor;
						public changeCursor(param0: android.database.Cursor): void;
					}
				}
			}
		}
	}
}
