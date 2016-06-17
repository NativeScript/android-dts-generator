/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.widget.Adapter.d.ts" />

declare module android {
	export module widget {
		export class AdapterViewFlipper {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public onWindowVisibilityChanged(param0: number): void;
			public setAdapter(param0: android.widget.Adapter): void;
			public getFlipInterval(): number;
			public setFlipInterval(param0: number): void;
			public startFlipping(): void;
			public stopFlipping(): void;
			public showNext(): void;
			public showPrevious(): void;
			public isFlipping(): boolean;
			public setAutoStart(param0: boolean): void;
			public isAutoStart(): boolean;
			public fyiWillBeAdvancedByHostKThx(): void;
			public getAccessibilityClassName(): string;
		}
	}
}
