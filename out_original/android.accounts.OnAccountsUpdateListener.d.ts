/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.Account.d.ts" />

declare module android {
	export module accounts {
		export class OnAccountsUpdateListener {
			public onAccountsUpdated(param0: native.Array<android.accounts.Account>): void;
		}
	}
}
