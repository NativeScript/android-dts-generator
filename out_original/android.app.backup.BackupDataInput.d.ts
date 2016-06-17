/// <reference path="./_helpers.d.ts" />

declare module android {
	export module app {
		export module backup {
			export class BackupDataInput {
				public readNextHeader(): boolean;
				public getKey(): string;
				public getDataSize(): number;
				public readEntityData(param0: native.Array<number>, param1: number, param2: number): number;
				public skipEntityData(): void;
			}
		}
	}
}
