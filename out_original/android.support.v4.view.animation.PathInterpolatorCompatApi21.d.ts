/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module animation {
					export class PathInterpolatorCompatApi21 {
						public static create(param0: android.graphics.Path): android.view.animation.Interpolator;
						public static create(param0: number, param1: number): android.view.animation.Interpolator;
						public static create(param0: number, param1: number, param2: number, param3: number): android.view.animation.Interpolator;
					}
				}
			}
		}
	}
}
