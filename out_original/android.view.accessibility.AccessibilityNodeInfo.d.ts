/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityWindowInfo.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module view {
		export module accessibility {
			export class AccessibilityNodeInfo {
				public setSource(param0: android.view.View): void;
				public setSource(param0: android.view.View, param1: number): void;
				public findFocus(param0: number): android.view.accessibility.AccessibilityNodeInfo;
				public focusSearch(param0: number): android.view.accessibility.AccessibilityNodeInfo;
				public getWindowId(): number;
				public refresh(): boolean;
				public getChildCount(): number;
				public getChild(param0: number): android.view.accessibility.AccessibilityNodeInfo;
				public addChild(param0: android.view.View): void;
				public removeChild(param0: android.view.View): boolean;
				public addChild(param0: android.view.View, param1: number): void;
				public removeChild(param0: android.view.View, param1: number): boolean;
				public getActionList(): java.util.List;
				public getActions(): number;
				public addAction(param0: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction): void;
				public addAction(param0: number): void;
				public removeAction(param0: number): void;
				public removeAction(param0: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction): boolean;
				public getTraversalBefore(): android.view.accessibility.AccessibilityNodeInfo;
				public setTraversalBefore(param0: android.view.View): void;
				public setTraversalBefore(param0: android.view.View, param1: number): void;
				public getTraversalAfter(): android.view.accessibility.AccessibilityNodeInfo;
				public setTraversalAfter(param0: android.view.View): void;
				public setTraversalAfter(param0: android.view.View, param1: number): void;
				public setMaxTextLength(param0: number): void;
				public getMaxTextLength(): number;
				public setMovementGranularities(param0: number): void;
				public getMovementGranularities(): number;
				public performAction(param0: number): boolean;
				public performAction(param0: number, param1: android.os.Bundle): boolean;
				public findAccessibilityNodeInfosByText(param0: string): java.util.List;
				public findAccessibilityNodeInfosByViewId(param0: string): java.util.List;
				public getWindow(): android.view.accessibility.AccessibilityWindowInfo;
				public getParent(): android.view.accessibility.AccessibilityNodeInfo;
				public setParent(param0: android.view.View): void;
				public setParent(param0: android.view.View, param1: number): void;
				public getBoundsInParent(param0: android.graphics.Rect): void;
				public setBoundsInParent(param0: android.graphics.Rect): void;
				public getBoundsInScreen(param0: android.graphics.Rect): void;
				public setBoundsInScreen(param0: android.graphics.Rect): void;
				public isCheckable(): boolean;
				public setCheckable(param0: boolean): void;
				public isChecked(): boolean;
				public setChecked(param0: boolean): void;
				public isFocusable(): boolean;
				public setFocusable(param0: boolean): void;
				public isFocused(): boolean;
				public setFocused(param0: boolean): void;
				public isVisibleToUser(): boolean;
				public setVisibleToUser(param0: boolean): void;
				public isAccessibilityFocused(): boolean;
				public setAccessibilityFocused(param0: boolean): void;
				public isSelected(): boolean;
				public setSelected(param0: boolean): void;
				public isClickable(): boolean;
				public setClickable(param0: boolean): void;
				public isLongClickable(): boolean;
				public setLongClickable(param0: boolean): void;
				public isEnabled(): boolean;
				public setEnabled(param0: boolean): void;
				public isPassword(): boolean;
				public setPassword(param0: boolean): void;
				public isScrollable(): boolean;
				public setScrollable(param0: boolean): void;
				public isEditable(): boolean;
				public setEditable(param0: boolean): void;
				public getCollectionInfo(): android.view.accessibility.AccessibilityNodeInfo.CollectionInfo;
				public setCollectionInfo(param0: android.view.accessibility.AccessibilityNodeInfo.CollectionInfo): void;
				public getCollectionItemInfo(): android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo;
				public setCollectionItemInfo(param0: android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo): void;
				public getRangeInfo(): android.view.accessibility.AccessibilityNodeInfo.RangeInfo;
				public setRangeInfo(param0: android.view.accessibility.AccessibilityNodeInfo.RangeInfo): void;
				public isContentInvalid(): boolean;
				public setContentInvalid(param0: boolean): void;
				public isContextClickable(): boolean;
				public setContextClickable(param0: boolean): void;
				public getLiveRegion(): number;
				public setLiveRegion(param0: number): void;
				public isMultiLine(): boolean;
				public setMultiLine(param0: boolean): void;
				public canOpenPopup(): boolean;
				public setCanOpenPopup(param0: boolean): void;
				public isDismissable(): boolean;
				public setDismissable(param0: boolean): void;
				public getPackageName(): string;
				public setPackageName(param0: string): void;
				public getClassName(): string;
				public setClassName(param0: string): void;
				public getText(): string;
				public setText(param0: string): void;
				public setError(param0: string): void;
				public getError(): string;
				public getContentDescription(): string;
				public setContentDescription(param0: string): void;
				public setLabelFor(param0: android.view.View): void;
				public setLabelFor(param0: android.view.View, param1: number): void;
				public getLabelFor(): android.view.accessibility.AccessibilityNodeInfo;
				public setLabeledBy(param0: android.view.View): void;
				public setLabeledBy(param0: android.view.View, param1: number): void;
				public getLabeledBy(): android.view.accessibility.AccessibilityNodeInfo;
				public setViewIdResourceName(param0: string): void;
				public getViewIdResourceName(): string;
				public getTextSelectionStart(): number;
				public getTextSelectionEnd(): number;
				public setTextSelection(param0: number, param1: number): void;
				public getInputType(): number;
				public setInputType(param0: number): void;
				public getExtras(): android.os.Bundle;
				public describeContents(): number;
				public static obtain(param0: android.view.View): android.view.accessibility.AccessibilityNodeInfo;
				public static obtain(param0: android.view.View, param1: number): android.view.accessibility.AccessibilityNodeInfo;
				public static obtain(): android.view.accessibility.AccessibilityNodeInfo;
				public static obtain(param0: android.view.accessibility.AccessibilityNodeInfo): android.view.accessibility.AccessibilityNodeInfo;
				public recycle(): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
				public static ACTION_ACCESSIBILITY_FOCUS: number;
				public static ACTION_ARGUMENT_COLUMN_INT: string;
				public static ACTION_ARGUMENT_EXTEND_SELECTION_BOOLEAN: string;
				public static ACTION_ARGUMENT_HTML_ELEMENT_STRING: string;
				public static ACTION_ARGUMENT_MOVEMENT_GRANULARITY_INT: string;
				public static ACTION_ARGUMENT_ROW_INT: string;
				public static ACTION_ARGUMENT_SELECTION_END_INT: string;
				public static ACTION_ARGUMENT_SELECTION_START_INT: string;
				public static ACTION_ARGUMENT_SET_TEXT_CHARSEQUENCE: string;
				public static ACTION_CLEAR_ACCESSIBILITY_FOCUS: number;
				public static ACTION_CLEAR_FOCUS: number;
				public static ACTION_CLEAR_SELECTION: number;
				public static ACTION_CLICK: number;
				public static ACTION_COLLAPSE: number;
				public static ACTION_COPY: number;
				public static ACTION_CUT: number;
				public static ACTION_DISMISS: number;
				public static ACTION_EXPAND: number;
				public static ACTION_FOCUS: number;
				public static ACTION_LONG_CLICK: number;
				public static ACTION_NEXT_AT_MOVEMENT_GRANULARITY: number;
				public static ACTION_NEXT_HTML_ELEMENT: number;
				public static ACTION_PASTE: number;
				public static ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY: number;
				public static ACTION_PREVIOUS_HTML_ELEMENT: number;
				public static ACTION_SCROLL_BACKWARD: number;
				public static ACTION_SCROLL_FORWARD: number;
				public static ACTION_SELECT: number;
				public static ACTION_SET_SELECTION: number;
				public static ACTION_SET_TEXT: number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static FOCUS_ACCESSIBILITY: number;
				public static FOCUS_INPUT: number;
				public static MOVEMENT_GRANULARITY_CHARACTER: number;
				public static MOVEMENT_GRANULARITY_LINE: number;
				public static MOVEMENT_GRANULARITY_PAGE: number;
				public static MOVEMENT_GRANULARITY_PARAGRAPH: number;
				public static MOVEMENT_GRANULARITY_WORD: number;
			}
			export module AccessibilityNodeInfo {
				export class AccessibilityAction {
					public constructor();
					public constructor(param0: number, param1: string);
					public getId(): number;
					public getLabel(): string;
					public hashCode(): number;
					public equals(param0: java.lang.Object): boolean;
					public toString(): string;
					public static ACTION_ACCESSIBILITY_FOCUS: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_CLEAR_ACCESSIBILITY_FOCUS: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_CLEAR_FOCUS: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_CLEAR_SELECTION: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_CLICK: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_COLLAPSE: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_CONTEXT_CLICK: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_COPY: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_CUT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_DISMISS: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_EXPAND: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_FOCUS: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_LONG_CLICK: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_NEXT_AT_MOVEMENT_GRANULARITY: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_NEXT_HTML_ELEMENT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_PASTE: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_PREVIOUS_HTML_ELEMENT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SCROLL_BACKWARD: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SCROLL_DOWN: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SCROLL_FORWARD: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SCROLL_LEFT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SCROLL_RIGHT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SCROLL_TO_POSITION: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SCROLL_UP: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SELECT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SET_SELECTION: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SET_TEXT: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
					public static ACTION_SHOW_ON_SCREEN: android.view.accessibility.AccessibilityNodeInfo.AccessibilityAction;
				}
				export class CollectionInfo {
					public static obtain(param0: number, param1: number, param2: boolean): android.view.accessibility.AccessibilityNodeInfo.CollectionInfo;
					public static obtain(param0: number, param1: number, param2: boolean, param3: number): android.view.accessibility.AccessibilityNodeInfo.CollectionInfo;
					public getRowCount(): number;
					public getColumnCount(): number;
					public isHierarchical(): boolean;
					public getSelectionMode(): number;
					public static SELECTION_MODE_MULTIPLE: number;
					public static SELECTION_MODE_NONE: number;
					public static SELECTION_MODE_SINGLE: number;
				}
				export class CollectionItemInfo {
					public static obtain(param0: number, param1: number, param2: number, param3: number, param4: boolean): android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo;
					public static obtain(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: boolean): android.view.accessibility.AccessibilityNodeInfo.CollectionItemInfo;
					public getColumnIndex(): number;
					public getRowIndex(): number;
					public getColumnSpan(): number;
					public getRowSpan(): number;
					public isHeading(): boolean;
					public isSelected(): boolean;
				}
				export class RangeInfo {
					public static obtain(param0: number, param1: number, param2: number, param3: number): android.view.accessibility.AccessibilityNodeInfo.RangeInfo;
					public getType(): number;
					public getMin(): number;
					public getMax(): number;
					public getCurrent(): number;
					public static RANGE_TYPE_FLOAT: number;
					public static RANGE_TYPE_INT: number;
					public static RANGE_TYPE_PERCENT: number;
				}
			}
		}
	}
}
