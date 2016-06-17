/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Messenger.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />

declare module android {
	export module os {
		export class Message {
			public constructor();
			public static obtain(): android.os.Message;
			public static obtain(param0: android.os.Message): android.os.Message;
			public static obtain(param0: android.os.Handler): android.os.Message;
			public static obtain(param0: android.os.Handler, param1: java.lang.Runnable): android.os.Message;
			public static obtain(param0: android.os.Handler, param1: number): android.os.Message;
			public static obtain(param0: android.os.Handler, param1: number, param2: java.lang.Object): android.os.Message;
			public static obtain(param0: android.os.Handler, param1: number, param2: number, param3: number): android.os.Message;
			public static obtain(param0: android.os.Handler, param1: number, param2: number, param3: number, param4: java.lang.Object): android.os.Message;
			public recycle(): void;
			public copyFrom(param0: android.os.Message): void;
			public getWhen(): number;
			public setTarget(param0: android.os.Handler): void;
			public getTarget(): android.os.Handler;
			public getCallback(): java.lang.Runnable;
			public getData(): android.os.Bundle;
			public peekData(): android.os.Bundle;
			public setData(param0: android.os.Bundle): void;
			public sendToTarget(): void;
			public isAsynchronous(): boolean;
			public setAsynchronous(param0: boolean): void;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public arg1: number;
			public arg2: number;
			public obj: java.lang.Object;
			public replyTo: android.os.Messenger;
			public sendingUid: number;
			public what: number;
		}
	}
}
