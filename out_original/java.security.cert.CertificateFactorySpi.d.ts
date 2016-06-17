/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.CRL.d.ts" />
/// <reference path="./java.security.cert.CertPath.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertificateFactorySpi {
				public constructor();
				public engineGenerateCertificate(param0: java.io.InputStream): java.security.cert.Certificate;
				public engineGenerateCertificates(param0: java.io.InputStream): java.util.Collection;
				public engineGenerateCRL(param0: java.io.InputStream): java.security.cert.CRL;
				public engineGenerateCRLs(param0: java.io.InputStream): java.util.Collection;
				public engineGenerateCertPath(param0: java.io.InputStream): java.security.cert.CertPath;
				public engineGenerateCertPath(param0: java.io.InputStream, param1: string): java.security.cert.CertPath;
				public engineGenerateCertPath(param0: java.util.List): java.security.cert.CertPath;
				public engineGetCertPathEncodings(): java.util.Iterator;
			}
		}
	}
}
