/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.webkit.WebMessage.d.ts" />

declare module android {
	export module webkit {
		export class WebMessagePort {
			public postMessage(param0: android.webkit.WebMessage): void;
			public close(): void;
			public setWebMessageCallback(param0: android.webkit.WebMessagePort.WebMessageCallback): void;
			public setWebMessageCallback(param0: android.webkit.WebMessagePort.WebMessageCallback, param1: android.os.Handler): void;
		}
		export module WebMessagePort {
			export class WebMessageCallback {
				public constructor();
				public onMessage(param0: android.webkit.WebMessagePort, param1: android.webkit.WebMessage): void;
			}
		}
	}
}
