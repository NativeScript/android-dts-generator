/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.LocalActivityManager.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />

declare module android {
	export module app {
		export class ActivityGroup {
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: boolean);
			public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onCreate(param0: android.os.Bundle): void;
			public onResume(): void;
			public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onSaveInstanceState(param0: android.os.Bundle): void;
			public onPause(): void;
			public onStop(): void;
			public onDestroy(): void;
			public getCurrentActivity(): android.app.Activity;
			public getLocalActivityManager(): android.app.LocalActivityManager;
		}
	}
}
