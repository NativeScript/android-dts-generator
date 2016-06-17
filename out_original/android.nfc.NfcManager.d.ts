/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.NfcAdapter.d.ts" />

declare module android {
	export module nfc {
		export class NfcManager {
			public getDefaultAdapter(): android.nfc.NfcAdapter;
		}
	}
}
