/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
/// <reference path="./junit.framework.AssertionFailedError.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
/// <reference path="./junit.runner.TestSuiteLoader.d.ts" />

declare module junit {
	export module runner {
		export class BaseTestRunner {
			public constructor();
			public startTest(param0: junit.framework.Test): void;
			public static setPreferences(param0: java.util.Properties): void;
			public static getPreferences(): java.util.Properties;
			public static savePreferences(): void;
			public setPreference(param0: string, param1: string): void;
			public endTest(param0: junit.framework.Test): void;
			public addError(param0: junit.framework.Test, param1: java.lang.Throwable): void;
			public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
			public testStarted(param0: string): void;
			public testEnded(param0: string): void;
			public testFailed(param0: number, param1: junit.framework.Test, param2: java.lang.Throwable): void;
			public getTest(param0: string): junit.framework.Test;
			public elapsedTimeAsString(param0: number): string;
			public processArguments(param0: native.Array<string>): string;
			public setLoading(param0: boolean): void;
			public extractClassName(param0: string): string;
			public static truncate(param0: string): string;
			public runFailed(param0: string): void;
			public getLoader(): junit.runner.TestSuiteLoader;
			public loadSuiteClass(param0: string): java.lang.Class;
			public clearStatus(): void;
			public useReloadingTestSuiteLoader(): boolean;
			public static getPreference(param0: string): string;
			public static getPreference(param0: string, param1: number): number;
			public static getFilteredTrace(param0: java.lang.Throwable): string;
			public static inVAJava(): boolean;
			public static getFilteredTrace(param0: string): string;
			public static showStackRaw(): boolean;
			public static SUITE_METHODNAME: string;
		}
	}
}
