/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class SearchViewCompatIcs {
					public static newSearchView(param0: android.content.Context): android.view.View;
					public static setImeOptions(param0: android.view.View, param1: number): void;
					public static setInputType(param0: android.view.View, param1: number): void;
				}
				export module SearchViewCompatIcs {
					export class MySearchView {
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.content.Context);
						public onActionViewCollapsed(): void;
					}
				}
			}
		}
	}
}
