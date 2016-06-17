/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.SearchableInfo.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.widget.CursorAdapter.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class SearchView {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setSearchableInfo(param0: android.app.SearchableInfo): void;
					public setAppSearchData(param0: android.os.Bundle): void;
					public setImeOptions(param0: number): void;
					public getImeOptions(): number;
					public setInputType(param0: number): void;
					public getInputType(): number;
					public requestFocus(): boolean;
					public requestFocus(param0: number): boolean;
					public requestFocus(param0: number, param1: android.graphics.Rect): boolean;
					public clearFocus(): void;
					public setOnQueryTextListener(param0: android.support.v7.widget.SearchView.OnQueryTextListener): void;
					public setOnCloseListener(param0: android.support.v7.widget.SearchView.OnCloseListener): void;
					public setOnQueryTextFocusChangeListener(param0: android.view.View.OnFocusChangeListener): void;
					public setOnSuggestionListener(param0: android.support.v7.widget.SearchView.OnSuggestionListener): void;
					public setOnSearchClickListener(param0: android.view.View.OnClickListener): void;
					public getQuery(): string;
					public setQuery(param0: string, param1: boolean): void;
					public setQueryHint(param0: string): void;
					public getQueryHint(): string;
					public setIconifiedByDefault(param0: boolean): void;
					public isIconfiedByDefault(): boolean;
					public setIconified(param0: boolean): void;
					public isIconified(): boolean;
					public setSubmitButtonEnabled(param0: boolean): void;
					public isSubmitButtonEnabled(): boolean;
					public setQueryRefinementEnabled(param0: boolean): void;
					public isQueryRefinementEnabled(): boolean;
					public setSuggestionsAdapter(param0: android.support.v4.widget.CursorAdapter): void;
					public getSuggestionsAdapter(): android.support.v4.widget.CursorAdapter;
					public setMaxWidth(param0: number): void;
					public getMaxWidth(): number;
					public onMeasure(param0: number, param1: number): void;
					public onDetachedFromWindow(): void;
					public onWindowFocusChanged(param0: boolean): void;
					public onActionViewCollapsed(): void;
					public onActionViewExpanded(): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
				}
				export module SearchView {
					export class AutoCompleteTextViewReflector {
					}
					export class OnCloseListener {
						public onClose(): boolean;
					}
					export class OnQueryTextListener {
						public onQueryTextSubmit(param0: string): boolean;
						public onQueryTextChange(param0: string): boolean;
					}
					export class OnSuggestionListener {
						public onSuggestionSelect(param0: number): boolean;
						public onSuggestionClick(param0: number): boolean;
					}
					export class SavedState {
						public constructor(param0: android.os.Parcelable);
						public constructor();
						public constructor(param0: android.os.Parcel);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public toString(): string;
						public static CREATOR: android.os.Parcelable.Creator;
					}
					export class SearchAutoComplete {
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public setThreshold(param0: number): void;
						public replaceText(param0: string): void;
						public performCompletion(): void;
						public onWindowFocusChanged(param0: boolean): void;
						public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
						public enoughToFilter(): boolean;
						public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;
					}
				}
			}
		}
	}
}
