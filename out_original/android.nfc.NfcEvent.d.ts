/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.NfcAdapter.d.ts" />

declare module android {
	export module nfc {
		export class NfcEvent {
			public nfcAdapter: android.nfc.NfcAdapter;
			public peerLlcpMajorVersion: number;
			public peerLlcpMinorVersion: number;
		}
	}
}
