/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module sql {
		export class Ref {
			public getBaseTypeName(): string;
			public getObject(): java.lang.Object;
			public getObject(param0: java.util.Map): java.lang.Object;
			public setObject(param0: java.lang.Object): void;
		}
	}
}
