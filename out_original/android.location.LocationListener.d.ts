/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.location.Location.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module location {
		export class LocationListener {
			public onLocationChanged(param0: android.location.Location): void;
			public onStatusChanged(param0: string, param1: number, param2: android.os.Bundle): void;
			public onProviderEnabled(param0: string): void;
			public onProviderDisabled(param0: string): void;
		}
	}
}
