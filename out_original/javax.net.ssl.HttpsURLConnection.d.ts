/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./javax.net.ssl.HostnameVerifier.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class HttpsURLConnection {
				public constructor();
				public constructor(param0: java.net.URL);
				public static setDefaultHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
				public static getDefaultHostnameVerifier(): javax.net.ssl.HostnameVerifier;
				public static setDefaultSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
				public static getDefaultSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
				public getCipherSuite(): string;
				public getLocalCertificates(): native.Array<java.security.cert.Certificate>;
				public getServerCertificates(): native.Array<java.security.cert.Certificate>;
				public getPeerPrincipal(): java.security.Principal;
				public getLocalPrincipal(): java.security.Principal;
				public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
				public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
				public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
				public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
				public hostnameVerifier: javax.net.ssl.HostnameVerifier;
			}
		}
	}
}
