/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module view {
		export module accessibility {
			export class AccessibilityWindowInfo {
				public getType(): number;
				public getLayer(): number;
				public getRoot(): android.view.accessibility.AccessibilityNodeInfo;
				public getParent(): android.view.accessibility.AccessibilityWindowInfo;
				public getId(): number;
				public getBoundsInScreen(param0: android.graphics.Rect): void;
				public isActive(): boolean;
				public isFocused(): boolean;
				public isAccessibilityFocused(): boolean;
				public getChildCount(): number;
				public getChild(param0: number): android.view.accessibility.AccessibilityWindowInfo;
				public static obtain(): android.view.accessibility.AccessibilityWindowInfo;
				public static obtain(param0: android.view.accessibility.AccessibilityWindowInfo): android.view.accessibility.AccessibilityWindowInfo;
				public recycle(): void;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
				public static CREATOR: android.os.Parcelable.Creator;
				public static TYPE_ACCESSIBILITY_OVERLAY: number;
				public static TYPE_APPLICATION: number;
				public static TYPE_INPUT_METHOD: number;
				public static TYPE_SYSTEM: number;
			}
		}
	}
}
