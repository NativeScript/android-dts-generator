/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class Region {
			public constructor();
			public constructor(param0: android.graphics.Region);
			public constructor(param0: android.graphics.Rect);
			public constructor(param0: number, param1: number, param2: number, param3: number);
			public setEmpty(): void;
			public set(param0: android.graphics.Region): boolean;
			public set(param0: android.graphics.Rect): boolean;
			public set(param0: number, param1: number, param2: number, param3: number): boolean;
			public setPath(param0: android.graphics.Path, param1: android.graphics.Region): boolean;
			public isEmpty(): boolean;
			public isRect(): boolean;
			public isComplex(): boolean;
			public getBounds(): android.graphics.Rect;
			public getBounds(param0: android.graphics.Rect): boolean;
			public getBoundaryPath(): android.graphics.Path;
			public getBoundaryPath(param0: android.graphics.Path): boolean;
			public contains(param0: number, param1: number): boolean;
			public quickContains(param0: android.graphics.Rect): boolean;
			public quickContains(param0: number, param1: number, param2: number, param3: number): boolean;
			public quickReject(param0: android.graphics.Rect): boolean;
			public quickReject(param0: number, param1: number, param2: number, param3: number): boolean;
			public quickReject(param0: android.graphics.Region): boolean;
			public translate(param0: number, param1: number): void;
			public translate(param0: number, param1: number, param2: android.graphics.Region): void;
			public union(param0: android.graphics.Rect): boolean;
			public op(param0: android.graphics.Rect, param1: android.graphics.Region.Op): boolean;
			public op(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Region.Op): boolean;
			public op(param0: android.graphics.Region, param1: android.graphics.Region.Op): boolean;
			public op(param0: android.graphics.Rect, param1: android.graphics.Region, param2: android.graphics.Region.Op): boolean;
			public op(param0: android.graphics.Region, param1: android.graphics.Region, param2: android.graphics.Region.Op): boolean;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public equals(param0: java.lang.Object): boolean;
			public finalize(): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module Region {
			export class Op {
				public static values(): native.Array<android.graphics.Region.Op>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.graphics.Region.Op;
				public static DIFFERENCE: android.graphics.Region.Op;
				public static INTERSECT: android.graphics.Region.Op;
				public static REPLACE: android.graphics.Region.Op;
				public static REVERSE_DIFFERENCE: android.graphics.Region.Op;
				public static UNION: android.graphics.Region.Op;
				public static XOR: android.graphics.Region.Op;
			}
		}
	}
}
