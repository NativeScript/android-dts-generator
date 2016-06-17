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
				export class SearchViewCompat {
					public static newSearchView(param0: android.content.Context): android.view.View;
					public static setSearchableInfo(param0: android.view.View, param1: android.content.ComponentName): void;
					public static setImeOptions(param0: android.view.View, param1: number): void;
					public static setInputType(param0: android.view.View, param1: number): void;
					public static setOnQueryTextListener(param0: android.view.View, param1: android.support.v4.widget.SearchViewCompat.OnQueryTextListenerCompat): void;
					public static setOnCloseListener(param0: android.view.View, param1: android.support.v4.widget.SearchViewCompat.OnCloseListenerCompat): void;
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
				export module SearchViewCompat {
					export class OnCloseListenerCompat {
						public constructor();
						public onClose(): boolean;
					}
					export class OnQueryTextListenerCompat {
						public constructor();
						public onQueryTextSubmit(param0: string): boolean;
						public onQueryTextChange(param0: string): boolean;
					}
					export class SearchViewCompatHoneycombImpl {
						public newSearchView(param0: android.content.Context): android.view.View;
						public setSearchableInfo(param0: android.view.View, param1: android.content.ComponentName): void;
						public newOnQueryTextListener(param0: android.support.v4.widget.SearchViewCompat.OnQueryTextListenerCompat): java.lang.Object;
						public setOnQueryTextListener(param0: java.lang.Object, param1: java.lang.Object): void;
						public newOnCloseListener(param0: android.support.v4.widget.SearchViewCompat.OnCloseListenerCompat): java.lang.Object;
						public setOnCloseListener(param0: java.lang.Object, param1: java.lang.Object): void;
						public getQuery(param0: android.view.View): string;
						public setQuery(param0: android.view.View, param1: string, param2: boolean): void;
						public setQueryHint(param0: android.view.View, param1: string): void;
						public setIconified(param0: android.view.View, param1: boolean): void;
						public isIconified(param0: android.view.View): boolean;
						public setSubmitButtonEnabled(param0: android.view.View, param1: boolean): void;
						public isSubmitButtonEnabled(param0: android.view.View): boolean;
						public setQueryRefinementEnabled(param0: android.view.View, param1: boolean): void;
						public isQueryRefinementEnabled(param0: android.view.View): boolean;
						public setMaxWidth(param0: android.view.View, param1: number): void;
					}
					export class SearchViewCompatIcsImpl {
						public newSearchView(param0: android.content.Context): android.view.View;
						public setImeOptions(param0: android.view.View, param1: number): void;
						public setInputType(param0: android.view.View, param1: number): void;
					}
					export class SearchViewCompatImpl {
						public newSearchView(param0: android.content.Context): android.view.View;
						public setSearchableInfo(param0: android.view.View, param1: android.content.ComponentName): void;
						public setImeOptions(param0: android.view.View, param1: number): void;
						public setInputType(param0: android.view.View, param1: number): void;
						public newOnQueryTextListener(param0: android.support.v4.widget.SearchViewCompat.OnQueryTextListenerCompat): java.lang.Object;
						public setOnQueryTextListener(param0: java.lang.Object, param1: java.lang.Object): void;
						public newOnCloseListener(param0: android.support.v4.widget.SearchViewCompat.OnCloseListenerCompat): java.lang.Object;
						public setOnCloseListener(param0: java.lang.Object, param1: java.lang.Object): void;
						public getQuery(param0: android.view.View): string;
						public setQuery(param0: android.view.View, param1: string, param2: boolean): void;
						public setQueryHint(param0: android.view.View, param1: string): void;
						public setIconified(param0: android.view.View, param1: boolean): void;
						public isIconified(param0: android.view.View): boolean;
						public setSubmitButtonEnabled(param0: android.view.View, param1: boolean): void;
						public isSubmitButtonEnabled(param0: android.view.View): boolean;
						public setQueryRefinementEnabled(param0: android.view.View, param1: boolean): void;
						public isQueryRefinementEnabled(param0: android.view.View): boolean;
						public setMaxWidth(param0: android.view.View, param1: number): void;
					}
					export class SearchViewCompatStubImpl {
						public newSearchView(param0: android.content.Context): android.view.View;
						public setSearchableInfo(param0: android.view.View, param1: android.content.ComponentName): void;
						public setImeOptions(param0: android.view.View, param1: number): void;
						public setInputType(param0: android.view.View, param1: number): void;
						public newOnQueryTextListener(param0: android.support.v4.widget.SearchViewCompat.OnQueryTextListenerCompat): java.lang.Object;
						public setOnQueryTextListener(param0: java.lang.Object, param1: java.lang.Object): void;
						public newOnCloseListener(param0: android.support.v4.widget.SearchViewCompat.OnCloseListenerCompat): java.lang.Object;
						public setOnCloseListener(param0: java.lang.Object, param1: java.lang.Object): void;
						public getQuery(param0: android.view.View): string;
						public setQuery(param0: android.view.View, param1: string, param2: boolean): void;
						public setQueryHint(param0: android.view.View, param1: string): void;
						public setIconified(param0: android.view.View, param1: boolean): void;
						public isIconified(param0: android.view.View): boolean;
						public setSubmitButtonEnabled(param0: android.view.View, param1: boolean): void;
						public isSubmitButtonEnabled(param0: android.view.View): boolean;
						public setQueryRefinementEnabled(param0: android.view.View, param1: boolean): void;
						public isQueryRefinementEnabled(param0: android.view.View): boolean;
						public setMaxWidth(param0: android.view.View, param1: number): void;
					}
				}
			}
		}
	}
}
