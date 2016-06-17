/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.channels.SelectionKey.d.ts" />
/// <reference path="./java.nio.channels.Selector.d.ts" />
/// <reference path="./java.nio.channels.spi.SelectorProvider.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class SelectableChannel {
				public constructor();
				public blockingLock(): java.lang.Object;
				public configureBlocking(param0: boolean): java.nio.channels.SelectableChannel;
				public isBlocking(): boolean;
				public isRegistered(): boolean;
				public keyFor(param0: java.nio.channels.Selector): java.nio.channels.SelectionKey;
				public provider(): java.nio.channels.spi.SelectorProvider;
				public register(param0: java.nio.channels.Selector, param1: number): java.nio.channels.SelectionKey;
				public register(param0: java.nio.channels.Selector, param1: number, param2: java.lang.Object): java.nio.channels.SelectionKey;
				public validOps(): number;
			}
		}
	}
}
