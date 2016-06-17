/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export class Boolean {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: boolean);
			public booleanValue(): boolean;
			public equals(param0: java.lang.Object): boolean;
			public compareTo(param0: java.lang.Boolean): number;
			public static compare(param0: boolean, param1: boolean): number;
			public hashCode(): number;
			public toString(): string;
			public static getBoolean(param0: string): boolean;
			public static parseBoolean(param0: string): boolean;
			public static toString(param0: boolean): string;
			public static valueOf(param0: string): java.lang.Boolean;
			public static valueOf(param0: boolean): java.lang.Boolean;
			public static FALSE: java.lang.Boolean;
			public static TRUE: java.lang.Boolean;
			public static TYPE: java.lang.Class;
		}
	}
}
