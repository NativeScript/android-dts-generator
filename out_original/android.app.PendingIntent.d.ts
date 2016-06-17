/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentSender.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module app {
		export class PendingIntent {
			public static getActivity(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: number): android.app.PendingIntent;
			public static getActivity(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: number, param4: android.os.Bundle): android.app.PendingIntent;
			public static getActivities(param0: android.content.Context, param1: number, param2: native.Array<android.content.Intent>, param3: number): android.app.PendingIntent;
			public static getActivities(param0: android.content.Context, param1: number, param2: native.Array<android.content.Intent>, param3: number, param4: android.os.Bundle): android.app.PendingIntent;
			public static getBroadcast(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: number): android.app.PendingIntent;
			public static getService(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: number): android.app.PendingIntent;
			public getIntentSender(): android.content.IntentSender;
			public cancel(): void;
			public send(): void;
			public send(param0: number): void;
			public send(param0: android.content.Context, param1: number, param2: android.content.Intent): void;
			public send(param0: number, param1: android.app.PendingIntent.OnFinished, param2: android.os.Handler): void;
			public send(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: android.app.PendingIntent.OnFinished, param4: android.os.Handler): void;
			public send(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: android.app.PendingIntent.OnFinished, param4: android.os.Handler, param5: string): void;
			public send(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: android.app.PendingIntent.OnFinished, param4: android.os.Handler, param5: string, param6: android.os.Bundle): void;
			public getTargetPackage(): string;
			public getCreatorPackage(): string;
			public getCreatorUid(): number;
			public getCreatorUserHandle(): android.os.UserHandle;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static writePendingIntentOrNullToParcel(param0: android.app.PendingIntent, param1: android.os.Parcel): void;
			public static readPendingIntentOrNullFromParcel(param0: android.os.Parcel): android.app.PendingIntent;
			public static CREATOR: android.os.Parcelable.Creator;
			public static FLAG_CANCEL_CURRENT: number;
			public static FLAG_IMMUTABLE: number;
			public static FLAG_NO_CREATE: number;
			public static FLAG_ONE_SHOT: number;
			public static FLAG_UPDATE_CURRENT: number;
		}
		export module PendingIntent {
			export class CanceledException {
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Exception);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
				public constructor(param0: string);
				public constructor(param0: java.lang.Exception);
			}
			export class OnFinished {
				public onSendFinished(param0: android.app.PendingIntent, param1: android.content.Intent, param2: number, param3: string, param4: android.os.Bundle): void;
			}
		}
	}
}
