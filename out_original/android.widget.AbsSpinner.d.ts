/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />
/// <reference path="./android.widget.SpinnerAdapter.d.ts" />

declare module android {
	export module widget {
		export class AbsSpinner {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setAdapter(param0: android.widget.Adapter): void;
			public setAdapter(param0: android.widget.SpinnerAdapter): void;
			public onMeasure(param0: number, param1: number): void;
			public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
			public setSelection(param0: number): void;
			public setSelection(param0: number, param1: boolean): void;
			public setSelection(param0: number): void;
			public getSelectedView(): android.view.View;
			public requestLayout(): void;
			public getAdapter(): android.widget.Adapter;
			public getAdapter(): android.widget.SpinnerAdapter;
			public getCount(): number;
			public pointToPosition(param0: number, param1: number): number;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public getAccessibilityClassName(): string;
		}
	}
}
