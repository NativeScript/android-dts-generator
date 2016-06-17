/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module telecom {
		export class DisconnectCause {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: string);
			public constructor(param0: number, param1: string, param2: string, param3: string);
			public constructor(param0: number, param1: string, param2: string, param3: string, param4: number);
			public getCode(): number;
			public getLabel(): string;
			public getDescription(): string;
			public getReason(): string;
			public getTone(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static BUSY: number;
			public static CANCELED: number;
			public static CONNECTION_MANAGER_NOT_SUPPORTED: number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static ERROR: number;
			public static LOCAL: number;
			public static MISSED: number;
			public static OTHER: number;
			public static REJECTED: number;
			public static REMOTE: number;
			public static RESTRICTED: number;
			public static UNKNOWN: number;
		}
	}
}
