/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class CancellationSignalCompatJellybean {
					public static create(): java.lang.Object;
					public static cancel(param0: java.lang.Object): void;
				}
			}
		}
	}
}
