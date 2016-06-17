/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.telecom.PhoneAccountHandle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telecom {
		export class PhoneAccount {
			public static builder(param0: android.telecom.PhoneAccountHandle, param1: string): android.telecom.PhoneAccount.Builder;
			public toBuilder(): android.telecom.PhoneAccount.Builder;
			public getAccountHandle(): android.telecom.PhoneAccountHandle;
			public getAddress(): android.net.Uri;
			public getSubscriptionAddress(): android.net.Uri;
			public getCapabilities(): number;
			public hasCapabilities(param0: number): boolean;
			public getLabel(): string;
			public getShortDescription(): string;
			public getSupportedUriSchemes(): java.util.List;
			public getIcon(): android.graphics.drawable.Icon;
			public isEnabled(): boolean;
			public supportsUriScheme(param0: string): boolean;
			public getHighlightColor(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static CAPABILITY_CALL_PROVIDER: number;
			public static CAPABILITY_CALL_SUBJECT: number;
			public static CAPABILITY_CONNECTION_MANAGER: number;
			public static CAPABILITY_PLACE_EMERGENCY_CALLS: number;
			public static CAPABILITY_SIM_SUBSCRIPTION: number;
			public static CAPABILITY_VIDEO_CALLING: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static NO_HIGHLIGHT_COLOR: number;
			public static NO_RESOURCE_ID: number;
			public static SCHEME_SIP: string;
			public static SCHEME_TEL: string;
			public static SCHEME_VOICEMAIL: string;
		}
		export module PhoneAccount {
			export class Builder {
				public constructor();
				public constructor(param0: android.telecom.PhoneAccountHandle, param1: string);
				public constructor(param0: android.telecom.PhoneAccount);
				public setAddress(param0: android.net.Uri): android.telecom.PhoneAccount.Builder;
				public setSubscriptionAddress(param0: android.net.Uri): android.telecom.PhoneAccount.Builder;
				public setCapabilities(param0: number): android.telecom.PhoneAccount.Builder;
				public setIcon(param0: android.graphics.drawable.Icon): android.telecom.PhoneAccount.Builder;
				public setHighlightColor(param0: number): android.telecom.PhoneAccount.Builder;
				public setShortDescription(param0: string): android.telecom.PhoneAccount.Builder;
				public addSupportedUriScheme(param0: string): android.telecom.PhoneAccount.Builder;
				public setSupportedUriSchemes(param0: java.util.List): android.telecom.PhoneAccount.Builder;
				public build(): android.telecom.PhoneAccount;
			}
		}
	}
}
