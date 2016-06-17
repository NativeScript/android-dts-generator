/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaSessionCompatApi8 {
						public static registerMediaButtonEventReceiver(param0: android.content.Context, param1: android.content.ComponentName): void;
						public static unregisterMediaButtonEventReceiver(param0: android.content.Context, param1: android.content.ComponentName): void;
					}
				}
			}
		}
	}
}
