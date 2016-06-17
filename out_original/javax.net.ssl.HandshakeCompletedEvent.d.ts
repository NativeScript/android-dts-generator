/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
/// <reference path="./javax.security.cert.X509Certificate.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class HandshakeCompletedEvent {
				public constructor(param0: java.lang.Object);
				public constructor();
				public constructor(param0: javax.net.ssl.SSLSocket, param1: javax.net.ssl.SSLSession);
				public getSession(): javax.net.ssl.SSLSession;
				public getCipherSuite(): string;
				public getLocalCertificates(): native.Array<java.security.cert.Certificate>;
				public getPeerCertificates(): native.Array<java.security.cert.Certificate>;
				public getPeerCertificateChain(): native.Array<javax.security.cert.X509Certificate>;
				public getPeerPrincipal(): java.security.Principal;
				public getLocalPrincipal(): java.security.Principal;
				public getSocket(): javax.net.ssl.SSLSocket;
			}
		}
	}
}
