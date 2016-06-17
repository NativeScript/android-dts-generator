/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export module res {
					export class ResourcesCompatApi23 {
						public static getColor(param0: android.content.res.Resources, param1: number, param2: android.content.res.Resources.Theme): number;
						public static getColorStateList(param0: android.content.res.Resources, param1: number, param2: android.content.res.Resources.Theme): android.content.res.ColorStateList;
					}
				}
			}
		}
	}
}
