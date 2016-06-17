/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.UserHandle.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module android {
	export module content {
		export class IntentSender {
			public sendIntent(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: android.content.IntentSender.OnFinished, param4: android.os.Handler): void;
			public sendIntent(param0: android.content.Context, param1: number, param2: android.content.Intent, param3: android.content.IntentSender.OnFinished, param4: android.os.Handler, param5: string): void;
			public getTargetPackage(): string;
			public getCreatorPackage(): string;
			public getCreatorUid(): number;
			public getCreatorUserHandle(): android.os.UserHandle;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static writeIntentSenderOrNullToParcel(param0: android.content.IntentSender, param1: android.os.Parcel): void;
			public static readIntentSenderOrNullFromParcel(param0: android.os.Parcel): android.content.IntentSender;
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module IntentSender {
			export class OnFinished {
				public onSendFinished(param0: android.content.IntentSender, param1: android.content.Intent, param2: number, param3: string, param4: android.os.Bundle): void;
			}
			export class SendIntentException {
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Exception);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
				public constructor(param0: string);
				public constructor(param0: java.lang.Exception);
			}
		}
	}
}
