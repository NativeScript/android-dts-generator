/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Instrumentation.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class InstrumentationTestCase {
			public constructor(param0: string);
			public constructor();
			public injectInstrumentation(param0: android.app.Instrumentation): void;
			public injectInsrumentation(param0: android.app.Instrumentation): void;
			public getInstrumentation(): android.app.Instrumentation;
			public launchActivity(param0: string, param1: java.lang.Class, param2: android.os.Bundle): android.app.Activity;
			public launchActivityWithIntent(param0: string, param1: java.lang.Class, param2: android.content.Intent): android.app.Activity;
			public runTestOnUiThread(param0: java.lang.Runnable): void;
			public runTest(): void;
			public sendKeys(param0: string): void;
			public sendKeys(param0: native.Array<number>): void;
			public sendRepeatedKeys(param0: native.Array<number>): void;
			public tearDown(): void;
		}
	}
}
