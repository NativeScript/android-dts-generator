/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />

declare module android {
	export module widget {
		export class TimePicker {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setHour(param0: number): void;
			public getHour(): number;
			public setMinute(param0: number): void;
			public getMinute(): number;
			public setCurrentHour(param0: java.lang.Integer): void;
			public getCurrentHour(): java.lang.Integer;
			public setCurrentMinute(param0: java.lang.Integer): void;
			public getCurrentMinute(): java.lang.Integer;
			public setIs24HourView(param0: java.lang.Boolean): void;
			public is24HourView(): boolean;
			public setOnTimeChangedListener(param0: android.widget.TimePicker.OnTimeChangedListener): void;
			public setEnabled(param0: boolean): void;
			public isEnabled(): boolean;
			public getBaseline(): number;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public getAccessibilityClassName(): string;
		}
		export module TimePicker {
			export class OnTimeChangedListener {
				public onTimeChanged(param0: android.widget.TimePicker, param1: number, param2: number): void;
			}
		}
	}
}
