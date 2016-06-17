/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />

declare module android {
	export module app {
		export class AliasActivity {
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public constructor(param0: android.content.Context);
			public constructor();
			public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onCreate(param0: android.os.Bundle): void;
		}
	}
}
