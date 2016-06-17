/// <reference path="./_helpers.d.ts" />

declare module android {
	export module webkit {
		export class SslErrorHandler {
			public proceed(): void;
			public cancel(): void;
		}
	}
}
