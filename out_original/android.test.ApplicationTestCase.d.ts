/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class ApplicationTestCase {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: java.lang.Class);
			public getApplication(): android.app.Application;
			public setUp(): void;
			public createApplication(): void;
			public terminateApplication(): void;
			public tearDown(): void;
			public getSystemContext(): android.content.Context;
			public testApplicationTestCaseSetUpProperly(): void;
		}
	}
}
