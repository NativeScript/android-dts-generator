/// <reference path="./_helpers.d.ts" />

declare module android {
	export module database {
		export class DataSetObserver {
			public constructor();
			public onChanged(): void;
			public onInvalidated(): void;
		}
	}
}
