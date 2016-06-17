/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CursorAnchorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodInfo.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSubtype.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class InputMethodManager {
				public getInputMethodList(): java.util.List;
				public getEnabledInputMethodList(): java.util.List;
				public getEnabledInputMethodSubtypeList(param0: android.view.inputmethod.InputMethodInfo, param1: boolean): java.util.List;
				public showStatusIcon(param0: android.os.IBinder, param1: string, param2: number): void;
				public hideStatusIcon(param0: android.os.IBinder): void;
				public isFullscreenMode(): boolean;
				public isActive(param0: android.view.View): boolean;
				public isActive(): boolean;
				public isAcceptingText(): boolean;
				public displayCompletions(param0: android.view.View, param1: native.Array<android.view.inputmethod.CompletionInfo>): void;
				public updateExtractedText(param0: android.view.View, param1: number, param2: android.view.inputmethod.ExtractedText): void;
				public showSoftInput(param0: android.view.View, param1: number): boolean;
				public showSoftInput(param0: android.view.View, param1: number, param2: android.os.ResultReceiver): boolean;
				public hideSoftInputFromWindow(param0: android.os.IBinder, param1: number): boolean;
				public hideSoftInputFromWindow(param0: android.os.IBinder, param1: number, param2: android.os.ResultReceiver): boolean;
				public toggleSoftInputFromWindow(param0: android.os.IBinder, param1: number, param2: number): void;
				public toggleSoftInput(param0: number, param1: number): void;
				public restartInput(param0: android.view.View): void;
				public updateSelection(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public viewClicked(param0: android.view.View): void;
				public isWatchingCursor(param0: android.view.View): boolean;
				public updateCursor(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public updateCursorAnchorInfo(param0: android.view.View, param1: android.view.inputmethod.CursorAnchorInfo): void;
				public sendAppPrivateCommand(param0: android.view.View, param1: string, param2: android.os.Bundle): void;
				public setInputMethod(param0: android.os.IBinder, param1: string): void;
				public setInputMethodAndSubtype(param0: android.os.IBinder, param1: string, param2: android.view.inputmethod.InputMethodSubtype): void;
				public hideSoftInputFromInputMethod(param0: android.os.IBinder, param1: number): void;
				public showSoftInputFromInputMethod(param0: android.os.IBinder, param1: number): void;
				public showInputMethodPicker(): void;
				public showInputMethodAndSubtypeEnabler(param0: string): void;
				public getCurrentInputMethodSubtype(): android.view.inputmethod.InputMethodSubtype;
				public setCurrentInputMethodSubtype(param0: android.view.inputmethod.InputMethodSubtype): boolean;
				public getShortcutInputMethodsAndSubtypes(): java.util.Map;
				public switchToLastInputMethod(param0: android.os.IBinder): boolean;
				public switchToNextInputMethod(param0: android.os.IBinder, param1: boolean): boolean;
				public shouldOfferSwitchingToNextInputMethod(param0: android.os.IBinder): boolean;
				public setAdditionalInputMethodSubtypes(param0: string, param1: native.Array<android.view.inputmethod.InputMethodSubtype>): void;
				public getLastInputMethodSubtype(): android.view.inputmethod.InputMethodSubtype;
				public static HIDE_IMPLICIT_ONLY: number;
				public static HIDE_NOT_ALWAYS: number;
				public static RESULT_HIDDEN: number;
				public static RESULT_SHOWN: number;
				public static RESULT_UNCHANGED_HIDDEN: number;
				public static RESULT_UNCHANGED_SHOWN: number;
				public static SHOW_FORCED: number;
				public static SHOW_IMPLICIT: number;
			}
		}
	}
}
