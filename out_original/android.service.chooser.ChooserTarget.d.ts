/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module service {
		export module chooser {
			export class ChooserTarget {
				public constructor();
				public constructor(param0: string, param1: android.graphics.drawable.Icon, param2: number, param3: android.content.ComponentName, param4: android.os.Bundle);
				public getTitle(): string;
				public getIcon(): android.graphics.drawable.Icon;
				public getScore(): number;
				public getComponentName(): android.content.ComponentName;
				public getIntentExtras(): android.os.Bundle;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
