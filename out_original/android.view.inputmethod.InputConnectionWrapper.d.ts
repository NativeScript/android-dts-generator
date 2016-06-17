/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CorrectionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedTextRequest.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class InputConnectionWrapper {
				public constructor();
				public constructor(param0: android.view.inputmethod.InputConnection, param1: boolean);
				public setTarget(param0: android.view.inputmethod.InputConnection): void;
				public getTextBeforeCursor(param0: number, param1: number): string;
				public getTextAfterCursor(param0: number, param1: number): string;
				public getSelectedText(param0: number): string;
				public getCursorCapsMode(param0: number): number;
				public getExtractedText(param0: android.view.inputmethod.ExtractedTextRequest, param1: number): android.view.inputmethod.ExtractedText;
				public deleteSurroundingText(param0: number, param1: number): boolean;
				public setComposingText(param0: string, param1: number): boolean;
				public setComposingRegion(param0: number, param1: number): boolean;
				public finishComposingText(): boolean;
				public commitText(param0: string, param1: number): boolean;
				public commitCompletion(param0: android.view.inputmethod.CompletionInfo): boolean;
				public commitCorrection(param0: android.view.inputmethod.CorrectionInfo): boolean;
				public setSelection(param0: number, param1: number): boolean;
				public performEditorAction(param0: number): boolean;
				public performContextMenuAction(param0: number): boolean;
				public beginBatchEdit(): boolean;
				public endBatchEdit(): boolean;
				public sendKeyEvent(param0: android.view.KeyEvent): boolean;
				public clearMetaKeyStates(param0: number): boolean;
				public reportFullscreenMode(param0: boolean): boolean;
				public performPrivateCommand(param0: string, param1: android.os.Bundle): boolean;
				public requestCursorUpdates(param0: number): boolean;
			}
		}
	}
}
