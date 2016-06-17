/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.File.d.ts" />

declare module android {
	export module net {
		export class SSLSessionCache {
			public constructor();
			public constructor(param0: java.io.File);
			public constructor(param0: android.content.Context);
		}
	}
}
