/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />

declare module android {
	export module content {
		export class ComponentCallbacks {
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onLowMemory(): void;
		}
	}
}
