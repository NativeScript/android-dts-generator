/// <reference path="./_helpers.d.ts" />

declare module java {
	export module nio {
		export class ByteOrder {
			public static nativeOrder(): java.nio.ByteOrder;
			public toString(): string;
			public static BIG_ENDIAN: java.nio.ByteOrder;
			public static LITTLE_ENDIAN: java.nio.ByteOrder;
		}
	}
}
