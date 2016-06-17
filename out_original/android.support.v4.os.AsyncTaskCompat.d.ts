/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.AsyncTask.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class AsyncTaskCompat {
					public static executeParallel(param0: android.os.AsyncTask, param1: native.Array<java.lang.Object>): android.os.AsyncTask;
				}
			}
		}
	}
}
