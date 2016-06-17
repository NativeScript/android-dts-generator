/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.NdefMessage.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class NdefFormatable {
				public static get(param0: android.nfc.Tag): android.nfc.tech.NdefFormatable;
				public format(param0: android.nfc.NdefMessage): void;
				public formatReadOnly(param0: android.nfc.NdefMessage): void;
			}
		}
	}
}
