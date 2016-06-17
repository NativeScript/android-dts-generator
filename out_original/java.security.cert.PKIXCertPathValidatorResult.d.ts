/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.security.cert.PolicyNode.d.ts" />
/// <reference path="./java.security.cert.TrustAnchor.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class PKIXCertPathValidatorResult {
				public constructor();
				public constructor(param0: java.security.cert.TrustAnchor, param1: java.security.cert.PolicyNode, param2: java.security.PublicKey);
				public getPolicyTree(): java.security.cert.PolicyNode;
				public getPublicKey(): java.security.PublicKey;
				public getTrustAnchor(): java.security.cert.TrustAnchor;
				public clone(): java.lang.Object;
				public toString(): string;
			}
		}
	}
}
