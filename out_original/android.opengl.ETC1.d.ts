/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.Buffer.d.ts" />

declare module android {
	export module opengl {
		export class ETC1 {
			public constructor();
			public static encodeBlock(param0: java.nio.Buffer, param1: number, param2: java.nio.Buffer): void;
			public static decodeBlock(param0: java.nio.Buffer, param1: java.nio.Buffer): void;
			public static getEncodedDataSize(param0: number, param1: number): number;
			public static encodeImage(param0: java.nio.Buffer, param1: number, param2: number, param3: number, param4: number, param5: java.nio.Buffer): void;
			public static decodeImage(param0: java.nio.Buffer, param1: java.nio.Buffer, param2: number, param3: number, param4: number, param5: number): void;
			public static formatHeader(param0: java.nio.Buffer, param1: number, param2: number): void;
			public static isValid(param0: java.nio.Buffer): boolean;
			public static getWidth(param0: java.nio.Buffer): number;
			public static getHeight(param0: java.nio.Buffer): number;
			public static DECODED_BLOCK_SIZE: number;
			public static ENCODED_BLOCK_SIZE: number;
			public static ETC1_RGB8_OES: number;
			public static ETC_PKM_HEADER_SIZE: number;
		}
	}
}
