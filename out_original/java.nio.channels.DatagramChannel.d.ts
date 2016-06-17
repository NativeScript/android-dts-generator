/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.DatagramSocket.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.channels.spi.SelectorProvider.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class DatagramChannel {
				public constructor();
				public constructor(param0: java.nio.channels.spi.SelectorProvider);
				public static open(): java.nio.channels.DatagramChannel;
				public validOps(): number;
				public socket(): java.net.DatagramSocket;
				public isConnected(): boolean;
				public connect(param0: java.net.SocketAddress): java.nio.channels.DatagramChannel;
				public disconnect(): java.nio.channels.DatagramChannel;
				public receive(param0: java.nio.ByteBuffer): java.net.SocketAddress;
				public send(param0: java.nio.ByteBuffer, param1: java.net.SocketAddress): number;
				public read(param0: java.nio.ByteBuffer): number;
				public read(param0: native.Array<java.nio.ByteBuffer>, param1: number, param2: number): number;
				public read(param0: native.Array<java.nio.ByteBuffer>): number;
				public write(param0: java.nio.ByteBuffer): number;
				public write(param0: native.Array<java.nio.ByteBuffer>, param1: number, param2: number): number;
				public write(param0: native.Array<java.nio.ByteBuffer>): number;
			}
		}
	}
}
