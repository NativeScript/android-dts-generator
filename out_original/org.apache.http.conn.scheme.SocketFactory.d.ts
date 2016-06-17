/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./org.apache.http.params.HttpParams.d.ts" />

declare module org {
	export module apache {
		export module http {
			export module conn {
				export module scheme {
					export class SocketFactory {
						public createSocket(): java.net.Socket;
						public connectSocket(param0: java.net.Socket, param1: string, param2: number, param3: java.net.InetAddress, param4: number, param5: org.apache.http.params.HttpParams): java.net.Socket;
						public isSecure(param0: java.net.Socket): boolean;
					}
				}
			}
		}
	}
}
