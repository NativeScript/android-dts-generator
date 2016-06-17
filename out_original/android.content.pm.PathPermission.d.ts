/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class PathPermission {
				public constructor(param0: string, param1: number);
				public constructor(param0: android.os.Parcel);
				public constructor();
				public constructor(param0: string, param1: number, param2: string, param3: string);
				public constructor(param0: android.os.Parcel);
				public getReadPermission(): string;
				public getWritePermission(): string;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
