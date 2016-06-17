/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.ServiceInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module media {
		export module tv {
			export class TvInputInfo {
				public getId(): string;
				public getParentId(): string;
				public getServiceInfo(): android.content.pm.ServiceInfo;
				public createSetupIntent(): android.content.Intent;
				public createSettingsIntent(): android.content.Intent;
				public getType(): number;
				public isPassthroughInput(): boolean;
				public loadLabel(param0: android.content.Context): string;
				public loadIcon(param0: android.content.Context): android.graphics.drawable.Drawable;
				public describeContents(): number;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toString(): string;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public static EXTRA_INPUT_ID: string;
				public static TYPE_COMPONENT: number;
				public static TYPE_COMPOSITE: number;
				public static TYPE_DISPLAY_PORT: number;
				public static TYPE_DVI: number;
				public static TYPE_HDMI: number;
				public static TYPE_OTHER: number;
				public static TYPE_SCART: number;
				public static TYPE_SVIDEO: number;
				public static TYPE_TUNER: number;
				public static TYPE_VGA: number;
			}
		}
	}
}
