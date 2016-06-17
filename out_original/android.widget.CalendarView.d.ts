/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module widget {
		export class CalendarView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setShownWeekCount(param0: number): void;
			public getShownWeekCount(): number;
			public setSelectedWeekBackgroundColor(param0: number): void;
			public getSelectedWeekBackgroundColor(): number;
			public setFocusedMonthDateColor(param0: number): void;
			public getFocusedMonthDateColor(): number;
			public setUnfocusedMonthDateColor(param0: number): void;
			public getUnfocusedMonthDateColor(): number;
			public setWeekNumberColor(param0: number): void;
			public getWeekNumberColor(): number;
			public setWeekSeparatorLineColor(param0: number): void;
			public getWeekSeparatorLineColor(): number;
			public setSelectedDateVerticalBar(param0: number): void;
			public setSelectedDateVerticalBar(param0: android.graphics.drawable.Drawable): void;
			public getSelectedDateVerticalBar(): android.graphics.drawable.Drawable;
			public setWeekDayTextAppearance(param0: number): void;
			public getWeekDayTextAppearance(): number;
			public setDateTextAppearance(param0: number): void;
			public getDateTextAppearance(): number;
			public getMinDate(): number;
			public setMinDate(param0: number): void;
			public getMaxDate(): number;
			public setMaxDate(param0: number): void;
			public setShowWeekNumber(param0: boolean): void;
			public getShowWeekNumber(): boolean;
			public getFirstDayOfWeek(): number;
			public setFirstDayOfWeek(param0: number): void;
			public setOnDateChangeListener(param0: android.widget.CalendarView.OnDateChangeListener): void;
			public getDate(): number;
			public setDate(param0: number): void;
			public setDate(param0: number, param1: boolean, param2: boolean): void;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public getAccessibilityClassName(): string;
		}
		export module CalendarView {
			export class OnDateChangeListener {
				public onSelectedDayChange(param0: android.widget.CalendarView, param1: number, param2: number, param3: number): void;
			}
		}
	}
}
