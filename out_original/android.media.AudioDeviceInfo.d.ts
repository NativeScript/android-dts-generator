/// <reference path="./_helpers.d.ts" />

declare module android {
	export module media {
		export class AudioDeviceInfo {
			public getId(): number;
			public getProductName(): string;
			public isSource(): boolean;
			public isSink(): boolean;
			public getSampleRates(): native.Array<number>;
			public getChannelMasks(): native.Array<number>;
			public getChannelIndexMasks(): native.Array<number>;
			public getChannelCounts(): native.Array<number>;
			public getEncodings(): native.Array<number>;
			public getType(): number;
			public static TYPE_AUX_LINE: number;
			public static TYPE_BLUETOOTH_A2DP: number;
			public static TYPE_BLUETOOTH_SCO: number;
			public static TYPE_BUILTIN_EARPIECE: number;
			public static TYPE_BUILTIN_MIC: number;
			public static TYPE_BUILTIN_SPEAKER: number;
			public static TYPE_DOCK: number;
			public static TYPE_FM: number;
			public static TYPE_FM_TUNER: number;
			public static TYPE_HDMI: number;
			public static TYPE_HDMI_ARC: number;
			public static TYPE_IP: number;
			public static TYPE_LINE_ANALOG: number;
			public static TYPE_LINE_DIGITAL: number;
			public static TYPE_TELEPHONY: number;
			public static TYPE_TV_TUNER: number;
			public static TYPE_UNKNOWN: number;
			public static TYPE_USB_ACCESSORY: number;
			public static TYPE_USB_DEVICE: number;
			public static TYPE_WIRED_HEADPHONES: number;
			public static TYPE_WIRED_HEADSET: number;
		}
	}
}
