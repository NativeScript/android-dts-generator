/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module widget {
		export class AutoCompleteTextView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setOnClickListener(param0: android.view.View.OnClickListener): void;
			public setCompletionHint(param0: string): void;
			public getCompletionHint(): string;
			public getDropDownWidth(): number;
			public setDropDownWidth(param0: number): void;
			public getDropDownHeight(): number;
			public setDropDownHeight(param0: number): void;
			public getDropDownAnchor(): number;
			public setDropDownAnchor(param0: number): void;
			public getDropDownBackground(): android.graphics.drawable.Drawable;
			public setDropDownBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
			public setDropDownBackgroundResource(param0: number): void;
			public setDropDownVerticalOffset(param0: number): void;
			public getDropDownVerticalOffset(): number;
			public setDropDownHorizontalOffset(param0: number): void;
			public getDropDownHorizontalOffset(): number;
			public getThreshold(): number;
			public setThreshold(param0: number): void;
			public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;
			public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): void;
			public getItemClickListener(): android.widget.AdapterView.OnItemClickListener;
			public getItemSelectedListener(): android.widget.AdapterView.OnItemSelectedListener;
			public getOnItemClickListener(): android.widget.AdapterView.OnItemClickListener;
			public getOnItemSelectedListener(): android.widget.AdapterView.OnItemSelectedListener;
			public setOnDismissListener(param0: android.widget.AutoCompleteTextView.OnDismissListener): void;
			public getAdapter(): android.widget.ListAdapter;
			public setAdapter(param0: android.widget.ListAdapter): void;
			public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public enoughToFilter(): boolean;
			public isPopupShowing(): boolean;
			public convertSelectionToString(param0: java.lang.Object): string;
			public clearListSelection(): void;
			public setListSelection(param0: number): void;
			public getListSelection(): number;
			public performFiltering(param0: string, param1: number): void;
			public performCompletion(): void;
			public onCommitCompletion(param0: android.view.inputmethod.CompletionInfo): void;
			public isPerformingCompletion(): boolean;
			public setText(param0: string, param1: android.widget.TextView.BufferType): void;
			public setText(param0: string): void;
			public setText(param0: native.Array<string>, param1: number, param2: number): void;
			public setText(param0: number): void;
			public setText(param0: number, param1: android.widget.TextView.BufferType): void;
			public setText(param0: string, param1: boolean): void;
			public replaceText(param0: string): void;
			public onFilterComplete(param0: number): void;
			public onWindowFocusChanged(param0: boolean): void;
			public onDisplayHint(param0: number): void;
			public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public dismissDropDown(): void;
			public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;
			public showDropDown(): void;
			public setValidator(param0: android.widget.AutoCompleteTextView.Validator): void;
			public getValidator(): android.widget.AutoCompleteTextView.Validator;
			public performValidation(): void;
			public getFilter(): android.widget.Filter;
		}
		export module AutoCompleteTextView {
			export class OnDismissListener {
				public onDismiss(): void;
			}
			export class Validator {
				public isValid(param0: string): boolean;
				public fixText(param0: string): string;
			}
		}
	}
}
