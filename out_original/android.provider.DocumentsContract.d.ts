/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module provider {
		export class DocumentsContract {
			public static buildRootsUri(param0: string): android.net.Uri;
			public static buildRootUri(param0: string, param1: string): android.net.Uri;
			public static buildRecentDocumentsUri(param0: string, param1: string): android.net.Uri;
			public static buildTreeDocumentUri(param0: string, param1: string): android.net.Uri;
			public static buildDocumentUri(param0: string, param1: string): android.net.Uri;
			public static buildDocumentUriUsingTree(param0: android.net.Uri, param1: string): android.net.Uri;
			public static buildChildDocumentsUri(param0: string, param1: string): android.net.Uri;
			public static buildChildDocumentsUriUsingTree(param0: android.net.Uri, param1: string): android.net.Uri;
			public static buildSearchDocumentsUri(param0: string, param1: string, param2: string): android.net.Uri;
			public static isDocumentUri(param0: android.content.Context, param1: android.net.Uri): boolean;
			public static getRootId(param0: android.net.Uri): string;
			public static getDocumentId(param0: android.net.Uri): string;
			public static getTreeDocumentId(param0: android.net.Uri): string;
			public static getSearchDocumentsQuery(param0: android.net.Uri): string;
			public static getDocumentThumbnail(param0: android.content.ContentResolver, param1: android.net.Uri, param2: android.graphics.Point, param3: android.os.CancellationSignal): android.graphics.Bitmap;
			public static createDocument(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string, param3: string): android.net.Uri;
			public static renameDocument(param0: android.content.ContentResolver, param1: android.net.Uri, param2: string): android.net.Uri;
			public static deleteDocument(param0: android.content.ContentResolver, param1: android.net.Uri): boolean;
			public static EXTRA_ERROR: string;
			public static EXTRA_EXCLUDE_SELF: string;
			public static EXTRA_INFO: string;
			public static EXTRA_LOADING: string;
			public static EXTRA_PROMPT: string;
			public static PROVIDER_INTERFACE: string;
		}
		export module DocumentsContract {
			export class Document {
				public static COLUMN_DISPLAY_NAME: string;
				public static COLUMN_DOCUMENT_ID: string;
				public static COLUMN_FLAGS: string;
				public static COLUMN_ICON: string;
				public static COLUMN_LAST_MODIFIED: string;
				public static COLUMN_MIME_TYPE: string;
				public static COLUMN_SIZE: string;
				public static COLUMN_SUMMARY: string;
				public static FLAG_DIR_PREFERS_GRID: number;
				public static FLAG_DIR_PREFERS_LAST_MODIFIED: number;
				public static FLAG_DIR_SUPPORTS_CREATE: number;
				public static FLAG_SUPPORTS_DELETE: number;
				public static FLAG_SUPPORTS_RENAME: number;
				public static FLAG_SUPPORTS_THUMBNAIL: number;
				public static FLAG_SUPPORTS_WRITE: number;
				public static MIME_TYPE_DIR: string;
			}
			export class Root {
				public static COLUMN_AVAILABLE_BYTES: string;
				public static COLUMN_DOCUMENT_ID: string;
				public static COLUMN_FLAGS: string;
				public static COLUMN_ICON: string;
				public static COLUMN_MIME_TYPES: string;
				public static COLUMN_ROOT_ID: string;
				public static COLUMN_SUMMARY: string;
				public static COLUMN_TITLE: string;
				public static FLAG_LOCAL_ONLY: number;
				public static FLAG_SUPPORTS_CREATE: number;
				public static FLAG_SUPPORTS_IS_CHILD: number;
				public static FLAG_SUPPORTS_RECENTS: number;
				public static FLAG_SUPPORTS_SEARCH: number;
			}
		}
	}
}
