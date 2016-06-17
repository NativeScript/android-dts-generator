/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module app {
		export module admin {
			export class SystemUpdatePolicy {
				public static createAutomaticInstallPolicy(): android.app.admin.SystemUpdatePolicy;
				public static createWindowedInstallPolicy(param0: number, param1: number): android.app.admin.SystemUpdatePolicy;
				public static createPostponeInstallPolicy(): android.app.admin.SystemUpdatePolicy;
				public getPolicyType(): number;
				public getInstallWindowStart(): number;
				public getInstallWindowEnd(): number;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static TYPE_INSTALL_AUTOMATIC: number;
				public static TYPE_INSTALL_WINDOWED: number;
				public static TYPE_POSTPONE: number;
			}
		}
	}
}
