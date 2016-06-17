/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Instrumentation.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />

declare module android {
	export module test {
		export class InstrumentationTestSuite {
			public constructor();
			public constructor(param0: java.lang.Class);
			public constructor(param0: java.lang.Class, param1: string);
			public constructor(param0: string);
			public constructor(param0: native.Array<java.lang.Class>);
			public constructor(param0: native.Array<java.lang.Class>, param1: string);
			public constructor(param0: android.app.Instrumentation);
			public constructor(param0: string, param1: android.app.Instrumentation);
			public constructor(param0: java.lang.Class, param1: android.app.Instrumentation);
			public addTestSuite(param0: java.lang.Class): void;
			public runTest(param0: junit.framework.Test, param1: junit.framework.TestResult): void;
		}
	}
}
