/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module sql {
		export class Struct {
			public getSQLTypeName(): string;
			public getAttributes(): native.Array<java.lang.Object>;
			public getAttributes(param0: java.util.Map): native.Array<java.lang.Object>;
		}
	}
}
