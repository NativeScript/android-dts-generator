/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Icon.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module telecom {
		export class StatusHints {
			public constructor();
			public constructor(param0: string, param1: android.graphics.drawable.Icon, param2: android.os.Bundle);
			public getLabel(): string;
			public getIcon(): android.graphics.drawable.Icon;
			public getExtras(): android.os.Bundle;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
