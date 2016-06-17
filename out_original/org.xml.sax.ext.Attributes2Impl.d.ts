/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module ext {
				export class Attributes2Impl {
					public constructor(param0: org.xml.sax.Attributes);
					public constructor();
					public constructor(param0: org.xml.sax.Attributes);
					public isDeclared(param0: number): boolean;
					public isDeclared(param0: string, param1: string): boolean;
					public isDeclared(param0: string): boolean;
					public isSpecified(param0: number): boolean;
					public isSpecified(param0: string, param1: string): boolean;
					public isSpecified(param0: string): boolean;
					public setAttributes(param0: org.xml.sax.Attributes): void;
					public addAttribute(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public removeAttribute(param0: number): void;
					public setDeclared(param0: number, param1: boolean): void;
					public setSpecified(param0: number, param1: boolean): void;
				}
			}
		}
	}
}
