/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.widget.CalendarView.d.ts" />

declare module android {
	export module widget {
		export class DatePicker {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public init(param0: number, param1: number, param2: number, param3: android.widget.DatePicker.OnDateChangedListener): void;
			public updateDate(param0: number, param1: number, param2: number): void;
			public getYear(): number;
			public getMonth(): number;
			public getDayOfMonth(): number;
			public getMinDate(): number;
			public setMinDate(param0: number): void;
			public getMaxDate(): number;
			public setMaxDate(param0: number): void;
			public setEnabled(param0: boolean): void;
			public isEnabled(): boolean;
			public getAccessibilityClassName(): string;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public setFirstDayOfWeek(param0: number): void;
			public getFirstDayOfWeek(): number;
			public getCalendarViewShown(): boolean;
			public getCalendarView(): android.widget.CalendarView;
			public setCalendarViewShown(param0: boolean): void;
			public getSpinnersShown(): boolean;
			public setSpinnersShown(param0: boolean): void;
			public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
		}
		export module DatePicker {
			export class OnDateChangedListener {
				public onDateChanged(param0: android.widget.DatePicker, param1: number, param2: number, param3: number): void;
			}
		}
	}
}
