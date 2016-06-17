/// <reference path="./_helpers.d.ts" />

declare module android {
	export module webkit {
		export class JsResult {
			public cancel(): void;
			public confirm(): void;
		}
	}
}
