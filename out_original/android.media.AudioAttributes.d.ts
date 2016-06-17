/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module media {
		export class AudioAttributes {
			public getContentType(): number;
			public getUsage(): number;
			public getFlags(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public static CONTENT_TYPE_MOVIE: number;
			public static CONTENT_TYPE_MUSIC: number;
			public static CONTENT_TYPE_SONIFICATION: number;
			public static CONTENT_TYPE_SPEECH: number;
			public static CONTENT_TYPE_UNKNOWN: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static FLAG_AUDIBILITY_ENFORCED: number;
			public static FLAG_HW_AV_SYNC: number;
			public static USAGE_ALARM: number;
			public static USAGE_ASSISTANCE_ACCESSIBILITY: number;
			public static USAGE_ASSISTANCE_NAVIGATION_GUIDANCE: number;
			public static USAGE_ASSISTANCE_SONIFICATION: number;
			public static USAGE_GAME: number;
			public static USAGE_MEDIA: number;
			public static USAGE_NOTIFICATION: number;
			public static USAGE_NOTIFICATION_COMMUNICATION_DELAYED: number;
			public static USAGE_NOTIFICATION_COMMUNICATION_INSTANT: number;
			public static USAGE_NOTIFICATION_COMMUNICATION_REQUEST: number;
			public static USAGE_NOTIFICATION_EVENT: number;
			public static USAGE_NOTIFICATION_RINGTONE: number;
			public static USAGE_UNKNOWN: number;
			public static USAGE_VOICE_COMMUNICATION: number;
			public static USAGE_VOICE_COMMUNICATION_SIGNALLING: number;
		}
		export module AudioAttributes {
			export class Builder {
				public constructor();
				public constructor(param0: android.media.AudioAttributes);
				public build(): android.media.AudioAttributes;
				public setUsage(param0: number): android.media.AudioAttributes.Builder;
				public setContentType(param0: number): android.media.AudioAttributes.Builder;
				public setFlags(param0: number): android.media.AudioAttributes.Builder;
				public setLegacyStreamType(param0: number): android.media.AudioAttributes.Builder;
			}
		}
	}
}
