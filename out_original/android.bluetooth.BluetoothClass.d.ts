/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module bluetooth {
		export class BluetoothClass {
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public hasService(param0: number): boolean;
			public getMajorDeviceClass(): number;
			public getDeviceClass(): number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module BluetoothClass {
			export class Device {
				public constructor();
				public static AUDIO_VIDEO_CAMCORDER: number;
				public static AUDIO_VIDEO_CAR_AUDIO: number;
				public static AUDIO_VIDEO_HANDSFREE: number;
				public static AUDIO_VIDEO_HEADPHONES: number;
				public static AUDIO_VIDEO_HIFI_AUDIO: number;
				public static AUDIO_VIDEO_LOUDSPEAKER: number;
				public static AUDIO_VIDEO_MICROPHONE: number;
				public static AUDIO_VIDEO_PORTABLE_AUDIO: number;
				public static AUDIO_VIDEO_SET_TOP_BOX: number;
				public static AUDIO_VIDEO_UNCATEGORIZED: number;
				public static AUDIO_VIDEO_VCR: number;
				public static AUDIO_VIDEO_VIDEO_CAMERA: number;
				public static AUDIO_VIDEO_VIDEO_CONFERENCING: number;
				public static AUDIO_VIDEO_VIDEO_DISPLAY_AND_LOUDSPEAKER: number;
				public static AUDIO_VIDEO_VIDEO_GAMING_TOY: number;
				public static AUDIO_VIDEO_VIDEO_MONITOR: number;
				public static AUDIO_VIDEO_WEARABLE_HEADSET: number;
				public static COMPUTER_DESKTOP: number;
				public static COMPUTER_HANDHELD_PC_PDA: number;
				public static COMPUTER_LAPTOP: number;
				public static COMPUTER_PALM_SIZE_PC_PDA: number;
				public static COMPUTER_SERVER: number;
				public static COMPUTER_UNCATEGORIZED: number;
				public static COMPUTER_WEARABLE: number;
				public static HEALTH_BLOOD_PRESSURE: number;
				public static HEALTH_DATA_DISPLAY: number;
				public static HEALTH_GLUCOSE: number;
				public static HEALTH_PULSE_OXIMETER: number;
				public static HEALTH_PULSE_RATE: number;
				public static HEALTH_THERMOMETER: number;
				public static HEALTH_UNCATEGORIZED: number;
				public static HEALTH_WEIGHING: number;
				public static PHONE_CELLULAR: number;
				public static PHONE_CORDLESS: number;
				public static PHONE_ISDN: number;
				public static PHONE_MODEM_OR_GATEWAY: number;
				public static PHONE_SMART: number;
				public static PHONE_UNCATEGORIZED: number;
				public static TOY_CONTROLLER: number;
				public static TOY_DOLL_ACTION_FIGURE: number;
				public static TOY_GAME: number;
				public static TOY_ROBOT: number;
				public static TOY_UNCATEGORIZED: number;
				public static TOY_VEHICLE: number;
				public static WEARABLE_GLASSES: number;
				public static WEARABLE_HELMET: number;
				public static WEARABLE_JACKET: number;
				public static WEARABLE_PAGER: number;
				public static WEARABLE_UNCATEGORIZED: number;
				public static WEARABLE_WRIST_WATCH: number;
			}
			export module Device {
				export class Major {
					public constructor();
					public static AUDIO_VIDEO: number;
					public static COMPUTER: number;
					public static HEALTH: number;
					public static IMAGING: number;
					public static MISC: number;
					public static NETWORKING: number;
					public static PERIPHERAL: number;
					public static PHONE: number;
					public static TOY: number;
					public static UNCATEGORIZED: number;
					public static WEARABLE: number;
				}
			}
			export class Service {
				public constructor();
				public static AUDIO: number;
				public static CAPTURE: number;
				public static INFORMATION: number;
				public static LIMITED_DISCOVERABILITY: number;
				public static NETWORKING: number;
				public static OBJECT_TRANSFER: number;
				public static POSITIONING: number;
				public static RENDER: number;
				public static TELEPHONY: number;
			}
		}
	}
}
