/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />

declare module android {
	export module database {
		export class ContentObserver {
			public constructor();
			public constructor(param0: android.os.Handler);
			public deliverSelfNotifications(): boolean;
			public onChange(param0: boolean): void;
			public onChange(param0: boolean, param1: android.net.Uri): void;
			public dispatchChange(param0: boolean): void;
			public dispatchChange(param0: boolean, param1: android.net.Uri): void;
		}
	}
}
