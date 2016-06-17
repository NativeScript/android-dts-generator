/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.webkit.WebViewDatabase.d.ts" />

declare module android {
	export module webkit {
		export class CookieSyncManager {
			public static getInstance(): android.webkit.CookieSyncManager;
			public static createInstance(param0: android.content.Context): android.webkit.CookieSyncManager;
			public sync(): void;
			public syncFromRamToFlash(): void;
			public resetSync(): void;
			public startSync(): void;
			public stopSync(): void;
			public static LOGTAG: string;
			public mDataBase: android.webkit.WebViewDatabase;
			public mHandler: android.os.Handler;
		}
	}
}
