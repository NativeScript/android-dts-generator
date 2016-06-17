/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module ext {
				export class DefaultHandler2 {
					public constructor();
					public startCDATA(): void;
					public endCDATA(): void;
					public startDTD(param0: string, param1: string, param2: string): void;
					public endDTD(): void;
					public startEntity(param0: string): void;
					public endEntity(param0: string): void;
					public comment(param0: native.Array<string>, param1: number, param2: number): void;
					public attributeDecl(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public elementDecl(param0: string, param1: string): void;
					public externalEntityDecl(param0: string, param1: string, param2: string): void;
					public internalEntityDecl(param0: string, param1: string): void;
					public getExternalSubset(param0: string, param1: string): org.xml.sax.InputSource;
					public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
					public resolveEntity(param0: string, param1: string, param2: string, param3: string): org.xml.sax.InputSource;
					public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
				}
			}
		}
	}
}
