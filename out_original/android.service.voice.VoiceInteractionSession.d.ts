/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.app.assist.AssistContent.d.ts" />
/// <reference path="./android.app.assist.AssistStructure.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module service {
		export module voice {
			export class VoiceInteractionSession {
				public constructor();
				public constructor(param0: android.content.Context);
				public constructor(param0: android.content.Context, param1: android.os.Handler);
				public getContext(): android.content.Context;
				public setDisabledShowContext(param0: number): void;
				public getDisabledShowContext(): number;
				public getUserDisabledShowContext(): number;
				public show(param0: android.os.Bundle, param1: number): void;
				public hide(): void;
				public setTheme(param0: number): void;
				public startVoiceActivity(param0: android.content.Intent): void;
				public setKeepAwake(param0: boolean): void;
				public closeSystemDialogs(): void;
				public getLayoutInflater(): android.view.LayoutInflater;
				public getWindow(): android.app.Dialog;
				public finish(): void;
				public onCreate(): void;
				public onShow(param0: android.os.Bundle, param1: number): void;
				public onHide(): void;
				public onDestroy(): void;
				public onCreateContentView(): android.view.View;
				public setContentView(param0: android.view.View): void;
				public onAssistStructureFailure(param0: java.lang.Throwable): void;
				public onHandleAssist(param0: android.os.Bundle, param1: android.app.assist.AssistStructure, param2: android.app.assist.AssistContent): void;
				public onHandleScreenshot(param0: android.graphics.Bitmap): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onBackPressed(): void;
				public onCloseSystemDialogs(): void;
				public onLockscreenShown(): void;
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public onLowMemory(): void;
				public onTrimMemory(param0: number): void;
				public onComputeInsets(param0: android.service.voice.VoiceInteractionSession.Insets): void;
				public onTaskStarted(param0: android.content.Intent, param1: number): void;
				public onTaskFinished(param0: android.content.Intent, param1: number): void;
				public onGetSupportedCommands(param0: native.Array<string>): native.Array<boolean>;
				public onRequestConfirmation(param0: android.service.voice.VoiceInteractionSession.ConfirmationRequest): void;
				public onRequestPickOption(param0: android.service.voice.VoiceInteractionSession.PickOptionRequest): void;
				public onRequestCompleteVoice(param0: android.service.voice.VoiceInteractionSession.CompleteVoiceRequest): void;
				public onRequestAbortVoice(param0: android.service.voice.VoiceInteractionSession.AbortVoiceRequest): void;
				public onRequestCommand(param0: android.service.voice.VoiceInteractionSession.CommandRequest): void;
				public onCancelRequest(param0: android.service.voice.VoiceInteractionSession.Request): void;
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				public static SHOW_SOURCE_APPLICATION: number;
				public static SHOW_SOURCE_ASSIST_GESTURE: number;
				public static SHOW_WITH_ASSIST: number;
				public static SHOW_WITH_SCREENSHOT: number;
			}
			export module VoiceInteractionSession {
				export class AbortVoiceRequest {
					public getVoicePrompt(): android.app.VoiceInteractor.Prompt;
					public getMessage(): string;
					public sendAbortResult(param0: android.os.Bundle): void;
				}
				export class CommandRequest {
					public getCommand(): string;
					public sendIntermediateResult(param0: android.os.Bundle): void;
					public sendResult(param0: android.os.Bundle): void;
				}
				export class CompleteVoiceRequest {
					public getVoicePrompt(): android.app.VoiceInteractor.Prompt;
					public getMessage(): string;
					public sendCompleteResult(param0: android.os.Bundle): void;
				}
				export class ConfirmationRequest {
					public getVoicePrompt(): android.app.VoiceInteractor.Prompt;
					public getPrompt(): string;
					public sendConfirmationResult(param0: boolean, param1: android.os.Bundle): void;
				}
				export class Insets {
					public constructor();
					public static TOUCHABLE_INSETS_CONTENT: number;
					public static TOUCHABLE_INSETS_FRAME: number;
					public static TOUCHABLE_INSETS_REGION: number;
					public contentInsets: android.graphics.Rect;
					public touchableInsets: number;
					public touchableRegion: android.graphics.Region;
				}
				export class PickOptionRequest {
					public getVoicePrompt(): android.app.VoiceInteractor.Prompt;
					public getPrompt(): string;
					public getOptions(): native.Array<android.app.VoiceInteractor.PickOptionRequest.Option>;
					public sendIntermediatePickOptionResult(param0: native.Array<android.app.VoiceInteractor.PickOptionRequest.Option>, param1: android.os.Bundle): void;
					public sendPickOptionResult(param0: native.Array<android.app.VoiceInteractor.PickOptionRequest.Option>, param1: android.os.Bundle): void;
				}
				export class Request {
					public getCallingUid(): number;
					public getCallingPackage(): string;
					public getExtras(): android.os.Bundle;
					public isActive(): boolean;
					public cancel(): void;
					public toString(): string;
				}
			}
		}
	}
}
