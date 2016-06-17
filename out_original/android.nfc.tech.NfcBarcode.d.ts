/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class NfcBarcode {
				public static get(param0: android.nfc.Tag): android.nfc.tech.NfcBarcode;
				public getType(): number;
				public getBarcode(): native.Array<number>;
				public static TYPE_KOVIO: number;
				public static TYPE_UNKNOWN: number;
			}
		}
	}
}
