/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />

declare module android {
	export module view {
		export class MenuInflater {
			public constructor();
			public constructor(param0: android.content.Context);
			public inflate(param0: number, param1: android.view.Menu): void;
		}
	}
}
