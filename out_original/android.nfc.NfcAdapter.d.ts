/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.nfc.NdefMessage.d.ts" />
/// <reference path="./android.nfc.NfcEvent.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />

declare module android {
	export module nfc {
		export class NfcAdapter {
			public static getDefaultAdapter(param0: android.content.Context): android.nfc.NfcAdapter;
			public isEnabled(): boolean;
			public setBeamPushUris(param0: native.Array<android.net.Uri>, param1: android.app.Activity): void;
			public setBeamPushUrisCallback(param0: android.nfc.NfcAdapter.CreateBeamUrisCallback, param1: android.app.Activity): void;
			public setNdefPushMessage(param0: android.nfc.NdefMessage, param1: android.app.Activity, param2: native.Array<android.app.Activity>): void;
			public setNdefPushMessageCallback(param0: android.nfc.NfcAdapter.CreateNdefMessageCallback, param1: android.app.Activity, param2: native.Array<android.app.Activity>): void;
			public setOnNdefPushCompleteCallback(param0: android.nfc.NfcAdapter.OnNdefPushCompleteCallback, param1: android.app.Activity, param2: native.Array<android.app.Activity>): void;
			public enableForegroundDispatch(param0: android.app.Activity, param1: android.app.PendingIntent, param2: native.Array<android.content.IntentFilter>, param3: native.Array<native.Array<string>>): void;
			public disableForegroundDispatch(param0: android.app.Activity): void;
			public enableReaderMode(param0: android.app.Activity, param1: android.nfc.NfcAdapter.ReaderCallback, param2: number, param3: android.os.Bundle): void;
			public disableReaderMode(param0: android.app.Activity): void;
			public invokeBeam(param0: android.app.Activity): boolean;
			public enableForegroundNdefPush(param0: android.app.Activity, param1: android.nfc.NdefMessage): void;
			public disableForegroundNdefPush(param0: android.app.Activity): void;
			public isNdefPushEnabled(): boolean;
			public static ACTION_ADAPTER_STATE_CHANGED: string;
			public static ACTION_NDEF_DISCOVERED: string;
			public static ACTION_TAG_DISCOVERED: string;
			public static ACTION_TECH_DISCOVERED: string;
			public static EXTRA_ADAPTER_STATE: string;
			public static EXTRA_ID: string;
			public static EXTRA_NDEF_MESSAGES: string;
			public static EXTRA_READER_PRESENCE_CHECK_DELAY: string;
			public static EXTRA_TAG: string;
			public static FLAG_READER_NFC_A: number;
			public static FLAG_READER_NFC_B: number;
			public static FLAG_READER_NFC_BARCODE: number;
			public static FLAG_READER_NFC_F: number;
			public static FLAG_READER_NFC_V: number;
			public static FLAG_READER_NO_PLATFORM_SOUNDS: number;
			public static FLAG_READER_SKIP_NDEF_CHECK: number;
			public static STATE_OFF: number;
			public static STATE_ON: number;
			public static STATE_TURNING_OFF: number;
			public static STATE_TURNING_ON: number;
		}
		export module NfcAdapter {
			export class CreateBeamUrisCallback {
				public createBeamUris(param0: android.nfc.NfcEvent): native.Array<android.net.Uri>;
			}
			export class CreateNdefMessageCallback {
				public createNdefMessage(param0: android.nfc.NfcEvent): android.nfc.NdefMessage;
			}
			export class OnNdefPushCompleteCallback {
				public onNdefPushComplete(param0: android.nfc.NfcEvent): void;
			}
			export class ReaderCallback {
				public onTagDiscovered(param0: android.nfc.Tag): void;
			}
		}
	}
}
