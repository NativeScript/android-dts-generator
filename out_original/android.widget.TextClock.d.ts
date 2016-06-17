/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class TextClock {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public getFormat12Hour(): string;
			public setFormat12Hour(param0: string): void;
			public getFormat24Hour(): string;
			public setFormat24Hour(param0: string): void;
			public is24HourModeEnabled(): boolean;
			public getTimeZone(): string;
			public setTimeZone(param0: string): void;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public static DEFAULT_FORMAT_12_HOUR: string;
			public static DEFAULT_FORMAT_24_HOUR: string;
		}
	}
}
