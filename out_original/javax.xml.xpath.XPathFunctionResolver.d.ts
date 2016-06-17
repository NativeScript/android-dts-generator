/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />
/// <reference path="./javax.xml.xpath.XPathFunction.d.ts" />

declare module javax {
	export module xml {
		export module xpath {
			export class XPathFunctionResolver {
				public resolveFunction(param0: javax.xml.namespace.QName, param1: number): javax.xml.xpath.XPathFunction;
			}
		}
	}
}
