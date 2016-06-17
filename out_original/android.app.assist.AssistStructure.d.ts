/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.graphics.Matrix.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module app {
		export module assist {
			export class AssistStructure {
				public constructor();
				public getActivityComponent(): android.content.ComponentName;
				public getWindowNodeCount(): number;
				public getWindowNodeAt(param0: number): android.app.assist.AssistStructure.WindowNode;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export module AssistStructure {
				export class ViewNode {
					public getId(): number;
					public getIdPackage(): string;
					public getIdType(): string;
					public getIdEntry(): string;
					public getLeft(): number;
					public getTop(): number;
					public getScrollX(): number;
					public getScrollY(): number;
					public getWidth(): number;
					public getHeight(): number;
					public getTransformation(): android.graphics.Matrix;
					public getElevation(): number;
					public getAlpha(): number;
					public getVisibility(): number;
					public isAssistBlocked(): boolean;
					public isEnabled(): boolean;
					public isClickable(): boolean;
					public isFocusable(): boolean;
					public isFocused(): boolean;
					public isAccessibilityFocused(): boolean;
					public isCheckable(): boolean;
					public isChecked(): boolean;
					public isSelected(): boolean;
					public isActivated(): boolean;
					public isLongClickable(): boolean;
					public isContextClickable(): boolean;
					public getClassName(): string;
					public getContentDescription(): string;
					public getText(): string;
					public getTextSelectionStart(): number;
					public getTextSelectionEnd(): number;
					public getTextColor(): number;
					public getTextBackgroundColor(): number;
					public getTextSize(): number;
					public getTextStyle(): number;
					public getTextLineCharOffsets(): native.Array<number>;
					public getTextLineBaselines(): native.Array<number>;
					public getHint(): string;
					public getExtras(): android.os.Bundle;
					public getChildCount(): number;
					public getChildAt(param0: number): android.app.assist.AssistStructure.ViewNode;
					public static TEXT_COLOR_UNDEFINED: number;
					public static TEXT_STYLE_BOLD: number;
					public static TEXT_STYLE_ITALIC: number;
					public static TEXT_STYLE_STRIKE_THRU: number;
					public static TEXT_STYLE_UNDERLINE: number;
				}
				export class WindowNode {
					public getLeft(): number;
					public getTop(): number;
					public getWidth(): number;
					public getHeight(): number;
					public getTitle(): string;
					public getDisplayId(): number;
					public getRootViewNode(): android.app.assist.AssistStructure.ViewNode;
				}
			}
		}
	}
}
