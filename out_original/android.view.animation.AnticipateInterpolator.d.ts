/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module view {
		export module animation {
			export class AnticipateInterpolator {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public getInterpolation(param0: number): number;
			}
		}
	}
}
