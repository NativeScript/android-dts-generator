/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module view {
		export module animation {
			export class PathInterpolator {
				public constructor();
				public constructor(param0: android.graphics.Path);
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public getInterpolation(param0: number): number;
			}
		}
	}
}