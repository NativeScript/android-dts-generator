/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module webkit {
		export class DateSorter {
			public constructor();
			public constructor(param0: android.content.Context);
			public getIndex(param0: number): number;
			public getLabel(param0: number): string;
			public getBoundary(param0: number): number;
			public static DAY_COUNT: number;
		}
	}
}
