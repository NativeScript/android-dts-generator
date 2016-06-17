/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export module sax {
				export class SAXSource {
					public constructor();
					public constructor(param0: org.xml.sax.XMLReader, param1: org.xml.sax.InputSource);
					public constructor(param0: org.xml.sax.InputSource);
					public setXMLReader(param0: org.xml.sax.XMLReader): void;
					public getXMLReader(): org.xml.sax.XMLReader;
					public setInputSource(param0: org.xml.sax.InputSource): void;
					public getInputSource(): org.xml.sax.InputSource;
					public setSystemId(param0: string): void;
					public getSystemId(): string;
					public static sourceToInputSource(param0: javax.xml.transform.Source): org.xml.sax.InputSource;
					public static FEATURE: string;
				}
			}
		}
	}
}
