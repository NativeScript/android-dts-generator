/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.DatagramSocketImpl.d.ts" />

declare module java {
	export module net {
		export class DatagramSocketImplFactory {
			public createDatagramSocketImpl(): java.net.DatagramSocketImpl;
		}
	}
}
