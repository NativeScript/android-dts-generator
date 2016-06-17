/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityRecord.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module view {
		export module accessibility {
			export class AccessibilityEvent {
				public getRecordCount(): number;
				public appendRecord(param0: android.view.accessibility.AccessibilityRecord): void;
				public getRecord(param0: number): android.view.accessibility.AccessibilityRecord;
				public getEventType(): number;
				public getContentChangeTypes(): number;
				public setContentChangeTypes(param0: number): void;
				public setEventType(param0: number): void;
				public getEventTime(): number;
				public setEventTime(param0: number): void;
				public getPackageName(): string;
				public setPackageName(param0: string): void;
				public setMovementGranularity(param0: number): void;
				public getMovementGranularity(): number;
				public setAction(param0: number): void;
				public getAction(): number;
				public static obtain(param0: android.view.accessibility.AccessibilityRecord): android.view.accessibility.AccessibilityRecord;
				public static obtain(): android.view.accessibility.AccessibilityRecord;
				public static obtain(param0: number): android.view.accessibility.AccessibilityEvent;
				public static obtain(param0: android.view.accessibility.AccessibilityEvent): android.view.accessibility.AccessibilityEvent;
				public static obtain(): android.view.accessibility.AccessibilityEvent;
				public recycle(): void;
				public initFromParcel(param0: android.os.Parcel): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public toString(): string;
				public static eventTypeToString(param0: number): string;
				public static CONTENT_CHANGE_TYPE_CONTENT_DESCRIPTION: number;
				public static CONTENT_CHANGE_TYPE_SUBTREE: number;
				public static CONTENT_CHANGE_TYPE_TEXT: number;
				public static CONTENT_CHANGE_TYPE_UNDEFINED: number;
				public static CREATOR: android.os.Parcelable.Creator;
				public static INVALID_POSITION: number;
				public static MAX_TEXT_LENGTH: number;
				public static TYPES_ALL_MASK: number;
				public static TYPE_ANNOUNCEMENT: number;
				public static TYPE_ASSIST_READING_CONTEXT: number;
				public static TYPE_GESTURE_DETECTION_END: number;
				public static TYPE_GESTURE_DETECTION_START: number;
				public static TYPE_NOTIFICATION_STATE_CHANGED: number;
				public static TYPE_TOUCH_EXPLORATION_GESTURE_END: number;
				public static TYPE_TOUCH_EXPLORATION_GESTURE_START: number;
				public static TYPE_TOUCH_INTERACTION_END: number;
				public static TYPE_TOUCH_INTERACTION_START: number;
				public static TYPE_VIEW_ACCESSIBILITY_FOCUSED: number;
				public static TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED: number;
				public static TYPE_VIEW_CLICKED: number;
				public static TYPE_VIEW_CONTEXT_CLICKED: number;
				public static TYPE_VIEW_FOCUSED: number;
				public static TYPE_VIEW_HOVER_ENTER: number;
				public static TYPE_VIEW_HOVER_EXIT: number;
				public static TYPE_VIEW_LONG_CLICKED: number;
				public static TYPE_VIEW_SCROLLED: number;
				public static TYPE_VIEW_SELECTED: number;
				public static TYPE_VIEW_TEXT_CHANGED: number;
				public static TYPE_VIEW_TEXT_SELECTION_CHANGED: number;
				public static TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY: number;
				public static TYPE_WINDOWS_CHANGED: number;
				public static TYPE_WINDOW_CONTENT_CHANGED: number;
				public static TYPE_WINDOW_STATE_CHANGED: number;
			}
		}
	}
}
