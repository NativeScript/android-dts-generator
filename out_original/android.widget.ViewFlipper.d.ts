/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module widget {
		export class ViewFlipper {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public onWindowVisibilityChanged(param0: number): void;
			public setFlipInterval(param0: number): void;
			public startFlipping(): void;
			public stopFlipping(): void;
			public getAccessibilityClassName(): string;
			public isFlipping(): boolean;
			public setAutoStart(param0: boolean): void;
			public isAutoStart(): boolean;
		}
	}
}
