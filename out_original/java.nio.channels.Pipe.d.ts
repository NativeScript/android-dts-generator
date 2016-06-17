/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.channels.spi.SelectorProvider.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class Pipe {
				public constructor();
				public static open(): java.nio.channels.Pipe;
				public sink(): java.nio.channels.Pipe.SinkChannel;
				public source(): java.nio.channels.Pipe.SourceChannel;
			}
			export module Pipe {
				export class SinkChannel {
					public constructor();
					public constructor(param0: java.nio.channels.spi.SelectorProvider);
					public validOps(): number;
				}
				export class SourceChannel {
					public constructor();
					public constructor(param0: java.nio.channels.spi.SelectorProvider);
					public validOps(): number;
				}
			}
		}
	}
}
