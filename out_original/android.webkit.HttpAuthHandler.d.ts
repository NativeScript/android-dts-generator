/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class HttpAuthHandler {
			public useHttpAuthUsernamePassword(): boolean;
			public cancel(): void;
			public proceed(param0: string, param1: string): void;
		}
	}
}
