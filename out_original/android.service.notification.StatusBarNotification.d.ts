/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Notification.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module service {
		export module notification {
			export class StatusBarNotification {
				public constructor();
				public constructor(param0: string, param1: string, param2: number, param3: string, param4: number, param5: number, param6: number, param7: android.app.Notification, param8: android.os.UserHandle, param9: number);
				public constructor(param0: android.os.Parcel);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public clone(): java.lang.Object;
				public clone(): android.service.notification.StatusBarNotification;
				public toString(): string;
				public isOngoing(): boolean;
				public isClearable(): boolean;
				public getUserId(): number;
				public getPackageName(): string;
				public getId(): number;
				public getTag(): string;
				public getNotification(): android.app.Notification;
				public getUser(): android.os.UserHandle;
				public getPostTime(): number;
				public getKey(): string;
				public getGroupKey(): string;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
