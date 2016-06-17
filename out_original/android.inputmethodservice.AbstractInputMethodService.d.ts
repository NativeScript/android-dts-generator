/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.inputmethod.InputMethodSession.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />

declare module android {
	export module inputmethodservice {
		export class AbstractInputMethodService {
			public constructor(param0: android.content.Context);
			public constructor();
			public getKeyDispatcherState(): android.view.KeyEvent.DispatcherState;
			public onCreateInputMethodInterface(): android.inputmethodservice.AbstractInputMethodService.AbstractInputMethodImpl;
			public onCreateInputMethodSessionInterface(): android.inputmethodservice.AbstractInputMethodService.AbstractInputMethodSessionImpl;
			public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onTrackballEvent(param0: android.view.MotionEvent): boolean;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
		}
		export module AbstractInputMethodService {
			export class AbstractInputMethodImpl {
				public constructor();
				public constructor(param0: android.inputmethodservice.AbstractInputMethodService);
				public createSession(param0: android.view.inputmethod.InputMethod.SessionCallback): void;
				public setSessionEnabled(param0: android.view.inputmethod.InputMethodSession, param1: boolean): void;
				public revokeSession(param0: android.view.inputmethod.InputMethodSession): void;
			}
			export class AbstractInputMethodSessionImpl {
				public constructor();
				public constructor(param0: android.inputmethodservice.AbstractInputMethodService);
				public isEnabled(): boolean;
				public isRevoked(): boolean;
				public setEnabled(param0: boolean): void;
				public revokeSelf(): void;
				public dispatchKeyEvent(param0: number, param1: android.view.KeyEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;
				public dispatchTrackballEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;
				public dispatchGenericMotionEvent(param0: number, param1: android.view.MotionEvent, param2: android.view.inputmethod.InputMethodSession.EventCallback): void;
			}
		}
	}
}
