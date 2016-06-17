/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />

declare module dalvik {
	export module annotation {
		export class TestTargetClass {
			public value(): java.lang.Class;
		}
	}
}
