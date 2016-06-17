/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module content {
		export class MutableContextWrapper {
			public constructor();
			public constructor(param0: android.content.Context);
			public setBaseContext(param0: android.content.Context): void;
		}
	}
}
