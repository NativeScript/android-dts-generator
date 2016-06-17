/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export module sip {
			export class SipProfile {
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public getUriString(): string;
				public getDisplayName(): string;
				public getUserName(): string;
				public getAuthUserName(): string;
				public getPassword(): string;
				public getSipDomain(): string;
				public getPort(): number;
				public getProtocol(): string;
				public getProxyAddress(): string;
				public getProfileName(): string;
				public getSendKeepAlive(): boolean;
				public getAutoRegistration(): boolean;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export module SipProfile {
				export class Builder {
					public constructor();
					public constructor(param0: android.net.sip.SipProfile);
					public constructor(param0: string);
					public constructor(param0: string, param1: string);
					public setAuthUserName(param0: string): android.net.sip.SipProfile.Builder;
					public setProfileName(param0: string): android.net.sip.SipProfile.Builder;
					public setPassword(param0: string): android.net.sip.SipProfile.Builder;
					public setPort(param0: number): android.net.sip.SipProfile.Builder;
					public setProtocol(param0: string): android.net.sip.SipProfile.Builder;
					public setOutboundProxy(param0: string): android.net.sip.SipProfile.Builder;
					public setDisplayName(param0: string): android.net.sip.SipProfile.Builder;
					public setSendKeepAlive(param0: boolean): android.net.sip.SipProfile.Builder;
					public setAutoRegistration(param0: boolean): android.net.sip.SipProfile.Builder;
					public build(): android.net.sip.SipProfile;
				}
			}
		}
	}
}
