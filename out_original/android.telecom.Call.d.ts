/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.telecom.DisconnectCause.d.ts" />
/// <reference path="./android.telecom.GatewayInfo.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
/// <reference path="./android.telecom.StatusHints.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telecom {
		export class Call {
			public getRemainingPostDialSequence(): string;
			public answer(param0: number): void;
			public reject(param0: boolean, param1: string): void;
			public disconnect(): void;
			public hold(): void;
			public unhold(): void;
			public playDtmfTone(param0: string): void;
			public stopDtmfTone(): void;
			public postDialContinue(param0: boolean): void;
			public phoneAccountSelected(param0: android.telecom.PhoneAccountHandle, param1: boolean): void;
			public conference(param0: android.telecom.Call): void;
			public splitFromConference(): void;
			public mergeConference(): void;
			public swapConference(): void;
			public getParent(): android.telecom.Call;
			public getChildren(): java.util.List;
			public getConferenceableCalls(): java.util.List;
			public getState(): number;
			public getCannedTextResponses(): java.util.List;
			public getVideoCall(): android.telecom.InCallService.VideoCall;
			public getDetails(): android.telecom.Call.Details;
			public registerCallback(param0: android.telecom.Call.Callback): void;
			public registerCallback(param0: android.telecom.Call.Callback, param1: android.os.Handler): void;
			public unregisterCallback(param0: android.telecom.Call.Callback): void;
			public static AVAILABLE_PHONE_ACCOUNTS: string;
			public static STATE_ACTIVE: number;
			public static STATE_CONNECTING: number;
			public static STATE_DIALING: number;
			public static STATE_DISCONNECTED: number;
			public static STATE_DISCONNECTING: number;
			public static STATE_HOLDING: number;
			public static STATE_NEW: number;
			public static STATE_RINGING: number;
			public static STATE_SELECT_PHONE_ACCOUNT: number;
		}
		export module Call {
			export class Callback {
				public constructor();
				public onStateChanged(param0: android.telecom.Call, param1: number): void;
				public onParentChanged(param0: android.telecom.Call, param1: android.telecom.Call): void;
				public onChildrenChanged(param0: android.telecom.Call, param1: java.util.List): void;
				public onDetailsChanged(param0: android.telecom.Call, param1: android.telecom.Call.Details): void;
				public onCannedTextResponsesLoaded(param0: android.telecom.Call, param1: java.util.List): void;
				public onPostDialWait(param0: android.telecom.Call, param1: string): void;
				public onVideoCallChanged(param0: android.telecom.Call, param1: android.telecom.InCallService.VideoCall): void;
				public onCallDestroyed(param0: android.telecom.Call): void;
				public onConferenceableCallsChanged(param0: android.telecom.Call, param1: java.util.List): void;
			}
			export class Details {
				public static can(param0: number, param1: number): boolean;
				public can(param0: number): boolean;
				public static capabilitiesToString(param0: number): string;
				public static hasProperty(param0: number, param1: number): boolean;
				public hasProperty(param0: number): boolean;
				public static propertiesToString(param0: number): string;
				public getHandle(): android.net.Uri;
				public getHandlePresentation(): number;
				public getCallerDisplayName(): string;
				public getCallerDisplayNamePresentation(): number;
				public getAccountHandle(): android.telecom.PhoneAccountHandle;
				public getCallCapabilities(): number;
				public getCallProperties(): number;
				public getDisconnectCause(): android.telecom.DisconnectCause;
				public getConnectTimeMillis(): number;
				public getGatewayInfo(): android.telecom.GatewayInfo;
				public getVideoState(): number;
				public getStatusHints(): android.telecom.StatusHints;
				public getExtras(): android.os.Bundle;
				public getIntentExtras(): android.os.Bundle;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public static CAPABILITY_CAN_PAUSE_VIDEO: number;
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
				public static PROPERTY_CONFERENCE: number;
				public static PROPERTY_EMERGENCY_CALLBACK_MODE: number;
				public static PROPERTY_GENERIC_CONFERENCE: number;
				public static PROPERTY_HIGH_DEF_AUDIO: number;
				public static PROPERTY_WIFI: number;
			}
		}
	}
}
