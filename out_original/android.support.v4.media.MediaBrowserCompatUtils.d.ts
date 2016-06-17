/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaBrowserCompatUtils {
					public constructor();
					public static areSameOptions(param0: android.os.Bundle, param1: android.os.Bundle): boolean;
					public static hasDuplicatedItems(param0: android.os.Bundle, param1: android.os.Bundle): boolean;
					public static applyOptions(param0: java.util.List, param1: android.os.Bundle): java.util.List;
				}
			}
		}
	}
}
