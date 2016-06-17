/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.sip.SipAudioCall.d.ts" />
/// <reference path="./android.net.sip.SipProfile.d.ts" />
/// <reference path="./android.net.sip.SipRegistrationListener.d.ts" />
/// <reference path="./android.net.sip.SipSession.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export module sip {
			export class SipManager {
				public static newInstance(param0: android.content.Context): android.net.sip.SipManager;
				public static isApiSupported(param0: android.content.Context): boolean;
				public static isVoipSupported(param0: android.content.Context): boolean;
				public static isSipWifiOnly(param0: android.content.Context): boolean;
				public open(param0: android.net.sip.SipProfile): void;
				public open(param0: android.net.sip.SipProfile, param1: android.app.PendingIntent, param2: android.net.sip.SipRegistrationListener): void;
				public setRegistrationListener(param0: string, param1: android.net.sip.SipRegistrationListener): void;
				public close(param0: string): void;
				public isOpened(param0: string): boolean;
				public isRegistered(param0: string): boolean;
				public makeAudioCall(param0: android.net.sip.SipProfile, param1: android.net.sip.SipProfile, param2: android.net.sip.SipAudioCall.Listener, param3: number): android.net.sip.SipAudioCall;
				public makeAudioCall(param0: string, param1: string, param2: android.net.sip.SipAudioCall.Listener, param3: number): android.net.sip.SipAudioCall;
				public takeAudioCall(param0: android.content.Intent, param1: android.net.sip.SipAudioCall.Listener): android.net.sip.SipAudioCall;
				public static isIncomingCallIntent(param0: android.content.Intent): boolean;
				public static getCallId(param0: android.content.Intent): string;
				public static getOfferSessionDescription(param0: android.content.Intent): string;
				public register(param0: android.net.sip.SipProfile, param1: number, param2: android.net.sip.SipRegistrationListener): void;
				public unregister(param0: android.net.sip.SipProfile, param1: android.net.sip.SipRegistrationListener): void;
				public getSessionFor(param0: android.content.Intent): android.net.sip.SipSession;
				public createSipSession(param0: android.net.sip.SipProfile, param1: android.net.sip.SipSession.Listener): android.net.sip.SipSession;
				public static EXTRA_CALL_ID: string;
				public static EXTRA_OFFER_SD: string;
				public static INCOMING_CALL_RESULT_CODE: number;
			}
		}
	}
}
