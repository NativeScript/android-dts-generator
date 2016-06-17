/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class BundleCompatDonut {
					public static getBinder(param0: android.os.Bundle, param1: string): android.os.IBinder;
					public static putBinder(param0: android.os.Bundle, param1: string, param2: android.os.IBinder): void;
				}
			}
		}
	}
}
