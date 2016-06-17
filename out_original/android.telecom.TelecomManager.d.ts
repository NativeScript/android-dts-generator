/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.telecom.PhoneAccount.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telecom {
		export class TelecomManager {
			public getDefaultOutgoingPhoneAccount(param0: string): android.telecom.PhoneAccountHandle;
			public getSimCallManager(): android.telecom.PhoneAccountHandle;
			public getCallCapablePhoneAccounts(): java.util.List;
			public getPhoneAccount(param0: android.telecom.PhoneAccountHandle): android.telecom.PhoneAccount;
			public registerPhoneAccount(param0: android.telecom.PhoneAccount): void;
			public unregisterPhoneAccount(param0: android.telecom.PhoneAccountHandle): void;
			public getDefaultDialerPackage(): string;
			public isVoiceMailNumber(param0: android.telecom.PhoneAccountHandle, param1: string): boolean;
			public getVoiceMailNumber(param0: android.telecom.PhoneAccountHandle): string;
			public getLine1Number(param0: android.telecom.PhoneAccountHandle): string;
			public isInCall(): boolean;
			public silenceRinger(): void;
			public addNewIncomingCall(param0: android.telecom.PhoneAccountHandle, param1: android.os.Bundle): void;
			public handleMmi(param0: string): boolean;
			public handleMmi(param0: string, param1: android.telecom.PhoneAccountHandle): boolean;
			public getAdnUriForPhoneAccount(param0: android.telecom.PhoneAccountHandle): android.net.Uri;
			public cancelMissedCallsNotification(): void;
			public showInCallScreen(param0: boolean): void;
			public placeCall(param0: android.net.Uri, param1: android.os.Bundle): void;
			public static ACTION_CHANGE_DEFAULT_DIALER: string;
			public static ACTION_CHANGE_PHONE_ACCOUNTS: string;
			public static ACTION_CONFIGURE_PHONE_ACCOUNT: string;
			public static ACTION_DEFAULT_DIALER_CHANGED: string;
			public static ACTION_INCOMING_CALL: string;
			public static ACTION_SHOW_CALL_ACCESSIBILITY_SETTINGS: string;
			public static ACTION_SHOW_CALL_SETTINGS: string;
			public static ACTION_SHOW_RESPOND_VIA_SMS_SETTINGS: string;
			public static DTMF_CHARACTER_PAUSE: string;
			public static DTMF_CHARACTER_WAIT: string;
			public static EXTRA_CALL_BACK_NUMBER: string;
			public static EXTRA_CALL_DISCONNECT_CAUSE: string;
			public static EXTRA_CALL_DISCONNECT_MESSAGE: string;
			public static EXTRA_CALL_SUBJECT: string;
			public static EXTRA_CHANGE_DEFAULT_DIALER_PACKAGE_NAME: string;
			public static EXTRA_INCOMING_CALL_ADDRESS: string;
			public static EXTRA_INCOMING_CALL_EXTRAS: string;
			public static EXTRA_OUTGOING_CALL_EXTRAS: string;
			public static EXTRA_PHONE_ACCOUNT_HANDLE: string;
			public static EXTRA_START_CALL_WITH_SPEAKERPHONE: string;
			public static EXTRA_START_CALL_WITH_VIDEO_STATE: string;
			public static GATEWAY_ORIGINAL_ADDRESS: string;
			public static GATEWAY_PROVIDER_PACKAGE: string;
			public static METADATA_IN_CALL_SERVICE_UI: string;
			public static PRESENTATION_ALLOWED: number;
			public static PRESENTATION_PAYPHONE: number;
			public static PRESENTATION_RESTRICTED: number;
			public static PRESENTATION_UNKNOWN: number;
		}
	}
}
