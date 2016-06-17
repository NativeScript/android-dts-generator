/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module ext {
				export class Attributes2 {
					public isDeclared(param0: number): boolean;
					public isDeclared(param0: string): boolean;
					public isDeclared(param0: string, param1: string): boolean;
					public isSpecified(param0: number): boolean;
					public isSpecified(param0: string, param1: string): boolean;
					public isSpecified(param0: string): boolean;
				}
			}
		}
	}
}
