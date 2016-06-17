/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class ActivityInstrumentationTestCase {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: java.lang.Class);
			public constructor(param0: string, param1: java.lang.Class, param2: boolean);
			public getActivity(): android.app.Activity;
			public setUp(): void;
			public tearDown(): void;
			public testActivityTestCaseSetUpProperly(): void;
		}
	}
}
