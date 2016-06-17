/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />

declare module android {
	export module webkit {
		export class PermissionRequest {
			public constructor();
			public getOrigin(): android.net.Uri;
			public getResources(): native.Array<string>;
			public grant(param0: native.Array<string>): void;
			public deny(): void;
			public static RESOURCE_AUDIO_CAPTURE: string;
			public static RESOURCE_MIDI_SYSEX: string;
			public static RESOURCE_PROTECTED_MEDIA_ID: string;
			public static RESOURCE_VIDEO_CAPTURE: string;
		}
	}
}
