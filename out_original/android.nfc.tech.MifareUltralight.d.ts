/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class MifareUltralight {
				public static get(param0: android.nfc.Tag): android.nfc.tech.MifareUltralight;
				public getType(): number;
				public readPages(param0: number): native.Array<number>;
				public writePage(param0: number, param1: native.Array<number>): void;
				public transceive(param0: native.Array<number>): native.Array<number>;
				public getMaxTransceiveLength(): number;
				public setTimeout(param0: number): void;
				public getTimeout(): number;
				public static PAGE_SIZE: number;
				public static TYPE_ULTRALIGHT: number;
				public static TYPE_ULTRALIGHT_C: number;
				public static TYPE_UNKNOWN: number;
			}
		}
	}
}
