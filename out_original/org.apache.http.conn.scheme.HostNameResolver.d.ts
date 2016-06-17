/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />

declare module org {
	export module apache {
		export module http {
			export module conn {
				export module scheme {
					export class HostNameResolver {
						public resolve(param0: string): java.net.InetAddress;
					}
				}
			}
		}
	}
}
