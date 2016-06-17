/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.NdefMessage.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class Ndef {
				public static get(param0: android.nfc.Tag): android.nfc.tech.Ndef;
				public getCachedNdefMessage(): android.nfc.NdefMessage;
				public getType(): string;
				public getMaxSize(): number;
				public isWritable(): boolean;
				public getNdefMessage(): android.nfc.NdefMessage;
				public writeNdefMessage(param0: android.nfc.NdefMessage): void;
				public canMakeReadOnly(): boolean;
				public makeReadOnly(): boolean;
				public static MIFARE_CLASSIC: string;
				public static NFC_FORUM_TYPE_1: string;
				public static NFC_FORUM_TYPE_2: string;
				public static NFC_FORUM_TYPE_3: string;
				public static NFC_FORUM_TYPE_4: string;
			}
		}
	}
}
