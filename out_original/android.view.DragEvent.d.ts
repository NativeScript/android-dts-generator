/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ClipData.d.ts" />
/// <reference path="./android.content.ClipDescription.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module view {
		export class DragEvent {
			public getAction(): number;
			public getX(): number;
			public getY(): number;
			public getClipData(): android.content.ClipData;
			public getClipDescription(): android.content.ClipDescription;
			public getLocalState(): java.lang.Object;
			public getResult(): boolean;
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static ACTION_DRAG_ENDED: number;
			public static ACTION_DRAG_ENTERED: number;
			public static ACTION_DRAG_EXITED: number;
			public static ACTION_DRAG_LOCATION: number;
			public static ACTION_DRAG_STARTED: number;
			public static ACTION_DROP: number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
