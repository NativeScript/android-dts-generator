/// <reference path="./_helpers.d.ts" />

declare module android {
	export module database {
		export class DataSetObservable {
			public constructor();
			public notifyChanged(): void;
			public notifyInvalidated(): void;
		}
	}
}
