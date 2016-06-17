/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />

declare module junit {
	export module framework {
		export class TestCase {
			public constructor();
			public constructor(param0: string);
			public countTestCases(): number;
			public createResult(): junit.framework.TestResult;
			public run(): junit.framework.TestResult;
			public run(param0: junit.framework.TestResult): void;
			public runBare(): void;
			public runTest(): void;
			public setUp(): void;
			public tearDown(): void;
			public toString(): string;
			public getName(): string;
			public setName(param0: string): void;
		}
	}
}
