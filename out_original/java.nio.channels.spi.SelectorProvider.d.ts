/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.channels.Channel.d.ts" />
/// <reference path="./java.nio.channels.DatagramChannel.d.ts" />
/// <reference path="./java.nio.channels.Pipe.d.ts" />
/// <reference path="./java.nio.channels.ServerSocketChannel.d.ts" />
/// <reference path="./java.nio.channels.SocketChannel.d.ts" />
/// <reference path="./java.nio.channels.spi.AbstractSelector.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export module spi {
				export class SelectorProvider {
					public constructor();
					public static provider(): java.nio.channels.spi.SelectorProvider;
					public openDatagramChannel(): java.nio.channels.DatagramChannel;
					public openPipe(): java.nio.channels.Pipe;
					public openSelector(): java.nio.channels.spi.AbstractSelector;
					public openServerSocketChannel(): java.nio.channels.ServerSocketChannel;
					public openSocketChannel(): java.nio.channels.SocketChannel;
					public inheritedChannel(): java.nio.channels.Channel;
				}
			}
		}
	}
}
