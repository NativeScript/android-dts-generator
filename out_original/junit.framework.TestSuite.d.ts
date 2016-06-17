/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Constructor.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
/// <reference path="./junit.framework.TestResult.d.ts" />

declare module junit {
	export module framework {
		export class TestSuite {
			public constructor();
			public constructor(param0: java.lang.Class);
			public constructor(param0: java.lang.Class, param1: string);
			public constructor(param0: string);
			public constructor(param0: native.Array<java.lang.Class>);
			public constructor(param0: native.Array<java.lang.Class>, param1: string);
			public static createTest(param0: java.lang.Class, param1: string): junit.framework.Test;
			public static getTestConstructor(param0: java.lang.Class): java.lang.reflect.Constructor;
			public static warning(param0: string): junit.framework.Test;
			public addTest(param0: junit.framework.Test): void;
			public addTestSuite(param0: java.lang.Class): void;
			public countTestCases(): number;
			public getName(): string;
			public run(param0: junit.framework.TestResult): void;
			public runTest(param0: junit.framework.Test, param1: junit.framework.TestResult): void;
			public setName(param0: string): void;
			public testAt(param0: number): junit.framework.Test;
			public testCount(): number;
			public tests(): java.util.Enumeration;
			public toString(): string;
		}
	}
}
