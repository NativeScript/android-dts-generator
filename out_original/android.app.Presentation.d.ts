/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.view.Display.d.ts" />

declare module android {
	export module app {
		export class Presentation {
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.view.Display);
			public constructor(param0: android.content.Context, param1: android.view.Display, param2: number);
			public getDisplay(): android.view.Display;
			public getResources(): android.content.res.Resources;
			public onStart(): void;
			public onStop(): void;
			public show(): void;
			public onDisplayRemoved(): void;
			public onDisplayChanged(): void;
		}
	}
}
