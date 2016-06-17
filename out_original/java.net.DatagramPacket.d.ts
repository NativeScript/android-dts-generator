/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />

declare module java {
	export module net {
		export class DatagramPacket {
			public constructor();
			public constructor(param0: native.Array<number>, param1: number);
			public constructor(param0: native.Array<number>, param1: number, param2: number);
			public constructor(param0: native.Array<number>, param1: number, param2: number, param3: java.net.InetAddress, param4: number);
			public constructor(param0: native.Array<number>, param1: number, param2: java.net.InetAddress, param3: number);
			public constructor(param0: native.Array<number>, param1: number, param2: java.net.SocketAddress);
			public constructor(param0: native.Array<number>, param1: number, param2: number, param3: java.net.SocketAddress);
			public getAddress(): java.net.InetAddress;
			public getData(): native.Array<number>;
			public getLength(): number;
			public getOffset(): number;
			public getPort(): number;
			public setAddress(param0: java.net.InetAddress): void;
			public setData(param0: native.Array<number>, param1: number, param2: number): void;
			public setData(param0: native.Array<number>): void;
			public setLength(param0: number): void;
			public setPort(param0: number): void;
			public getSocketAddress(): java.net.SocketAddress;
			public setSocketAddress(param0: java.net.SocketAddress): void;
		}
	}
}
