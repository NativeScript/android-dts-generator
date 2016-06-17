/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NoSaveStateFrameLayout {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public dispatchSaveInstanceState(param0: android.util.SparseArray): void;
					public dispatchRestoreInstanceState(param0: android.util.SparseArray): void;
				}
			}
		}
	}
}
