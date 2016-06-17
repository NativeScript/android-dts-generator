/// <reference path="./_helpers.d.ts" />

declare module android {
	export module app {
		export module backup {
			export class BackupDataInputStream {
				public read(param0: native.Array<number>): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public read(): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public read(param0: native.Array<number>): number;
				public getKey(): string;
				public size(): number;
			}
		}
	}
}
