/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class CharacterData {
				public getData(): string;
				public setData(param0: string): void;
				public getLength(): number;
				public substringData(param0: number, param1: number): string;
				public appendData(param0: string): void;
				public insertData(param0: number, param1: string): void;
				public deleteData(param0: number, param1: number): void;
				public replaceData(param0: number, param1: number, param2: string): void;
			}
		}
	}
}
