/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />

declare module android {
	export module accounts {
		export class AccountManagerFuture {
			public cancel(param0: boolean): boolean;
			public isCancelled(): boolean;
			public isDone(): boolean;
			public getResult(): java.lang.Object;
			public getResult(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
		}
	}
}
