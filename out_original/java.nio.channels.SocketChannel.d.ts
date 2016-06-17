/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./java.nio.channels.spi.SelectorProvider.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class SocketChannel {
				public constructor();
				public constructor(param0: java.nio.channels.spi.SelectorProvider);
				public static open(): java.nio.channels.SocketChannel;
				public static open(param0: java.net.SocketAddress): java.nio.channels.SocketChannel;
				public validOps(): number;
				public socket(): java.net.Socket;
				public isConnected(): boolean;
				public isConnectionPending(): boolean;
				public connect(param0: java.net.SocketAddress): boolean;
				public finishConnect(): boolean;
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
