/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Instrumentation.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
/// <reference path="./junit.framework.TestListener.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />

declare module android {
	export module test {
		export class AndroidTestRunner {
			public constructor();
			public setTestClassName(param0: string, param1: string): void;
			public setTest(param0: junit.framework.Test): void;
			public clearTestListeners(): void;
			public addTestListener(param0: junit.framework.TestListener): void;
			public createTestResult(): junit.framework.TestResult;
			public getTestCases(): java.util.List;
			public getTestClassName(): string;
			public getTestResult(): junit.framework.TestResult;
			public runTest(): void;
			public runTest(param0: junit.framework.TestResult): void;
			public setContext(param0: android.content.Context): void;
			public setInstrumentation(param0: android.app.Instrumentation): void;
			public setInstrumentaiton(param0: android.app.Instrumentation): void;
			public loadSuiteClass(param0: string): java.lang.Class;
			public testStarted(param0: string): void;
			public testEnded(param0: string): void;
			public testFailed(param0: number, param1: junit.framework.Test, param2: java.lang.Throwable): void;
			public runFailed(param0: string): void;
		}
	}
}
