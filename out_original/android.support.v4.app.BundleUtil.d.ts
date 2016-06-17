/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class BundleUtil {
					public static getBundleArrayFromBundle(param0: android.os.Bundle, param1: string): native.Array<android.os.Bundle>;
				}
			}
		}
	}
}
