/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class ExifInterface {
			public constructor();
			public constructor(param0: string);
			public getAttribute(param0: string): string;
			public getAttributeInt(param0: string, param1: number): number;
			public getAttributeDouble(param0: string, param1: number): number;
			public setAttribute(param0: string, param1: string): void;
			public saveAttributes(): void;
			public hasThumbnail(): boolean;
			public getThumbnail(): native.Array<number>;
			public getLatLong(param0: native.Array<number>): boolean;
			public getAltitude(param0: number): number;
			public static ORIENTATION_FLIP_HORIZONTAL: number;
			public static ORIENTATION_FLIP_VERTICAL: number;
			public static ORIENTATION_NORMAL: number;
			public static ORIENTATION_ROTATE_180: number;
			public static ORIENTATION_ROTATE_270: number;
			public static ORIENTATION_ROTATE_90: number;
			public static ORIENTATION_TRANSPOSE: number;
			public static ORIENTATION_TRANSVERSE: number;
			public static ORIENTATION_UNDEFINED: number;
			public static TAG_APERTURE: string;
			public static TAG_DATETIME: string;
			public static TAG_DATETIME_DIGITIZED: string;
			public static TAG_EXPOSURE_TIME: string;
			public static TAG_FLASH: string;
			public static TAG_FOCAL_LENGTH: string;
			public static TAG_GPS_ALTITUDE: string;
			public static TAG_GPS_ALTITUDE_REF: string;
			public static TAG_GPS_DATESTAMP: string;
			public static TAG_GPS_LATITUDE: string;
			public static TAG_GPS_LATITUDE_REF: string;
			public static TAG_GPS_LONGITUDE: string;
			public static TAG_GPS_LONGITUDE_REF: string;
			public static TAG_GPS_PROCESSING_METHOD: string;
			public static TAG_GPS_TIMESTAMP: string;
			public static TAG_IMAGE_LENGTH: string;
			public static TAG_IMAGE_WIDTH: string;
			public static TAG_ISO: string;
			public static TAG_MAKE: string;
			public static TAG_MODEL: string;
			public static TAG_ORIENTATION: string;
			public static TAG_SUBSEC_TIME: string;
			public static TAG_SUBSEC_TIME_DIG: string;
			public static TAG_SUBSEC_TIME_ORIG: string;
			public static TAG_WHITE_BALANCE: string;
			public static WHITEBALANCE_AUTO: number;
			public static WHITEBALANCE_MANUAL: number;
		}
	}
}
