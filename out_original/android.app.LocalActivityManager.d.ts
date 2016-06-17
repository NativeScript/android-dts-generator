/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class LocalActivityManager {
			public constructor();
			public constructor(param0: android.app.Activity, param1: boolean);
			public startActivity(param0: string, param1: android.content.Intent): android.view.Window;
			public destroyActivity(param0: string, param1: boolean): android.view.Window;
			public getCurrentActivity(): android.app.Activity;
			public getCurrentId(): string;
			public getActivity(param0: string): android.app.Activity;
			public dispatchCreate(param0: android.os.Bundle): void;
			public saveInstanceState(): android.os.Bundle;
			public dispatchResume(): void;
			public dispatchPause(param0: boolean): void;
			public dispatchStop(): void;
			public removeAllActivities(): void;
			public dispatchDestroy(param0: boolean): void;
		}
	}
}
