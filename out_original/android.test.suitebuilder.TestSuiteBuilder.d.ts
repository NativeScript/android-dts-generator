/// <reference path="./_helpers.d.ts" />
/// <reference path="./com.android.internal.util.Predicate.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./junit.framework.TestSuite.d.ts" />

declare module android {
	export module test {
		export module suitebuilder {
			export class TestSuiteBuilder {
				public constructor();
				public constructor(param0: java.lang.Class);
				public constructor(param0: string, param1: java.lang.ClassLoader);
				public includePackages(param0: native.Array<string>): android.test.suitebuilder.TestSuiteBuilder;
				public excludePackages(param0: native.Array<string>): android.test.suitebuilder.TestSuiteBuilder;
				public addRequirements(param0: java.util.List): android.test.suitebuilder.TestSuiteBuilder;
				public includeAllPackagesUnderHere(): android.test.suitebuilder.TestSuiteBuilder;
				public named(param0: string): android.test.suitebuilder.TestSuiteBuilder;
				public build(): junit.framework.TestSuite;
				public getSuiteName(): string;
				public addRequirements(param0: native.Array<com.android.internal.util.Predicate>): android.test.suitebuilder.TestSuiteBuilder;
			}
			export module TestSuiteBuilder {
				export class FailedToCreateTests {
					public constructor();
					public constructor(param0: string);
					public constructor(param0: java.lang.Exception);
					public testSuiteConstructionFailed(): void;
				}
			}
		}
	}
}
