/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class TintContextWrapper {
					public static wrap(param0: android.content.Context): android.content.Context;
					public getTheme(): android.content.res.Resources.Theme;
					public setTheme(param0: number): void;
					public getResources(): android.content.res.Resources;
				}
			}
		}
	}
}
