/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaControllerCompatApi23 {
					}
					export module MediaControllerCompatApi23 {
						export class TransportControls {
							public constructor();
							public static playFromUri(param0: java.lang.Object, param1: android.net.Uri, param2: android.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}
