/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./org.xml.sax.Attributes.d.ts" />
/// <reference path="./org.xml.sax.DTDHandler.d.ts" />
/// <reference path="./org.xml.sax.DocumentHandler.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module helpers {
				export class XMLReaderAdapter {
					public constructor();
					public constructor(param0: org.xml.sax.XMLReader);
					public setLocale(param0: java.util.Locale): void;
					public setEntityResolver(param0: org.xml.sax.EntityResolver): void;
					public setDTDHandler(param0: org.xml.sax.DTDHandler): void;
					public setDocumentHandler(param0: org.xml.sax.DocumentHandler): void;
					public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;
					public parse(param0: string): void;
					public parse(param0: org.xml.sax.InputSource): void;
					public setDocumentLocator(param0: org.xml.sax.Locator): void;
					public startDocument(): void;
					public endDocument(): void;
					public startPrefixMapping(param0: string, param1: string): void;
					public endPrefixMapping(param0: string): void;
					public startElement(param0: string, param1: string, param2: string, param3: org.xml.sax.Attributes): void;
					public endElement(param0: string, param1: string, param2: string): void;
					public characters(param0: native.Array<string>, param1: number, param2: number): void;
					public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;
					public processingInstruction(param0: string, param1: string): void;
					public skippedEntity(param0: string): void;
				}
			}
		}
	}
}
