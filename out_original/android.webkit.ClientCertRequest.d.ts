/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />

declare module android {
	export module webkit {
		export class ClientCertRequest {
			public constructor();
			public getKeyTypes(): native.Array<string>;
			public getPrincipals(): native.Array<java.security.Principal>;
			public getHost(): string;
			public getPort(): number;
			public proceed(param0: java.security.PrivateKey, param1: native.Array<java.security.cert.X509Certificate>): void;
			public ignore(): void;
			public cancel(): void;
		}
	}
}
