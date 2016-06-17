/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module database {
				export class DatabaseUtilsCompat {
					public static concatenateWhere(param0: string, param1: string): string;
					public static appendSelectionArgs(param0: native.Array<string>, param1: native.Array<string>): native.Array<string>;
				}
			}
		}
	}
}
