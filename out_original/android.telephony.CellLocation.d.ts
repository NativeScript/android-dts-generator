/// <reference path="./_helpers.d.ts" />

declare module android {
	export module telephony {
		export class CellLocation {
			public constructor();
			public static requestLocationUpdate(): void;
			public static getEmpty(): android.telephony.CellLocation;
		}
	}
}
