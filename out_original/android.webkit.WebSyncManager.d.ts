/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.webkit.WebViewDatabase.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class WebSyncManager {
			public constructor();
			public constructor(param0: android.content.Context, param1: string);
			public clone(): java.lang.Object;
			public run(): void;
			public sync(): void;
			public resetSync(): void;
			public startSync(): void;
			public stopSync(): void;
			public onSyncInit(): void;
			public static LOGTAG: string;
			public mDataBase: android.webkit.WebViewDatabase;
			public mHandler: android.os.Handler;
		}
	}
}
