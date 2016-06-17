/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class XMLFilter {
				public setParent(param0: org.xml.sax.XMLReader): void;
				public getParent(): org.xml.sax.XMLReader;
			}
		}
	}
}
