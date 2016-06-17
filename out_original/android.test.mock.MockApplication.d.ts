/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />

declare module android {
	export module test {
		export module mock {
			export class MockApplication {
				public constructor(param0: android.content.Context);
				public constructor();
				public onCreate(): void;
				public onTerminate(): void;
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
			}
		}
	}
}
