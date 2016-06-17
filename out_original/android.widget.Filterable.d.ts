/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />

declare module android {
	export module widget {
		export class Filterable {
			public getFilter(): android.widget.Filter;
		}
	}
}
