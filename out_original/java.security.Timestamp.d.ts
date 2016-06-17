/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.cert.CertPath.d.ts" />
/// <reference path="./java.util.Date.d.ts" />

declare module java {
	export module security {
		export class Timestamp {
			public constructor();
			public constructor(param0: java.util.Date, param1: java.security.cert.CertPath);
			public equals(param0: java.lang.Object): boolean;
			public getSignerCertPath(): java.security.cert.CertPath;
			public getTimestamp(): java.util.Date;
			public hashCode(): number;
			public toString(): string;
		}
	}
}
