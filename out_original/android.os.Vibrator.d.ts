/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />

declare module android {
	export module os {
		export class Vibrator {
			public hasVibrator(): boolean;
			public vibrate(param0: number): void;
			public vibrate(param0: number, param1: android.media.AudioAttributes): void;
			public vibrate(param0: native.Array<number>, param1: number): void;
			public vibrate(param0: native.Array<number>, param1: number, param2: android.media.AudioAttributes): void;
			public cancel(): void;
		}
	}
}
