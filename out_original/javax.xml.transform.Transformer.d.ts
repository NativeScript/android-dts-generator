/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
/// <reference path="./javax.xml.transform.ErrorListener.d.ts" />
/// <reference path="./javax.xml.transform.Result.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./javax.xml.transform.URIResolver.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export class Transformer {
				public constructor();
				public reset(): void;
				public transform(param0: javax.xml.transform.Source, param1: javax.xml.transform.Result): void;
				public setParameter(param0: string, param1: java.lang.Object): void;
				public getParameter(param0: string): java.lang.Object;
				public clearParameters(): void;
				public setURIResolver(param0: javax.xml.transform.URIResolver): void;
				public getURIResolver(): javax.xml.transform.URIResolver;
				public setOutputProperties(param0: java.util.Properties): void;
				public getOutputProperties(): java.util.Properties;
				public setOutputProperty(param0: string, param1: string): void;
				public getOutputProperty(param0: string): string;
				public setErrorListener(param0: javax.xml.transform.ErrorListener): void;
				public getErrorListener(): javax.xml.transform.ErrorListener;
			}
		}
	}
}
