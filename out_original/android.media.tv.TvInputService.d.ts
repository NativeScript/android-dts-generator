/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.PlaybackParams.d.ts" />
/// <reference path="./android.media.tv.TvContentRating.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module media {
		export module tv {
			export class TvInputService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public onCreateSession(param0: string): android.media.tv.TvInputService.Session;
				public static SERVICE_INTERFACE: string;
				public static SERVICE_META_DATA: string;
			}
			export module TvInputService {
				export class HardwareSession {
					public constructor();
					public constructor(param0: android.content.Context);
					public getHardwareInputId(): string;
					public onSetSurface(param0: android.view.Surface): boolean;
					public onHardwareVideoAvailable(): void;
					public onHardwareVideoUnavailable(param0: number): void;
				}
				export class Session {
					public constructor();
					public constructor(param0: android.content.Context);
					public setOverlayViewEnabled(param0: boolean): void;
					public notifyChannelRetuned(param0: android.net.Uri): void;
					public notifyTracksChanged(param0: java.util.List): void;
					public notifyTrackSelected(param0: number, param1: string): void;
					public notifyVideoAvailable(): void;
					public notifyVideoUnavailable(param0: number): void;
					public notifyContentAllowed(): void;
					public notifyContentBlocked(param0: android.media.tv.TvContentRating): void;
					public notifyTimeShiftStatusChanged(param0: number): void;
					public layoutSurface(param0: number, param1: number, param2: number, param3: number): void;
					public onRelease(): void;
					public onSetSurface(param0: android.view.Surface): boolean;
					public onSurfaceChanged(param0: number, param1: number, param2: number): void;
					public onOverlayViewSizeChanged(param0: number, param1: number): void;
					public onSetStreamVolume(param0: number): void;
					public onTune(param0: android.net.Uri): boolean;
					public onSetCaptionEnabled(param0: boolean): void;
					public onUnblockContent(param0: android.media.tv.TvContentRating): void;
					public onSelectTrack(param0: number, param1: string): boolean;
					public onCreateOverlayView(): android.view.View;
					public onTimeShiftPause(): void;
					public onTimeShiftResume(): void;
					public onTimeShiftSeekTo(param0: number): void;
					public onTimeShiftSetPlaybackParams(param0: android.media.PlaybackParams): void;
					public onTimeShiftGetStartPosition(): number;
					public onTimeShiftGetCurrentPosition(): number;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onTrackballEvent(param0: android.view.MotionEvent): boolean;
					public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				}
			}
		}
	}
}
