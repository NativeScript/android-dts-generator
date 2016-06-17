/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />

declare module android {
	export module media {
		export class RemoteController {
			public constructor();
			public constructor(param0: android.content.Context, param1: android.media.RemoteController.OnClientUpdateListener);
			public constructor(param0: android.content.Context, param1: android.media.RemoteController.OnClientUpdateListener, param2: android.os.Looper);
			public getEstimatedMediaPosition(): number;
			public sendMediaKeyEvent(param0: android.view.KeyEvent): boolean;
			public seekTo(param0: number): boolean;
			public setArtworkConfiguration(param0: number, param1: number): boolean;
			public clearArtworkConfiguration(): boolean;
			public setSynchronizationMode(param0: number): boolean;
			public editMetadata(): android.media.RemoteController.MetadataEditor;
			public static POSITION_SYNCHRONIZATION_CHECK: number;
			public static POSITION_SYNCHRONIZATION_NONE: number;
		}
		export module RemoteController {
			export class MetadataEditor {
				public apply(): void;
			}
			export class OnClientUpdateListener {
				public onClientChange(param0: boolean): void;
				public onClientPlaybackStateUpdate(param0: number): void;
				public onClientPlaybackStateUpdate(param0: number, param1: number, param2: number, param3: number): void;
				public onClientTransportControlUpdate(param0: number): void;
				public onClientMetadataUpdate(param0: android.media.RemoteController.MetadataEditor): void;
			}
		}
	}
}
