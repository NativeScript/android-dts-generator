/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />

declare module javax {
	export module xml {
		export module namespace {
			export class NamespaceContext {
				public getNamespaceURI(param0: string): string;
				public getPrefix(param0: string): string;
				public getPrefixes(param0: string): java.util.Iterator;
			}
		}
	}
}
