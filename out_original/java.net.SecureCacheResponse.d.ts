/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module java {
	export module net {
		export class SecureCacheResponse {
			public constructor();
			public getCipherSuite(): string;
			public getLocalCertificateChain(): java.util.List;
			public getServerCertificateChain(): java.util.List;
			public getPeerPrincipal(): java.security.Principal;
			public getLocalPrincipal(): java.security.Principal;
		}
	}
}
