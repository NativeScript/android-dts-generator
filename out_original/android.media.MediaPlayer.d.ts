/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.media.MediaDataSource.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.media.MediaTimestamp.d.ts" />
/// <reference path="./android.media.PlaybackParams.d.ts" />
/// <reference path="./android.media.SyncParams.d.ts" />
/// <reference path="./android.media.TimedMetaData.d.ts" />
/// <reference path="./android.media.TimedText.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module media {
		export class MediaPlayer {
			public constructor();
			public setDisplay(param0: android.view.SurfaceHolder): void;
			public setSurface(param0: android.view.Surface): void;
			public setVideoScalingMode(param0: number): void;
			public static create(param0: android.content.Context, param1: android.net.Uri): android.media.MediaPlayer;
			public static create(param0: android.content.Context, param1: android.net.Uri, param2: android.view.SurfaceHolder): android.media.MediaPlayer;
			public static create(param0: android.content.Context, param1: android.net.Uri, param2: android.view.SurfaceHolder, param3: android.media.AudioAttributes, param4: number): android.media.MediaPlayer;
			public static create(param0: android.content.Context, param1: number): android.media.MediaPlayer;
			public static create(param0: android.content.Context, param1: number, param2: android.media.AudioAttributes, param3: number): android.media.MediaPlayer;
			public setDataSource(param0: android.content.Context, param1: android.net.Uri): void;
			public setDataSource(param0: android.content.Context, param1: android.net.Uri, param2: java.util.Map): void;
			public setDataSource(param0: string): void;
			public setDataSource(param0: java.io.FileDescriptor): void;
			public setDataSource(param0: java.io.FileDescriptor, param1: number, param2: number): void;
			public setDataSource(param0: android.media.MediaDataSource): void;
			public prepare(): void;
			public prepareAsync(): void;
			public start(): void;
			public stop(): void;
			public pause(): void;
			public setWakeMode(param0: android.content.Context, param1: number): void;
			public setScreenOnWhilePlaying(param0: boolean): void;
			public getVideoWidth(): number;
			public getVideoHeight(): number;
			public isPlaying(): boolean;
			public setPlaybackParams(param0: android.media.PlaybackParams): void;
			public getPlaybackParams(): android.media.PlaybackParams;
			public setSyncParams(param0: android.media.SyncParams): void;
			public getSyncParams(): android.media.SyncParams;
			public seekTo(param0: number): void;
			public getTimestamp(): android.media.MediaTimestamp;
			public getCurrentPosition(): number;
			public getDuration(): number;
			public setNextMediaPlayer(param0: android.media.MediaPlayer): void;
			public release(): void;
			public reset(): void;
			public setAudioStreamType(param0: number): void;
			public setAudioAttributes(param0: android.media.AudioAttributes): void;
			public setLooping(param0: boolean): void;
			public isLooping(): boolean;
			public setVolume(param0: number, param1: number): void;
			public setAudioSessionId(param0: number): void;
			public getAudioSessionId(): number;
			public attachAuxEffect(param0: number): void;
			public setAuxEffectSendLevel(param0: number): void;
			public getTrackInfo(): native.Array<android.media.MediaPlayer.TrackInfo>;
			public addTimedTextSource(param0: string, param1: string): void;
			public addTimedTextSource(param0: android.content.Context, param1: android.net.Uri, param2: string): void;
			public addTimedTextSource(param0: java.io.FileDescriptor, param1: string): void;
			public addTimedTextSource(param0: java.io.FileDescriptor, param1: number, param2: number, param3: string): void;
			public getSelectedTrack(param0: number): number;
			public selectTrack(param0: number): void;
			public deselectTrack(param0: number): void;
			public finalize(): void;
			public setOnPreparedListener(param0: android.media.MediaPlayer.OnPreparedListener): void;
			public setOnCompletionListener(param0: android.media.MediaPlayer.OnCompletionListener): void;
			public setOnBufferingUpdateListener(param0: android.media.MediaPlayer.OnBufferingUpdateListener): void;
			public setOnSeekCompleteListener(param0: android.media.MediaPlayer.OnSeekCompleteListener): void;
			public setOnVideoSizeChangedListener(param0: android.media.MediaPlayer.OnVideoSizeChangedListener): void;
			public setOnTimedTextListener(param0: android.media.MediaPlayer.OnTimedTextListener): void;
			public setOnTimedMetaDataAvailableListener(param0: android.media.MediaPlayer.OnTimedMetaDataAvailableListener): void;
			public setOnErrorListener(param0: android.media.MediaPlayer.OnErrorListener): void;
			public setOnInfoListener(param0: android.media.MediaPlayer.OnInfoListener): void;
			public static MEDIA_ERROR_IO: number;
			public static MEDIA_ERROR_MALFORMED: number;
			public static MEDIA_ERROR_NOT_VALID_FOR_PROGRESSIVE_PLAYBACK: number;
			public static MEDIA_ERROR_SERVER_DIED: number;
			public static MEDIA_ERROR_TIMED_OUT: number;
			public static MEDIA_ERROR_UNKNOWN: number;
			public static MEDIA_ERROR_UNSUPPORTED: number;
			public static MEDIA_INFO_BAD_INTERLEAVING: number;
			public static MEDIA_INFO_BUFFERING_END: number;
			public static MEDIA_INFO_BUFFERING_START: number;
			public static MEDIA_INFO_METADATA_UPDATE: number;
			public static MEDIA_INFO_NOT_SEEKABLE: number;
			public static MEDIA_INFO_SUBTITLE_TIMED_OUT: number;
			public static MEDIA_INFO_UNKNOWN: number;
			public static MEDIA_INFO_UNSUPPORTED_SUBTITLE: number;
			public static MEDIA_INFO_VIDEO_RENDERING_START: number;
			public static MEDIA_INFO_VIDEO_TRACK_LAGGING: number;
			public static MEDIA_MIMETYPE_TEXT_SUBRIP: string;
			public static VIDEO_SCALING_MODE_SCALE_TO_FIT: number;
			public static VIDEO_SCALING_MODE_SCALE_TO_FIT_WITH_CROPPING: number;
		}
		export module MediaPlayer {
			export class OnBufferingUpdateListener {
				public onBufferingUpdate(param0: android.media.MediaPlayer, param1: number): void;
			}
			export class OnCompletionListener {
				public onCompletion(param0: android.media.MediaPlayer): void;
			}
			export class OnErrorListener {
				public onError(param0: android.media.MediaPlayer, param1: number, param2: number): boolean;
			}
			export class OnInfoListener {
				public onInfo(param0: android.media.MediaPlayer, param1: number, param2: number): boolean;
			}
			export class OnPreparedListener {
				public onPrepared(param0: android.media.MediaPlayer): void;
			}
			export class OnSeekCompleteListener {
				public onSeekComplete(param0: android.media.MediaPlayer): void;
			}
			export class OnTimedMetaDataAvailableListener {
				public onTimedMetaDataAvailable(param0: android.media.MediaPlayer, param1: android.media.TimedMetaData): void;
			}
			export class OnTimedTextListener {
				public onTimedText(param0: android.media.MediaPlayer, param1: android.media.TimedText): void;
			}
			export class OnVideoSizeChangedListener {
				public onVideoSizeChanged(param0: android.media.MediaPlayer, param1: number, param2: number): void;
			}
			export class TrackInfo {
				public getTrackType(): number;
				public getLanguage(): string;
				public getFormat(): android.media.MediaFormat;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public toString(): string;
				public static MEDIA_TRACK_TYPE_AUDIO: number;
				public static MEDIA_TRACK_TYPE_METADATA: number;
				public static MEDIA_TRACK_TYPE_SUBTITLE: number;
				public static MEDIA_TRACK_TYPE_TIMEDTEXT: number;
				public static MEDIA_TRACK_TYPE_UNKNOWN: number;
				public static MEDIA_TRACK_TYPE_VIDEO: number;
			}
		}
	}
}
