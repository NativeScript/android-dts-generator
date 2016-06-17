/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module service {
		export module carrier {
			export class CarrierIdentifier {
				public constructor();
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string);
				public getMcc(): string;
				public getMnc(): string;
				public getSpn(): string;
				public getImsi(): string;
				public getGid1(): string;
				public getGid2(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
