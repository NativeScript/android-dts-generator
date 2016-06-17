/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class ParcelableCompatCreatorCallbacks {
					public createFromParcel(param0: android.os.Parcel, param1: java.lang.ClassLoader): java.lang.Object;
					public newArray(param0: number): native.Array<java.lang.Object>;
				}
			}
		}
	}
}
