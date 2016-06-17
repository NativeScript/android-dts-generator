/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class DownloadManager {
			public enqueue(param0: android.app.DownloadManager.Request): number;
			public remove(param0: native.Array<number>): number;
			public query(param0: android.app.DownloadManager.Query): android.database.Cursor;
			public openDownloadedFile(param0: number): android.os.ParcelFileDescriptor;
			public getUriForDownloadedFile(param0: number): android.net.Uri;
			public getMimeTypeForDownloadedFile(param0: number): string;
			public static getMaxBytesOverMobile(param0: android.content.Context): java.lang.Long;
			public static getRecommendedMaxBytesOverMobile(param0: android.content.Context): java.lang.Long;
			public addCompletedDownload(param0: string, param1: string, param2: boolean, param3: string, param4: string, param5: number, param6: boolean): number;
			public static ACTION_DOWNLOAD_COMPLETE: string;
			public static ACTION_NOTIFICATION_CLICKED: string;
			public static ACTION_VIEW_DOWNLOADS: string;
			public static COLUMN_BYTES_DOWNLOADED_SO_FAR: string;
			public static COLUMN_DESCRIPTION: string;
			public static COLUMN_ID: string;
			public static COLUMN_LAST_MODIFIED_TIMESTAMP: string;
			public static COLUMN_LOCAL_FILENAME: string;
			public static COLUMN_LOCAL_URI: string;
			public static COLUMN_MEDIAPROVIDER_URI: string;
			public static COLUMN_MEDIA_TYPE: string;
			public static COLUMN_REASON: string;
			public static COLUMN_STATUS: string;
			public static COLUMN_TITLE: string;
			public static COLUMN_TOTAL_SIZE_BYTES: string;
			public static COLUMN_URI: string;
			public static ERROR_CANNOT_RESUME: number;
			public static ERROR_DEVICE_NOT_FOUND: number;
			public static ERROR_FILE_ALREADY_EXISTS: number;
			public static ERROR_FILE_ERROR: number;
			public static ERROR_HTTP_DATA_ERROR: number;
			public static ERROR_INSUFFICIENT_SPACE: number;
			public static ERROR_TOO_MANY_REDIRECTS: number;
			public static ERROR_UNHANDLED_HTTP_CODE: number;
			public static ERROR_UNKNOWN: number;
			public static EXTRA_DOWNLOAD_ID: string;
			public static EXTRA_NOTIFICATION_CLICK_DOWNLOAD_IDS: string;
			public static INTENT_EXTRAS_SORT_BY_SIZE: string;
			public static PAUSED_QUEUED_FOR_WIFI: number;
			public static PAUSED_UNKNOWN: number;
			public static PAUSED_WAITING_FOR_NETWORK: number;
			public static PAUSED_WAITING_TO_RETRY: number;
			public static STATUS_FAILED: number;
			public static STATUS_PAUSED: number;
			public static STATUS_PENDING: number;
			public static STATUS_RUNNING: number;
			public static STATUS_SUCCESSFUL: number;
		}
		export module DownloadManager {
			export class Query {
				public constructor();
				public setFilterById(param0: native.Array<number>): android.app.DownloadManager.Query;
				public setFilterByStatus(param0: number): android.app.DownloadManager.Query;
			}
			export class Request {
				public constructor();
				public constructor(param0: android.net.Uri);
				public setDestinationUri(param0: android.net.Uri): android.app.DownloadManager.Request;
				public setDestinationInExternalFilesDir(param0: android.content.Context, param1: string, param2: string): android.app.DownloadManager.Request;
				public setDestinationInExternalPublicDir(param0: string, param1: string): android.app.DownloadManager.Request;
				public allowScanningByMediaScanner(): void;
				public addRequestHeader(param0: string, param1: string): android.app.DownloadManager.Request;
				public setTitle(param0: string): android.app.DownloadManager.Request;
				public setDescription(param0: string): android.app.DownloadManager.Request;
				public setMimeType(param0: string): android.app.DownloadManager.Request;
				public setShowRunningNotification(param0: boolean): android.app.DownloadManager.Request;
				public setNotificationVisibility(param0: number): android.app.DownloadManager.Request;
				public setAllowedNetworkTypes(param0: number): android.app.DownloadManager.Request;
				public setAllowedOverRoaming(param0: boolean): android.app.DownloadManager.Request;
				public setAllowedOverMetered(param0: boolean): android.app.DownloadManager.Request;
				public setVisibleInDownloadsUi(param0: boolean): android.app.DownloadManager.Request;
				public static NETWORK_MOBILE: number;
				public static NETWORK_WIFI: number;
				public static VISIBILITY_HIDDEN: number;
				public static VISIBILITY_VISIBLE: number;
				public static VISIBILITY_VISIBLE_NOTIFY_COMPLETED: number;
				public static VISIBILITY_VISIBLE_NOTIFY_ONLY_COMPLETION: number;
			}
		}
	}
}
