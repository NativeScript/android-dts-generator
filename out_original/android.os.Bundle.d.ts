/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./android.util.SizeF.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.Byte.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module os {
		export class Bundle {
			public constructor();
			public constructor(param0: java.lang.ClassLoader);
			public constructor(param0: number);
			public constructor(param0: android.os.Bundle);
			public constructor(param0: android.os.PersistableBundle);
			public setClassLoader(param0: java.lang.ClassLoader): void;
			public getClassLoader(): java.lang.ClassLoader;
			public clone(): java.lang.Object;
			public clear(): void;
			public putAll(param0: android.os.PersistableBundle): void;
			public putAll(param0: android.os.Bundle): void;
			public hasFileDescriptors(): boolean;
			public putByte(param0: string, param1: number): void;
			public putChar(param0: string, param1: string): void;
			public putShort(param0: string, param1: number): void;
			public putFloat(param0: string, param1: number): void;
			public putCharSequence(param0: string, param1: string): void;
			public putParcelable(param0: string, param1: android.os.Parcelable): void;
			public putSize(param0: string, param1: android.util.Size): void;
			public putSizeF(param0: string, param1: android.util.SizeF): void;
			public putParcelableArray(param0: string, param1: native.Array<android.os.Parcelable>): void;
			public putParcelableArrayList(param0: string, param1: java.util.ArrayList): void;
			public putSparseParcelableArray(param0: string, param1: android.util.SparseArray): void;
			public putIntegerArrayList(param0: string, param1: java.util.ArrayList): void;
			public putStringArrayList(param0: string, param1: java.util.ArrayList): void;
			public putCharSequenceArrayList(param0: string, param1: java.util.ArrayList): void;
			public putSerializable(param0: string, param1: java.io.Serializable): void;
			public putByteArray(param0: string, param1: native.Array<number>): void;
			public putShortArray(param0: string, param1: native.Array<number>): void;
			public putCharArray(param0: string, param1: native.Array<string>): void;
			public putFloatArray(param0: string, param1: native.Array<number>): void;
			public putCharSequenceArray(param0: string, param1: native.Array<java.lang.CharSequence>): void;
			public putBundle(param0: string, param1: android.os.Bundle): void;
			public putBinder(param0: string, param1: android.os.IBinder): void;
			public getByte(param0: string): number;
			public getByte(param0: string, param1: number): java.lang.Byte;
			public getChar(param0: string): string;
			public getChar(param0: string, param1: string): string;
			public getShort(param0: string): number;
			public getShort(param0: string, param1: number): number;
			public getFloat(param0: string): number;
			public getFloat(param0: string, param1: number): number;
			public getCharSequence(param0: string): string;
			public getCharSequence(param0: string, param1: string): string;
			public getSize(param0: string): android.util.Size;
			public getSizeF(param0: string): android.util.SizeF;
			public getBundle(param0: string): android.os.Bundle;
			public getParcelable(param0: string): android.os.Parcelable;
			public getParcelableArray(param0: string): native.Array<android.os.Parcelable>;
			public getParcelableArrayList(param0: string): java.util.ArrayList;
			public getSparseParcelableArray(param0: string): android.util.SparseArray;
			public getSerializable(param0: string): java.io.Serializable;
			public getIntegerArrayList(param0: string): java.util.ArrayList;
			public getStringArrayList(param0: string): java.util.ArrayList;
			public getCharSequenceArrayList(param0: string): java.util.ArrayList;
			public getByteArray(param0: string): native.Array<number>;
			public getShortArray(param0: string): native.Array<number>;
			public getCharArray(param0: string): native.Array<string>;
			public getFloatArray(param0: string): native.Array<number>;
			public getCharSequenceArray(param0: string): native.Array<java.lang.CharSequence>;
			public getBinder(param0: string): android.os.IBinder;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public readFromParcel(param0: android.os.Parcel): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static EMPTY: android.os.Bundle;
		}
	}
}
