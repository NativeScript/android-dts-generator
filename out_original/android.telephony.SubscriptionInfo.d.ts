/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module telephony {
		export class SubscriptionInfo {
			public getSubscriptionId(): number;
			public getIccId(): string;
			public getSimSlotIndex(): number;
			public getDisplayName(): string;
			public getCarrierName(): string;
			public createIconBitmap(param0: android.content.Context): android.graphics.Bitmap;
			public getIconTint(): number;
			public getNumber(): string;
			public getDataRoaming(): number;
			public getMcc(): number;
			public getMnc(): number;
			public getCountryIso(): string;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
