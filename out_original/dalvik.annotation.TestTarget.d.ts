/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />

declare module dalvik {
	export module annotation {
		export class TestTarget {
			public methodName(): string;
			public conceptName(): string;
			public methodArgs(): native.Array<java.lang.Class>;
		}
	}
}
