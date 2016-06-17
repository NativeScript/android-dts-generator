/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export module tv {
			export class TvContract {
				public static buildInputId(param0: android.content.ComponentName): string;
				public static buildChannelUri(param0: number): android.net.Uri;
				public static buildChannelUriForPassthroughInput(param0: string): android.net.Uri;
				public static buildChannelLogoUri(param0: number): android.net.Uri;
				public static buildChannelLogoUri(param0: android.net.Uri): android.net.Uri;
				public static buildChannelsUriForInput(param0: string): android.net.Uri;
				public static buildProgramUri(param0: number): android.net.Uri;
				public static buildProgramsUriForChannel(param0: number): android.net.Uri;
				public static buildProgramsUriForChannel(param0: android.net.Uri): android.net.Uri;
				public static buildProgramsUriForChannel(param0: number, param1: number, param2: number): android.net.Uri;
				public static buildProgramsUriForChannel(param0: android.net.Uri, param1: number, param2: number): android.net.Uri;
				public static AUTHORITY: string;
			}
			export module TvContract {
				export class BaseTvColumns {
					public static COLUMN_PACKAGE_NAME: string;
				}
				export class Channels {
					public static getVideoResolution(param0: string): string;
					public static COLUMN_APP_LINK_COLOR: string;
					public static COLUMN_APP_LINK_ICON_URI: string;
					public static COLUMN_APP_LINK_INTENT_URI: string;
					public static COLUMN_APP_LINK_POSTER_ART_URI: string;
					public static COLUMN_APP_LINK_TEXT: string;
					public static COLUMN_DESCRIPTION: string;
					public static COLUMN_DISPLAY_NAME: string;
					public static COLUMN_DISPLAY_NUMBER: string;
					public static COLUMN_INPUT_ID: string;
					public static COLUMN_INTERNAL_PROVIDER_DATA: string;
					public static COLUMN_INTERNAL_PROVIDER_FLAG1: string;
					public static COLUMN_INTERNAL_PROVIDER_FLAG2: string;
					public static COLUMN_INTERNAL_PROVIDER_FLAG3: string;
					public static COLUMN_INTERNAL_PROVIDER_FLAG4: string;
					public static COLUMN_NETWORK_AFFILIATION: string;
					public static COLUMN_ORIGINAL_NETWORK_ID: string;
					public static COLUMN_SEARCHABLE: string;
					public static COLUMN_SERVICE_ID: string;
					public static COLUMN_SERVICE_TYPE: string;
					public static COLUMN_TRANSPORT_STREAM_ID: string;
					public static COLUMN_TYPE: string;
					public static COLUMN_VERSION_NUMBER: string;
					public static COLUMN_VIDEO_FORMAT: string;
					public static CONTENT_ITEM_TYPE: string;
					public static CONTENT_TYPE: string;
					public static CONTENT_URI: android.net.Uri;
					public static SERVICE_TYPE_AUDIO: string;
					public static SERVICE_TYPE_AUDIO_VIDEO: string;
					public static SERVICE_TYPE_OTHER: string;
					public static TYPE_1SEG: string;
					public static TYPE_ATSC_C: string;
					public static TYPE_ATSC_M_H: string;
					public static TYPE_ATSC_T: string;
					public static TYPE_CMMB: string;
					public static TYPE_DTMB: string;
					public static TYPE_DVB_C: string;
					public static TYPE_DVB_C2: string;
					public static TYPE_DVB_H: string;
					public static TYPE_DVB_S: string;
					public static TYPE_DVB_S2: string;
					public static TYPE_DVB_SH: string;
					public static TYPE_DVB_T: string;
					public static TYPE_DVB_T2: string;
					public static TYPE_ISDB_C: string;
					public static TYPE_ISDB_S: string;
					public static TYPE_ISDB_T: string;
					public static TYPE_ISDB_TB: string;
					public static TYPE_NTSC: string;
					public static TYPE_OTHER: string;
					public static TYPE_PAL: string;
					public static TYPE_SECAM: string;
					public static TYPE_S_DMB: string;
					public static TYPE_T_DMB: string;
					public static VIDEO_FORMAT_1080I: string;
					public static VIDEO_FORMAT_1080P: string;
					public static VIDEO_FORMAT_2160P: string;
					public static VIDEO_FORMAT_240P: string;
					public static VIDEO_FORMAT_360P: string;
					public static VIDEO_FORMAT_4320P: string;
					public static VIDEO_FORMAT_480I: string;
					public static VIDEO_FORMAT_480P: string;
					public static VIDEO_FORMAT_576I: string;
					public static VIDEO_FORMAT_576P: string;
					public static VIDEO_FORMAT_720P: string;
					public static VIDEO_RESOLUTION_ED: string;
					public static VIDEO_RESOLUTION_FHD: string;
					public static VIDEO_RESOLUTION_HD: string;
					public static VIDEO_RESOLUTION_SD: string;
					public static VIDEO_RESOLUTION_UHD: string;
				}
				export module Channels {
					export class Logo {
						public static CONTENT_DIRECTORY: string;
					}
				}
				export class Programs {
					public static COLUMN_AUDIO_LANGUAGE: string;
					public static COLUMN_BROADCAST_GENRE: string;
					public static COLUMN_CANONICAL_GENRE: string;
					public static COLUMN_CHANNEL_ID: string;
					public static COLUMN_CONTENT_RATING: string;
					public static COLUMN_END_TIME_UTC_MILLIS: string;
					public static COLUMN_EPISODE_NUMBER: string;
					public static COLUMN_EPISODE_TITLE: string;
					public static COLUMN_INTERNAL_PROVIDER_DATA: string;
					public static COLUMN_INTERNAL_PROVIDER_FLAG1: string;
					public static COLUMN_INTERNAL_PROVIDER_FLAG2: string;
					public static COLUMN_INTERNAL_PROVIDER_FLAG3: string;
					public static COLUMN_INTERNAL_PROVIDER_FLAG4: string;
					public static COLUMN_LONG_DESCRIPTION: string;
					public static COLUMN_POSTER_ART_URI: string;
					public static COLUMN_SEARCHABLE: string;
					public static COLUMN_SEASON_NUMBER: string;
					public static COLUMN_SHORT_DESCRIPTION: string;
					public static COLUMN_START_TIME_UTC_MILLIS: string;
					public static COLUMN_THUMBNAIL_URI: string;
					public static COLUMN_TITLE: string;
					public static COLUMN_VERSION_NUMBER: string;
					public static COLUMN_VIDEO_HEIGHT: string;
					public static COLUMN_VIDEO_WIDTH: string;
					public static CONTENT_ITEM_TYPE: string;
					public static CONTENT_TYPE: string;
					public static CONTENT_URI: android.net.Uri;
				}
				export module Programs {
					export class Genres {
						public static encode(param0: native.Array<string>): string;
						public static decode(param0: string): native.Array<string>;
						public static ANIMAL_WILDLIFE: string;
						public static ARTS: string;
						public static COMEDY: string;
						public static DRAMA: string;
						public static EDUCATION: string;
						public static ENTERTAINMENT: string;
						public static FAMILY_KIDS: string;
						public static GAMING: string;
						public static LIFE_STYLE: string;
						public static MOVIES: string;
						public static MUSIC: string;
						public static NEWS: string;
						public static PREMIER: string;
						public static SHOPPING: string;
						public static SPORTS: string;
						public static TECH_SCIENCE: string;
						public static TRAVEL: string;
					}
				}
			}
		}
	}
}
