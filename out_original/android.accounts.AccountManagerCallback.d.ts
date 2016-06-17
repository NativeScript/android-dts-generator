/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.AccountManagerFuture.d.ts" />

declare module android {
	export module accounts {
		export class AccountManagerCallback {
			public run(param0: android.accounts.AccountManagerFuture): void;
		}
	}
}
