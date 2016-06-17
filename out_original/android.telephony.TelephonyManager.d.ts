/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.telephony.CellLocation.d.ts" />
/// <reference path="./android.telephony.IccOpenLogicalChannelResponse.d.ts" />
/// <reference path="./android.telephony.PhoneStateListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telephony {
		export class TelephonyManager {
			public getPhoneCount(): number;
			public getDeviceSoftwareVersion(): string;
			public getDeviceId(): string;
			public getDeviceId(param0: number): string;
			public getCellLocation(): android.telephony.CellLocation;
			public getNeighboringCellInfo(): java.util.List;
			public getPhoneType(): number;
			public getNetworkOperatorName(): string;
			public getNetworkOperator(): string;
			public isNetworkRoaming(): boolean;
			public getNetworkCountryIso(): string;
			public getNetworkType(): number;
			public hasIccCard(): boolean;
			public getSimState(): number;
			public getSimOperator(): string;
			public getSimOperatorName(): string;
			public getSimCountryIso(): string;
			public getSimSerialNumber(): string;
			public getSubscriberId(): string;
			public getGroupIdLevel1(): string;
			public getLine1Number(): string;
			public setLine1NumberForDisplay(param0: string, param1: string): boolean;
			public getVoiceMailNumber(): string;
			public setVoiceMailNumber(param0: string, param1: string): boolean;
			public getVoiceMailAlphaTag(): string;
			public getCallState(): number;
			public getDataActivity(): number;
			public getDataState(): number;
			public listen(param0: android.telephony.PhoneStateListener, param1: number): void;
			public isVoiceCapable(): boolean;
			public isSmsCapable(): boolean;
			public getAllCellInfo(): java.util.List;
			public getMmsUserAgent(): string;
			public getMmsUAProfUrl(): string;
			public iccOpenLogicalChannel(param0: string): android.telephony.IccOpenLogicalChannelResponse;
			public iccCloseLogicalChannel(param0: number): boolean;
			public iccTransmitApduLogicalChannel(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: string): string;
			public iccTransmitApduBasicChannel(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string): string;
			public iccExchangeSimIO(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string): native.Array<number>;
			public sendEnvelopeWithStatus(param0: string): string;
			public setPreferredNetworkTypeToGlobal(): boolean;
			public hasCarrierPrivileges(): boolean;
			public setOperatorBrandOverride(param0: string): boolean;
			public canChangeDtmfToneLength(): boolean;
			public isWorldPhone(): boolean;
			public isTtyModeSupported(): boolean;
			public isHearingAidCompatibilitySupported(): boolean;
			public static ACTION_CONFIGURE_VOICEMAIL: string;
			public static ACTION_PHONE_STATE_CHANGED: string;
			public static ACTION_RESPOND_VIA_MESSAGE: string;
			public static CALL_STATE_IDLE: number;
			public static CALL_STATE_OFFHOOK: number;
			public static CALL_STATE_RINGING: number;
			public static DATA_ACTIVITY_DORMANT: number;
			public static DATA_ACTIVITY_IN: number;
			public static DATA_ACTIVITY_INOUT: number;
			public static DATA_ACTIVITY_NONE: number;
			public static DATA_ACTIVITY_OUT: number;
			public static DATA_CONNECTED: number;
			public static DATA_CONNECTING: number;
			public static DATA_DISCONNECTED: number;
			public static DATA_SUSPENDED: number;
			public static EXTRA_INCOMING_NUMBER: string;
			public static EXTRA_STATE: string;
			public static EXTRA_STATE_IDLE: string;
			public static EXTRA_STATE_OFFHOOK: string;
			public static EXTRA_STATE_RINGING: string;
			public static NETWORK_TYPE_1xRTT: number;
			public static NETWORK_TYPE_CDMA: number;
			public static NETWORK_TYPE_EDGE: number;
			public static NETWORK_TYPE_EHRPD: number;
			public static NETWORK_TYPE_EVDO_0: number;
			public static NETWORK_TYPE_EVDO_A: number;
			public static NETWORK_TYPE_EVDO_B: number;
			public static NETWORK_TYPE_GPRS: number;
			public static NETWORK_TYPE_HSDPA: number;
			public static NETWORK_TYPE_HSPA: number;
			public static NETWORK_TYPE_HSPAP: number;
			public static NETWORK_TYPE_HSUPA: number;
			public static NETWORK_TYPE_IDEN: number;
			public static NETWORK_TYPE_LTE: number;
			public static NETWORK_TYPE_UMTS: number;
			public static NETWORK_TYPE_UNKNOWN: number;
			public static PHONE_TYPE_CDMA: number;
			public static PHONE_TYPE_GSM: number;
			public static PHONE_TYPE_NONE: number;
			public static PHONE_TYPE_SIP: number;
			public static SIM_STATE_ABSENT: number;
			public static SIM_STATE_NETWORK_LOCKED: number;
			public static SIM_STATE_PIN_REQUIRED: number;
			public static SIM_STATE_PUK_REQUIRED: number;
			public static SIM_STATE_READY: number;
			public static SIM_STATE_UNKNOWN: number;
			public static VVM_TYPE_CVVM: string;
			public static VVM_TYPE_OMTP: string;
		}
	}
}
