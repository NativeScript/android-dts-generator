/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.xpath.XPath.d.ts" />
/// <reference path="./javax.xml.xpath.XPathFunctionResolver.d.ts" />
/// <reference path="./javax.xml.xpath.XPathVariableResolver.d.ts" />

declare module javax {
	export module xml {
		export module xpath {
			export class XPathFactory {
				public constructor();
				public static newInstance(): javax.xml.xpath.XPathFactory;
				public static newInstance(param0: string): javax.xml.xpath.XPathFactory;
				public static newInstance(param0: string, param1: string, param2: java.lang.ClassLoader): javax.xml.xpath.XPathFactory;
				public isObjectModelSupported(param0: string): boolean;
				public setFeature(param0: string, param1: boolean): void;
				public getFeature(param0: string): boolean;
				public setXPathVariableResolver(param0: javax.xml.xpath.XPathVariableResolver): void;
				public setXPathFunctionResolver(param0: javax.xml.xpath.XPathFunctionResolver): void;
				public newXPath(): javax.xml.xpath.XPath;
				public static DEFAULT_OBJECT_MODEL_URI: string;
				public static DEFAULT_PROPERTY_NAME: string;
			}
		}
	}
}
