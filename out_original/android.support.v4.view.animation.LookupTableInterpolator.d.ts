/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module animation {
					export class LookupTableInterpolator {
						public constructor();
						public constructor(param0: native.Array<number>);
						public getInterpolation(param0: number): number;
					}
				}
			}
		}
	}
}
