/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module accounts {
		export class AuthenticatorDescription {
			public constructor();
			public constructor(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: boolean);
			public constructor(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number);
			public static newKey(param0: string): android.accounts.AuthenticatorDescription;
			public describeContents(): number;
			public hashCode(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public accountPreferencesId: number;
			public customTokens: boolean;
			public iconId: number;
			public labelId: number;
			public packageName: string;
			public smallIconId: number;
			public type: string;
		}
	}
}
