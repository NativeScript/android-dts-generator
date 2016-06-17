/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.ErrorListener.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />
/// <reference path="./javax.xml.transform.Templates.d.ts" />
/// <reference path="./javax.xml.transform.Transformer.d.ts" />
/// <reference path="./javax.xml.transform.URIResolver.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export class TransformerFactory {
				public constructor();
				public static newInstance(): javax.xml.transform.TransformerFactory;
				public static newInstance(param0: string, param1: java.lang.ClassLoader): javax.xml.transform.TransformerFactory;
				public newTransformer(param0: javax.xml.transform.Source): javax.xml.transform.Transformer;
				public newTransformer(): javax.xml.transform.Transformer;
				public newTemplates(param0: javax.xml.transform.Source): javax.xml.transform.Templates;
				public getAssociatedStylesheet(param0: javax.xml.transform.Source, param1: string, param2: string, param3: string): javax.xml.transform.Source;
				public setURIResolver(param0: javax.xml.transform.URIResolver): void;
				public getURIResolver(): javax.xml.transform.URIResolver;
				public setFeature(param0: string, param1: boolean): void;
				public getFeature(param0: string): boolean;
				public setAttribute(param0: string, param1: java.lang.Object): void;
				public getAttribute(param0: string): java.lang.Object;
				public setErrorListener(param0: javax.xml.transform.ErrorListener): void;
				public getErrorListener(): javax.xml.transform.ErrorListener;
			}
		}
	}
}
