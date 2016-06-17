/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module media {
		export class PlaybackParams {
			public constructor();
			public allowDefaults(): android.media.PlaybackParams;
			public setAudioFallbackMode(param0: number): android.media.PlaybackParams;
			public getAudioFallbackMode(): number;
			public setPitch(param0: number): android.media.PlaybackParams;
			public getPitch(): number;
			public setSpeed(param0: number): android.media.PlaybackParams;
			public getSpeed(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static AUDIO_FALLBACK_MODE_DEFAULT: number;
			public static AUDIO_FALLBACK_MODE_FAIL: number;
			public static AUDIO_FALLBACK_MODE_MUTE: number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
