/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Result.d.ts" />
/// <reference path="./javax.xml.transform.Transformer.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export module sax {
				export class TransformerHandler {
					public setResult(param0: javax.xml.transform.Result): void;
					public setSystemId(param0: string): void;
					public getSystemId(): string;
					public getTransformer(): javax.xml.transform.Transformer;
				}
			}
		}
	}
}
