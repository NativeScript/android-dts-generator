/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class NfcF {
				public static get(param0: android.nfc.Tag): android.nfc.tech.NfcF;
				public getSystemCode(): native.Array<number>;
				public getManufacturer(): native.Array<number>;
				public transceive(param0: native.Array<number>): native.Array<number>;
				public getMaxTransceiveLength(): number;
				public setTimeout(param0: number): void;
				public getTimeout(): number;
			}
		}
	}
}
