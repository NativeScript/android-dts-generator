/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />

declare module java {
	export module util {
		export class Objects {
			public static compare(param0: java.lang.Object, param1: java.lang.Object, param2: java.util.Comparator): number;
			public static deepEquals(param0: java.lang.Object, param1: java.lang.Object): boolean;
			public equals(param0: java.lang.Object): boolean;
			public static equals(param0: java.lang.Object, param1: java.lang.Object): boolean;
			public static hash(param0: native.Array<java.lang.Object>): number;
			public hashCode(): number;
			public static hashCode(param0: java.lang.Object): number;
			public static requireNonNull(param0: java.lang.Object): java.lang.Object;
			public static requireNonNull(param0: java.lang.Object, param1: string): java.lang.Object;
			public toString(): string;
			public static toString(param0: java.lang.Object): string;
			public static toString(param0: java.lang.Object, param1: string): string;
		}
	}
}
