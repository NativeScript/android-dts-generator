/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
/// <reference path="./javax.xml.transform.Transformer.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export class Templates {
				public newTransformer(): javax.xml.transform.Transformer;
				public getOutputProperties(): java.util.Properties;
			}
		}
	}
}
