/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.support.v4.os.ParcelableCompatCreatorCallbacks.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class ParcelableCompatCreatorHoneycombMR2 {
					public constructor();
					public constructor(param0: android.support.v4.os.ParcelableCompatCreatorCallbacks);
					public createFromParcel(param0: android.os.Parcel): java.lang.Object;
					public createFromParcel(param0: android.os.Parcel, param1: java.lang.ClassLoader): java.lang.Object;
					public newArray(param0: number): native.Array<java.lang.Object>;
				}
			}
		}
	}
}
