/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class LDAPCertStoreParameters {
				public constructor();
				public constructor(param0: string, param1: number);
				public constructor();
				public constructor(param0: string);
				public clone(): java.lang.Object;
				public getPort(): number;
				public getServerName(): string;
				public toString(): string;
			}
		}
	}
}
