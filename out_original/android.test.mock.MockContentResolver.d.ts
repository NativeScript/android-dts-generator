/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export module mock {
			export class MockContentResolver {
				public constructor(param0: android.content.Context);
				public constructor();
				public constructor(param0: android.content.Context);
				public addProvider(param0: string, param1: android.content.ContentProvider): void;
				public notifyChange(param0: android.net.Uri, param1: android.database.ContentObserver): void;
				public notifyChange(param0: android.net.Uri, param1: android.database.ContentObserver, param2: boolean): void;
			}
		}
	}
}
