/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.cert.CRL.d.ts" />
/// <reference path="./java.security.cert.CertPath.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.security.cert.CertificateFactorySpi.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertificateFactory {
				public constructor();
				public constructor(param0: java.security.cert.CertificateFactorySpi, param1: java.security.Provider, param2: string);
				public static getInstance(param0: string): java.security.cert.CertificateFactory;
				public static getInstance(param0: string, param1: string): java.security.cert.CertificateFactory;
				public static getInstance(param0: string, param1: java.security.Provider): java.security.cert.CertificateFactory;
				public getProvider(): java.security.Provider;
				public getType(): string;
				public generateCertificate(param0: java.io.InputStream): java.security.cert.Certificate;
				public getCertPathEncodings(): java.util.Iterator;
				public generateCertPath(param0: java.io.InputStream): java.security.cert.CertPath;
				public generateCertPath(param0: java.io.InputStream, param1: string): java.security.cert.CertPath;
				public generateCertPath(param0: java.util.List): java.security.cert.CertPath;
				public generateCertificates(param0: java.io.InputStream): java.util.Collection;
				public generateCRL(param0: java.io.InputStream): java.security.cert.CRL;
				public generateCRLs(param0: java.io.InputStream): java.util.Collection;
			}
		}
	}
}
