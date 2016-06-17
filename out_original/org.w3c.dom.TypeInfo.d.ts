/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class TypeInfo {
				public getTypeName(): string;
				public getTypeNamespace(): string;
				public isDerivedFrom(param0: string, param1: string, param2: number): boolean;
				public static DERIVATION_EXTENSION: number;
				public static DERIVATION_LIST: number;
				public static DERIVATION_RESTRICTION: number;
				public static DERIVATION_UNION: number;
			}
		}
	}
}
