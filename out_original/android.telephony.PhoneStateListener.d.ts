/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.telephony.CellLocation.d.ts" />
/// <reference path="./android.telephony.ServiceState.d.ts" />
/// <reference path="./android.telephony.SignalStrength.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module telephony {
		export class PhoneStateListener {
			public constructor();
			public onServiceStateChanged(param0: android.telephony.ServiceState): void;
			public onSignalStrengthChanged(param0: number): void;
			public onMessageWaitingIndicatorChanged(param0: boolean): void;
			public onCallForwardingIndicatorChanged(param0: boolean): void;
			public onCellLocationChanged(param0: android.telephony.CellLocation): void;
			public onCallStateChanged(param0: number, param1: string): void;
			public onDataConnectionStateChanged(param0: number): void;
			public onDataConnectionStateChanged(param0: number, param1: number): void;
			public onDataActivity(param0: number): void;
			public onSignalStrengthsChanged(param0: android.telephony.SignalStrength): void;
			public onCellInfoChanged(param0: java.util.List): void;
			public static LISTEN_CALL_FORWARDING_INDICATOR: number;
			public static LISTEN_CALL_STATE: number;
			public static LISTEN_CELL_INFO: number;
			public static LISTEN_CELL_LOCATION: number;
			public static LISTEN_DATA_ACTIVITY: number;
			public static LISTEN_DATA_CONNECTION_STATE: number;
			public static LISTEN_MESSAGE_WAITING_INDICATOR: number;
			public static LISTEN_NONE: number;
			public static LISTEN_SERVICE_STATE: number;
			public static LISTEN_SIGNAL_STRENGTH: number;
			public static LISTEN_SIGNAL_STRENGTHS: number;
		}
	}
}
