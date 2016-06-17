/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.Vector.d.ts" />
/// <reference path="./junit.framework.AssertionFailedError.d.ts" />
/// <reference path="./junit.framework.Protectable.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />
/// <reference path="./junit.framework.TestCase.d.ts" />
/// <reference path="./junit.framework.TestListener.d.ts" />

declare module junit {
	export module framework {
		export class TestResult {
			public constructor();
			public addError(param0: junit.framework.Test, param1: java.lang.Throwable): void;
			public addFailure(param0: junit.framework.Test, param1: junit.framework.AssertionFailedError): void;
			public addListener(param0: junit.framework.TestListener): void;
			public removeListener(param0: junit.framework.TestListener): void;
			public endTest(param0: junit.framework.Test): void;
			public errorCount(): number;
			public errors(): java.util.Enumeration;
			public failureCount(): number;
			public failures(): java.util.Enumeration;
			public run(param0: junit.framework.TestCase): void;
			public runCount(): number;
			public runProtected(param0: junit.framework.Test, param1: junit.framework.Protectable): void;
			public shouldStop(): boolean;
			public startTest(param0: junit.framework.Test): void;
			public stop(): void;
			public wasSuccessful(): boolean;
			public fErrors: java.util.Vector;
			public fFailures: java.util.Vector;
			public fListeners: java.util.Vector;
			public fRunTests: number;
		}
	}
}
