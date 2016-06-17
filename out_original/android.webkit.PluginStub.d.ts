/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module webkit {
		export class PluginStub {
			public getEmbeddedView(param0: number, param1: android.content.Context): android.view.View;
			public getFullScreenView(param0: number, param1: android.content.Context): android.view.View;
		}
	}
}
