/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class ComponentName {
			public constructor();
			public constructor(param0: string, param1: string);
			public constructor(param0: android.content.Context, param1: string);
			public constructor(param0: android.content.Context, param1: java.lang.Class);
			public constructor(param0: android.os.Parcel);
			public static createRelative(param0: string, param1: string): android.content.ComponentName;
			public static createRelative(param0: android.content.Context, param1: string): android.content.ComponentName;
			public clone(): java.lang.Object;
			public clone(): android.content.ComponentName;
			public getPackageName(): string;
			public getClassName(): string;
			public getShortClassName(): string;
			public flattenToString(): string;
			public flattenToShortString(): string;
			public static unflattenFromString(param0: string): android.content.ComponentName;
			public toShortString(): string;
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public compareTo(param0: android.content.ComponentName): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static writeToParcel(param0: android.content.ComponentName, param1: android.os.Parcel): void;
			public static readFromParcel(param0: android.os.Parcel): android.content.ComponentName;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
