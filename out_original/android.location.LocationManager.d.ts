/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.location.Criteria.d.ts" />
/// <reference path="./android.location.GpsStatus.d.ts" />
/// <reference path="./android.location.Location.d.ts" />
/// <reference path="./android.location.LocationListener.d.ts" />
/// <reference path="./android.location.LocationProvider.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module location {
		export class LocationManager {
			public getAllProviders(): java.util.List;
			public getProviders(param0: boolean): java.util.List;
			public getProvider(param0: string): android.location.LocationProvider;
			public getProviders(param0: android.location.Criteria, param1: boolean): java.util.List;
			public getBestProvider(param0: android.location.Criteria, param1: boolean): string;
			public requestLocationUpdates(param0: string, param1: number, param2: number, param3: android.location.LocationListener): void;
			public requestLocationUpdates(param0: string, param1: number, param2: number, param3: android.location.LocationListener, param4: android.os.Looper): void;
			public requestLocationUpdates(param0: number, param1: number, param2: android.location.Criteria, param3: android.location.LocationListener, param4: android.os.Looper): void;
			public requestLocationUpdates(param0: string, param1: number, param2: number, param3: android.app.PendingIntent): void;
			public requestLocationUpdates(param0: number, param1: number, param2: android.location.Criteria, param3: android.app.PendingIntent): void;
			public requestSingleUpdate(param0: string, param1: android.location.LocationListener, param2: android.os.Looper): void;
			public requestSingleUpdate(param0: android.location.Criteria, param1: android.location.LocationListener, param2: android.os.Looper): void;
			public requestSingleUpdate(param0: string, param1: android.app.PendingIntent): void;
			public requestSingleUpdate(param0: android.location.Criteria, param1: android.app.PendingIntent): void;
			public removeUpdates(param0: android.location.LocationListener): void;
			public removeUpdates(param0: android.app.PendingIntent): void;
			public addProximityAlert(param0: number, param1: number, param2: number, param3: number, param4: android.app.PendingIntent): void;
			public removeProximityAlert(param0: android.app.PendingIntent): void;
			public isProviderEnabled(param0: string): boolean;
			public getLastKnownLocation(param0: string): android.location.Location;
			public addTestProvider(param0: string, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: boolean, param6: boolean, param7: boolean, param8: number, param9: number): void;
			public removeTestProvider(param0: string): void;
			public setTestProviderLocation(param0: string, param1: android.location.Location): void;
			public clearTestProviderLocation(param0: string): void;
			public setTestProviderEnabled(param0: string, param1: boolean): void;
			public clearTestProviderEnabled(param0: string): void;
			public setTestProviderStatus(param0: string, param1: number, param2: android.os.Bundle, param3: number): void;
			public clearTestProviderStatus(param0: string): void;
			public addGpsStatusListener(param0: android.location.GpsStatus.Listener): boolean;
			public removeGpsStatusListener(param0: android.location.GpsStatus.Listener): void;
			public addNmeaListener(param0: android.location.GpsStatus.NmeaListener): boolean;
			public removeNmeaListener(param0: android.location.GpsStatus.NmeaListener): void;
			public getGpsStatus(param0: android.location.GpsStatus): android.location.GpsStatus;
			public sendExtraCommand(param0: string, param1: string, param2: android.os.Bundle): boolean;
			public static GPS_PROVIDER: string;
			public static KEY_LOCATION_CHANGED: string;
			public static KEY_PROVIDER_ENABLED: string;
			public static KEY_PROXIMITY_ENTERING: string;
			public static KEY_STATUS_CHANGED: string;
			public static MODE_CHANGED_ACTION: string;
			public static NETWORK_PROVIDER: string;
			public static PASSIVE_PROVIDER: string;
			public static PROVIDERS_CHANGED_ACTION: string;
		}
	}
}
