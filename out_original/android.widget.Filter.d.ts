/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module widget {
		export class Filter {
			public constructor();
			public filter(param0: string): void;
			public filter(param0: string, param1: android.widget.Filter.FilterListener): void;
			public performFiltering(param0: string): android.widget.Filter.FilterResults;
			public publishResults(param0: string, param1: android.widget.Filter.FilterResults): void;
			public convertResultToString(param0: java.lang.Object): string;
		}
		export module Filter {
			export class FilterListener {
				public onFilterComplete(param0: number): void;
			}
			export class FilterResults {
				public constructor();
				public count: number;
				public values: java.lang.Object;
			}
		}
	}
}
