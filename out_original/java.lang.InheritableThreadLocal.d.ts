/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module lang {
		export class InheritableThreadLocal {
			public constructor();
			public childValue(param0: java.lang.Object): java.lang.Object;
		}
	}
}
