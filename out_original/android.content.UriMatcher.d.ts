/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class UriMatcher {
			public constructor();
			public constructor(param0: number);
			public addURI(param0: string, param1: string, param2: number): void;
			public match(param0: android.net.Uri): number;
			public static NO_MATCH: number;
		}
	}
}
