/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Byte.d.ts" />
/// <reference path="./java.lang.Double.d.ts" />
/// <reference path="./java.lang.Float.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Short.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module content {
		export class ContentValues {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: android.content.ContentValues);
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public put(param0: string, param1: string): void;
			public putAll(param0: android.content.ContentValues): void;
			public put(param0: string, param1: java.lang.Byte): void;
			public put(param0: string, param1: java.lang.Short): void;
			public put(param0: string, param1: java.lang.Integer): void;
			public put(param0: string, param1: java.lang.Long): void;
			public put(param0: string, param1: java.lang.Float): void;
			public put(param0: string, param1: java.lang.Double): void;
			public put(param0: string, param1: java.lang.Boolean): void;
			public put(param0: string, param1: native.Array<number>): void;
			public putNull(param0: string): void;
			public size(): number;
			public remove(param0: string): void;
			public clear(): void;
			public containsKey(param0: string): boolean;
			public get(param0: string): java.lang.Object;
			public getAsString(param0: string): string;
			public getAsLong(param0: string): java.lang.Long;
			public getAsInteger(param0: string): java.lang.Integer;
			public getAsShort(param0: string): java.lang.Short;
			public getAsByte(param0: string): java.lang.Byte;
			public getAsDouble(param0: string): java.lang.Double;
			public getAsFloat(param0: string): java.lang.Float;
			public getAsBoolean(param0: string): java.lang.Boolean;
			public getAsByteArray(param0: string): native.Array<number>;
			public valueSet(): java.util.Set;
			public keySet(): java.util.Set;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
			public static TAG: string;
		}
	}
}
