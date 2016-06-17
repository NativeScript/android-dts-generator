/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.accounts.AccountManagerCallback.d.ts" />
/// <reference path="./android.accounts.AccountManagerFuture.d.ts" />
/// <reference path="./android.accounts.AuthenticatorDescription.d.ts" />
/// <reference path="./android.accounts.OnAccountsUpdateListener.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module accounts {
		export class AccountManager {
			public static get(param0: android.content.Context): android.accounts.AccountManager;
			public getPassword(param0: android.accounts.Account): string;
			public getUserData(param0: android.accounts.Account, param1: string): string;
			public getAuthenticatorTypes(): native.Array<android.accounts.AuthenticatorDescription>;
			public getAccounts(): native.Array<android.accounts.Account>;
			public getAccountsByTypeForPackage(param0: string, param1: string): native.Array<android.accounts.Account>;
			public getAccountsByType(param0: string): native.Array<android.accounts.Account>;
			public hasFeatures(param0: android.accounts.Account, param1: native.Array<string>, param2: android.accounts.AccountManagerCallback, param3: android.os.Handler): android.accounts.AccountManagerFuture;
			public getAccountsByTypeAndFeatures(param0: string, param1: native.Array<string>, param2: android.accounts.AccountManagerCallback, param3: android.os.Handler): android.accounts.AccountManagerFuture;
			public addAccountExplicitly(param0: android.accounts.Account, param1: string, param2: android.os.Bundle): boolean;
			public notifyAccountAuthenticated(param0: android.accounts.Account): boolean;
			public renameAccount(param0: android.accounts.Account, param1: string, param2: android.accounts.AccountManagerCallback, param3: android.os.Handler): android.accounts.AccountManagerFuture;
			public getPreviousName(param0: android.accounts.Account): string;
			public removeAccount(param0: android.accounts.Account, param1: android.accounts.AccountManagerCallback, param2: android.os.Handler): android.accounts.AccountManagerFuture;
			public removeAccount(param0: android.accounts.Account, param1: android.app.Activity, param2: android.accounts.AccountManagerCallback, param3: android.os.Handler): android.accounts.AccountManagerFuture;
			public removeAccountExplicitly(param0: android.accounts.Account): boolean;
			public invalidateAuthToken(param0: string, param1: string): void;
			public peekAuthToken(param0: android.accounts.Account, param1: string): string;
			public setPassword(param0: android.accounts.Account, param1: string): void;
			public clearPassword(param0: android.accounts.Account): void;
			public setUserData(param0: android.accounts.Account, param1: string, param2: string): void;
			public setAuthToken(param0: android.accounts.Account, param1: string, param2: string): void;
			public blockingGetAuthToken(param0: android.accounts.Account, param1: string, param2: boolean): string;
			public getAuthToken(param0: android.accounts.Account, param1: string, param2: android.os.Bundle, param3: android.app.Activity, param4: android.accounts.AccountManagerCallback, param5: android.os.Handler): android.accounts.AccountManagerFuture;
			public getAuthToken(param0: android.accounts.Account, param1: string, param2: boolean, param3: android.accounts.AccountManagerCallback, param4: android.os.Handler): android.accounts.AccountManagerFuture;
			public getAuthToken(param0: android.accounts.Account, param1: string, param2: android.os.Bundle, param3: boolean, param4: android.accounts.AccountManagerCallback, param5: android.os.Handler): android.accounts.AccountManagerFuture;
			public addAccount(param0: string, param1: string, param2: native.Array<string>, param3: android.os.Bundle, param4: android.app.Activity, param5: android.accounts.AccountManagerCallback, param6: android.os.Handler): android.accounts.AccountManagerFuture;
			public confirmCredentials(param0: android.accounts.Account, param1: android.os.Bundle, param2: android.app.Activity, param3: android.accounts.AccountManagerCallback, param4: android.os.Handler): android.accounts.AccountManagerFuture;
			public updateCredentials(param0: android.accounts.Account, param1: string, param2: android.os.Bundle, param3: android.app.Activity, param4: android.accounts.AccountManagerCallback, param5: android.os.Handler): android.accounts.AccountManagerFuture;
			public editProperties(param0: string, param1: android.app.Activity, param2: android.accounts.AccountManagerCallback, param3: android.os.Handler): android.accounts.AccountManagerFuture;
			public getAuthTokenByFeatures(param0: string, param1: string, param2: native.Array<string>, param3: android.app.Activity, param4: android.os.Bundle, param5: android.os.Bundle, param6: android.accounts.AccountManagerCallback, param7: android.os.Handler): android.accounts.AccountManagerFuture;
			public static newChooseAccountIntent(param0: android.accounts.Account, param1: java.util.ArrayList, param2: native.Array<string>, param3: boolean, param4: string, param5: string, param6: native.Array<string>, param7: android.os.Bundle): android.content.Intent;
			public static newChooseAccountIntent(param0: android.accounts.Account, param1: java.util.List, param2: native.Array<string>, param3: string, param4: string, param5: native.Array<string>, param6: android.os.Bundle): android.content.Intent;
			public addOnAccountsUpdatedListener(param0: android.accounts.OnAccountsUpdateListener, param1: android.os.Handler, param2: boolean): void;
			public removeOnAccountsUpdatedListener(param0: android.accounts.OnAccountsUpdateListener): void;
			public static ACTION_AUTHENTICATOR_INTENT: string;
			public static AUTHENTICATOR_ATTRIBUTES_NAME: string;
			public static AUTHENTICATOR_META_DATA_NAME: string;
			public static ERROR_CODE_BAD_ARGUMENTS: number;
			public static ERROR_CODE_BAD_AUTHENTICATION: number;
			public static ERROR_CODE_BAD_REQUEST: number;
			public static ERROR_CODE_CANCELED: number;
			public static ERROR_CODE_INVALID_RESPONSE: number;
			public static ERROR_CODE_NETWORK_ERROR: number;
			public static ERROR_CODE_REMOTE_EXCEPTION: number;
			public static ERROR_CODE_UNSUPPORTED_OPERATION: number;
			public static KEY_ACCOUNTS: string;
			public static KEY_ACCOUNT_AUTHENTICATOR_RESPONSE: string;
			public static KEY_ACCOUNT_MANAGER_RESPONSE: string;
			public static KEY_ACCOUNT_NAME: string;
			public static KEY_ACCOUNT_TYPE: string;
			public static KEY_ANDROID_PACKAGE_NAME: string;
			public static KEY_AUTHENTICATOR_TYPES: string;
			public static KEY_AUTHTOKEN: string;
			public static KEY_AUTH_FAILED_MESSAGE: string;
			public static KEY_AUTH_TOKEN_LABEL: string;
			public static KEY_BOOLEAN_RESULT: string;
			public static KEY_CALLER_PID: string;
			public static KEY_CALLER_UID: string;
			public static KEY_ERROR_CODE: string;
			public static KEY_ERROR_MESSAGE: string;
			public static KEY_INTENT: string;
			public static KEY_LAST_AUTHENTICATED_TIME: string;
			public static KEY_PASSWORD: string;
			public static KEY_USERDATA: string;
			public static LOGIN_ACCOUNTS_CHANGED_ACTION: string;
		}
	}
}
