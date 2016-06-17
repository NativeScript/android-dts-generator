/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.telecom.CallAudioState.d.ts" />
/// <reference path="./android.telecom.Conference.d.ts" />
/// <reference path="./android.telecom.DisconnectCause.d.ts" />
/// <reference path="./android.telecom.StatusHints.d.ts" />
/// <reference path="./android.telecom.VideoProfile.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telecom {
		export class Connection {
			public constructor();
			public static capabilitiesToString(param0: number): string;
			public getAddress(): android.net.Uri;
			public getAddressPresentation(): number;
			public getCallerDisplayName(): string;
			public getCallerDisplayNamePresentation(): number;
			public getState(): number;
			public getCallAudioState(): android.telecom.CallAudioState;
			public getConference(): android.telecom.Conference;
			public isRingbackRequested(): boolean;
			public getAudioModeIsVoip(): boolean;
			public getStatusHints(): android.telecom.StatusHints;
			public getExtras(): android.os.Bundle;
			public getDisconnectCause(): android.telecom.DisconnectCause;
			public static stateToString(param0: number): string;
			public getConnectionCapabilities(): number;
			public setAddress(param0: android.net.Uri, param1: number): void;
			public setCallerDisplayName(param0: string, param1: number): void;
			public setVideoState(param0: number): void;
			public setActive(): void;
			public setRinging(): void;
			public setInitializing(): void;
			public setInitialized(): void;
			public setDialing(): void;
			public setOnHold(): void;
			public setVideoProvider(param0: android.telecom.Connection.VideoProvider): void;
			public getVideoProvider(): android.telecom.Connection.VideoProvider;
			public setDisconnected(param0: android.telecom.DisconnectCause): void;
			public setPostDialWait(param0: string): void;
			public setNextPostDialChar(param0: string): void;
			public setRingbackRequested(param0: boolean): void;
			public setConnectionCapabilities(param0: number): void;
			public destroy(): void;
			public setAudioModeIsVoip(param0: boolean): void;
			public setStatusHints(param0: android.telecom.StatusHints): void;
			public setConferenceableConnections(param0: java.util.List): void;
			public setConferenceables(param0: java.util.List): void;
			public getConferenceables(): java.util.List;
			public setExtras(param0: android.os.Bundle): void;
			public onCallAudioStateChanged(param0: android.telecom.CallAudioState): void;
			public onStateChanged(param0: number): void;
			public onPlayDtmfTone(param0: string): void;
			public onStopDtmfTone(): void;
			public onDisconnect(): void;
			public onSeparate(): void;
			public onAbort(): void;
			public onHold(): void;
			public onUnhold(): void;
			public onAnswer(param0: number): void;
			public onAnswer(): void;
			public onReject(): void;
			public onPostDialContinue(param0: boolean): void;
			public static createFailedConnection(param0: android.telecom.DisconnectCause): android.telecom.Connection;
			public static createCanceledConnection(): android.telecom.Connection;
			public static CAPABILITY_CAN_PAUSE_VIDEO: number;
			public static CAPABILITY_CAN_UPGRADE_TO_VIDEO: number;
			public static CAPABILITY_DISCONNECT_FROM_CONFERENCE: number;
			public static CAPABILITY_HOLD: number;
			public static CAPABILITY_MANAGE_CONFERENCE: number;
			public static CAPABILITY_MERGE_CONFERENCE: number;
			public static CAPABILITY_MUTE: number;
			public static CAPABILITY_RESPOND_VIA_TEXT: number;
			public static CAPABILITY_SEPARATE_FROM_CONFERENCE: number;
			public static CAPABILITY_SUPPORTS_VT_LOCAL_BIDIRECTIONAL: number;
			public static CAPABILITY_SUPPORTS_VT_LOCAL_RX: number;
			public static CAPABILITY_SUPPORTS_VT_LOCAL_TX: number;
			public static CAPABILITY_SUPPORTS_VT_REMOTE_BIDIRECTIONAL: number;
			public static CAPABILITY_SUPPORTS_VT_REMOTE_RX: number;
			public static CAPABILITY_SUPPORTS_VT_REMOTE_TX: number;
			public static CAPABILITY_SUPPORT_HOLD: number;
			public static CAPABILITY_SWAP_CONFERENCE: number;
			public static EXTRA_CALL_SUBJECT: string;
			public static EXTRA_CHILD_ADDRESS: string;
			public static EXTRA_LAST_FORWARDED_NUMBER: string;
			public static STATE_ACTIVE: number;
			public static STATE_DIALING: number;
			public static STATE_DISCONNECTED: number;
			public static STATE_HOLDING: number;
			public static STATE_INITIALIZING: number;
			public static STATE_NEW: number;
			public static STATE_RINGING: number;
		}
		export module Connection {
			export class VideoProvider {
				public constructor();
				public onSetCamera(param0: string): void;
				public onSetPreviewSurface(param0: android.view.Surface): void;
				public onSetDisplaySurface(param0: android.view.Surface): void;
				public onSetDeviceOrientation(param0: number): void;
				public onSetZoom(param0: number): void;
				public onSendSessionModifyRequest(param0: android.telecom.VideoProfile, param1: android.telecom.VideoProfile): void;
				public onSendSessionModifyResponse(param0: android.telecom.VideoProfile): void;
				public onRequestCameraCapabilities(): void;
				public onRequestConnectionDataUsage(): void;
				public onSetPauseImage(param0: android.net.Uri): void;
				public receiveSessionModifyRequest(param0: android.telecom.VideoProfile): void;
				public receiveSessionModifyResponse(param0: number, param1: android.telecom.VideoProfile, param2: android.telecom.VideoProfile): void;
				public handleCallSessionEvent(param0: number): void;
				public changePeerDimensions(param0: number, param1: number): void;
				public setCallDataUsage(param0: number): void;
				public changeCameraCapabilities(param0: android.telecom.VideoProfile.CameraCapabilities): void;
				public changeVideoQuality(param0: number): void;
				public static SESSION_EVENT_CAMERA_FAILURE: number;
				public static SESSION_EVENT_CAMERA_READY: number;
				public static SESSION_EVENT_RX_PAUSE: number;
				public static SESSION_EVENT_RX_RESUME: number;
				public static SESSION_EVENT_TX_START: number;
				public static SESSION_EVENT_TX_STOP: number;
				public static SESSION_MODIFY_REQUEST_FAIL: number;
				public static SESSION_MODIFY_REQUEST_INVALID: number;
				public static SESSION_MODIFY_REQUEST_REJECTED_BY_REMOTE: number;
				public static SESSION_MODIFY_REQUEST_SUCCESS: number;
				public static SESSION_MODIFY_REQUEST_TIMED_OUT: number;
			}
		}
	}
}
