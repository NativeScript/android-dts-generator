/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewCompatHC {
					public static getAlpha(param0: android.view.View): number;
					public static setLayerType(param0: android.view.View, param1: number, param2: android.graphics.Paint): void;
					public static getLayerType(param0: android.view.View): number;
					public static resolveSizeAndState(param0: number, param1: number, param2: number): number;
					public static getMeasuredWidthAndState(param0: android.view.View): number;
					public static getMeasuredHeightAndState(param0: android.view.View): number;
					public static getMeasuredState(param0: android.view.View): number;
					public static getTranslationX(param0: android.view.View): number;
					public static getTranslationY(param0: android.view.View): number;
					public static getX(param0: android.view.View): number;
					public static getY(param0: android.view.View): number;
					public static getRotation(param0: android.view.View): number;
					public static getRotationX(param0: android.view.View): number;
					public static getRotationY(param0: android.view.View): number;
					public static getScaleX(param0: android.view.View): number;
					public static getScaleY(param0: android.view.View): number;
					public static setTranslationX(param0: android.view.View, param1: number): void;
					public static setTranslationY(param0: android.view.View, param1: number): void;
					public static setAlpha(param0: android.view.View, param1: number): void;
					public static setX(param0: android.view.View, param1: number): void;
					public static setY(param0: android.view.View, param1: number): void;
					public static setRotation(param0: android.view.View, param1: number): void;
					public static setRotationX(param0: android.view.View, param1: number): void;
					public static setRotationY(param0: android.view.View, param1: number): void;
					public static setScaleX(param0: android.view.View, param1: number): void;
					public static setScaleY(param0: android.view.View, param1: number): void;
					public static setPivotX(param0: android.view.View, param1: number): void;
					public static setPivotY(param0: android.view.View, param1: number): void;
					public static getPivotX(param0: android.view.View): number;
					public static getPivotY(param0: android.view.View): number;
					public static jumpDrawablesToCurrentState(param0: android.view.View): void;
					public static setSaveFromParentEnabled(param0: android.view.View, param1: boolean): void;
					public static setActivated(param0: android.view.View, param1: boolean): void;
					public static combineMeasuredStates(param0: number, param1: number): number;
				}
			}
		}
	}
}
