/// <reference path="./_helpers.d.ts" />

declare module java {
	export module util {
		export module zip {
			export class Inflater {
				public constructor();
				public constructor(param0: boolean);
				public end(): void;
				public finalize(): void;
				public finished(): boolean;
				public getAdler(): number;
				public getBytesRead(): number;
				public getBytesWritten(): number;
				public getRemaining(): number;
				public getTotalIn(): number;
				public getTotalOut(): number;
				public inflate(param0: native.Array<number>): number;
				public inflate(param0: native.Array<number>, param1: number, param2: number): number;
				public needsDictionary(): boolean;
				public needsInput(): boolean;
				public reset(): void;
				public setDictionary(param0: native.Array<number>): void;
				public setDictionary(param0: native.Array<number>, param1: number, param2: number): void;
				public setInput(param0: native.Array<number>): void;
				public setInput(param0: native.Array<number>, param1: number, param2: number): void;
			}
		}
	}
}
