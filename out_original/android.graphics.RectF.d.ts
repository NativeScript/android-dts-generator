/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module graphics {
		export class RectF {
			public constructor();
			public constructor(param0: number, param1: number, param2: number, param3: number);
			public constructor(param0: android.graphics.RectF);
			public constructor(param0: android.graphics.Rect);
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public toShortString(): string;
			public isEmpty(): boolean;
			public width(): number;
			public height(): number;
			public centerX(): number;
			public centerY(): number;
			public setEmpty(): void;
			public set(param0: number, param1: number, param2: number, param3: number): void;
			public set(param0: android.graphics.RectF): void;
			public set(param0: android.graphics.Rect): void;
			public offset(param0: number, param1: number): void;
			public offsetTo(param0: number, param1: number): void;
			public inset(param0: number, param1: number): void;
			public contains(param0: number, param1: number): boolean;
			public contains(param0: number, param1: number, param2: number, param3: number): boolean;
			public contains(param0: android.graphics.RectF): boolean;
			public intersect(param0: number, param1: number, param2: number, param3: number): boolean;
			public intersect(param0: android.graphics.RectF): boolean;
			public setIntersect(param0: android.graphics.RectF, param1: android.graphics.RectF): boolean;
			public intersects(param0: number, param1: number, param2: number, param3: number): boolean;
			public static intersects(param0: android.graphics.RectF, param1: android.graphics.RectF): boolean;
			public round(param0: android.graphics.Rect): void;
			public roundOut(param0: android.graphics.Rect): void;
			public union(param0: number, param1: number, param2: number, param3: number): void;
			public union(param0: android.graphics.RectF): void;
			public union(param0: number, param1: number): void;
			public sort(): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public readFromParcel(param0: android.os.Parcel): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public bottom: number;
			public left: number;
			public right: number;
			public top: number;
		}
	}
}
