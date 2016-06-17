/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.media.projection.MediaProjection.d.ts" />

declare module android {
	export module media {
		export module projection {
			export class MediaProjectionManager {
				public createScreenCaptureIntent(): android.content.Intent;
				public getMediaProjection(param0: number, param1: android.content.Intent): android.media.projection.MediaProjection;
			}
		}
	}
}
