/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.inputmethodservice.AbstractInputMethodService.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.ResultReceiver.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CursorAnchorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.InputBinding.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSubtype.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module inputmethodservice {
		export class InputMethodService {
			public constructor(param0: android.content.Context);
			public constructor();
			public setTheme(param0: number): void;
			public enableHardwareAcceleration(): boolean;
			public onCreate(): void;
			public onInitializeInterface(): void;
			public onDestroy(): void;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onCreateInputMethodInterface(): android.inputmethodservice.AbstractInputMethodService.AbstractInputMethodImpl;
			public onCreateInputMethodSessionInterface(): android.inputmethodservice.AbstractInputMethodService.AbstractInputMethodSessionImpl;
			public getLayoutInflater(): android.view.LayoutInflater;
			public getWindow(): android.app.Dialog;
			public setBackDisposition(param0: number): void;
			public getBackDisposition(): number;
			public getMaxWidth(): number;
			public getCurrentInputBinding(): android.view.inputmethod.InputBinding;
			public getCurrentInputConnection(): android.view.inputmethod.InputConnection;
			public getCurrentInputStarted(): boolean;
			public getCurrentInputEditorInfo(): android.view.inputmethod.EditorInfo;
			public updateFullscreenMode(): void;
			public onConfigureWindow(param0: android.view.Window, param1: boolean, param2: boolean): void;
			public isFullscreenMode(): boolean;
			public onEvaluateFullscreenMode(): boolean;
			public setExtractViewShown(param0: boolean): void;
			public isExtractViewShown(): boolean;
			public onComputeInsets(param0: android.inputmethodservice.InputMethodService.Insets): void;
			public updateInputViewShown(): void;
			public isShowInputRequested(): boolean;
			public isInputViewShown(): boolean;
			public onEvaluateInputViewShown(): boolean;
			public setCandidatesViewShown(param0: boolean): void;
			public getCandidatesHiddenVisibility(): number;
			public showStatusIcon(param0: number): void;
			public hideStatusIcon(): void;
			public switchInputMethod(param0: string): void;
			public setExtractView(param0: android.view.View): void;
			public setCandidatesView(param0: android.view.View): void;
			public setInputView(param0: android.view.View): void;
			public onCreateExtractTextView(): android.view.View;
			public onCreateCandidatesView(): android.view.View;
			public onCreateInputView(): android.view.View;
			public onStartInputView(param0: android.view.inputmethod.EditorInfo, param1: boolean): void;
			public onFinishInputView(param0: boolean): void;
			public onStartCandidatesView(param0: android.view.inputmethod.EditorInfo, param1: boolean): void;
			public onFinishCandidatesView(param0: boolean): void;
			public onShowInputRequested(param0: number, param1: boolean): boolean;
			public showWindow(param0: boolean): void;
			public hideWindow(): void;
			public onWindowShown(): void;
			public onWindowHidden(): void;
			public onBindInput(): void;
			public onUnbindInput(): void;
			public onStartInput(param0: android.view.inputmethod.EditorInfo, param1: boolean): void;
			public onFinishInput(): void;
			public onDisplayCompletions(param0: native.Array<android.view.inputmethod.CompletionInfo>): void;
			public onUpdateExtractedText(param0: number, param1: android.view.inputmethod.ExtractedText): void;
			public onUpdateSelection(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
			public onViewClicked(param0: boolean): void;
			public onUpdateCursor(param0: android.graphics.Rect): void;
			public onUpdateCursorAnchorInfo(param0: android.view.inputmethod.CursorAnchorInfo): void;
			public requestHideSelf(param0: number): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onTrackballEvent(param0: android.view.MotionEvent): boolean;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onAppPrivateCommand(param0: string, param1: android.os.Bundle): void;
			public sendDownUpKeyEvents(param0: number): void;
			public sendDefaultEditorAction(param0: boolean): boolean;
			public sendKeyChar(param0: string): void;
			public onExtractedSelectionChanged(param0: number, param1: number): void;
			public onExtractedTextClicked(): void;
			public onExtractedCursorMovement(param0: number, param1: number): void;
			public onExtractTextContextMenuItem(param0: number): boolean;
			public getTextForImeAction(param0: number): string;
			public onUpdateExtractingVisibility(param0: android.view.inputmethod.EditorInfo): void;
			public onUpdateExtractingViews(param0: android.view.inputmethod.EditorInfo): void;
			public onExtractingInputChanged(param0: android.view.inputmethod.EditorInfo): void;
			public onCurrentInputMethodSubtypeChanged(param0: android.view.inputmethod.InputMethodSubtype): void;
			public getInputMethodWindowRecommendedHeight(): number;
			public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
			public static BACK_DISPOSITION_DEFAULT: number;
			public static BACK_DISPOSITION_WILL_DISMISS: number;
			public static BACK_DISPOSITION_WILL_NOT_DISMISS: number;
		}
		export module InputMethodService {
			export class InputMethodImpl {
				public constructor(param0: android.inputmethodservice.AbstractInputMethodService);
				public constructor();
				public constructor(param0: android.inputmethodservice.InputMethodService);
				public attachToken(param0: android.os.IBinder): void;
				public bindInput(param0: android.view.inputmethod.InputBinding): void;
				public unbindInput(): void;
				public startInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;
				public restartInput(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.EditorInfo): void;
				public hideSoftInput(param0: number, param1: android.os.ResultReceiver): void;
				public showSoftInput(param0: number, param1: android.os.ResultReceiver): void;
				public changeInputMethodSubtype(param0: android.view.inputmethod.InputMethodSubtype): void;
			}
			export class InputMethodSessionImpl {
				public constructor(param0: android.inputmethodservice.AbstractInputMethodService);
				public constructor();
				public constructor(param0: android.inputmethodservice.InputMethodService);
				public finishInput(): void;
				public displayCompletions(param0: native.Array<android.view.inputmethod.CompletionInfo>): void;
				public updateExtractedText(param0: number, param1: android.view.inputmethod.ExtractedText): void;
				public updateSelection(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public viewClicked(param0: boolean): void;
				public updateCursor(param0: android.graphics.Rect): void;
				public appPrivateCommand(param0: string, param1: android.os.Bundle): void;
				public toggleSoftInput(param0: number, param1: number): void;
				public updateCursorAnchorInfo(param0: android.view.inputmethod.CursorAnchorInfo): void;
			}
			export class Insets {
				public constructor();
				public static TOUCHABLE_INSETS_CONTENT: number;
				public static TOUCHABLE_INSETS_FRAME: number;
				public static TOUCHABLE_INSETS_REGION: number;
				public static TOUCHABLE_INSETS_VISIBLE: number;
				public contentTopInsets: number;
				public touchableInsets: number;
				public touchableRegion: android.graphics.Region;
				public visibleTopInsets: number;
			}
		}
	}
}
