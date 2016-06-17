/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module util {
		export class ListResourceBundle {
			public constructor();
			public getContents(): native.Array<native.Array<java.lang.Object>>;
			public getKeys(): java.util.Enumeration;
			public handleGetObject(param0: string): java.lang.Object;
			public handleKeySet(): java.util.Set;
		}
	}
}
