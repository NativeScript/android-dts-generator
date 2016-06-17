/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Loader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class LoaderTestCase {
			public constructor(param0: string);
			public constructor();
			public getLoaderResultSynchronously(param0: android.content.Loader): java.lang.Object;
		}
	}
}
