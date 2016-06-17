/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module java {
	export module net {
		export class ProxySelector {
			public constructor();
			public static getDefault(): java.net.ProxySelector;
			public static setDefault(param0: java.net.ProxySelector): void;
			public select(param0: java.net.URI): java.util.List;
			public connectFailed(param0: java.net.URI, param1: java.net.SocketAddress, param2: java.io.IOException): void;
		}
	}
}
