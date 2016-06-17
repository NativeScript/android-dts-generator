/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.gesture.GestureStroke.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module gesture {
		export class Gesture {
			public constructor();
			public clone(): java.lang.Object;
			public getStrokes(): java.util.ArrayList;
			public getStrokesCount(): number;
			public addStroke(param0: android.gesture.GestureStroke): void;
			public getLength(): number;
			public getBoundingBox(): android.graphics.RectF;
			public toPath(): android.graphics.Path;
			public toPath(param0: android.graphics.Path): android.graphics.Path;
			public toPath(param0: number, param1: number, param2: number, param3: number): android.graphics.Path;
			public toPath(param0: android.graphics.Path, param1: number, param2: number, param3: number, param4: number): android.graphics.Path;
			public getID(): number;
			public toBitmap(param0: number, param1: number, param2: number, param3: number, param4: number): android.graphics.Bitmap;
			public toBitmap(param0: number, param1: number, param2: number, param3: number): android.graphics.Bitmap;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public describeContents(): number;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}
