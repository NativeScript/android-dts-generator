/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export module accessibility {
					export class AccessibilityRecordCompat {
						public constructor();
						public constructor(param0: java.lang.Object);
						public getImpl(): java.lang.Object;
						public static obtain(param0: android.support.v4.view.accessibility.AccessibilityRecordCompat): android.support.v4.view.accessibility.AccessibilityRecordCompat;
						public static obtain(): android.support.v4.view.accessibility.AccessibilityRecordCompat;
						public setSource(param0: android.view.View): void;
						public setSource(param0: android.view.View, param1: number): void;
						public getSource(): android.support.v4.view.accessibility.AccessibilityNodeInfoCompat;
						public getWindowId(): number;
						public isChecked(): boolean;
						public setChecked(param0: boolean): void;
						public isEnabled(): boolean;
						public setEnabled(param0: boolean): void;
						public isPassword(): boolean;
						public setPassword(param0: boolean): void;
						public isFullScreen(): boolean;
						public setFullScreen(param0: boolean): void;
						public isScrollable(): boolean;
						public setScrollable(param0: boolean): void;
						public getItemCount(): number;
						public setItemCount(param0: number): void;
						public getCurrentItemIndex(): number;
						public setCurrentItemIndex(param0: number): void;
						public getFromIndex(): number;
						public setFromIndex(param0: number): void;
						public getToIndex(): number;
						public setToIndex(param0: number): void;
						public getScrollX(): number;
						public setScrollX(param0: number): void;
						public getScrollY(): number;
						public setScrollY(param0: number): void;
						public getMaxScrollX(): number;
						public setMaxScrollX(param0: number): void;
						public getMaxScrollY(): number;
						public setMaxScrollY(param0: number): void;
						public getAddedCount(): number;
						public setAddedCount(param0: number): void;
						public getRemovedCount(): number;
						public setRemovedCount(param0: number): void;
						public getClassName(): string;
						public setClassName(param0: string): void;
						public getText(): java.util.List;
						public getBeforeText(): string;
						public setBeforeText(param0: string): void;
						public getContentDescription(): string;
						public setContentDescription(param0: string): void;
						public getParcelableData(): android.os.Parcelable;
						public setParcelableData(param0: android.os.Parcelable): void;
						public recycle(): void;
						public hashCode(): number;
						public equals(param0: java.lang.Object): boolean;
					}
					export module AccessibilityRecordCompat {
						export class AccessibilityRecordIcsImpl {
							public obtain(param0: java.lang.Object): java.lang.Object;
							public obtain(): java.lang.Object;
							public obtain(param0: java.lang.Object): java.lang.Object;
							public getAddedCount(param0: java.lang.Object): number;
							public getBeforeText(param0: java.lang.Object): string;
							public getClassName(param0: java.lang.Object): string;
							public getContentDescription(param0: java.lang.Object): string;
							public getCurrentItemIndex(param0: java.lang.Object): number;
							public getFromIndex(param0: java.lang.Object): number;
							public getItemCount(param0: java.lang.Object): number;
							public getParcelableData(param0: java.lang.Object): android.os.Parcelable;
							public getRemovedCount(param0: java.lang.Object): number;
							public getScrollX(param0: java.lang.Object): number;
							public getScrollY(param0: java.lang.Object): number;
							public getSource(param0: java.lang.Object): android.support.v4.view.accessibility.AccessibilityNodeInfoCompat;
							public getText(param0: java.lang.Object): java.util.List;
							public getToIndex(param0: java.lang.Object): number;
							public getWindowId(param0: java.lang.Object): number;
							public isChecked(param0: java.lang.Object): boolean;
							public isEnabled(param0: java.lang.Object): boolean;
							public isFullScreen(param0: java.lang.Object): boolean;
							public isPassword(param0: java.lang.Object): boolean;
							public isScrollable(param0: java.lang.Object): boolean;
							public recycle(param0: java.lang.Object): void;
							public setAddedCount(param0: java.lang.Object, param1: number): void;
							public setBeforeText(param0: java.lang.Object, param1: string): void;
							public setChecked(param0: java.lang.Object, param1: boolean): void;
							public setClassName(param0: java.lang.Object, param1: string): void;
							public setContentDescription(param0: java.lang.Object, param1: string): void;
							public setCurrentItemIndex(param0: java.lang.Object, param1: number): void;
							public setEnabled(param0: java.lang.Object, param1: boolean): void;
							public setFromIndex(param0: java.lang.Object, param1: number): void;
							public setFullScreen(param0: java.lang.Object, param1: boolean): void;
							public setItemCount(param0: java.lang.Object, param1: number): void;
							public setParcelableData(param0: java.lang.Object, param1: android.os.Parcelable): void;
							public setPassword(param0: java.lang.Object, param1: boolean): void;
							public setRemovedCount(param0: java.lang.Object, param1: number): void;
							public setScrollX(param0: java.lang.Object, param1: number): void;
							public setScrollY(param0: java.lang.Object, param1: number): void;
							public setScrollable(param0: java.lang.Object, param1: boolean): void;
							public setSource(param0: java.lang.Object, param1: android.view.View, param2: number): void;
							public setSource(param0: java.lang.Object, param1: android.view.View): void;
							public setToIndex(param0: java.lang.Object, param1: number): void;
						}
						export class AccessibilityRecordIcsMr1Impl {
							public getMaxScrollX(param0: java.lang.Object): number;
							public getMaxScrollY(param0: java.lang.Object): number;
							public setMaxScrollX(param0: java.lang.Object, param1: number): void;
							public setMaxScrollY(param0: java.lang.Object, param1: number): void;
						}
						export class AccessibilityRecordImpl {
							public obtain(): java.lang.Object;
							public obtain(param0: java.lang.Object): java.lang.Object;
							public setSource(param0: java.lang.Object, param1: android.view.View): void;
							public setSource(param0: java.lang.Object, param1: android.view.View, param2: number): void;
							public getSource(param0: java.lang.Object): android.support.v4.view.accessibility.AccessibilityNodeInfoCompat;
							public getWindowId(param0: java.lang.Object): number;
							public isChecked(param0: java.lang.Object): boolean;
							public setChecked(param0: java.lang.Object, param1: boolean): void;
							public isEnabled(param0: java.lang.Object): boolean;
							public setEnabled(param0: java.lang.Object, param1: boolean): void;
							public isPassword(param0: java.lang.Object): boolean;
							public setPassword(param0: java.lang.Object, param1: boolean): void;
							public isFullScreen(param0: java.lang.Object): boolean;
							public setFullScreen(param0: java.lang.Object, param1: boolean): void;
							public isScrollable(param0: java.lang.Object): boolean;
							public setScrollable(param0: java.lang.Object, param1: boolean): void;
							public getItemCount(param0: java.lang.Object): number;
							public setItemCount(param0: java.lang.Object, param1: number): void;
							public getCurrentItemIndex(param0: java.lang.Object): number;
							public setCurrentItemIndex(param0: java.lang.Object, param1: number): void;
							public getFromIndex(param0: java.lang.Object): number;
							public setFromIndex(param0: java.lang.Object, param1: number): void;
							public getToIndex(param0: java.lang.Object): number;
							public setToIndex(param0: java.lang.Object, param1: number): void;
							public getScrollX(param0: java.lang.Object): number;
							public setScrollX(param0: java.lang.Object, param1: number): void;
							public getScrollY(param0: java.lang.Object): number;
							public setScrollY(param0: java.lang.Object, param1: number): void;
							public getMaxScrollX(param0: java.lang.Object): number;
							public setMaxScrollX(param0: java.lang.Object, param1: number): void;
							public getMaxScrollY(param0: java.lang.Object): number;
							public setMaxScrollY(param0: java.lang.Object, param1: number): void;
							public getAddedCount(param0: java.lang.Object): number;
							public setAddedCount(param0: java.lang.Object, param1: number): void;
							public getRemovedCount(param0: java.lang.Object): number;
							public setRemovedCount(param0: java.lang.Object, param1: number): void;
							public getClassName(param0: java.lang.Object): string;
							public setClassName(param0: java.lang.Object, param1: string): void;
							public getText(param0: java.lang.Object): java.util.List;
							public getBeforeText(param0: java.lang.Object): string;
							public setBeforeText(param0: java.lang.Object, param1: string): void;
							public getContentDescription(param0: java.lang.Object): string;
							public setContentDescription(param0: java.lang.Object, param1: string): void;
							public getParcelableData(param0: java.lang.Object): android.os.Parcelable;
							public setParcelableData(param0: java.lang.Object, param1: android.os.Parcelable): void;
							public recycle(param0: java.lang.Object): void;
						}
						export class AccessibilityRecordJellyBeanImpl {
							public setSource(param0: java.lang.Object, param1: android.view.View): void;
							public setSource(param0: java.lang.Object, param1: android.view.View, param2: number): void;
						}
						export class AccessibilityRecordStubImpl {
							public obtain(): java.lang.Object;
							public obtain(param0: java.lang.Object): java.lang.Object;
							public getAddedCount(param0: java.lang.Object): number;
							public getBeforeText(param0: java.lang.Object): string;
							public getClassName(param0: java.lang.Object): string;
							public getContentDescription(param0: java.lang.Object): string;
							public getCurrentItemIndex(param0: java.lang.Object): number;
							public getFromIndex(param0: java.lang.Object): number;
							public getItemCount(param0: java.lang.Object): number;
							public getMaxScrollX(param0: java.lang.Object): number;
							public getMaxScrollY(param0: java.lang.Object): number;
							public getParcelableData(param0: java.lang.Object): android.os.Parcelable;
							public getRemovedCount(param0: java.lang.Object): number;
							public getScrollX(param0: java.lang.Object): number;
							public getScrollY(param0: java.lang.Object): number;
							public getSource(param0: java.lang.Object): android.support.v4.view.accessibility.AccessibilityNodeInfoCompat;
							public getText(param0: java.lang.Object): java.util.List;
							public getToIndex(param0: java.lang.Object): number;
							public getWindowId(param0: java.lang.Object): number;
							public isChecked(param0: java.lang.Object): boolean;
							public isEnabled(param0: java.lang.Object): boolean;
							public isFullScreen(param0: java.lang.Object): boolean;
							public isPassword(param0: java.lang.Object): boolean;
							public isScrollable(param0: java.lang.Object): boolean;
							public recycle(param0: java.lang.Object): void;
							public setAddedCount(param0: java.lang.Object, param1: number): void;
							public setBeforeText(param0: java.lang.Object, param1: string): void;
							public setChecked(param0: java.lang.Object, param1: boolean): void;
							public setClassName(param0: java.lang.Object, param1: string): void;
							public setContentDescription(param0: java.lang.Object, param1: string): void;
							public setCurrentItemIndex(param0: java.lang.Object, param1: number): void;
							public setEnabled(param0: java.lang.Object, param1: boolean): void;
							public setFromIndex(param0: java.lang.Object, param1: number): void;
							public setFullScreen(param0: java.lang.Object, param1: boolean): void;
							public setItemCount(param0: java.lang.Object, param1: number): void;
							public setMaxScrollX(param0: java.lang.Object, param1: number): void;
							public setMaxScrollY(param0: java.lang.Object, param1: number): void;
							public setParcelableData(param0: java.lang.Object, param1: android.os.Parcelable): void;
							public setPassword(param0: java.lang.Object, param1: boolean): void;
							public setRemovedCount(param0: java.lang.Object, param1: number): void;
							public setScrollX(param0: java.lang.Object, param1: number): void;
							public setScrollY(param0: java.lang.Object, param1: number): void;
							public setScrollable(param0: java.lang.Object, param1: boolean): void;
							public setSource(param0: java.lang.Object, param1: android.view.View): void;
							public setSource(param0: java.lang.Object, param1: android.view.View, param2: number): void;
							public setToIndex(param0: java.lang.Object, param1: number): void;
						}
					}
				}
			}
		}
	}
}
