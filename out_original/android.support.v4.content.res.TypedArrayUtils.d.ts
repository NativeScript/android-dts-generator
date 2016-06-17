/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.TypedArray.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export module res {
					export class TypedArrayUtils {
						public constructor();
						public static getBoolean(param0: android.content.res.TypedArray, param1: number, param2: number, param3: boolean): boolean;
						public static getDrawable(param0: android.content.res.TypedArray, param1: number, param2: number): android.graphics.drawable.Drawable;
						public static getInt(param0: android.content.res.TypedArray, param1: number, param2: number, param3: number): number;
						public static getResourceId(param0: android.content.res.TypedArray, param1: number, param2: number, param3: number): number;
						public static getString(param0: android.content.res.TypedArray, param1: number, param2: number): string;
						public static getTextArray(param0: android.content.res.TypedArray, param1: number, param2: number): native.Array<java.lang.CharSequence>;
					}
				}
			}
		}
	}
}
