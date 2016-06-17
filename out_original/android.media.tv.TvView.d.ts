/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Region.d.ts" />
/// <reference path="./android.media.PlaybackParams.d.ts" />
/// <reference path="./android.media.tv.TvContentRating.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.InputEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module media {
		export module tv {
			export class TvView {
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
				public constructor();
				public constructor(param0: android.content.Context);
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
				public setCallback(param0: android.media.tv.TvView.TvInputCallback): void;
				public setStreamVolume(param0: number): void;
				public tune(param0: string, param1: android.net.Uri): void;
				public reset(): void;
				public setCaptionEnabled(param0: boolean): void;
				public selectTrack(param0: number, param1: string): void;
				public getTracks(param0: number): java.util.List;
				public getSelectedTrack(param0: number): string;
				public timeShiftPause(): void;
				public timeShiftResume(): void;
				public timeShiftSeekTo(param0: number): void;
				public timeShiftSetPlaybackParams(param0: android.media.PlaybackParams): void;
				public setTimeShiftPositionCallback(param0: android.media.tv.TvView.TimeShiftPositionCallback): void;
				public dispatchUnhandledInputEvent(param0: android.view.InputEvent): boolean;
				public onUnhandledInputEvent(param0: android.view.InputEvent): boolean;
				public setOnUnhandledInputEventListener(param0: android.media.tv.TvView.OnUnhandledInputEventListener): void;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public dispatchWindowFocusChanged(param0: boolean): void;
				public onAttachedToWindow(): void;
				public onDetachedFromWindow(): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onMeasure(param0: number, param1: number): void;
				public gatherTransparentRegion(param0: android.graphics.Region): boolean;
				public draw(param0: android.graphics.Canvas): void;
				public dispatchDraw(param0: android.graphics.Canvas): void;
				public onVisibilityChanged(param0: android.view.View, param1: number): void;
			}
			export module TvView {
				export class OnUnhandledInputEventListener {
					public onUnhandledInputEvent(param0: android.view.InputEvent): boolean;
				}
				export class TimeShiftPositionCallback {
					public constructor();
					public onTimeShiftStartPositionChanged(param0: string, param1: number): void;
					public onTimeShiftCurrentPositionChanged(param0: string, param1: number): void;
				}
				export class TvInputCallback {
					public constructor();
					public onConnectionFailed(param0: string): void;
					public onDisconnected(param0: string): void;
					public onChannelRetuned(param0: string, param1: android.net.Uri): void;
					public onTracksChanged(param0: string, param1: java.util.List): void;
					public onTrackSelected(param0: string, param1: number, param2: string): void;
					public onVideoSizeChanged(param0: string, param1: number, param2: number): void;
					public onVideoAvailable(param0: string): void;
					public onVideoUnavailable(param0: string, param1: number): void;
					public onContentAllowed(param0: string): void;
					public onContentBlocked(param0: string, param1: android.media.tv.TvContentRating): void;
					public onTimeShiftStatusChanged(param0: string, param1: number): void;
				}
			}
		}
	}
}
