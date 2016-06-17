/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class NfcV {
				public static get(param0: android.nfc.Tag): android.nfc.tech.NfcV;
				public getResponseFlags(): number;
				public getDsfId(): number;
				public transceive(param0: native.Array<number>): native.Array<number>;
				public getMaxTransceiveLength(): number;
			}
		}
	}
}
