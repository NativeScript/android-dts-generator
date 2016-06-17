/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module telephony {
		export class SmsMessage {
			public static createFromPdu(param0: native.Array<number>): android.telephony.SmsMessage;
			public static createFromPdu(param0: native.Array<number>, param1: string): android.telephony.SmsMessage;
			public static getTPLayerLengthForPDU(param0: string): number;
			public static calculateLength(param0: string, param1: boolean): native.Array<number>;
			public static calculateLength(param0: string, param1: boolean): native.Array<number>;
			public static getSubmitPdu(param0: string, param1: string, param2: string, param3: boolean): android.telephony.SmsMessage.SubmitPdu;
			public static getSubmitPdu(param0: string, param1: string, param2: number, param3: native.Array<number>, param4: boolean): android.telephony.SmsMessage.SubmitPdu;
			public getServiceCenterAddress(): string;
			public getOriginatingAddress(): string;
			public getDisplayOriginatingAddress(): string;
			public getMessageBody(): string;
			public getMessageClass(): android.telephony.SmsMessage.MessageClass;
			public getDisplayMessageBody(): string;
			public getPseudoSubject(): string;
			public getTimestampMillis(): number;
			public isEmail(): boolean;
			public getEmailBody(): string;
			public getEmailFrom(): string;
			public getProtocolIdentifier(): number;
			public isReplace(): boolean;
			public isCphsMwiMessage(): boolean;
			public isMWIClearMessage(): boolean;
			public isMWISetMessage(): boolean;
			public isMwiDontStore(): boolean;
			public getUserData(): native.Array<number>;
			public getPdu(): native.Array<number>;
			public getStatusOnSim(): number;
			public getStatusOnIcc(): number;
			public getIndexOnSim(): number;
			public getIndexOnIcc(): number;
			public getStatus(): number;
			public isStatusReportMessage(): boolean;
			public isReplyPathPresent(): boolean;
			public static ENCODING_16BIT: number;
			public static ENCODING_7BIT: number;
			public static ENCODING_8BIT: number;
			public static ENCODING_UNKNOWN: number;
			public static MAX_USER_DATA_BYTES: number;
			public static MAX_USER_DATA_BYTES_WITH_HEADER: number;
			public static MAX_USER_DATA_SEPTETS: number;
			public static MAX_USER_DATA_SEPTETS_WITH_HEADER: number;
		}
		export module SmsMessage {
			export class MessageClass {
				public static values(): native.Array<android.telephony.SmsMessage.MessageClass>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.telephony.SmsMessage.MessageClass;
				public static CLASS_0: android.telephony.SmsMessage.MessageClass;
				public static CLASS_1: android.telephony.SmsMessage.MessageClass;
				public static CLASS_2: android.telephony.SmsMessage.MessageClass;
				public static CLASS_3: android.telephony.SmsMessage.MessageClass;
				public static UNKNOWN: android.telephony.SmsMessage.MessageClass;
			}
			export class SubmitPdu {
				public toString(): string;
				public encodedMessage: native.Array<number>;
				public encodedScAddress: native.Array<number>;
			}
		}
	}
}
