/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.Timestamp.d.ts" />
/// <reference path="./java.security.cert.CertPath.d.ts" />

declare module java {
	export module security {
		export class CodeSigner {
			public constructor();
			public constructor(param0: java.security.cert.CertPath, param1: java.security.Timestamp);
			public equals(param0: java.lang.Object): boolean;
			public getSignerCertPath(): java.security.cert.CertPath;
			public getTimestamp(): java.security.Timestamp;
			public hashCode(): number;
			public toString(): string;
		}
	}
}
