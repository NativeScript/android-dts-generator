/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./junit.framework.AssertionFailedError.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />

declare module junit {
	export module framework {
		export class TestListener {
			public addError(param0: junit.framework.Test, param1: java.lang.Throwable): void;
			public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
			public endTest(param0: junit.framework.Test): void;
			public startTest(param0: junit.framework.Test): void;
		}
	}
}
