/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.SearchableInfo.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.widget.CursorAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class SearchView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setSearchableInfo(param0: android.app.SearchableInfo): void;
			public setImeOptions(param0: number): void;
			public getImeOptions(): number;
			public setInputType(param0: number): void;
			public getInputType(): number;
			public setOnQueryTextListener(param0: android.widget.SearchView.OnQueryTextListener): void;
			public setOnCloseListener(param0: android.widget.SearchView.OnCloseListener): void;
			public setOnQueryTextFocusChangeListener(param0: android.view.View.OnFocusChangeListener): void;
			public setOnSuggestionListener(param0: android.widget.SearchView.OnSuggestionListener): void;
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
			public setSuggestionsAdapter(param0: android.widget.CursorAdapter): void;
			public getSuggestionsAdapter(): android.widget.CursorAdapter;
			public setMaxWidth(param0: number): void;
			public getMaxWidth(): number;
			public onMeasure(param0: number, param1: number): void;
			public onDetachedFromWindow(): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onWindowFocusChanged(param0: boolean): void;
			public onActionViewCollapsed(): void;
			public onActionViewExpanded(): void;
			public getAccessibilityClassName(): string;
		}
		export module SearchView {
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
		}
	}
}
