/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export class URIResolver {
				public resolve(param0: string, param1: string): javax.xml.transform.Source;
			}
		}
	}
}
