/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class ActivityTestCase {
			public constructor(param0: string);
			public constructor();
			public getActivity(): android.app.Activity;
			public setActivity(param0: android.app.Activity): void;
			public scrubClass(param0: java.lang.Class): void;
		}
	}
}
