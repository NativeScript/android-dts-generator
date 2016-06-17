/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class NotificationCompatExtras {
					public static EXTRA_LOCAL_ONLY: string;
					public static EXTRA_GROUP_KEY: string;
					public static EXTRA_GROUP_SUMMARY: string;
					public static EXTRA_SORT_KEY: string;
					public static EXTRA_ACTION_EXTRAS: string;
					public static EXTRA_REMOTE_INPUTS: string;
				}
			}
		}
	}
}
