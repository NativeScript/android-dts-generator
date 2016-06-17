/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module animation {
					export class PathInterpolatorDonut {
						public constructor();
						public constructor(param0: android.graphics.Path);
						public constructor(param0: number, param1: number);
						public constructor(param0: number, param1: number, param2: number, param3: number);
						public getInterpolation(param0: number): number;
					}
				}
			}
		}
	}
}
