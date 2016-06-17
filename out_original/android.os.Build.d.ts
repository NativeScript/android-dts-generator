/// <reference path="./_helpers.d.ts" />

declare module android {
	export module os {
		export class Build {
			public constructor();
			public static getRadioVersion(): string;
			public static BOARD: string;
			public static BOOTLOADER: string;
			public static BRAND: string;
			public static CPU_ABI: string;
			public static CPU_ABI2: string;
			public static DEVICE: string;
			public static DISPLAY: string;
			public static FINGERPRINT: string;
			public static HARDWARE: string;
			public static HOST: string;
			public static ID: string;
			public static MANUFACTURER: string;
			public static MODEL: string;
			public static PRODUCT: string;
			public static RADIO: string;
			public static SERIAL: string;
			public static SUPPORTED_32_BIT_ABIS: native.Array<string>;
			public static SUPPORTED_64_BIT_ABIS: native.Array<string>;
			public static SUPPORTED_ABIS: native.Array<string>;
			public static TAGS: string;
			public static TIME: number;
			public static TYPE: string;
			public static UNKNOWN: string;
			public static USER: string;
		}
		export module Build {
			export class VERSION {
				public constructor();
				public static BASE_OS: string;
				public static CODENAME: string;
				public static INCREMENTAL: string;
				public static PREVIEW_SDK_INT: number;
				public static RELEASE: string;
				public static SDK: string;
				public static SDK_INT: number;
				public static SECURITY_PATCH: string;
			}
			export class VERSION_CODES {
				public constructor();
				public static BASE: number;
				public static BASE_1_1: number;
				public static CUPCAKE: number;
				public static CUR_DEVELOPMENT: number;
				public static DONUT: number;
				public static ECLAIR: number;
				public static ECLAIR_0_1: number;
				public static ECLAIR_MR1: number;
				public static FROYO: number;
				public static GINGERBREAD: number;
				public static GINGERBREAD_MR1: number;
				public static HONEYCOMB: number;
				public static HONEYCOMB_MR1: number;
				public static HONEYCOMB_MR2: number;
				public static ICE_CREAM_SANDWICH: number;
				public static ICE_CREAM_SANDWICH_MR1: number;
				public static JELLY_BEAN: number;
				public static JELLY_BEAN_MR1: number;
				public static JELLY_BEAN_MR2: number;
				public static KITKAT: number;
				public static KITKAT_WATCH: number;
				public static LOLLIPOP: number;
				public static LOLLIPOP_MR1: number;
				public static M: number;
			}
		}
	}
}
