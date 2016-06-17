/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module graphics {
		export class PointF {
			public constructor();
			public constructor(param0: number, param1: number);
			public constructor(param0: android.graphics.Point);
			public set(param0: number, param1: number): void;
			public set(param0: android.graphics.PointF): void;
			public negate(): void;
			public offset(param0: number, param1: number): void;
			public equals(param0: java.lang.Object): boolean;
			public equals(param0: number, param1: number): boolean;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public length(): number;
			public static length(param0: number, param1: number): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public readFromParcel(param0: android.os.Parcel): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public x: number;
			public y: number;
		}
	}
}
