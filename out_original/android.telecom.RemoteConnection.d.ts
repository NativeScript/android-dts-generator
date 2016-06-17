/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.telecom.CallAudioState.d.ts" />
/// <reference path="./android.telecom.DisconnectCause.d.ts" />
/// <reference path="./android.telecom.RemoteConference.d.ts" />
/// <reference path="./android.telecom.StatusHints.d.ts" />
/// <reference path="./android.telecom.VideoProfile.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telecom {
		export class RemoteConnection {
			public registerCallback(param0: android.telecom.RemoteConnection.Callback): void;
			public registerCallback(param0: android.telecom.RemoteConnection.Callback, param1: android.os.Handler): void;
			public unregisterCallback(param0: android.telecom.RemoteConnection.Callback): void;
			public getState(): number;
			public getDisconnectCause(): android.telecom.DisconnectCause;
			public getConnectionCapabilities(): number;
			public isVoipAudioMode(): boolean;
			public getStatusHints(): android.telecom.StatusHints;
			public getAddress(): android.net.Uri;
			public getAddressPresentation(): number;
			public getCallerDisplayName(): string;
			public getCallerDisplayNamePresentation(): number;
			public getVideoState(): number;
			public getVideoProvider(): android.telecom.RemoteConnection.VideoProvider;
			public getExtras(): android.os.Bundle;
			public isRingbackRequested(): boolean;
			public abort(): void;
			public answer(): void;
			public reject(): void;
			public hold(): void;
			public unhold(): void;
			public disconnect(): void;
			public playDtmfTone(param0: string): void;
			public stopDtmfTone(): void;
			public postDialContinue(param0: boolean): void;
			public setCallAudioState(param0: android.telecom.CallAudioState): void;
			public getConferenceableConnections(): java.util.List;
			public getConference(): android.telecom.RemoteConference;
		}
		export module RemoteConnection {
			export class Callback {
				public constructor();
				public onStateChanged(param0: android.telecom.RemoteConnection, param1: number): void;
				public onDisconnected(param0: android.telecom.RemoteConnection, param1: android.telecom.DisconnectCause): void;
				public onRingbackRequested(param0: android.telecom.RemoteConnection, param1: boolean): void;
				public onConnectionCapabilitiesChanged(param0: android.telecom.RemoteConnection, param1: number): void;
				public onPostDialWait(param0: android.telecom.RemoteConnection, param1: string): void;
				public onPostDialChar(param0: android.telecom.RemoteConnection, param1: string): void;
				public onVoipAudioChanged(param0: android.telecom.RemoteConnection, param1: boolean): void;
				public onStatusHintsChanged(param0: android.telecom.RemoteConnection, param1: android.telecom.StatusHints): void;
				public onAddressChanged(param0: android.telecom.RemoteConnection, param1: android.net.Uri, param2: number): void;
				public onCallerDisplayNameChanged(param0: android.telecom.RemoteConnection, param1: string, param2: number): void;
				public onVideoStateChanged(param0: android.telecom.RemoteConnection, param1: number): void;
				public onDestroyed(param0: android.telecom.RemoteConnection): void;
				public onConferenceableConnectionsChanged(param0: android.telecom.RemoteConnection, param1: java.util.List): void;
				public onVideoProviderChanged(param0: android.telecom.RemoteConnection, param1: android.telecom.RemoteConnection.VideoProvider): void;
				public onConferenceChanged(param0: android.telecom.RemoteConnection, param1: android.telecom.RemoteConference): void;
				public onExtrasChanged(param0: android.telecom.RemoteConnection, param1: android.os.Bundle): void;
			}
			export class VideoProvider {
				public registerCallback(param0: android.telecom.RemoteConnection.VideoProvider.Callback): void;
				public unregisterCallback(param0: android.telecom.RemoteConnection.VideoProvider.Callback): void;
				public setCamera(param0: string): void;
				public setPreviewSurface(param0: android.view.Surface): void;
				public setDisplaySurface(param0: android.view.Surface): void;
				public setDeviceOrientation(param0: number): void;
				public setZoom(param0: number): void;
				public sendSessionModifyRequest(param0: android.telecom.VideoProfile, param1: android.telecom.VideoProfile): void;
				public sendSessionModifyResponse(param0: android.telecom.VideoProfile): void;
				public requestCameraCapabilities(): void;
				public requestCallDataUsage(): void;
				public setPauseImage(param0: android.net.Uri): void;
			}
			export module VideoProvider {
				export class Callback {
					public constructor();
					public onSessionModifyRequestReceived(param0: android.telecom.RemoteConnection.VideoProvider, param1: android.telecom.VideoProfile): void;
					public onSessionModifyResponseReceived(param0: android.telecom.RemoteConnection.VideoProvider, param1: number, param2: android.telecom.VideoProfile, param3: android.telecom.VideoProfile): void;
					public onCallSessionEvent(param0: android.telecom.RemoteConnection.VideoProvider, param1: number): void;
					public onPeerDimensionsChanged(param0: android.telecom.RemoteConnection.VideoProvider, param1: number, param2: number): void;
					public onCallDataUsageChanged(param0: android.telecom.RemoteConnection.VideoProvider, param1: number): void;
					public onCameraCapabilitiesChanged(param0: android.telecom.RemoteConnection.VideoProvider, param1: android.telecom.VideoProfile.CameraCapabilities): void;
					public onVideoQualityChanged(param0: android.telecom.RemoteConnection.VideoProvider, param1: number): void;
				}
			}
		}
	}
}
