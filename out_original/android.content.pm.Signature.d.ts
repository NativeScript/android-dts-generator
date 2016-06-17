/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module pm {
			export class Signature {
				public constructor();
				public constructor(param0: native.Array<number>);
				public constructor(param0: string);
				public toChars(): native.Array<string>;
				public toChars(param0: native.Array<string>, param1: native.Array<number>): native.Array<string>;
				public toCharsString(): string;
				public toByteArray(): native.Array<number>;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
