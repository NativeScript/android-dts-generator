/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class X509Extension {
				public getCriticalExtensionOIDs(): java.util.Set;
				public getExtensionValue(param0: string): native.Array<number>;
				public getNonCriticalExtensionOIDs(): java.util.Set;
				public hasUnsupportedCriticalExtension(): boolean;
			}
		}
	}
}
