/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export class ContextThemeWrapper {
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public attachBaseContext(param0: android.content.Context): void;
			public applyOverrideConfiguration(param0: android.content.res.Configuration): void;
			public getResources(): android.content.res.Resources;
			public setTheme(param0: number): void;
			public getTheme(): android.content.res.Resources.Theme;
			public getSystemService(param0: java.lang.Class): java.lang.Object;
			public getSystemService(param0: string): java.lang.Object;
			public onApplyThemeResource(param0: android.content.res.Resources.Theme, param1: number, param2: boolean): void;
		}
	}
}
