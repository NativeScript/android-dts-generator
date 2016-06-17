/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.media.Ringtone.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />

declare module android {
	export module media {
		export class RingtoneManager {
			public constructor();
			public constructor(param0: android.app.Activity);
			public constructor(param0: android.content.Context);
			public setType(param0: number): void;
			public inferStreamType(): number;
			public setStopPreviousRingtone(param0: boolean): void;
			public getStopPreviousRingtone(): boolean;
			public stopPreviousRingtone(): void;
			public getIncludeDrm(): boolean;
			public setIncludeDrm(param0: boolean): void;
			public getCursor(): android.database.Cursor;
			public getRingtone(param0: number): android.media.Ringtone;
			public getRingtoneUri(param0: number): android.net.Uri;
			public getRingtonePosition(param0: android.net.Uri): number;
			public static getValidRingtoneUri(param0: android.content.Context): android.net.Uri;
			public static getRingtone(param0: android.content.Context, param1: android.net.Uri): android.media.Ringtone;
			public static getActualDefaultRingtoneUri(param0: android.content.Context, param1: number): android.net.Uri;
			public static setActualDefaultRingtoneUri(param0: android.content.Context, param1: number, param2: android.net.Uri): void;
			public static isDefault(param0: android.net.Uri): boolean;
			public static getDefaultType(param0: android.net.Uri): number;
			public static getDefaultUri(param0: number): android.net.Uri;
			public static ACTION_RINGTONE_PICKER: string;
			public static EXTRA_RINGTONE_DEFAULT_URI: string;
			public static EXTRA_RINGTONE_EXISTING_URI: string;
			public static EXTRA_RINGTONE_INCLUDE_DRM: string;
			public static EXTRA_RINGTONE_PICKED_URI: string;
			public static EXTRA_RINGTONE_SHOW_DEFAULT: string;
			public static EXTRA_RINGTONE_SHOW_SILENT: string;
			public static EXTRA_RINGTONE_TITLE: string;
			public static EXTRA_RINGTONE_TYPE: string;
			public static ID_COLUMN_INDEX: number;
			public static TITLE_COLUMN_INDEX: number;
			public static TYPE_ALARM: number;
			public static TYPE_ALL: number;
			public static TYPE_NOTIFICATION: number;
			public static TYPE_RINGTONE: number;
			public static URI_COLUMN_INDEX: number;
		}
	}
}
