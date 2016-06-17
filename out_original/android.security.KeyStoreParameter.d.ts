/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module security {
		export class KeyStoreParameter {
			public isEncryptionRequired(): boolean;
		}
		export module KeyStoreParameter {
			export class Builder {
				public constructor();
				public constructor(param0: android.content.Context);
				public setEncryptionRequired(param0: boolean): android.security.KeyStoreParameter.Builder;
				public build(): android.security.KeyStoreParameter;
			}
		}
	}
}
