/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./java.security.SecureRandom.d.ts" />
/// <reference path="./org.apache.http.conn.scheme.HostNameResolver.d.ts" />
/// <reference path="./org.apache.http.conn.ssl.X509HostnameVerifier.d.ts" />
/// <reference path="./org.apache.http.params.HttpParams.d.ts" />

declare module org {
	export module apache {
		export module http {
			export module conn {
				export module ssl {
					export class SSLSocketFactory {
						public constructor();
						public constructor(param0: string, param1: java.security.KeyStore, param2: string, param3: java.security.KeyStore, param4: java.security.SecureRandom, param5: org.apache.http.conn.scheme.HostNameResolver);
						public constructor(param0: java.security.KeyStore, param1: string, param2: java.security.KeyStore);
						public constructor(param0: java.security.KeyStore, param1: string);
						public constructor(param0: java.security.KeyStore);
						public static getSocketFactory(): org.apache.http.conn.ssl.SSLSocketFactory;
						public createSocket(): java.net.Socket;
						public connectSocket(param0: java.net.Socket, param1: string, param2: number, param3: java.net.InetAddress, param4: number, param5: org.apache.http.params.HttpParams): java.net.Socket;
						public isSecure(param0: java.net.Socket): boolean;
						public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
						public setHostnameVerifier(param0: org.apache.http.conn.ssl.X509HostnameVerifier): void;
						public getHostnameVerifier(): org.apache.http.conn.ssl.X509HostnameVerifier;
						public static ALLOW_ALL_HOSTNAME_VERIFIER: org.apache.http.conn.ssl.X509HostnameVerifier;
						public static BROWSER_COMPATIBLE_HOSTNAME_VERIFIER: org.apache.http.conn.ssl.X509HostnameVerifier;
						public static SSL: string;
						public static SSLV2: string;
						public static STRICT_HOSTNAME_VERIFIER: org.apache.http.conn.ssl.X509HostnameVerifier;
						public static TLS: string;
					}
				}
			}
		}
	}
}
