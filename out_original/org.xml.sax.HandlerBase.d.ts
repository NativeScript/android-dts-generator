/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.AttributeList.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.Locator.d.ts" />
/// <reference path="./org.xml.sax.SAXParseException.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class HandlerBase {
				public constructor();
				public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
				public notationDecl(param0: string, param1: string, param2: string): void;
				public unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;
				public setDocumentLocator(param0: org.xml.sax.Locator): void;
				public startDocument(): void;
				public endDocument(): void;
				public startElement(param0: string, param1: org.xml.sax.AttributeList): void;
				public endElement(param0: string): void;
				public characters(param0: native.Array<string>, param1: number, param2: number): void;
				public ignorableWhitespace(param0: native.Array<string>, param1: number, param2: number): void;
				public processingInstruction(param0: string, param1: string): void;
				public warning(param0: org.xml.sax.SAXParseException): void;
				public error(param0: org.xml.sax.SAXParseException): void;
				public fatalError(param0: org.xml.sax.SAXParseException): void;
			}
		}
	}
}
