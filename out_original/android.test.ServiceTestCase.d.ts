/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.app.Service.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class ServiceTestCase {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: java.lang.Class);
			public getService(): android.app.Service;
			public setUp(): void;
			public setupService(): void;
			public startService(param0: android.content.Intent): void;
			public bindService(param0: android.content.Intent): android.os.IBinder;
			public shutdownService(): void;
			public tearDown(): void;
			public setApplication(param0: android.app.Application): void;
			public getApplication(): android.app.Application;
			public getSystemContext(): android.content.Context;
			public testServiceTestCaseSetUpProperly(): void;
		}
	}
}
