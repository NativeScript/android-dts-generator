/// <reference path="./_helpers.d.ts" />

declare module android {
	export module util {
		export class MonthDisplayHelper {
			public constructor();
			public constructor(param0: number, param1: number, param2: number);
			public constructor(param0: number, param1: number);
			public getYear(): number;
			public getMonth(): number;
			public getWeekStartDay(): number;
			public getFirstDayOfMonth(): number;
			public getNumberOfDaysInMonth(): number;
			public getOffset(): number;
			public getDigitsForRow(param0: number): native.Array<number>;
			public getDayAt(param0: number, param1: number): number;
			public getRowOf(param0: number): number;
			public getColumnOf(param0: number): number;
			public previousMonth(): void;
			public nextMonth(): void;
			public isWithinCurrentMonth(param0: number, param1: number): boolean;
		}
	}
}
