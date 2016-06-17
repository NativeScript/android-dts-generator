/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class AndroidTestCase {
			public constructor(param0: string);
			public constructor();
			public setUp(): void;
			public tearDown(): void;
			public testAndroidTestCaseSetupProperly(): void;
			public setContext(param0: android.content.Context): void;
			public getContext(): android.content.Context;
			public assertActivityRequiresPermission(param0: string, param1: string, param2: string): void;
			public assertReadingContentUriRequiresPermission(param0: android.net.Uri, param1: string): void;
			public assertWritingContentUriRequiresPermission(param0: android.net.Uri, param1: string): void;
			public scrubClass(param0: java.lang.Class): void;
			public mContext: android.content.Context;
		}
	}
}
