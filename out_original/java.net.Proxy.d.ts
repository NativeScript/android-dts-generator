/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />

declare module java {
	export module net {
		export class Proxy {
			public constructor();
			public constructor(param0: java.net.Proxy.Type, param1: java.net.SocketAddress);
			public type(): java.net.Proxy.Type;
			public address(): java.net.SocketAddress;
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public static NO_PROXY: java.net.Proxy;
		}
		export module Proxy {
			export class Type {
				public static values(): native.Array<java.net.Proxy.Type>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): java.net.Proxy.Type;
				public static DIRECT: java.net.Proxy.Type;
				public static HTTP: java.net.Proxy.Type;
				public static SOCKS: java.net.Proxy.Type;
			}
		}
	}
}
