/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class MarginLayoutParamsCompatJellybeanMr1 {
					public static getMarginStart(param0: android.view.ViewGroup.MarginLayoutParams): number;
					public static getMarginEnd(param0: android.view.ViewGroup.MarginLayoutParams): number;
					public static setMarginStart(param0: android.view.ViewGroup.MarginLayoutParams, param1: number): void;
					public static setMarginEnd(param0: android.view.ViewGroup.MarginLayoutParams, param1: number): void;
					public static isMarginRelative(param0: android.view.ViewGroup.MarginLayoutParams): boolean;
					public static getLayoutDirection(param0: android.view.ViewGroup.MarginLayoutParams): number;
					public static setLayoutDirection(param0: android.view.ViewGroup.MarginLayoutParams, param1: number): void;
					public static resolveLayoutDirection(param0: android.view.ViewGroup.MarginLayoutParams, param1: number): void;
				}
			}
		}
	}
}
