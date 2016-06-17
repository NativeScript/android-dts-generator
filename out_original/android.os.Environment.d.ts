/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class Environment {
			public constructor();
			public static getRootDirectory(): java.io.File;
			public static getDataDirectory(): java.io.File;
			public static getExternalStorageDirectory(): java.io.File;
			public static getExternalStoragePublicDirectory(param0: string): java.io.File;
			public static getDownloadCacheDirectory(): java.io.File;
			public static getExternalStorageState(): string;
			public static getStorageState(param0: java.io.File): string;
			public static getExternalStorageState(param0: java.io.File): string;
			public static isExternalStorageRemovable(): boolean;
			public static isExternalStorageRemovable(param0: java.io.File): boolean;
			public static isExternalStorageEmulated(): boolean;
			public static isExternalStorageEmulated(param0: java.io.File): boolean;
			public static DIRECTORY_ALARMS: string;
			public static DIRECTORY_DCIM: string;
			public static DIRECTORY_DOCUMENTS: string;
			public static DIRECTORY_DOWNLOADS: string;
			public static DIRECTORY_MOVIES: string;
			public static DIRECTORY_MUSIC: string;
			public static DIRECTORY_NOTIFICATIONS: string;
			public static DIRECTORY_PICTURES: string;
			public static DIRECTORY_PODCASTS: string;
			public static DIRECTORY_RINGTONES: string;
			public static MEDIA_BAD_REMOVAL: string;
			public static MEDIA_CHECKING: string;
			public static MEDIA_EJECTING: string;
			public static MEDIA_MOUNTED: string;
			public static MEDIA_MOUNTED_READ_ONLY: string;
			public static MEDIA_NOFS: string;
			public static MEDIA_REMOVED: string;
			public static MEDIA_SHARED: string;
			public static MEDIA_UNKNOWN: string;
			public static MEDIA_UNMOUNTABLE: string;
			public static MEDIA_UNMOUNTED: string;
		}
	}
}
