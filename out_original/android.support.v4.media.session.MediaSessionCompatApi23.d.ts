/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaSessionCompatApi23 {
						public static createCallback(param0: android.support.v4.media.session.MediaSessionCompatApi23.Callback): java.lang.Object;
					}
					export module MediaSessionCompatApi23 {
						export class Callback {
							public onPlayFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;
						}
						export class CallbackProxy {
							public constructor(param0: android.support.v4.media.session.MediaSessionCompatApi21.Callback);
							public constructor();
							public constructor(param0: android.support.v4.media.session.MediaSessionCompatApi23.Callback);
							public onPlayFromUri(param0: android.net.Uri, param1: android.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}
