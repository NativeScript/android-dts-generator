/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module os {
		export class Messenger {
			public constructor();
			public constructor(param0: android.os.Handler);
			public constructor(param0: android.os.IBinder);
			public send(param0: android.os.Message): void;
			public getBinder(): android.os.IBinder;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static writeMessengerOrNullToParcel(param0: android.os.Messenger, param1: android.os.Parcel): void;
			public static readMessengerOrNullFromParcel(param0: android.os.Parcel): android.os.Messenger;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
