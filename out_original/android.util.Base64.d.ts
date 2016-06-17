/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class Base64 {
			public static decode(param0: string, param1: number): native.Array<number>;
			public static decode(param0: native.Array<number>, param1: number): native.Array<number>;
			public static decode(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
			public static encodeToString(param0: native.Array<number>, param1: number): string;
			public static encodeToString(param0: native.Array<number>, param1: number, param2: number, param3: number): string;
			public static encode(param0: native.Array<number>, param1: number): native.Array<number>;
			public static encode(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
			public static CRLF: number;
			public static DEFAULT: number;
			public static NO_CLOSE: number;
			public static NO_PADDING: number;
			public static NO_WRAP: number;
			public static URL_SAFE: number;
		}
	}
}
