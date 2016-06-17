/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module sql {
		export class Wrapper {
			public unwrap(param0: java.lang.Class): java.lang.Object;
			public isWrapperFor(param0: java.lang.Class): boolean;
		}
	}
}
