/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaSessionCompatApi14 {
						public static createRemoteControlClient(param0: android.app.PendingIntent): java.lang.Object;
						public static setState(param0: java.lang.Object, param1: number): void;
						public static setTransportControlFlags(param0: java.lang.Object, param1: number): void;
						public static setMetadata(param0: java.lang.Object, param1: android.os.Bundle): void;
						public static registerRemoteControlClient(param0: android.content.Context, param1: java.lang.Object): void;
						public static unregisterRemoteControlClient(param0: android.content.Context, param1: java.lang.Object): void;
					}
				}
			}
		}
	}
}
