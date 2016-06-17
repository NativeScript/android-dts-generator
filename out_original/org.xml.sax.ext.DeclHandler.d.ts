/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module ext {
				export class DeclHandler {
					public elementDecl(param0: string, param1: string): void;
					public attributeDecl(param0: string, param1: string, param2: string, param3: string, param4: string): void;
					public internalEntityDecl(param0: string, param1: string): void;
					public externalEntityDecl(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}
