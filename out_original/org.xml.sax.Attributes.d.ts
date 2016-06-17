/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class Attributes {
				public getLength(): number;
				public getURI(param0: number): string;
				public getLocalName(param0: number): string;
				public getQName(param0: number): string;
				public getType(param0: number): string;
				public getValue(param0: number): string;
				public getIndex(param0: string, param1: string): number;
				public getIndex(param0: string): number;
				public getType(param0: string, param1: string): string;
				public getType(param0: string): string;
				public getValue(param0: string, param1: string): string;
				public getValue(param0: string): string;
			}
		}
	}
}
