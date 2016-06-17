/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class NavItemSelectedListener {
					public constructor();
					public constructor(param0: android.support.v7.app.ActionBar.OnNavigationListener);
					public onItemSelected(param0: android.widget.AdapterView, param1: android.view.View, param2: number, param3: number): void;
					public onNothingSelected(param0: android.widget.AdapterView): void;
				}
			}
		}
	}
}
