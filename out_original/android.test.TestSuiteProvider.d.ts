/// <reference path="./_helpers.d.ts" />
/// <reference path="./junit.framework.TestSuite.d.ts" />

declare module android {
	export module test {
		export class TestSuiteProvider {
			public getTestSuite(): junit.framework.TestSuite;
		}
	}
}
