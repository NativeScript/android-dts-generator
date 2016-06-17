/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module provider {
		export class MediaStore {
			public constructor();
			public static getMediaScannerUri(): android.net.Uri;
			public static getVersion(param0: android.content.Context): string;
			public static ACTION_IMAGE_CAPTURE: string;
			public static ACTION_IMAGE_CAPTURE_SECURE: string;
			public static ACTION_VIDEO_CAPTURE: string;
			public static AUTHORITY: string;
			public static EXTRA_DURATION_LIMIT: string;
			public static EXTRA_FINISH_ON_COMPLETION: string;
			public static EXTRA_FULL_SCREEN: string;
			public static EXTRA_MEDIA_ALBUM: string;
			public static EXTRA_MEDIA_ARTIST: string;
			public static EXTRA_MEDIA_FOCUS: string;
			public static EXTRA_MEDIA_GENRE: string;
			public static EXTRA_MEDIA_PLAYLIST: string;
			public static EXTRA_MEDIA_RADIO_CHANNEL: string;
			public static EXTRA_MEDIA_TITLE: string;
			public static EXTRA_OUTPUT: string;
			public static EXTRA_SCREEN_ORIENTATION: string;
			public static EXTRA_SHOW_ACTION_ICONS: string;
			public static EXTRA_SIZE_LIMIT: string;
			public static EXTRA_VIDEO_QUALITY: string;
			public static INTENT_ACTION_MEDIA_PLAY_FROM_SEARCH: string;
			public static INTENT_ACTION_MEDIA_SEARCH: string;
			public static INTENT_ACTION_MUSIC_PLAYER: string;
			public static INTENT_ACTION_STILL_IMAGE_CAMERA: string;
			public static INTENT_ACTION_STILL_IMAGE_CAMERA_SECURE: string;
			public static INTENT_ACTION_TEXT_OPEN_FROM_SEARCH: string;
			public static INTENT_ACTION_VIDEO_CAMERA: string;
			public static INTENT_ACTION_VIDEO_PLAY_FROM_SEARCH: string;
			public static MEDIA_IGNORE_FILENAME: string;
			public static MEDIA_SCANNER_VOLUME: string;
			public static META_DATA_STILL_IMAGE_CAMERA_PREWARM_SERVICE: string;
			public static UNKNOWN_STRING: string;
		}
		export module MediaStore {
			export class Audio {
				public constructor();
				public static keyFor(param0: string): string;
			}
			export module Audio {
				export class AlbumColumns {
					public static ALBUM: string;
					public static ALBUM_ART: string;
					public static ALBUM_ID: string;
					public static ALBUM_KEY: string;
					public static ARTIST: string;
					public static FIRST_YEAR: string;
					public static LAST_YEAR: string;
					public static NUMBER_OF_SONGS: string;
					public static NUMBER_OF_SONGS_FOR_ARTIST: string;
				}
				export class Albums {
					public constructor();
					public static getContentUri(param0: string): android.net.Uri;
					public static CONTENT_TYPE: string;
					public static DEFAULT_SORT_ORDER: string;
					public static ENTRY_CONTENT_TYPE: string;
					public static EXTERNAL_CONTENT_URI: android.net.Uri;
					public static INTERNAL_CONTENT_URI: android.net.Uri;
				}
				export class ArtistColumns {
					public static ARTIST: string;
					public static ARTIST_KEY: string;
					public static NUMBER_OF_ALBUMS: string;
					public static NUMBER_OF_TRACKS: string;
				}
				export class Artists {
					public constructor();
					public static getContentUri(param0: string): android.net.Uri;
					public static CONTENT_TYPE: string;
					public static DEFAULT_SORT_ORDER: string;
					public static ENTRY_CONTENT_TYPE: string;
					public static EXTERNAL_CONTENT_URI: android.net.Uri;
					public static INTERNAL_CONTENT_URI: android.net.Uri;
				}
				export module Artists {
					export class Albums {
						public constructor();
						public static getContentUri(param0: string, param1: number): android.net.Uri;
					}
				}
				export class AudioColumns {
					public static ALBUM: string;
					public static ALBUM_ID: string;
					public static ALBUM_KEY: string;
					public static ARTIST: string;
					public static ARTIST_ID: string;
					public static ARTIST_KEY: string;
					public static BOOKMARK: string;
					public static COMPOSER: string;
					public static DURATION: string;
					public static IS_ALARM: string;
					public static IS_MUSIC: string;
					public static IS_NOTIFICATION: string;
					public static IS_PODCAST: string;
					public static IS_RINGTONE: string;
					public static TITLE_KEY: string;
					public static TRACK: string;
					public static YEAR: string;
				}
				export class Genres {
					public constructor();
					public static getContentUri(param0: string): android.net.Uri;
					public static getContentUriForAudioId(param0: string, param1: number): android.net.Uri;
					public static CONTENT_TYPE: string;
					public static DEFAULT_SORT_ORDER: string;
					public static ENTRY_CONTENT_TYPE: string;
					public static EXTERNAL_CONTENT_URI: android.net.Uri;
					public static INTERNAL_CONTENT_URI: android.net.Uri;
				}
				export module Genres {
					export class Members {
						public constructor();
						public static getContentUri(param0: string, param1: number): android.net.Uri;
						public static AUDIO_ID: string;
						public static CONTENT_DIRECTORY: string;
						public static DEFAULT_SORT_ORDER: string;
						public static GENRE_ID: string;
					}
				}
				export class GenresColumns {
					public static NAME: string;
				}
				export class Media {
					public constructor();
					public static getContentUri(param0: string): android.net.Uri;
					public static getContentUriForPath(param0: string): android.net.Uri;
					public static CONTENT_TYPE: string;
					public static DEFAULT_SORT_ORDER: string;
					public static ENTRY_CONTENT_TYPE: string;
					public static EXTERNAL_CONTENT_URI: android.net.Uri;
					public static EXTRA_MAX_BYTES: string;
					public static INTERNAL_CONTENT_URI: android.net.Uri;
					public static RECORD_SOUND_ACTION: string;
				}
				export class Playlists {
					public constructor();
					public static getContentUri(param0: string): android.net.Uri;
					public static CONTENT_TYPE: string;
					public static DEFAULT_SORT_ORDER: string;
					public static ENTRY_CONTENT_TYPE: string;
					public static EXTERNAL_CONTENT_URI: android.net.Uri;
					public static INTERNAL_CONTENT_URI: android.net.Uri;
				}
				export module Playlists {
					export class Members {
						public constructor();
						public static getContentUri(param0: string, param1: number): android.net.Uri;
						public static moveItem(param0: android.content.ContentResolver, param1: number, param2: number, param3: number): boolean;
						public static AUDIO_ID: string;
						public static CONTENT_DIRECTORY: string;
						public static DEFAULT_SORT_ORDER: string;
						public static PLAYLIST_ID: string;
						public static PLAY_ORDER: string;
						public static _ID: string;
					}
				}
				export class PlaylistsColumns {
					public static DATA: string;
					public static DATE_ADDED: string;
					public static DATE_MODIFIED: string;
					public static NAME: string;
				}
				export class Radio {
					public static ENTRY_CONTENT_TYPE: string;
				}
			}
			export class Files {
				public constructor();
				public static getContentUri(param0: string): android.net.Uri;
				public static getContentUri(param0: string, param1: number): android.net.Uri;
			}
			export module Files {
				export class FileColumns {
					public static MEDIA_TYPE: string;
					public static MEDIA_TYPE_AUDIO: number;
					public static MEDIA_TYPE_IMAGE: number;
					public static MEDIA_TYPE_NONE: number;
					public static MEDIA_TYPE_PLAYLIST: number;
					public static MEDIA_TYPE_VIDEO: number;
					public static MIME_TYPE: string;
					public static PARENT: string;
					public static TITLE: string;
				}
			}
			export class Images {
				public constructor();
			}
			export module Images {
				export class ImageColumns {
					public static BUCKET_DISPLAY_NAME: string;
					public static BUCKET_ID: string;
					public static DATE_TAKEN: string;
					public static DESCRIPTION: string;
					public static IS_PRIVATE: string;
					public static LATITUDE: string;
					public static LONGITUDE: string;
					public static MINI_THUMB_MAGIC: string;
					public static ORIENTATION: string;
					public static PICASA_ID: string;
				}
				export class Media {
					public constructor();
					public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>): android.database.Cursor;
					public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>, param3: string, param4: string): android.database.Cursor;
					public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string): android.database.Cursor;
					public static getBitmap(param0: android.content.ContentResolver, param1: android.net.Uri): android.graphics.Bitmap;
					public static insertImage(param0: android.content.ContentResolver, param1: string, param2: string, param3: string): string;
					public static insertImage(param0: android.content.ContentResolver, param1: android.graphics.Bitmap, param2: string, param3: string): string;
					public static getContentUri(param0: string): android.net.Uri;
					public static CONTENT_TYPE: string;
					public static DEFAULT_SORT_ORDER: string;
					public static EXTERNAL_CONTENT_URI: android.net.Uri;
					public static INTERNAL_CONTENT_URI: android.net.Uri;
				}
				export class Thumbnails {
					public constructor();
					public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>): android.database.Cursor;
					public static queryMiniThumbnails(param0: android.content.ContentResolver, param1: android.net.Uri, param2: number, param3: native.Array<string>): android.database.Cursor;
					public static queryMiniThumbnail(param0: android.content.ContentResolver, param1: number, param2: number, param3: native.Array<string>): android.database.Cursor;
					public static cancelThumbnailRequest(param0: android.content.ContentResolver, param1: number): void;
					public static getThumbnail(param0: android.content.ContentResolver, param1: number, param2: number, param3: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
					public static cancelThumbnailRequest(param0: android.content.ContentResolver, param1: number, param2: number): void;
					public static getThumbnail(param0: android.content.ContentResolver, param1: number, param2: number, param3: number, param4: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
					public static getContentUri(param0: string): android.net.Uri;
					public static DATA: string;
					public static DEFAULT_SORT_ORDER: string;
					public static EXTERNAL_CONTENT_URI: android.net.Uri;
					public static FULL_SCREEN_KIND: number;
					public static HEIGHT: string;
					public static IMAGE_ID: string;
					public static INTERNAL_CONTENT_URI: android.net.Uri;
					public static KIND: string;
					public static MICRO_KIND: number;
					public static MINI_KIND: number;
					public static THUMB_DATA: string;
					public static WIDTH: string;
				}
			}
			export class MediaColumns {
				public static DATA: string;
				public static DATE_ADDED: string;
				public static DATE_MODIFIED: string;
				public static DISPLAY_NAME: string;
				public static HEIGHT: string;
				public static MIME_TYPE: string;
				public static SIZE: string;
				public static TITLE: string;
				public static WIDTH: string;
			}
			export class Video {
				public constructor();
				public static query(param0: android.content.ContentResolver, param1: android.net.Uri, param2: native.Array<string>): android.database.Cursor;
				public static DEFAULT_SORT_ORDER: string;
			}
			export module Video {
				export class Media {
					public constructor();
					public static getContentUri(param0: string): android.net.Uri;
					public static CONTENT_TYPE: string;
					public static DEFAULT_SORT_ORDER: string;
					public static EXTERNAL_CONTENT_URI: android.net.Uri;
					public static INTERNAL_CONTENT_URI: android.net.Uri;
				}
				export class Thumbnails {
					public constructor();
					public static cancelThumbnailRequest(param0: android.content.ContentResolver, param1: number): void;
					public static getThumbnail(param0: android.content.ContentResolver, param1: number, param2: number, param3: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
					public static getThumbnail(param0: android.content.ContentResolver, param1: number, param2: number, param3: number, param4: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
					public static cancelThumbnailRequest(param0: android.content.ContentResolver, param1: number, param2: number): void;
					public static getContentUri(param0: string): android.net.Uri;
					public static DATA: string;
					public static DEFAULT_SORT_ORDER: string;
					public static EXTERNAL_CONTENT_URI: android.net.Uri;
					public static FULL_SCREEN_KIND: number;
					public static HEIGHT: string;
					public static INTERNAL_CONTENT_URI: android.net.Uri;
					public static KIND: string;
					public static MICRO_KIND: number;
					public static MINI_KIND: number;
					public static VIDEO_ID: string;
					public static WIDTH: string;
				}
				export class VideoColumns {
					public static ALBUM: string;
					public static ARTIST: string;
					public static BOOKMARK: string;
					public static BUCKET_DISPLAY_NAME: string;
					public static BUCKET_ID: string;
					public static CATEGORY: string;
					public static DATE_TAKEN: string;
					public static DESCRIPTION: string;
					public static DURATION: string;
					public static IS_PRIVATE: string;
					public static LANGUAGE: string;
					public static LATITUDE: string;
					public static LONGITUDE: string;
					public static MINI_THUMB_MAGIC: string;
					public static RESOLUTION: string;
					public static TAGS: string;
				}
			}
		}
	}
}
