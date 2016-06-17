/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module os {
		export class RemoteCallbackList {
			public constructor();
			public register(param0: android.os.IInterface): boolean;
			public register(param0: android.os.IInterface, param1: java.lang.Object): boolean;
			public unregister(param0: android.os.IInterface): boolean;
			public kill(): void;
			public onCallbackDied(param0: android.os.IInterface): void;
			public onCallbackDied(param0: android.os.IInterface, param1: java.lang.Object): void;
			public beginBroadcast(): number;
			public getBroadcastItem(param0: number): android.os.IInterface;
			public getBroadcastCookie(param0: number): java.lang.Object;
			public finishBroadcast(): void;
			public getRegisteredCallbackCount(): number;
		}
	}
}
