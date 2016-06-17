/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.util.Date.d.ts" />

declare module javax {
	export module security {
		export module cert {
			export class X509Certificate {
				public constructor();
				public static getInstance(param0: java.io.InputStream): javax.security.cert.X509Certificate;
				public static getInstance(param0: native.Array<number>): javax.security.cert.X509Certificate;
				public checkValidity(): void;
				public checkValidity(param0: java.util.Date): void;
				public getVersion(): number;
				public getSerialNumber(): java.math.BigInteger;
				public getIssuerDN(): java.security.Principal;
				public getSubjectDN(): java.security.Principal;
				public getNotBefore(): java.util.Date;
				public getNotAfter(): java.util.Date;
				public getSigAlgName(): string;
				public getSigAlgOID(): string;
				public getSigAlgParams(): native.Array<number>;
			}
		}
	}
}
