/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class MediaSyncEvent {
			public static createEvent(param0: number): android.media.MediaSyncEvent;
			public setAudioSessionId(param0: number): android.media.MediaSyncEvent;
			public getType(): number;
			public getAudioSessionId(): number;
			public static SYNC_EVENT_NONE: number;
			public static SYNC_EVENT_PRESENTATION_COMPLETE: number;
		}
	}
}
