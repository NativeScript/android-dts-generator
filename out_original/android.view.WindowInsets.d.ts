/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />

declare module android {
	export module view {
		export class WindowInsets {
			public constructor();
			public constructor(param0: android.view.WindowInsets);
			public getSystemWindowInsetLeft(): number;
			public getSystemWindowInsetTop(): number;
			public getSystemWindowInsetRight(): number;
			public getSystemWindowInsetBottom(): number;
			public hasSystemWindowInsets(): boolean;
			public hasInsets(): boolean;
			public isConsumed(): boolean;
			public isRound(): boolean;
			public consumeSystemWindowInsets(): android.view.WindowInsets;
			public replaceSystemWindowInsets(param0: number, param1: number, param2: number, param3: number): android.view.WindowInsets;
			public replaceSystemWindowInsets(param0: android.graphics.Rect): android.view.WindowInsets;
			public getStableInsetTop(): number;
			public getStableInsetLeft(): number;
			public getStableInsetRight(): number;
			public getStableInsetBottom(): number;
			public hasStableInsets(): boolean;
			public consumeStableInsets(): android.view.WindowInsets;
			public toString(): string;
		}
	}
}
