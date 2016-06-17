/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module app {
		export class MediaRouteActionProvider {
			public constructor();
			public constructor(param0: android.content.Context);
			public setRouteTypes(param0: number): void;
			public setExtendedSettingsClickListener(param0: android.view.View.OnClickListener): void;
			public onCreateActionView(param0: android.view.MenuItem): android.view.View;
			public onCreateActionView(): android.view.View;
			public onCreateActionView(param0: android.view.MenuItem): android.view.View;
			public onPerformDefaultAction(): boolean;
			public overridesItemVisibility(): boolean;
			public isVisible(): boolean;
		}
	}
}
