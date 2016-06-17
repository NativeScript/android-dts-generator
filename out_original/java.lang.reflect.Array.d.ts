/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class Array {
				public static get(param0: java.lang.Object, param1: number): java.lang.Object;
				public static getBoolean(param0: java.lang.Object, param1: number): boolean;
				public static getByte(param0: java.lang.Object, param1: number): number;
				public static getChar(param0: java.lang.Object, param1: number): string;
				public static getDouble(param0: java.lang.Object, param1: number): number;
				public static getFloat(param0: java.lang.Object, param1: number): number;
				public static getInt(param0: java.lang.Object, param1: number): number;
				public static getLength(param0: java.lang.Object): number;
				public static getLong(param0: java.lang.Object, param1: number): number;
				public static getShort(param0: java.lang.Object, param1: number): number;
				public static newInstance(param0: java.lang.Class, param1: native.Array<number>): java.lang.Object;
				public static newInstance(param0: java.lang.Class, param1: number): java.lang.Object;
				public static set(param0: java.lang.Object, param1: number, param2: java.lang.Object): void;
				public static setBoolean(param0: java.lang.Object, param1: number, param2: boolean): void;
				public static setByte(param0: java.lang.Object, param1: number, param2: number): void;
				public static setChar(param0: java.lang.Object, param1: number, param2: string): void;
				public static setDouble(param0: java.lang.Object, param1: number, param2: number): void;
				public static setFloat(param0: java.lang.Object, param1: number, param2: number): void;
				public static setInt(param0: java.lang.Object, param1: number, param2: number): void;
				public static setLong(param0: java.lang.Object, param1: number, param2: number): void;
				public static setShort(param0: java.lang.Object, param1: number, param2: number): void;
			}
		}
	}
}
