/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class ActionBarActivity {
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
					public constructor(param0: android.content.Context);
					public constructor();
				}
			}
		}
	}
}
