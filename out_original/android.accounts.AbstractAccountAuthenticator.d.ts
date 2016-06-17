/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.accounts.AccountAuthenticatorResponse.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module accounts {
		export class AbstractAccountAuthenticator {
			public constructor();
			public constructor(param0: android.content.Context);
			public getIBinder(): android.os.IBinder;
			public editProperties(param0: android.accounts.AccountAuthenticatorResponse, param1: string): android.os.Bundle;
			public addAccount(param0: android.accounts.AccountAuthenticatorResponse, param1: string, param2: string, param3: native.Array<string>, param4: android.os.Bundle): android.os.Bundle;
			public confirmCredentials(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account, param2: android.os.Bundle): android.os.Bundle;
			public getAuthToken(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account, param2: string, param3: android.os.Bundle): android.os.Bundle;
			public getAuthTokenLabel(param0: string): string;
			public updateCredentials(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account, param2: string, param3: android.os.Bundle): android.os.Bundle;
			public hasFeatures(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account, param2: native.Array<string>): android.os.Bundle;
			public getAccountRemovalAllowed(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account): android.os.Bundle;
			public getAccountCredentialsForCloning(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account): android.os.Bundle;
			public addAccountFromCredentials(param0: android.accounts.AccountAuthenticatorResponse, param1: android.accounts.Account, param2: android.os.Bundle): android.os.Bundle;
			public static KEY_CUSTOM_TOKEN_EXPIRY: string;
		}
	}
}
