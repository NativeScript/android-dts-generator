/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module webkit {
		export class WebViewDatabase {
			public constructor();
			public static getInstance(param0: android.content.Context): android.webkit.WebViewDatabase;
			public hasUsernamePassword(): boolean;
			public clearUsernamePassword(): void;
			public hasHttpAuthUsernamePassword(): boolean;
			public clearHttpAuthUsernamePassword(): void;
			public hasFormData(): boolean;
			public clearFormData(): void;
		}
	}
}
