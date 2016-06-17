/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioAttributes.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class AsyncPlayer {
			public constructor();
			public constructor(param0: string);
			public play(param0: android.content.Context, param1: android.net.Uri, param2: boolean, param3: number): void;
			public play(param0: android.content.Context, param1: android.net.Uri, param2: boolean, param3: android.media.AudioAttributes): void;
			public stop(): void;
		}
	}
}
