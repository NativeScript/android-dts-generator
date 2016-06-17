/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.telecom.CallAudioState.d.ts" />
/// <reference path="./android.telecom.DisconnectCause.d.ts" />
/// <reference path="./android.telecom.RemoteConnection.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telecom {
		export class RemoteConference {
			public getConnections(): java.util.List;
			public getState(): number;
			public getConnectionCapabilities(): number;
			public getExtras(): android.os.Bundle;
			public disconnect(): void;
			public separate(param0: android.telecom.RemoteConnection): void;
			public merge(): void;
			public swap(): void;
			public hold(): void;
			public unhold(): void;
			public getDisconnectCause(): android.telecom.DisconnectCause;
			public playDtmfTone(param0: string): void;
			public stopDtmfTone(): void;
			public setCallAudioState(param0: android.telecom.CallAudioState): void;
			public getConferenceableConnections(): java.util.List;
			public registerCallback(param0: android.telecom.RemoteConference.Callback): void;
			public registerCallback(param0: android.telecom.RemoteConference.Callback, param1: android.os.Handler): void;
			public unregisterCallback(param0: android.telecom.RemoteConference.Callback): void;
		}
		export module RemoteConference {
			export class Callback {
				public constructor();
				public onStateChanged(param0: android.telecom.RemoteConference, param1: number, param2: number): void;
				public onDisconnected(param0: android.telecom.RemoteConference, param1: android.telecom.DisconnectCause): void;
				public onConnectionAdded(param0: android.telecom.RemoteConference, param1: android.telecom.RemoteConnection): void;
				public onConnectionRemoved(param0: android.telecom.RemoteConference, param1: android.telecom.RemoteConnection): void;
				public onConnectionCapabilitiesChanged(param0: android.telecom.RemoteConference, param1: number): void;
				public onConferenceableConnectionsChanged(param0: android.telecom.RemoteConference, param1: java.util.List): void;
				public onDestroyed(param0: android.telecom.RemoteConference): void;
				public onExtrasChanged(param0: android.telecom.RemoteConference, param1: android.os.Bundle): void;
			}
		}
	}
}
