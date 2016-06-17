/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.io.File.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class ContextCompatHoneycomb {
					public static getObbDir(param0: android.content.Context): java.io.File;
				}
			}
		}
	}
}
