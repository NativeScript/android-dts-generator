/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.InputSource.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class EntityResolver {
				public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
			}
		}
	}
}
