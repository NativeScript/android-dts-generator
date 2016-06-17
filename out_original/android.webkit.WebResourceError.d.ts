/// <reference path="./_helpers.d.ts" />

declare module android {
	export module webkit {
		export class WebResourceError {
			public getErrorCode(): number;
			public getDescription(): string;
		}
	}
}
