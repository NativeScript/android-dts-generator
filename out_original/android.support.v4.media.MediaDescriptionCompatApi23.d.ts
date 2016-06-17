/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class MediaDescriptionCompatApi23 {
					public static getMediaUri(param0: java.lang.Object): android.net.Uri;
				}
				export module MediaDescriptionCompatApi23 {
					export class Builder {
						public static setMediaUri(param0: java.lang.Object, param1: android.net.Uri): void;
					}
				}
			}
		}
	}
}
