/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ObbInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module res {
			export class ObbScanner {
				public static getObbInfo(param0: string): android.content.res.ObbInfo;
			}
		}
	}
}
