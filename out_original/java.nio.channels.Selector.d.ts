/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.channels.spi.SelectorProvider.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class Selector {
				public constructor();
				public static open(): java.nio.channels.Selector;
				public close(): void;
				public isOpen(): boolean;
				public keys(): java.util.Set;
				public provider(): java.nio.channels.spi.SelectorProvider;
				public select(): number;
				public select(param0: number): number;
				public selectedKeys(): java.util.Set;
				public selectNow(): number;
				public wakeup(): java.nio.channels.Selector;
			}
		}
	}
}
