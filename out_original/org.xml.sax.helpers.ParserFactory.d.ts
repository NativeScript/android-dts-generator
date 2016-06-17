/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.Parser.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module helpers {
				export class ParserFactory {
					public static makeParser(): org.xml.sax.Parser;
					public static makeParser(param0: string): org.xml.sax.Parser;
				}
			}
		}
	}
}
