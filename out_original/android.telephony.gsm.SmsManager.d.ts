/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module telephony {
		export module gsm {
			export class SmsManager {
				public static getDefault(): android.telephony.gsm.SmsManager;
				public sendTextMessage(param0: string, param1: string, param2: string, param3: android.app.PendingIntent, param4: android.app.PendingIntent): void;
				public divideMessage(param0: string): java.util.ArrayList;
				public sendMultipartTextMessage(param0: string, param1: string, param2: java.util.ArrayList, param3: java.util.ArrayList, param4: java.util.ArrayList): void;
				public sendDataMessage(param0: string, param1: string, param2: number, param3: native.Array<number>, param4: android.app.PendingIntent, param5: android.app.PendingIntent): void;
				public static RESULT_ERROR_GENERIC_FAILURE: number;
				public static RESULT_ERROR_NO_SERVICE: number;
				public static RESULT_ERROR_NULL_PDU: number;
				public static RESULT_ERROR_RADIO_OFF: number;
				public static STATUS_ON_SIM_FREE: number;
				public static STATUS_ON_SIM_READ: number;
				public static STATUS_ON_SIM_SENT: number;
				public static STATUS_ON_SIM_UNREAD: number;
				public static STATUS_ON_SIM_UNSENT: number;
			}
		}
	}
}
