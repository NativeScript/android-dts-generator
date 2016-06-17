/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.SocketImpl.d.ts" />

declare module java {
	export module net {
		export class SocketImplFactory {
			public createSocketImpl(): java.net.SocketImpl;
		}
	}
}
