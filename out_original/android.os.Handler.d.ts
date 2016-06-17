/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class Handler {
			public constructor();
			public constructor(param0: android.os.Handler.Callback);
			public constructor(param0: android.os.Looper);
			public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
			public handleMessage(param0: android.os.Message): void;
			public dispatchMessage(param0: android.os.Message): void;
			public getMessageName(param0: android.os.Message): string;
			public obtainMessage(): android.os.Message;
			public obtainMessage(param0: number): android.os.Message;
			public obtainMessage(param0: number, param1: java.lang.Object): android.os.Message;
			public obtainMessage(param0: number, param1: number, param2: number): android.os.Message;
			public obtainMessage(param0: number, param1: number, param2: number, param3: java.lang.Object): android.os.Message;
			public post(param0: java.lang.Runnable): boolean;
			public postAtTime(param0: java.lang.Runnable, param1: number): boolean;
			public postAtTime(param0: java.lang.Runnable, param1: java.lang.Object, param2: number): boolean;
			public postDelayed(param0: java.lang.Runnable, param1: number): boolean;
			public postAtFrontOfQueue(param0: java.lang.Runnable): boolean;
			public removeCallbacks(param0: java.lang.Runnable): void;
			public removeCallbacks(param0: java.lang.Runnable, param1: java.lang.Object): void;
			public sendMessage(param0: android.os.Message): boolean;
			public sendEmptyMessage(param0: number): boolean;
			public sendEmptyMessageDelayed(param0: number, param1: number): boolean;
			public sendEmptyMessageAtTime(param0: number, param1: number): boolean;
			public sendMessageDelayed(param0: android.os.Message, param1: number): boolean;
			public sendMessageAtTime(param0: android.os.Message, param1: number): boolean;
			public sendMessageAtFrontOfQueue(param0: android.os.Message): boolean;
			public removeMessages(param0: number): void;
			public removeMessages(param0: number, param1: java.lang.Object): void;
			public removeCallbacksAndMessages(param0: java.lang.Object): void;
			public hasMessages(param0: number): boolean;
			public hasMessages(param0: number, param1: java.lang.Object): boolean;
			public getLooper(): android.os.Looper;
			public dump(param0: android.util.Printer, param1: string): void;
			public toString(): string;
		}
		export module Handler {
			export class Callback {
				public handleMessage(param0: android.os.Message): boolean;
			}
		}
	}
}
