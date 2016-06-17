/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.security.cert.CertPath.d.ts" />
/// <reference path="./java.security.cert.PolicyNode.d.ts" />
/// <reference path="./java.security.cert.TrustAnchor.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class PKIXCertPathBuilderResult {
				public constructor(param0: java.security.cert.TrustAnchor, param1: java.security.cert.PolicyNode, param2: java.security.PublicKey);
				public constructor();
				public constructor(param0: java.security.cert.CertPath, param1: java.security.cert.TrustAnchor, param2: java.security.cert.PolicyNode, param3: java.security.PublicKey);
				public getCertPath(): java.security.cert.CertPath;
				public toString(): string;
			}
		}
	}
}
