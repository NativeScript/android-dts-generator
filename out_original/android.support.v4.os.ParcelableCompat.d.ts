/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.support.v4.os.ParcelableCompatCreatorCallbacks.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class ParcelableCompat {
					public static newCreator(param0: android.support.v4.os.ParcelableCompatCreatorCallbacks): android.os.Parcelable.Creator;
				}
				export module ParcelableCompat {
					export class CompatCreator {
						public constructor();
						public constructor(param0: android.support.v4.os.ParcelableCompatCreatorCallbacks);
						public createFromParcel(param0: android.os.Parcel): java.lang.Object;
						public newArray(param0: number): native.Array<java.lang.Object>;
					}
				}
			}
		}
	}
}
