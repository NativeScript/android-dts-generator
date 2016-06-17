/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class Pair {
					public constructor();
					public constructor(param0: java.lang.Object, param1: java.lang.Object);
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public static create(param0: java.lang.Object, param1: java.lang.Object): android.support.v4.util.Pair;
					public first: java.lang.Object;
					public second: java.lang.Object;
				}
			}
		}
	}
}
