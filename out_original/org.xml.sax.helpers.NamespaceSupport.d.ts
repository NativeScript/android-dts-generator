/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export module helpers {
				export class NamespaceSupport {
					public constructor();
					public reset(): void;
					public pushContext(): void;
					public popContext(): void;
					public declarePrefix(param0: string, param1: string): boolean;
					public processName(param0: string, param1: native.Array<string>, param2: boolean): native.Array<string>;
					public getURI(param0: string): string;
					public getPrefixes(): java.util.Enumeration;
					public getPrefix(param0: string): string;
					public getPrefixes(param0: string): java.util.Enumeration;
					public getDeclaredPrefixes(): java.util.Enumeration;
					public setNamespaceDeclUris(param0: boolean): void;
					public isNamespaceDeclUris(): boolean;
					public static NSDECL: string;
					public static XMLNS: string;
				}
			}
		}
	}
}
