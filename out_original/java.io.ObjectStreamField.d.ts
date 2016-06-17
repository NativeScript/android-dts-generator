/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class ObjectStreamField {
			public constructor();
			public constructor(param0: string, param1: java.lang.Class);
			public constructor(param0: string, param1: java.lang.Class, param2: boolean);
			public compareTo(param0: java.lang.Object): number;
			public getName(): string;
			public getOffset(): number;
			public getType(): java.lang.Class;
			public getTypeCode(): string;
			public getTypeString(): string;
			public isPrimitive(): boolean;
			public setOffset(param0: number): void;
			public toString(): string;
			public isUnshared(): boolean;
		}
	}
}
