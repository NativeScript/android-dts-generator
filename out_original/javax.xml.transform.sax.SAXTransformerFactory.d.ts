/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./javax.xml.transform.Templates.d.ts" />
/// <reference path="./javax.xml.transform.sax.TemplatesHandler.d.ts" />
/// <reference path="./javax.xml.transform.sax.TransformerHandler.d.ts" />
/// <reference path="./org.xml.sax.XMLFilter.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export module sax {
				export class SAXTransformerFactory {
					public constructor();
					public newTransformerHandler(param0: javax.xml.transform.Source): javax.xml.transform.sax.TransformerHandler;
					public newTransformerHandler(param0: javax.xml.transform.Templates): javax.xml.transform.sax.TransformerHandler;
					public newTransformerHandler(): javax.xml.transform.sax.TransformerHandler;
					public newTemplatesHandler(): javax.xml.transform.sax.TemplatesHandler;
					public newXMLFilter(param0: javax.xml.transform.Source): org.xml.sax.XMLFilter;
					public newXMLFilter(param0: javax.xml.transform.Templates): org.xml.sax.XMLFilter;
					public static FEATURE: string;
					public static FEATURE_XMLFILTER: string;
				}
			}
		}
	}
}
