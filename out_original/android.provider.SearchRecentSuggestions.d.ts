/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module provider {
		export class SearchRecentSuggestions {
			public constructor();
			public constructor(param0: android.content.Context, param1: string, param2: number);
			public saveRecentQuery(param0: string, param1: string): void;
			public clearHistory(): void;
			public truncateHistory(param0: android.content.ContentResolver, param1: number): void;
			public static QUERIES_PROJECTION_1LINE: native.Array<string>;
			public static QUERIES_PROJECTION_2LINE: native.Array<string>;
			public static QUERIES_PROJECTION_DATE_INDEX: number;
			public static QUERIES_PROJECTION_DISPLAY1_INDEX: number;
			public static QUERIES_PROJECTION_DISPLAY2_INDEX: number;
			public static QUERIES_PROJECTION_QUERY_INDEX: number;
		}
	}
}
