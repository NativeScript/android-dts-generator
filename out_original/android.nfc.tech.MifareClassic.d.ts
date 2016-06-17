/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.nfc.Tag.d.ts" />

declare module android {
	export module nfc {
		export module tech {
			export class MifareClassic {
				public static get(param0: android.nfc.Tag): android.nfc.tech.MifareClassic;
				public getType(): number;
				public getSize(): number;
				public getSectorCount(): number;
				public getBlockCount(): number;
				public getBlockCountInSector(param0: number): number;
				public blockToSector(param0: number): number;
				public sectorToBlock(param0: number): number;
				public authenticateSectorWithKeyA(param0: number, param1: native.Array<number>): boolean;
				public authenticateSectorWithKeyB(param0: number, param1: native.Array<number>): boolean;
				public readBlock(param0: number): native.Array<number>;
				public writeBlock(param0: number, param1: native.Array<number>): void;
				public increment(param0: number, param1: number): void;
				public decrement(param0: number, param1: number): void;
				public transfer(param0: number): void;
				public restore(param0: number): void;
				public transceive(param0: native.Array<number>): native.Array<number>;
				public getMaxTransceiveLength(): number;
				public setTimeout(param0: number): void;
				public getTimeout(): number;
				public static BLOCK_SIZE: number;
				public static KEY_DEFAULT: native.Array<number>;
				public static KEY_MIFARE_APPLICATION_DIRECTORY: native.Array<number>;
				public static KEY_NFC_FORUM: native.Array<number>;
				public static SIZE_1K: number;
				public static SIZE_2K: number;
				public static SIZE_4K: number;
				public static SIZE_MINI: number;
				public static TYPE_CLASSIC: number;
				public static TYPE_PLUS: number;
				public static TYPE_PRO: number;
				public static TYPE_UNKNOWN: number;
			}
		}
	}
}
