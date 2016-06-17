/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.widget.MediaController.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module widget {
		export class VideoView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public onMeasure(param0: number, param1: number): void;
			public getAccessibilityClassName(): string;
			public resolveAdjustedSize(param0: number, param1: number): number;
			public setVideoPath(param0: string): void;
			public setVideoURI(param0: android.net.Uri): void;
			public setVideoURI(param0: android.net.Uri, param1: java.util.Map): void;
			public addSubtitleSource(param0: java.io.InputStream, param1: android.media.MediaFormat): void;
			public stopPlayback(): void;
			public setMediaController(param0: android.widget.MediaController): void;
			public setOnPreparedListener(param0: android.media.MediaPlayer.OnPreparedListener): void;
			public setOnCompletionListener(param0: android.media.MediaPlayer.OnCompletionListener): void;
			public setOnErrorListener(param0: android.media.MediaPlayer.OnErrorListener): void;
			public setOnInfoListener(param0: android.media.MediaPlayer.OnInfoListener): void;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTrackballEvent(param0: android.view.MotionEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public start(): void;
			public pause(): void;
			public suspend(): void;
			public resume(): void;
			public getDuration(): number;
			public getCurrentPosition(): number;
			public seekTo(param0: number): void;
			public isPlaying(): boolean;
			public getBufferPercentage(): number;
			public canPause(): boolean;
			public canSeekBackward(): boolean;
			public canSeekForward(): boolean;
			public getAudioSessionId(): number;
			public onAttachedToWindow(): void;
			public onDetachedFromWindow(): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public draw(param0: android.graphics.Canvas): void;
		}
	}
}
