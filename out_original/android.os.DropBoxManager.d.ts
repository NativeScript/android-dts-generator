/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class DropBoxManager {
			public constructor();
			public addText(param0: string, param1: string): void;
			public addData(param0: string, param1: native.Array<number>, param2: number): void;
			public addFile(param0: string, param1: java.io.File, param2: number): void;
			public isTagEnabled(param0: string): boolean;
			public getNextEntry(param0: string, param1: number): android.os.DropBoxManager.Entry;
			public static ACTION_DROPBOX_ENTRY_ADDED: string;
			public static EXTRA_TAG: string;
			public static EXTRA_TIME: string;
			public static IS_EMPTY: number;
			public static IS_GZIPPED: number;
			public static IS_TEXT: number;
		}
		export module DropBoxManager {
			export class Entry {
				public constructor();
				public constructor(param0: string, param1: number);
				public constructor(param0: string, param1: number, param2: string);
				public constructor(param0: string, param1: number, param2: native.Array<number>, param3: number);
				public constructor(param0: string, param1: number, param2: android.os.ParcelFileDescriptor, param3: number);
				public constructor(param0: string, param1: number, param2: java.io.File, param3: number);
				public close(): void;
				public getTag(): string;
				public getTimeMillis(): number;
				public getFlags(): number;
				public getText(param0: number): string;
				public getInputStream(): java.io.InputStream;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
