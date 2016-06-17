/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />

declare module javax {
	export module xml {
		export module xpath {
			export class XPathExpression {
				public evaluate(param0: java.lang.Object, param1: javax.xml.namespace.QName): java.lang.Object;
				public evaluate(param0: java.lang.Object): string;
				public evaluate(param0: org.xml.sax.InputSource, param1: javax.xml.namespace.QName): java.lang.Object;
				public evaluate(param0: org.xml.sax.InputSource): string;
			}
		}
	}
}
