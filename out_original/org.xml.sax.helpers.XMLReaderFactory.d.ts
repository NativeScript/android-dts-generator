/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module helpers {
				export class XMLReaderFactory {
					public static createXMLReader(): org.xml.sax.XMLReader;
					public static createXMLReader(param0: string): org.xml.sax.XMLReader;
				}
			}
		}
	}
}
