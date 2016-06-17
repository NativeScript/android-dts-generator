/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module java {
	export module net {
		export class NetworkInterface {
			public getIndex(): number;
			public getName(): string;
			public getInetAddresses(): java.util.Enumeration;
			public getDisplayName(): string;
			public static getByName(param0: string): java.net.NetworkInterface;
			public static getByInetAddress(param0: java.net.InetAddress): java.net.NetworkInterface;
			public static getByIndex(param0: number): java.net.NetworkInterface;
			public static getNetworkInterfaces(): java.util.Enumeration;
			public equals(param0: java.lang.Object): boolean;
			public hashCode(): number;
			public toString(): string;
			public getInterfaceAddresses(): java.util.List;
			public getSubInterfaces(): java.util.Enumeration;
			public getParent(): java.net.NetworkInterface;
			public isUp(): boolean;
			public isLoopback(): boolean;
			public isPointToPoint(): boolean;
			public supportsMulticast(): boolean;
			public getHardwareAddress(): native.Array<number>;
			public getMTU(): number;
			public isVirtual(): boolean;
		}
	}
}
