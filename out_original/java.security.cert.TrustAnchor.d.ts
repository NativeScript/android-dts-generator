/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.PublicKey.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class TrustAnchor {
				public constructor();
				public constructor(param0: java.security.cert.X509Certificate, param1: native.Array<number>);
				public constructor(param0: string, param1: java.security.PublicKey, param2: native.Array<number>);
				public constructor(param0: javax.security.auth.x500.X500Principal, param1: java.security.PublicKey, param2: native.Array<number>);
				public getNameConstraints(): native.Array<number>;
				public getTrustedCert(): java.security.cert.X509Certificate;
				public getCA(): javax.security.auth.x500.X500Principal;
				public getCAName(): string;
				public getCAPublicKey(): java.security.PublicKey;
				public toString(): string;
			}
		}
	}
}
