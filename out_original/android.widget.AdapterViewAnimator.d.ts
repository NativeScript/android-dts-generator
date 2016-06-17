/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.animation.ObjectAnimator.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />

declare module android {
	export module widget {
		export class AdapterViewAnimator {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setDisplayedChild(param0: number): void;
			public getDisplayedChild(): number;
			public showNext(): void;
			public showPrevious(): void;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onMeasure(param0: number, param1: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public getCurrentView(): android.view.View;
			public getInAnimation(): android.animation.ObjectAnimator;
			public setInAnimation(param0: android.animation.ObjectAnimator): void;
			public getOutAnimation(): android.animation.ObjectAnimator;
			public setOutAnimation(param0: android.animation.ObjectAnimator): void;
			public setInAnimation(param0: android.content.Context, param1: number): void;
			public setOutAnimation(param0: android.content.Context, param1: number): void;
			public setAnimateFirstView(param0: boolean): void;
			public getBaseline(): number;
			public getAdapter(): android.widget.Adapter;
			public setAdapter(param0: android.widget.Adapter): void;
			public setRemoteViewsAdapter(param0: android.content.Intent): void;
			public setSelection(param0: number): void;
			public getSelectedView(): android.view.View;
			public deferNotifyDataSetChanged(): void;
			public onRemoteAdapterConnected(): boolean;
			public onRemoteAdapterDisconnected(): void;
			public advance(): void;
			public fyiWillBeAdvancedByHostKThx(): void;
			public getAccessibilityClassName(): string;
		}
	}
}
