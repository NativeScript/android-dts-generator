/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module lang {
		export class Enum {
			public constructor();
			public constructor(param0: string, param1: number);
			public name(): string;
			public ordinal(): number;
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public clone(): java.lang.Object;
			public compareTo(param0: java.lang.Enum): number;
			public getDeclaringClass(): java.lang.Class;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public finalize(): void;
		}
	}
}
