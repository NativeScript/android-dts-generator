/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module database {
		export class ContentObservable {
			public constructor();
			public registerObserver(param0: java.lang.Object): void;
			public registerObserver(param0: android.database.ContentObserver): void;
			public dispatchChange(param0: boolean): void;
			public dispatchChange(param0: boolean, param1: android.net.Uri): void;
			public notifyChange(param0: boolean): void;
		}
	}
}
