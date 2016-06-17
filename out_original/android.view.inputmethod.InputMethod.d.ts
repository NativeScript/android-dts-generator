/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.InputBinding.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSession.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSubtype.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class InputMethod {
				public attachToken(param0: android.os.IBinder): void;
				public bindInput(param0: android.view.inputmethod.InputBinding): void;
				public unbindInput(): void;
				public startInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;
				public restartInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;
				public createSession(param0: android.view.inputmethod.InputMethod.SessionCallback): void;
				public setSessionEnabled(param0: android.view.inputmethod.InputMethodSession, param1: boolean): void;
				public revokeSession(param0: android.view.inputmethod.InputMethodSession): void;
				public showSoftInput(param0: number, param1: android.os.ResultReceiver): void;
				public hideSoftInput(param0: number, param1: android.os.ResultReceiver): void;
				public changeInputMethodSubtype(param0: android.view.inputmethod.InputMethodSubtype): void;
				public static SERVICE_INTERFACE: string;
				public static SERVICE_META_DATA: string;
				public static SHOW_EXPLICIT: number;
				public static SHOW_FORCED: number;
			}
			export module InputMethod {
				export class SessionCallback {
					public sessionCreated(param0: android.view.inputmethod.InputMethodSession): void;
				}
			}
		}
	}
}
