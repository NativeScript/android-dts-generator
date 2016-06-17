/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.test.AndroidTestRunner.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./junit.framework.TestSuite.d.ts" />

declare module android {
	export module test {
		export class InstrumentationTestRunner {
			public constructor();
			public onCreate(param0: android.os.Bundle): void;
			public getArguments(): android.os.Bundle;
			public getAndroidTestRunner(): android.test.AndroidTestRunner;
			public onStart(): void;
			public getTestSuite(): junit.framework.TestSuite;
			public getAllTests(): junit.framework.TestSuite;
			public getLoader(): java.lang.ClassLoader;
			public static REPORT_KEY_NAME_CLASS: string;
			public static REPORT_KEY_NAME_TEST: string;
			public static REPORT_KEY_NUM_CURRENT: string;
			public static REPORT_KEY_NUM_TOTAL: string;
			public static REPORT_KEY_STACK: string;
			public static REPORT_VALUE_ID: string;
			public static REPORT_VALUE_RESULT_ERROR: number;
			public static REPORT_VALUE_RESULT_FAILURE: number;
			public static REPORT_VALUE_RESULT_OK: number;
			public static REPORT_VALUE_RESULT_START: number;
		}
	}
}
