/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.xml.sax.SAXParseException.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class ErrorHandler {
				public warning(param0: org.xml.sax.SAXParseException): void;
				public error(param0: org.xml.sax.SAXParseException): void;
				public fatalError(param0: org.xml.sax.SAXParseException): void;
			}
		}
	}
}
