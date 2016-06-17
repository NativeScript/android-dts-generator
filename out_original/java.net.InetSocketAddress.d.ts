/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />

declare module java {
	export module net {
		export class InetSocketAddress {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: java.net.InetAddress, param1: number);
			public constructor(param0: string, param1: number);
			public static createUnresolved(param0: string, param1: number): java.net.InetSocketAddress;
			public getPort(): number;
			public getAddress(): java.net.InetAddress;
			public getHostName(): string;
			public getHostString(): string;
			public isUnresolved(): boolean;
			public toString(): string;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
		}
	}
}
