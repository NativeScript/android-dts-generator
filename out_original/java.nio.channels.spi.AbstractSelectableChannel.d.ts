/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.channels.SelectableChannel.d.ts" />
/// <reference path="./java.nio.channels.SelectionKey.d.ts" />
/// <reference path="./java.nio.channels.Selector.d.ts" />
/// <reference path="./java.nio.channels.spi.SelectorProvider.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export module spi {
				export class AbstractSelectableChannel {
					public constructor();
					public constructor(param0: java.nio.channels.spi.SelectorProvider);
					public provider(): java.nio.channels.spi.SelectorProvider;
					public isRegistered(): boolean;
					public keyFor(param0: java.nio.channels.Selector): java.nio.channels.SelectionKey;
					public register(param0: java.nio.channels.Selector, param1: number): java.nio.channels.SelectionKey;
					public register(param0: java.nio.channels.Selector, param1: number, param2: java.lang.Object): java.nio.channels.SelectionKey;
					public implCloseChannel(): void;
					public implCloseSelectableChannel(): void;
					public isBlocking(): boolean;
					public blockingLock(): java.lang.Object;
					public configureBlocking(param0: boolean): java.nio.channels.SelectableChannel;
					public implConfigureBlocking(param0: boolean): void;
				}
			}
		}
	}
}
