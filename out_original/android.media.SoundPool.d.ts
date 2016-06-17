/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class SoundPool {
			public constructor();
			public constructor(param0: number, param1: number, param2: number);
			public release(): void;
			public finalize(): void;
			public load(param0: string, param1: number): number;
			public load(param0: android.content.Context, param1: number, param2: number): number;
			public load(param0: android.content.res.AssetFileDescriptor, param1: number): number;
			public load(param0: java.io.FileDescriptor, param1: number, param2: number, param3: number): number;
			public unload(param0: number): boolean;
			public play(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
			public pause(param0: number): void;
			public resume(param0: number): void;
			public autoPause(): void;
			public autoResume(): void;
			public stop(param0: number): void;
			public setVolume(param0: number, param1: number, param2: number): void;
			public setPriority(param0: number, param1: number): void;
			public setLoop(param0: number, param1: number): void;
			public setRate(param0: number, param1: number): void;
			public setOnLoadCompleteListener(param0: android.media.SoundPool.OnLoadCompleteListener): void;
		}
		export module SoundPool {
			export class Builder {
				public constructor();
				public setMaxStreams(param0: number): android.media.SoundPool.Builder;
				public setAudioAttributes(param0: android.media.AudioAttributes): android.media.SoundPool.Builder;
				public build(): android.media.SoundPool;
			}
			export class OnLoadCompleteListener {
				public onLoadComplete(param0: android.media.SoundPool, param1: number, param2: number): void;
			}
		}
	}
}
