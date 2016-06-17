/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class SearchViewCompatHoneycomb {
					public static newSearchView(param0: android.content.Context): android.view.View;
					public static setSearchableInfo(param0: android.view.View, param1: android.content.ComponentName): void;
					public static newOnQueryTextListener(param0: android.support.v4.widget.SearchViewCompatHoneycomb.OnQueryTextListenerCompatBridge): java.lang.Object;
					public static setOnQueryTextListener(param0: java.lang.Object, param1: java.lang.Object): void;
					public static newOnCloseListener(param0: android.support.v4.widget.SearchViewCompatHoneycomb.OnCloseListenerCompatBridge): java.lang.Object;
					public static setOnCloseListener(param0: java.lang.Object, param1: java.lang.Object): void;
					public static getQuery(param0: android.view.View): string;
					public static setQuery(param0: android.view.View, param1: string, param2: boolean): void;
					public static setQueryHint(param0: android.view.View, param1: string): void;
					public static setIconified(param0: android.view.View, param1: boolean): void;
					public static isIconified(param0: android.view.View): boolean;
					public static setSubmitButtonEnabled(param0: android.view.View, param1: boolean): void;
					public static isSubmitButtonEnabled(param0: android.view.View): boolean;
					public static setQueryRefinementEnabled(param0: android.view.View, param1: boolean): void;
					public static isQueryRefinementEnabled(param0: android.view.View): boolean;
					public static setMaxWidth(param0: android.view.View, param1: number): void;
				}
				export module SearchViewCompatHoneycomb {
					export class OnCloseListenerCompatBridge {
						public onClose(): boolean;
					}
					export class OnQueryTextListenerCompatBridge {
						public onQueryTextSubmit(param0: string): boolean;
						public onQueryTextChange(param0: string): boolean;
					}
				}
			}
		}
	}
}
