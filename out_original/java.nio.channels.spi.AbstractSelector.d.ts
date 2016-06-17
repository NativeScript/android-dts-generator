/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.channels.SelectionKey.d.ts" />
/// <reference path="./java.nio.channels.spi.AbstractSelectableChannel.d.ts" />
/// <reference path="./java.nio.channels.spi.AbstractSelectionKey.d.ts" />
/// <reference path="./java.nio.channels.spi.SelectorProvider.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export module spi {
				export class AbstractSelector {
					public constructor();
					public constructor(param0: java.nio.channels.spi.SelectorProvider);
					public close(): void;
					public implCloseSelector(): void;
					public isOpen(): boolean;
					public provider(): java.nio.channels.spi.SelectorProvider;
					public cancelledKeys(): java.util.Set;
					public register(param0: java.nio.channels.spi.AbstractSelectableChannel, param1: number, param2: java.lang.Object): java.nio.channels.SelectionKey;
					public deregister(param0: java.nio.channels.spi.AbstractSelectionKey): void;
					public begin(): void;
					public end(): void;
				}
			}
		}
	}
}
