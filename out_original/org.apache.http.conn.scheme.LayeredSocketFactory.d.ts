/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />

declare module org {
	export module apache {
		export module http {
			export module conn {
				export module scheme {
					export class LayeredSocketFactory {
						public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
					}
				}
			}
		}
	}
}
