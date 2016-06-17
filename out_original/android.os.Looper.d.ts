/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.MessageQueue.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />

declare module android {
	export module os {
		export class Looper {
			public static prepare(): void;
			public static prepareMainLooper(): void;
			public static getMainLooper(): android.os.Looper;
			public static loop(): void;
			public static myLooper(): android.os.Looper;
			public static myQueue(): android.os.MessageQueue;
			public isCurrentThread(): boolean;
			public setMessageLogging(param0: android.util.Printer): void;
			public quit(): void;
			public quitSafely(): void;
			public getThread(): java.lang.Thread;
			public getQueue(): android.os.MessageQueue;
			public dump(param0: android.util.Printer, param1: string): void;
			public toString(): string;
		}
	}
}
