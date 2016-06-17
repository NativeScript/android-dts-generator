/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.telecom.CallAudioState.d.ts" />
/// <reference path="./android.telecom.Connection.d.ts" />
/// <reference path="./android.telecom.DisconnectCause.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
/// <reference path="./android.telecom.StatusHints.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telecom {
		export class Conference {
			public constructor();
			public constructor(param0: android.telecom.PhoneAccountHandle);
			public getPhoneAccountHandle(): android.telecom.PhoneAccountHandle;
			public getConnections(): java.util.List;
			public getState(): number;
			public getConnectionCapabilities(): number;
			public getCallAudioState(): android.telecom.CallAudioState;
			public getVideoProvider(): android.telecom.Connection.VideoProvider;
			public getVideoState(): number;
			public onDisconnect(): void;
			public onSeparate(param0: android.telecom.Connection): void;
			public onMerge(param0: android.telecom.Connection): void;
			public onHold(): void;
			public onUnhold(): void;
			public onMerge(): void;
			public onSwap(): void;
			public onPlayDtmfTone(param0: string): void;
			public onStopDtmfTone(): void;
			public onCallAudioStateChanged(param0: android.telecom.CallAudioState): void;
			public onConnectionAdded(param0: android.telecom.Connection): void;
			public setOnHold(): void;
			public setDialing(): void;
			public setActive(): void;
			public setDisconnected(param0: android.telecom.DisconnectCause): void;
			public getDisconnectCause(): android.telecom.DisconnectCause;
			public setConnectionCapabilities(param0: number): void;
			public addConnection(param0: android.telecom.Connection): boolean;
			public removeConnection(param0: android.telecom.Connection): void;
			public setConferenceableConnections(param0: java.util.List): void;
			public setVideoState(param0: android.telecom.Connection, param1: number): void;
			public setVideoProvider(param0: android.telecom.Connection, param1: android.telecom.Connection.VideoProvider): void;
			public getConferenceableConnections(): java.util.List;
			public destroy(): void;
			public setConnectionTime(param0: number): void;
			public getConnectionTime(): number;
			public toString(): string;
			public setStatusHints(param0: android.telecom.StatusHints): void;
			public getStatusHints(): android.telecom.StatusHints;
			public setExtras(param0: android.os.Bundle): void;
			public getExtras(): android.os.Bundle;
			public static CONNECT_TIME_NOT_SPECIFIED: number;
		}
	}
}
