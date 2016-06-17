/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class Adler32 {
				public constructor();
				public getValue(): number;
				public reset(): void;
				public update(param0: number): void;
				public update(param0: native.Array<number>): void;
				public update(param0: native.Array<number>, param1: number, param2: number): void;
			}
		}
	}
}
