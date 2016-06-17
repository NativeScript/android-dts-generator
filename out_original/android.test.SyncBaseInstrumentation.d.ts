/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class SyncBaseInstrumentation {
			public constructor(param0: string);
			public constructor();
			public setUp(): void;
			public syncProvider(param0: android.net.Uri, param1: string, param2: string): void;
			public cancelSyncsandDisableAutoSync(): void;
		}
	}
}
