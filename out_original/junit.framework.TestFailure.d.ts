/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./junit.framework.Test.d.ts" />

declare module junit {
	export module framework {
		export class TestFailure {
			public constructor();
			public constructor(param0: junit.framework.Test, param1: java.lang.Throwable);
			public failedTest(): junit.framework.Test;
			public thrownException(): java.lang.Throwable;
			public toString(): string;
			public trace(): string;
			public exceptionMessage(): string;
			public isFailure(): boolean;
			public fFailedTest: junit.framework.Test;
			public fThrownException: java.lang.Throwable;
		}
	}
}
