/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export module session {
					export class MediaSessionCompatApi19 {
						public static setTransportControlFlags(param0: java.lang.Object, param1: number): void;
						public static createMetadataUpdateListener(param0: android.support.v4.media.session.MediaSessionCompatApi19.Callback): java.lang.Object;
						public static setMetadata(param0: java.lang.Object, param1: android.os.Bundle, param2: number): void;
						public static setOnMetadataUpdateListener(param0: java.lang.Object, param1: java.lang.Object): void;
					}
					export module MediaSessionCompatApi19 {
						export class Callback {
							public onSetRating(param0: java.lang.Object): void;
						}
						export class OnMetadataUpdateListener {
							public constructor();
							public constructor(param0: android.support.v4.media.session.MediaSessionCompatApi19.Callback);
							public onMetadataUpdate(param0: number, param1: java.lang.Object): void;
							public mCallback: android.support.v4.media.session.MediaSessionCompatApi19.Callback;
						}
					}
				}
			}
		}
	}
}
