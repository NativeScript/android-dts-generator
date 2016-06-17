/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module helpers {
				export class AttributesImpl {
					public constructor();
					public constructor(param0: org.xml.sax.Attributes);
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
					public clear(): void;
					public setAttributes(param0: org.xml.sax.Attributes): void;
					public addAttribute(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public setAttribute(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string): void;
					public removeAttribute(param0: number): void;
					public setURI(param0: number, param1: string): void;
					public setLocalName(param0: number, param1: string): void;
					public setQName(param0: number, param1: string): void;
					public setType(param0: number, param1: string): void;
					public setValue(param0: number, param1: string): void;
				}
			}
		}
	}
}
