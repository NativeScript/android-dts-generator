/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class ContextThemeWrapper {
					public constructor(param0: android.content.Context);
					public constructor();
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
					public setTheme(param0: number): void;
					public getThemeResId(): number;
					public getTheme(): android.content.res.Resources.Theme;
					public getSystemService(param0: java.lang.Class): java.lang.Object;
					public getSystemService(param0: string): java.lang.Object;
					public onApplyThemeResource(param0: android.content.res.Resources.Theme, param1: number, param2: boolean): void;
				}
			}
		}
	}
}
