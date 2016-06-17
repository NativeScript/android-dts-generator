/// <reference path="./_helpers.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />

declare module junit {
	export module framework {
		export class Test {
			public countTestCases(): number;
			public run(param0: junit.framework.TestResult): void;
		}
	}
}
