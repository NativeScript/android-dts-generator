/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class Chronometer {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setBase(param0: number): void;
			public getBase(): number;
			public setFormat(param0: string): void;
			public getFormat(): string;
			public setOnChronometerTickListener(param0: android.widget.Chronometer.OnChronometerTickListener): void;
			public getOnChronometerTickListener(): android.widget.Chronometer.OnChronometerTickListener;
			public start(): void;
			public stop(): void;
			public onDetachedFromWindow(): void;
			public onWindowVisibilityChanged(param0: number): void;
			public getContentDescription(): string;
			public getAccessibilityClassName(): string;
		}
		export module Chronometer {
			export class OnChronometerTickListener {
				public onChronometerTick(param0: android.widget.Chronometer): void;
			}
		}
	}
}
