/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSInput.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSOutput.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSParser.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSSerializer.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export module ls {
				export class DOMImplementationLS {
					public createLSParser(param0: number, param1: string): org.w3c.dom.ls.LSParser;
					public createLSSerializer(): org.w3c.dom.ls.LSSerializer;
					public createLSInput(): org.w3c.dom.ls.LSInput;
					public createLSOutput(): org.w3c.dom.ls.LSOutput;
					public static MODE_ASYNCHRONOUS: number;
					public static MODE_SYNCHRONOUS: number;
				}
			}
		}
	}
}
