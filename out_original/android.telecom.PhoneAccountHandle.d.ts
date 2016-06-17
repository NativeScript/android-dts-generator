/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module telecom {
		export class PhoneAccountHandle {
			public constructor();
			public constructor(param0: android.content.ComponentName, param1: string);
			public constructor(param0: android.content.ComponentName, param1: string, param2: android.os.UserHandle);
			public getComponentName(): android.content.ComponentName;
			public getId(): string;
			public getUserHandle(): android.os.UserHandle;
			public hashCode(): number;
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
