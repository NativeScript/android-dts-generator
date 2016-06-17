/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class Binder {
			public constructor();
			public static getCallingPid(): number;
			public static getCallingUid(): number;
			public static getCallingUserHandle(): android.os.UserHandle;
			public static clearCallingIdentity(): number;
			public static restoreCallingIdentity(param0: number): void;
			public static flushPendingCommands(): void;
			public static joinThreadPool(): void;
			public attachInterface(param0: android.os.IInterface, param1: string): void;
			public getInterfaceDescriptor(): string;
			public pingBinder(): boolean;
			public isBinderAlive(): boolean;
			public queryLocalInterface(param0: string): android.os.IInterface;
			public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
			public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
			public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
			public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
			public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
			public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
			public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
			public finalize(): void;
		}
	}
}
