/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityNodeInfo.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module view {
		export module accessibility {
			export class AccessibilityRecord {
				public setSource(param0: android.view.View): void;
				public setSource(param0: android.view.View, param1: number): void;
				public getSource(): android.view.accessibility.AccessibilityNodeInfo;
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
				public static obtain(param0: android.view.accessibility.AccessibilityRecord): android.view.accessibility.AccessibilityRecord;
				public static obtain(): android.view.accessibility.AccessibilityRecord;
				public recycle(): void;
				public toString(): string;
			}
		}
	}
}
