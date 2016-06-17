/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class NfcB {
				public static get(param0: android.nfc.Tag): android.nfc.tech.NfcB;
				public getApplicationData(): native.Array<number>;
				public getProtocolInfo(): native.Array<number>;
				public transceive(param0: native.Array<number>): native.Array<number>;
				public getMaxTransceiveLength(): number;
			}
		}
	}
}
