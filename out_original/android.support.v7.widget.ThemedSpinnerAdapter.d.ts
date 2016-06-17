/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ThemedSpinnerAdapter {
					public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
					public getDropDownViewTheme(): android.content.res.Resources.Theme;
				}
				export module ThemedSpinnerAdapter {
					export class Helper {
						public constructor();
						public constructor(param0: android.content.Context);
						public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
						public getDropDownViewTheme(): android.content.res.Resources.Theme;
						public getDropDownViewInflater(): android.view.LayoutInflater;
					}
				}
			}
		}
	}
}
