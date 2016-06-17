/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module junit {
	export module runner {
		export class TestSuiteLoader {
			public load(param0: string): java.lang.Class;
			public reload(param0: java.lang.Class): java.lang.Class;
		}
	}
}
