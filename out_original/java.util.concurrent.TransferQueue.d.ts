/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class TransferQueue {
				public tryTransfer(param0: java.lang.Object): boolean;
				public transfer(param0: java.lang.Object): void;
				public tryTransfer(param0: java.lang.Object, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
				public hasWaitingConsumer(): boolean;
				public getWaitingConsumerCount(): number;
			}
		}
	}
}
