/// <reference path="./_helpers.d.ts" />

declare module android {
	export module security {
		export class NetworkSecurityPolicy {
			public static getInstance(): android.security.NetworkSecurityPolicy;
			public isCleartextTrafficPermitted(): boolean;
		}
	}
}
