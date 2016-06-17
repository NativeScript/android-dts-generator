/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.IInterface.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.util.Size.d.ts" />
/// <reference path="./android.util.SizeF.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.util.SparseBooleanArray.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.Serializable.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module os {
		export class Parcel {
			public static obtain(): android.os.Parcel;
			public recycle(): void;
			public dataSize(): number;
			public dataAvail(): number;
			public dataPosition(): number;
			public dataCapacity(): number;
			public setDataSize(param0: number): void;
			public setDataPosition(param0: number): void;
			public setDataCapacity(param0: number): void;
			public marshall(): native.Array<number>;
			public unmarshall(param0: native.Array<number>, param1: number, param2: number): void;
			public appendFrom(param0: android.os.Parcel, param1: number, param2: number): void;
			public hasFileDescriptors(): boolean;
			public writeInterfaceToken(param0: string): void;
			public enforceInterface(param0: string): void;
			public writeByteArray(param0: native.Array<number>): void;
			public writeByteArray(param0: native.Array<number>, param1: number, param2: number): void;
			public writeInt(param0: number): void;
			public writeLong(param0: number): void;
			public writeFloat(param0: number): void;
			public writeDouble(param0: number): void;
			public writeString(param0: string): void;
			public writeStrongBinder(param0: android.os.IBinder): void;
			public writeStrongInterface(param0: android.os.IInterface): void;
			public writeFileDescriptor(param0: java.io.FileDescriptor): void;
			public writeByte(param0: number): void;
			public writeMap(param0: java.util.Map): void;
			public writeBundle(param0: android.os.Bundle): void;
			public writePersistableBundle(param0: android.os.PersistableBundle): void;
			public writeSize(param0: android.util.Size): void;
			public writeSizeF(param0: android.util.SizeF): void;
			public writeList(param0: java.util.List): void;
			public writeArray(param0: native.Array<java.lang.Object>): void;
			public writeSparseArray(param0: android.util.SparseArray): void;
			public writeSparseBooleanArray(param0: android.util.SparseBooleanArray): void;
			public writeBooleanArray(param0: native.Array<boolean>): void;
			public createBooleanArray(): native.Array<boolean>;
			public readBooleanArray(param0: native.Array<boolean>): void;
			public writeCharArray(param0: native.Array<string>): void;
			public createCharArray(): native.Array<string>;
			public readCharArray(param0: native.Array<string>): void;
			public writeIntArray(param0: native.Array<number>): void;
			public createIntArray(): native.Array<number>;
			public readIntArray(param0: native.Array<number>): void;
			public writeLongArray(param0: native.Array<number>): void;
			public createLongArray(): native.Array<number>;
			public readLongArray(param0: native.Array<number>): void;
			public writeFloatArray(param0: native.Array<number>): void;
			public createFloatArray(): native.Array<number>;
			public readFloatArray(param0: native.Array<number>): void;
			public writeDoubleArray(param0: native.Array<number>): void;
			public createDoubleArray(): native.Array<number>;
			public readDoubleArray(param0: native.Array<number>): void;
			public writeStringArray(param0: native.Array<string>): void;
			public createStringArray(): native.Array<string>;
			public readStringArray(param0: native.Array<string>): void;
			public writeBinderArray(param0: native.Array<android.os.IBinder>): void;
			public createBinderArray(): native.Array<android.os.IBinder>;
			public readBinderArray(param0: native.Array<android.os.IBinder>): void;
			public writeTypedList(param0: java.util.List): void;
			public writeStringList(param0: java.util.List): void;
			public writeBinderList(param0: java.util.List): void;
			public writeTypedArray(param0: native.Array<android.os.Parcelable>, param1: number): void;
			public writeTypedObject(param0: android.os.Parcelable, param1: number): void;
			public writeValue(param0: java.lang.Object): void;
			public writeParcelable(param0: android.os.Parcelable, param1: number): void;
			public writeSerializable(param0: java.io.Serializable): void;
			public writeException(param0: java.lang.Exception): void;
			public writeNoException(): void;
			public readException(): void;
			public readException(param0: number, param1: string): void;
			public readInt(): number;
			public readLong(): number;
			public readFloat(): number;
			public readDouble(): number;
			public readString(): string;
			public readStrongBinder(): android.os.IBinder;
			public readFileDescriptor(): android.os.ParcelFileDescriptor;
			public readByte(): number;
			public readMap(param0: java.util.Map, param1: java.lang.ClassLoader): void;
			public readList(param0: java.util.List, param1: java.lang.ClassLoader): void;
			public readHashMap(param0: java.lang.ClassLoader): java.util.HashMap;
			public readBundle(): android.os.Bundle;
			public readBundle(param0: java.lang.ClassLoader): android.os.Bundle;
			public readPersistableBundle(): android.os.PersistableBundle;
			public readPersistableBundle(param0: java.lang.ClassLoader): android.os.PersistableBundle;
			public readSize(): android.util.Size;
			public readSizeF(): android.util.SizeF;
			public createByteArray(): native.Array<number>;
			public readByteArray(param0: native.Array<number>): void;
			public readArrayList(param0: java.lang.ClassLoader): java.util.ArrayList;
			public readArray(param0: java.lang.ClassLoader): native.Array<java.lang.Object>;
			public readSparseArray(param0: java.lang.ClassLoader): android.util.SparseArray;
			public readSparseBooleanArray(): android.util.SparseBooleanArray;
			public createTypedArrayList(param0: android.os.Parcelable.Creator): java.util.ArrayList;
			public readTypedList(param0: java.util.List, param1: android.os.Parcelable.Creator): void;
			public createStringArrayList(): java.util.ArrayList;
			public createBinderArrayList(): java.util.ArrayList;
			public readStringList(param0: java.util.List): void;
			public readBinderList(param0: java.util.List): void;
			public createTypedArray(param0: android.os.Parcelable.Creator): native.Array<java.lang.Object>;
			public readTypedArray(param0: native.Array<java.lang.Object>, param1: android.os.Parcelable.Creator): void;
			public readTypedObject(param0: android.os.Parcelable.Creator): java.lang.Object;
			public writeParcelableArray(param0: native.Array<android.os.Parcelable>, param1: number): void;
			public readValue(param0: java.lang.ClassLoader): java.lang.Object;
			public readParcelable(param0: java.lang.ClassLoader): android.os.Parcelable;
			public readParcelableArray(param0: java.lang.ClassLoader): native.Array<android.os.Parcelable>;
			public readSerializable(): java.io.Serializable;
			public finalize(): void;
			public static STRING_CREATOR: android.os.Parcelable.Creator;
		}
	}
}
