/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.namespace.NamespaceContext.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />
/// <reference path="./javax.xml.xpath.XPathExpression.d.ts" />
/// <reference path="./javax.xml.xpath.XPathFunctionResolver.d.ts" />
/// <reference path="./javax.xml.xpath.XPathVariableResolver.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />

declare module javax {
	export module xml {
		export module xpath {
			export class XPath {
				public reset(): void;
				public setXPathVariableResolver(param0: javax.xml.xpath.XPathVariableResolver): void;
				public getXPathVariableResolver(): javax.xml.xpath.XPathVariableResolver;
				public setXPathFunctionResolver(param0: javax.xml.xpath.XPathFunctionResolver): void;
				public getXPathFunctionResolver(): javax.xml.xpath.XPathFunctionResolver;
				public setNamespaceContext(param0: javax.xml.namespace.NamespaceContext): void;
				public getNamespaceContext(): javax.xml.namespace.NamespaceContext;
				public compile(param0: string): javax.xml.xpath.XPathExpression;
				public evaluate(param0: string, param1: java.lang.Object, param2: javax.xml.namespace.QName): java.lang.Object;
				public evaluate(param0: string, param1: java.lang.Object): string;
				public evaluate(param0: string, param1: org.xml.sax.InputSource, param2: javax.xml.namespace.QName): java.lang.Object;
				public evaluate(param0: string, param1: org.xml.sax.InputSource): string;
			}
		}
	}
}
