/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module app {
		export class FragmentContainer {
			public constructor();
			public onFindViewById(param0: number): android.view.View;
			public onHasView(): boolean;
		}
	}
}
