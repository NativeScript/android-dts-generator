/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />

declare module java {
	export module lang {
		export class Object {
			public constructor();
			public clone(): java.lang.Object;
			public equals(param0: java.lang.Object): boolean;
			public finalize(): void;
			public getClass(): java.lang.Class;
			public hashCode(): number;
			public notify(): void;
			public notifyAll(): void;
			public toString(): string;
			public wait(param0: number): void;
			public wait(param0: number, param1: number): void;
			public wait(): void;
			public wait(param0: number): void;
			public wait(param0: number, param1: number): void;
		}
	}
}
