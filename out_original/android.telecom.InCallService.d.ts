/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.telecom.Call.d.ts" />
/// <reference path="./android.telecom.CallAudioState.d.ts" />
/// <reference path="./android.telecom.VideoProfile.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telecom {
		export class InCallService {
			public constructor(param0: android.content.Context);
			public constructor();
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onUnbind(param0: android.content.Intent): boolean;
			public getCalls(): java.util.List;
			public canAddCall(): boolean;
			public getCallAudioState(): android.telecom.CallAudioState;
			public setMuted(param0: boolean): void;
			public setAudioRoute(param0: number): void;
			public onCallAudioStateChanged(param0: android.telecom.CallAudioState): void;
			public onBringToForeground(param0: boolean): void;
			public onCallAdded(param0: android.telecom.Call): void;
			public onCallRemoved(param0: android.telecom.Call): void;
			public onCanAddCallChanged(param0: boolean): void;
			public static SERVICE_INTERFACE: string;
		}
		export module InCallService {
			export class VideoCall {
				public constructor();
				public registerCallback(param0: android.telecom.InCallService.VideoCall.Callback): void;
				public registerCallback(param0: android.telecom.InCallService.VideoCall.Callback, param1: android.os.Handler): void;
				public unregisterCallback(param0: android.telecom.InCallService.VideoCall.Callback): void;
				public setCamera(param0: string): void;
				public setPreviewSurface(param0: android.view.Surface): void;
				public setDisplaySurface(param0: android.view.Surface): void;
				public setDeviceOrientation(param0: number): void;
				public setZoom(param0: number): void;
				public sendSessionModifyRequest(param0: android.telecom.VideoProfile): void;
				public sendSessionModifyResponse(param0: android.telecom.VideoProfile): void;
				public requestCameraCapabilities(): void;
				public requestCallDataUsage(): void;
				public setPauseImage(param0: android.net.Uri): void;
			}
			export module VideoCall {
				export class Callback {
					public constructor();
					public onSessionModifyRequestReceived(param0: android.telecom.VideoProfile): void;
					public onSessionModifyResponseReceived(param0: number, param1: android.telecom.VideoProfile, param2: android.telecom.VideoProfile): void;
					public onCallSessionEvent(param0: number): void;
					public onPeerDimensionsChanged(param0: number, param1: number): void;
					public onVideoQualityChanged(param0: number): void;
					public onCallDataUsageChanged(param0: number): void;
					public onCameraCapabilitiesChanged(param0: android.telecom.VideoProfile.CameraCapabilities): void;
				}
			}
		}
	}
}
