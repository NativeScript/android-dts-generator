/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module view {
		export class WindowId {
			public isFocused(): boolean;
			public registerFocusObserver(param0: android.view.WindowId.FocusObserver): void;
			public unregisterFocusObserver(param0: android.view.WindowId.FocusObserver): void;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
		}
		export module WindowId {
			export class FocusObserver {
				public constructor();
				public onFocusGained(param0: android.view.WindowId): void;
				public onFocusLost(param0: android.view.WindowId): void;
			}
		}
	}
}
