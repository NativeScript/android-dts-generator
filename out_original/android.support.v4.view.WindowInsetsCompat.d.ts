/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class WindowInsetsCompat {
					public getSystemWindowInsetLeft(): number;
					public getSystemWindowInsetTop(): number;
					public getSystemWindowInsetRight(): number;
					public getSystemWindowInsetBottom(): number;
					public hasSystemWindowInsets(): boolean;
					public hasInsets(): boolean;
					public isConsumed(): boolean;
					public isRound(): boolean;
					public consumeSystemWindowInsets(): android.support.v4.view.WindowInsetsCompat;
					public replaceSystemWindowInsets(param0: number, param1: number, param2: number, param3: number): android.support.v4.view.WindowInsetsCompat;
					public replaceSystemWindowInsets(param0: android.graphics.Rect): android.support.v4.view.WindowInsetsCompat;
					public getStableInsetTop(): number;
					public getStableInsetLeft(): number;
					public getStableInsetRight(): number;
					public getStableInsetBottom(): number;
					public hasStableInsets(): boolean;
					public consumeStableInsets(): android.support.v4.view.WindowInsetsCompat;
				}
			}
		}
	}
}
