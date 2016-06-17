/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class ContextCompatApi23 {
					public static getColorStateList(param0: android.content.Context, param1: number): android.content.res.ColorStateList;
					public static getColor(param0: android.content.Context, param1: number): number;
				}
			}
		}
	}
}
