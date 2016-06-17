/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Application.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class ActivityUnitTestCase {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: java.lang.Class);
			public getActivity(): android.app.Activity;
			public setUp(): void;
			public startActivity(param0: android.content.Intent, param1: android.os.Bundle, param2: java.lang.Object): android.app.Activity;
			public tearDown(): void;
			public setApplication(param0: android.app.Application): void;
			public setActivityContext(param0: android.content.Context): void;
			public getRequestedOrientation(): number;
			public getStartedActivityIntent(): android.content.Intent;
			public getStartedActivityRequest(): number;
			public isFinishCalled(): boolean;
			public getFinishedActivityRequest(): number;
		}
	}
}
