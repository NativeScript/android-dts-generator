/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />

declare module java {
	export module util {
		export class AbstractSet {
			public constructor();
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public removeAll(param0: java.util.Collection): boolean;
		}
	}
}
