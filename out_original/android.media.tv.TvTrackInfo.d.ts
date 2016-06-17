/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export module tv {
			export class TvTrackInfo {
				public getType(): number;
				public getId(): string;
				public getLanguage(): string;
				public getDescription(): string;
				public getAudioChannelCount(): number;
				public getAudioSampleRate(): number;
				public getVideoWidth(): number;
				public getVideoHeight(): number;
				public getVideoFrameRate(): number;
				public getVideoPixelAspectRatio(): number;
				public getExtra(): android.os.Bundle;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static TYPE_AUDIO: number;
				public static TYPE_SUBTITLE: number;
				public static TYPE_VIDEO: number;
			}
			export module TvTrackInfo {
				export class Builder {
					public constructor();
					public constructor(param0: number, param1: string);
					public setLanguage(param0: string): android.media.tv.TvTrackInfo.Builder;
					public setDescription(param0: string): android.media.tv.TvTrackInfo.Builder;
					public setAudioChannelCount(param0: number): android.media.tv.TvTrackInfo.Builder;
					public setAudioSampleRate(param0: number): android.media.tv.TvTrackInfo.Builder;
					public setVideoWidth(param0: number): android.media.tv.TvTrackInfo.Builder;
					public setVideoHeight(param0: number): android.media.tv.TvTrackInfo.Builder;
					public setVideoFrameRate(param0: number): android.media.tv.TvTrackInfo.Builder;
					public setVideoPixelAspectRatio(param0: number): android.media.tv.TvTrackInfo.Builder;
					public setExtra(param0: android.os.Bundle): android.media.tv.TvTrackInfo.Builder;
					public build(): android.media.tv.TvTrackInfo;
				}
			}
		}
	}
}
