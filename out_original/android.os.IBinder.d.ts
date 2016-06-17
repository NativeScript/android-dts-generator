/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class IBinder {
			public getInterfaceDescriptor(): string;
			public pingBinder(): boolean;
			public isBinderAlive(): boolean;
			public queryLocalInterface(param0: string): android.os.IInterface;
			public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
			public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
			public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
			public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
			public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
			public static DUMP_TRANSACTION: number;
			public static FIRST_CALL_TRANSACTION: number;
			public static FLAG_ONEWAY: number;
			public static INTERFACE_TRANSACTION: number;
			public static LAST_CALL_TRANSACTION: number;
			public static LIKE_TRANSACTION: number;
			public static PING_TRANSACTION: number;
			public static TWEET_TRANSACTION: number;
		}
		export module IBinder {
			export class DeathRecipient {
				public binderDied(): void;
			}
		}
	}
}
