/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.AttributeList.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module helpers {
				export class AttributeListImpl {
					public constructor();
					public constructor(param0: org.xml.sax.AttributeList);
					public setAttributeList(param0: org.xml.sax.AttributeList): void;
					public addAttribute(param0: string, param1: string, param2: string): void;
					public removeAttribute(param0: string): void;
					public clear(): void;
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
}
