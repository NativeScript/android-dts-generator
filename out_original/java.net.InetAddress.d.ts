/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.NetworkInterface.d.ts" />

declare module java {
	export module net {
		export class InetAddress {
			public equals(param0: java.lang.Object): boolean;
			public getAddress(): native.Array<number>;
			public static getAllByName(param0: string): native.Array<java.net.InetAddress>;
			public static getByName(param0: string): java.net.InetAddress;
			public getHostAddress(): string;
			public getHostName(): string;
			public getCanonicalHostName(): string;
			public static getLocalHost(): java.net.InetAddress;
			public hashCode(): number;
			public toString(): string;
			public static getLoopbackAddress(): java.net.InetAddress;
			public isAnyLocalAddress(): boolean;
			public isLinkLocalAddress(): boolean;
			public isLoopbackAddress(): boolean;
			public isMCGlobal(): boolean;
			public isMCLinkLocal(): boolean;
			public isMCNodeLocal(): boolean;
			public isMCOrgLocal(): boolean;
			public isMCSiteLocal(): boolean;
			public isMulticastAddress(): boolean;
			public isSiteLocalAddress(): boolean;
			public isReachable(param0: number): boolean;
			public isReachable(param0: java.net.NetworkInterface, param1: number, param2: number): boolean;
			public static getByAddress(param0: native.Array<number>): java.net.InetAddress;
			public static getByAddress(param0: string, param1: native.Array<number>): java.net.InetAddress;
		}
	}
}
