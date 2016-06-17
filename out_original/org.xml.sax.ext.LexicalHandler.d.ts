/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module ext {
				export class LexicalHandler {
					public startDTD(param0: string, param1: string, param2: string): void;
					public endDTD(): void;
					public startEntity(param0: string): void;
					public endEntity(param0: string): void;
					public startCDATA(): void;
					public endCDATA(): void;
					public comment(param0: native.Array<string>, param1: number, param2: number): void;
				}
			}
		}
	}
}
