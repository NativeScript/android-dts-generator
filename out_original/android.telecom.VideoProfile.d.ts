/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module telecom {
		export class VideoProfile {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public getVideoState(): number;
			public getQuality(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static videoStateToString(param0: number): string;
			public static isAudioOnly(param0: number): boolean;
			public static isVideo(param0: number): boolean;
			public static isTransmissionEnabled(param0: number): boolean;
			public static isReceptionEnabled(param0: number): boolean;
			public static isBidirectional(param0: number): boolean;
			public static isPaused(param0: number): boolean;
			public static CREATOR: android.os.Parcelable.Creator;
			public static QUALITY_DEFAULT: number;
			public static QUALITY_HIGH: number;
			public static QUALITY_LOW: number;
			public static QUALITY_MEDIUM: number;
			public static STATE_AUDIO_ONLY: number;
			public static STATE_BIDIRECTIONAL: number;
			public static STATE_PAUSED: number;
			public static STATE_RX_ENABLED: number;
			public static STATE_TX_ENABLED: number;
		}
		export module VideoProfile {
			export class CameraCapabilities {
				public constructor();
				public constructor(param0: number, param1: number);
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getWidth(): number;
				public getHeight(): number;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
