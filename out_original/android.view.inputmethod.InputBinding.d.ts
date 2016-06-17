/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />

declare module android {
	export module view {
		export module inputmethod {
			export class InputBinding {
				public constructor();
				public constructor(param0: android.view.inputmethod.InputConnection, param1: android.os.IBinder, param2: number, param3: number);
				public constructor(param0: android.view.inputmethod.InputConnection, param1: android.view.inputmethod.InputBinding);
				public getConnection(): android.view.inputmethod.InputConnection;
				public getConnectionToken(): android.os.IBinder;
				public getUid(): number;
				public getPid(): number;
				public toString(): string;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
