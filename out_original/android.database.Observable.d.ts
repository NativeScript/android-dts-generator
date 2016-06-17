/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module database {
		export class Observable {
			public constructor();
			public registerObserver(param0: java.lang.Object): void;
			public unregisterObserver(param0: java.lang.Object): void;
			public unregisterAll(): void;
			public mObservers: java.util.ArrayList;
		}
	}
}
