/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CursorAnchorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class InputMethodSession {
				public finishInput(): void;
				public updateSelection(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public viewClicked(param0: boolean): void;
				public updateCursor(param0: android.graphics.Rect): void;
				public displayCompletions(param0: native.Array<android.view.inputmethod.CompletionInfo>): void;
				public updateExtractedText(param0: number, param1: android.view.inputmethod.ExtractedText): void;
				public dispatchKeyEvent(param0: number, param1: android.view.KeyEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;
				public dispatchTrackballEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;
				public dispatchGenericMotionEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;
				public appPrivateCommand(param0: string, param1: android.os.Bundle): void;
				public toggleSoftInput(param0: number, param1: number): void;
				public updateCursorAnchorInfo(param0: android.view.inputmethod.CursorAnchorInfo): void;
			}
			export module InputMethodSession {
				export class EventCallback {
					public finishedEvent(param0: number, param1: boolean): void;
				}
			}
		}
	}
}
