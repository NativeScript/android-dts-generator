/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.sip.SipProfile.d.ts" />
/// <reference path="./android.net.sip.SipSession.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export module sip {
			export class SipAudioCall {
				public constructor();
				public constructor(param0: android.content.Context, param1: android.net.sip.SipProfile);
				public setListener(param0: android.net.sip.SipAudioCall.Listener): void;
				public setListener(param0: android.net.sip.SipAudioCall.Listener, param1: boolean): void;
				public isInCall(): boolean;
				public isOnHold(): boolean;
				public close(): void;
				public getLocalProfile(): android.net.sip.SipProfile;
				public getPeerProfile(): android.net.sip.SipProfile;
				public getState(): number;
				public attachCall(param0: android.net.sip.SipSession, param1: string): void;
				public makeCall(param0: android.net.sip.SipProfile, param1: android.net.sip.SipSession, param2: number): void;
				public endCall(): void;
				public holdCall(param0: number): void;
				public answerCall(param0: number): void;
				public continueCall(param0: number): void;
				public toggleMute(): void;
				public isMuted(): boolean;
				public setSpeakerMode(param0: boolean): void;
				public sendDtmf(param0: number): void;
				public sendDtmf(param0: number, param1: android.os.Message): void;
				public startAudio(): void;
			}
			export module SipAudioCall {
				export class Listener {
					public constructor();
					public onReadyToCall(param0: android.net.sip.SipAudioCall): void;
					public onCalling(param0: android.net.sip.SipAudioCall): void;
					public onRinging(param0: android.net.sip.SipAudioCall, param1: android.net.sip.SipProfile): void;
					public onRingingBack(param0: android.net.sip.SipAudioCall): void;
					public onCallEstablished(param0: android.net.sip.SipAudioCall): void;
					public onCallEnded(param0: android.net.sip.SipAudioCall): void;
					public onCallBusy(param0: android.net.sip.SipAudioCall): void;
					public onCallHeld(param0: android.net.sip.SipAudioCall): void;
					public onError(param0: android.net.sip.SipAudioCall, param1: number, param2: string): void;
					public onChanged(param0: android.net.sip.SipAudioCall): void;
				}
			}
		}
	}
}
