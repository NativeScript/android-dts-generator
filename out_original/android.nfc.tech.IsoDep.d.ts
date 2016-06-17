/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class IsoDep {
				public static get(param0: android.nfc.Tag): android.nfc.tech.IsoDep;
				public setTimeout(param0: number): void;
				public getTimeout(): number;
				public getHistoricalBytes(): native.Array<number>;
				public getHiLayerResponse(): native.Array<number>;
				public transceive(param0: native.Array<number>): native.Array<number>;
				public getMaxTransceiveLength(): number;
				public isExtendedLengthApduSupported(): boolean;
			}
		}
	}
}
