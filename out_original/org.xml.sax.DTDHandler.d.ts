/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class DTDHandler {
				public notationDecl(param0: string, param1: string, param2: string): void;
				public unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;
			}
		}
	}
}
