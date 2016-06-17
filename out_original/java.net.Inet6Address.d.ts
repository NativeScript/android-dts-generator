/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.NetworkInterface.d.ts" />

declare module java {
	export module net {
		export class Inet6Address {
			public static getByAddress(param0: native.Array<number>): java.net.InetAddress;
			public static getByAddress(param0: string, param1: native.Array<number>): java.net.InetAddress;
			public static getByAddress(param0: string, param1: native.Array<number>, param2: number): java.net.Inet6Address;
			public static getByAddress(param0: string, param1: native.Array<number>, param2: java.net.NetworkInterface): java.net.Inet6Address;
			public isAnyLocalAddress(): boolean;
			public isIPv4CompatibleAddress(): boolean;
			public isLinkLocalAddress(): boolean;
			public isLoopbackAddress(): boolean;
			public isMCGlobal(): boolean;
			public isMCLinkLocal(): boolean;
			public isMCNodeLocal(): boolean;
			public isMCOrgLocal(): boolean;
			public isMCSiteLocal(): boolean;
			public isMulticastAddress(): boolean;
			public isSiteLocalAddress(): boolean;
			public getScopeId(): number;
			public getScopedInterface(): java.net.NetworkInterface;
			public toString(): string;
		}
	}
}
