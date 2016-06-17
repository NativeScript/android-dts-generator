/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLSessionContext.d.ts" />
/// <reference path="./javax.security.cert.X509Certificate.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLSession {
				public getApplicationBufferSize(): number;
				public getCipherSuite(): string;
				public getCreationTime(): number;
				public getId(): native.Array<number>;
				public getLastAccessedTime(): number;
				public getLocalCertificates(): native.Array<java.security.cert.Certificate>;
				public getLocalPrincipal(): java.security.Principal;
				public getPacketBufferSize(): number;
				public getPeerCertificateChain(): native.Array<javax.security.cert.X509Certificate>;
				public getPeerCertificates(): native.Array<java.security.cert.Certificate>;
				public getPeerHost(): string;
				public getPeerPort(): number;
				public getPeerPrincipal(): java.security.Principal;
				public getProtocol(): string;
				public getSessionContext(): javax.net.ssl.SSLSessionContext;
				public getValue(param0: string): java.lang.Object;
				public getValueNames(): native.Array<string>;
				public invalidate(): void;
				public isValid(): boolean;
				public putValue(param0: string, param1: java.lang.Object): void;
				public removeValue(param0: string): void;
			}
		}
	}
}
