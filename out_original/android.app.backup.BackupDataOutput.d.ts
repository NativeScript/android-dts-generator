/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export module backup {
			export class BackupDataOutput {
				public writeEntityHeader(param0: string, param1: number): number;
				public writeEntityData(param0: native.Array<number>, param1: number): number;
			}
		}
	}
}
