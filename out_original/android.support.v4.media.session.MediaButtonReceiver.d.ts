/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.support.v4.media.session.MediaSessionCompat.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaButtonReceiver {
						public constructor();
						public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
						public static handleIntent(param0: android.support.v4.media.session.MediaSessionCompat, param1: android.content.Intent): android.view.KeyEvent;
					}
				}
			}
		}
	}
}
