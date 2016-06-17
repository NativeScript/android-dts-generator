/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class AttributeList {
				public getLength(): number;
				public getName(param0: number): string;
				public getType(param0: number): string;
				public getValue(param0: number): string;
				public getType(param0: string): string;
				public getValue(param0: string): string;
			}
		}
	}
}
