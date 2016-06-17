/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class SearchRecentSuggestionsProvider {
			public constructor();
			public setupSuggestions(param0: string, param1: number): void;
			public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;
			public getType(param0: android.net.Uri): string;
			public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
			public onCreate(): boolean;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
			public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public static DATABASE_MODE_2LINES: number;
			public static DATABASE_MODE_QUERIES: number;
		}
	}
}
