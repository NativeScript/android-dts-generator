/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module widget {
		export class SeekBar {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setOnSeekBarChangeListener(param0: android.widget.SeekBar.OnSeekBarChangeListener): void;
			public getAccessibilityClassName(): string;
		}
		export module SeekBar {
			export class OnSeekBarChangeListener {
				public onProgressChanged(param0: android.widget.SeekBar, param1: number, param2: boolean): void;
				public onStartTrackingTouch(param0: android.widget.SeekBar): void;
				public onStopTrackingTouch(param0: android.widget.SeekBar): void;
			}
		}
	}
}
