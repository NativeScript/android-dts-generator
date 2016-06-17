/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />

declare module android {
	export module widget {
		export class MediaController {
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: boolean);
			public constructor(param0: android.content.Context);
			public onFinishInflate(): void;
			public setMediaPlayer(param0: android.widget.MediaController.MediaPlayerControl): void;
			public setAnchorView(param0: android.view.View): void;
			public show(): void;
			public show(param0: number): void;
			public isShowing(): boolean;
			public hide(): void;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public setEnabled(param0: boolean): void;
			public getAccessibilityClassName(): string;
			public setPrevNextListeners(param0: android.view.View.OnClickListener, param1: android.view.View.OnClickListener): void;
		}
		export module MediaController {
			export class MediaPlayerControl {
				public start(): void;
				public pause(): void;
				public getDuration(): number;
				public getCurrentPosition(): number;
				public seekTo(param0: number): void;
				public isPlaying(): boolean;
				public getBufferPercentage(): number;
				public canPause(): boolean;
				public canSeekBackward(): boolean;
				public canSeekForward(): boolean;
				public getAudioSessionId(): number;
			}
		}
	}
}
