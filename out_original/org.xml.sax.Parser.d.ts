/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./org.xml.sax.DTDHandler.d.ts" />
/// <reference path="./org.xml.sax.DocumentHandler.d.ts" />
/// <reference path="./org.xml.sax.EntityResolver.d.ts" />
/// <reference path="./org.xml.sax.ErrorHandler.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class Parser {
				public setLocale(param0: java.util.Locale): void;
				public setEntityResolver(param0: org.xml.sax.EntityResolver): void;
				public setDTDHandler(param0: org.xml.sax.DTDHandler): void;
				public setDocumentHandler(param0: org.xml.sax.DocumentHandler): void;
				public setErrorHandler(param0: org.xml.sax.ErrorHandler): void;
				public parse(param0: org.xml.sax.InputSource): void;
				public parse(param0: string): void;
			}
		}
	}
}
