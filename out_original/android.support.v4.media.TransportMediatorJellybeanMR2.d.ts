/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.media.AudioManager.d.ts" />
/// <reference path="./android.support.v4.media.TransportMediatorCallback.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class TransportMediatorJellybeanMR2 {
					public constructor();
					public constructor(param0: android.content.Context, param1: android.media.AudioManager, param2: android.view.View, param3: android.support.v4.media.TransportMediatorCallback);
					public getRemoteControlClient(): java.lang.Object;
					public destroy(): void;
					public startPlaying(): void;
					public refreshState(param0: boolean, param1: number, param2: number): void;
					public pausePlaying(): void;
					public stopPlaying(): void;
				}
			}
		}
	}
}
