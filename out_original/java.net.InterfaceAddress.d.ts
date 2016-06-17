/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />

declare module java {
	export module net {
		export class InterfaceAddress {
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public getAddress(): java.net.InetAddress;
			public getBroadcast(): java.net.InetAddress;
			public getNetworkPrefixLength(): number;
		}
	}
}
