/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.net.ServerSocket.d.ts" />
/// <reference path="./java.nio.channels.SocketChannel.d.ts" />
/// <reference path="./java.nio.channels.spi.SelectorProvider.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class ServerSocketChannel {
				public constructor();
				public constructor(param0: java.nio.channels.spi.SelectorProvider);
				public static open(): java.nio.channels.ServerSocketChannel;
				public validOps(): number;
				public socket(): java.net.ServerSocket;
				public accept(): java.nio.channels.SocketChannel;
			}
		}
	}
}
