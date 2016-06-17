/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityWindowInfoCompat {
						public getType(): number;
						public getLayer(): number;
						public getRoot(): android.support.v4.view.accessibility.AccessibilityNodeInfoCompat;
						public getParent(): android.support.v4.view.accessibility.AccessibilityWindowInfoCompat;
						public getId(): number;
						public getBoundsInScreen(param0: android.graphics.Rect): void;
						public isActive(): boolean;
						public isFocused(): boolean;
						public isAccessibilityFocused(): boolean;
						public getChildCount(): number;
						public getChild(param0: number): android.support.v4.view.accessibility.AccessibilityWindowInfoCompat;
						public static obtain(): android.support.v4.view.accessibility.AccessibilityWindowInfoCompat;
						public static obtain(param0: android.support.v4.view.accessibility.AccessibilityWindowInfoCompat): android.support.v4.view.accessibility.AccessibilityWindowInfoCompat;
						public recycle(): void;
						public hashCode(): number;
						public equals(param0: java.lang.Object): boolean;
						public toString(): string;
						public static TYPE_APPLICATION: number;
						public static TYPE_INPUT_METHOD: number;
						public static TYPE_SYSTEM: number;
						public static TYPE_ACCESSIBILITY_OVERLAY: number;
					}
					export module AccessibilityWindowInfoCompat {
						export class AccessibilityWindowInfoApi21Impl {
							public obtain(param0: java.lang.Object): java.lang.Object;
							public obtain(): java.lang.Object;
							public obtain(param0: java.lang.Object): java.lang.Object;
							public getType(param0: java.lang.Object): number;
							public getLayer(param0: java.lang.Object): number;
							public getRoot(param0: java.lang.Object): java.lang.Object;
							public getParent(param0: java.lang.Object): java.lang.Object;
							public getId(param0: java.lang.Object): number;
							public getBoundsInScreen(param0: java.lang.Object, param1: android.graphics.Rect): void;
							public isActive(param0: java.lang.Object): boolean;
							public isFocused(param0: java.lang.Object): boolean;
							public isAccessibilityFocused(param0: java.lang.Object): boolean;
							public getChildCount(param0: java.lang.Object): number;
							public getChild(param0: java.lang.Object, param1: number): java.lang.Object;
							public recycle(param0: java.lang.Object): void;
						}
						export class AccessibilityWindowInfoImpl {
							public obtain(): java.lang.Object;
							public obtain(param0: java.lang.Object): java.lang.Object;
							public getType(param0: java.lang.Object): number;
							public getLayer(param0: java.lang.Object): number;
							public getRoot(param0: java.lang.Object): java.lang.Object;
							public getParent(param0: java.lang.Object): java.lang.Object;
							public getId(param0: java.lang.Object): number;
							public getBoundsInScreen(param0: java.lang.Object, param1: android.graphics.Rect): void;
							public isActive(param0: java.lang.Object): boolean;
							public isFocused(param0: java.lang.Object): boolean;
							public isAccessibilityFocused(param0: java.lang.Object): boolean;
							public getChildCount(param0: java.lang.Object): number;
							public getChild(param0: java.lang.Object, param1: number): java.lang.Object;
							public recycle(param0: java.lang.Object): void;
						}
						export class AccessibilityWindowInfoStubImpl {
							public obtain(): java.lang.Object;
							public obtain(param0: java.lang.Object): java.lang.Object;
							public getType(param0: java.lang.Object): number;
							public getLayer(param0: java.lang.Object): number;
							public getRoot(param0: java.lang.Object): java.lang.Object;
							public getParent(param0: java.lang.Object): java.lang.Object;
							public getId(param0: java.lang.Object): number;
							public getBoundsInScreen(param0: java.lang.Object, param1: android.graphics.Rect): void;
							public isActive(param0: java.lang.Object): boolean;
							public isFocused(param0: java.lang.Object): boolean;
							public isAccessibilityFocused(param0: java.lang.Object): boolean;
							public getChildCount(param0: java.lang.Object): number;
							public getChild(param0: java.lang.Object, param1: number): java.lang.Object;
							public recycle(param0: java.lang.Object): void;
						}
					}
				}
			}
		}
	}
}
