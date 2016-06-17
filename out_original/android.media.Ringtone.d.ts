/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />

declare module android {
	export module media {
		export class Ringtone {
			public setStreamType(param0: number): void;
			public getStreamType(): number;
			public setAudioAttributes(param0: android.media.AudioAttributes): void;
			public getAudioAttributes(): android.media.AudioAttributes;
			public getTitle(param0: android.content.Context): string;
			public play(): void;
			public stop(): void;
			public isPlaying(): boolean;
			public finalize(): void;
		}
	}
}
