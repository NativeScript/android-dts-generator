/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.service.carrier.MessagePdu.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module service {
		export module carrier {
			export class CarrierMessagingService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onFilterSms(param0: android.service.carrier.MessagePdu, param1: string, param2: number, param3: number, param4: android.service.carrier.CarrierMessagingService.ResultCallback): void;
				public onSendTextSms(param0: string, param1: number, param2: string, param3: android.service.carrier.CarrierMessagingService.ResultCallback): void;
				public onSendTextSms(param0: string, param1: number, param2: string, param3: number, param4: android.service.carrier.CarrierMessagingService.ResultCallback): void;
				public onSendDataSms(param0: native.Array<number>, param1: number, param2: string, param3: number, param4: android.service.carrier.CarrierMessagingService.ResultCallback): void;
				public onSendDataSms(param0: native.Array<number>, param1: number, param2: string, param3: number, param4: number, param5: android.service.carrier.CarrierMessagingService.ResultCallback): void;
				public onSendMultipartTextSms(param0: java.util.List, param1: number, param2: string, param3: android.service.carrier.CarrierMessagingService.ResultCallback): void;
				public onSendMultipartTextSms(param0: java.util.List, param1: number, param2: string, param3: number, param4: android.service.carrier.CarrierMessagingService.ResultCallback): void;
				public onSendMms(param0: android.net.Uri, param1: number, param2: android.net.Uri, param3: android.service.carrier.CarrierMessagingService.ResultCallback): void;
				public onDownloadMms(param0: android.net.Uri, param1: number, param2: android.net.Uri, param3: android.service.carrier.CarrierMessagingService.ResultCallback): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public static DOWNLOAD_STATUS_ERROR: number;
				public static DOWNLOAD_STATUS_OK: number;
				public static DOWNLOAD_STATUS_RETRY_ON_CARRIER_NETWORK: number;
				public static SEND_FLAG_REQUEST_DELIVERY_STATUS: number;
				public static SEND_STATUS_ERROR: number;
				public static SEND_STATUS_OK: number;
				public static SEND_STATUS_RETRY_ON_CARRIER_NETWORK: number;
				public static SERVICE_INTERFACE: string;
			}
			export module CarrierMessagingService {
				export class ResultCallback {
					public onReceiveResult(param0: java.lang.Object): void;
				}
				export class SendMmsResult {
					public constructor();
					public constructor(param0: number, param1: native.Array<number>);
					public getSendStatus(): number;
					public getSendConfPdu(): native.Array<number>;
				}
				export class SendMultipartSmsResult {
					public constructor();
					public constructor(param0: number, param1: native.Array<number>);
					public getMessageRefs(): native.Array<number>;
					public getSendStatus(): number;
				}
				export class SendSmsResult {
					public constructor();
					public constructor(param0: number, param1: number);
					public getMessageRef(): number;
					public getSendStatus(): number;
				}
			}
		}
	}
}
