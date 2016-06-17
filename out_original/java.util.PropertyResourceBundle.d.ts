/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module util {
		export class PropertyResourceBundle {
			public constructor();
			public constructor(param0: java.io.InputStream);
			public constructor(param0: java.io.Reader);
			public handleKeySet(): java.util.Set;
			public getKeys(): java.util.Enumeration;
			public handleGetObject(param0: string): java.lang.Object;
		}
	}
}
