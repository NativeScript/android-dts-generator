/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.net.sip.SipProfile.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export module sip {
			export class SipSession {
				public getLocalIp(): string;
				public getLocalProfile(): android.net.sip.SipProfile;
				public getPeerProfile(): android.net.sip.SipProfile;
				public getState(): number;
				public isInCall(): boolean;
				public getCallId(): string;
				public setListener(param0: android.net.sip.SipSession.Listener): void;
				public register(param0: number): void;
				public unregister(): void;
				public makeCall(param0: android.net.sip.SipProfile, param1: string, param2: number): void;
				public answerCall(param0: string, param1: number): void;
				public endCall(): void;
				public changeCall(param0: string, param1: number): void;
			}
			export module SipSession {
				export class Listener {
					public constructor();
					public onCalling(param0: android.net.sip.SipSession): void;
					public onRinging(param0: android.net.sip.SipSession, param1: android.net.sip.SipProfile, param2: string): void;
					public onRingingBack(param0: android.net.sip.SipSession): void;
					public onCallEstablished(param0: android.net.sip.SipSession, param1: string): void;
					public onCallEnded(param0: android.net.sip.SipSession): void;
					public onCallBusy(param0: android.net.sip.SipSession): void;
					public onError(param0: android.net.sip.SipSession, param1: number, param2: string): void;
					public onCallChangeFailed(param0: android.net.sip.SipSession, param1: number, param2: string): void;
					public onRegistering(param0: android.net.sip.SipSession): void;
					public onRegistrationDone(param0: android.net.sip.SipSession, param1: number): void;
					public onRegistrationFailed(param0: android.net.sip.SipSession, param1: number, param2: string): void;
					public onRegistrationTimeout(param0: android.net.sip.SipSession): void;
				}
				export class State {
					public toString(): string;
					public static toString(param0: number): string;
					public static DEREGISTERING: number;
					public static INCOMING_CALL: number;
					public static INCOMING_CALL_ANSWERING: number;
					public static IN_CALL: number;
					public static NOT_DEFINED: number;
					public static OUTGOING_CALL: number;
					public static OUTGOING_CALL_CANCELING: number;
					public static OUTGOING_CALL_RING_BACK: number;
					public static PINGING: number;
					public static READY_TO_CALL: number;
					public static REGISTERING: number;
				}
			}
		}
	}
}
