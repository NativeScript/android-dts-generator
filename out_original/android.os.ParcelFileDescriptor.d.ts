/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.net.DatagramSocket.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />

declare module android {
	export module os {
		export class ParcelFileDescriptor {
			public constructor();
			public constructor(param0: android.os.ParcelFileDescriptor);
			public static open(param0: java.io.File, param1: number): android.os.ParcelFileDescriptor;
			public static open(param0: java.io.File, param1: number, param2: android.os.Handler, param3: android.os.ParcelFileDescriptor.OnCloseListener): android.os.ParcelFileDescriptor;
			public static dup(param0: java.io.FileDescriptor): android.os.ParcelFileDescriptor;
			public dup(): android.os.ParcelFileDescriptor;
			public static fromFd(param0: number): android.os.ParcelFileDescriptor;
			public static adoptFd(param0: number): android.os.ParcelFileDescriptor;
			public static fromSocket(param0: java.net.Socket): android.os.ParcelFileDescriptor;
			public static fromDatagramSocket(param0: java.net.DatagramSocket): android.os.ParcelFileDescriptor;
			public static createPipe(): native.Array<android.os.ParcelFileDescriptor>;
			public static createReliablePipe(): native.Array<android.os.ParcelFileDescriptor>;
			public static createSocketPair(): native.Array<android.os.ParcelFileDescriptor>;
			public static createReliableSocketPair(): native.Array<android.os.ParcelFileDescriptor>;
			public static parseMode(param0: string): number;
			public getFileDescriptor(): java.io.FileDescriptor;
			public getStatSize(): number;
			public getFd(): number;
			public detachFd(): number;
			public close(): void;
			public closeWithError(param0: string): void;
			public canDetectErrors(): boolean;
			public checkError(): void;
			public toString(): string;
			public finalize(): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static MODE_APPEND: number;
			public static MODE_CREATE: number;
			public static MODE_READ_ONLY: number;
			public static MODE_READ_WRITE: number;
			public static MODE_TRUNCATE: number;
			public static MODE_WORLD_READABLE: number;
			public static MODE_WORLD_WRITEABLE: number;
			public static MODE_WRITE_ONLY: number;
		}
		export module ParcelFileDescriptor {
			export class AutoCloseInputStream {
				public constructor(param0: java.io.File);
				public constructor(param0: java.io.FileDescriptor);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: android.os.ParcelFileDescriptor);
				public close(): void;
			}
			export class AutoCloseOutputStream {
				public constructor(param0: java.io.File);
				public constructor(param0: java.io.File, param1: boolean);
				public constructor(param0: java.io.FileDescriptor);
				public constructor(param0: string);
				public constructor(param0: string, param1: boolean);
				public constructor();
				public constructor(param0: android.os.ParcelFileDescriptor);
				public close(): void;
			}
			export class FileDescriptorDetachedException {
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
			}
			export class OnCloseListener {
				public onClose(param0: java.io.IOException): void;
			}
		}
	}
}
