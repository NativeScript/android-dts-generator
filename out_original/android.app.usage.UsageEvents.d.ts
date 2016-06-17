/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module app {
		export module usage {
			export class UsageEvents {
				public hasNextEvent(): boolean;
				public getNextEvent(param0: android.app.usage.UsageEvents.Event): boolean;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export module UsageEvents {
				export class Event {
					public constructor();
					public getPackageName(): string;
					public getClassName(): string;
					public getTimeStamp(): number;
					public getEventType(): number;
					public getConfiguration(): android.content.res.Configuration;
					public static CONFIGURATION_CHANGE: number;
					public static MOVE_TO_BACKGROUND: number;
					public static MOVE_TO_FOREGROUND: number;
					public static NONE: number;
					public static USER_INTERACTION: number;
				}
			}
		}
	}
}
