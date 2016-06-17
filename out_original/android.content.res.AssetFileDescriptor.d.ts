/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.FileInputStream.d.ts" />
/// <reference path="./java.io.FileOutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module res {
			export class AssetFileDescriptor {
				public constructor();
				public constructor(param0: android.os.ParcelFileDescriptor, param1: number, param2: number);
				public constructor(param0: android.os.ParcelFileDescriptor, param1: number, param2: number, param3: android.os.Bundle);
				public getParcelFileDescriptor(): android.os.ParcelFileDescriptor;
				public getFileDescriptor(): java.io.FileDescriptor;
				public getStartOffset(): number;
				public getExtras(): android.os.Bundle;
				public getLength(): number;
				public getDeclaredLength(): number;
				public close(): void;
				public createInputStream(): java.io.FileInputStream;
				public createOutputStream(): java.io.FileOutputStream;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static UNKNOWN_LENGTH: number;
			}
			export module AssetFileDescriptor {
				export class AutoCloseInputStream {
					public constructor(param0: android.os.ParcelFileDescriptor);
					public constructor(param0: java.io.File);
					public constructor(param0: java.io.FileDescriptor);
					public constructor(param0: string);
					public constructor();
					public constructor(param0: android.content.res.AssetFileDescriptor);
					public available(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public read(param0: native.Array<number>): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public read(param0: native.Array<number>): number;
					public skip(param0: number): number;
					public mark(param0: number): void;
					public markSupported(): boolean;
					public reset(): void;
				}
				export class AutoCloseOutputStream {
					public constructor(param0: android.os.ParcelFileDescriptor);
					public constructor(param0: java.io.File);
					public constructor(param0: java.io.File, param1: boolean);
					public constructor(param0: java.io.FileDescriptor);
					public constructor(param0: string);
					public constructor(param0: string, param1: boolean);
					public constructor();
					public constructor(param0: android.content.res.AssetFileDescriptor);
					public write(param0: number): void;
					public write(param0: native.Array<number>): void;
					public write(param0: native.Array<number>, param1: number, param2: number): void;
					public write(param0: native.Array<number>): void;
					public write(param0: number): void;
				}
			}
		}
	}
}
