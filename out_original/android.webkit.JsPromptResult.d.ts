/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class JsPromptResult {
			public confirm(): void;
			public confirm(param0: string): void;
		}
	}
}
