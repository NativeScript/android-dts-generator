/// <reference path="./_helpers.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export module spi {
				export class AbstractInterruptibleChannel {
					public constructor();
					public isOpen(): boolean;
					public close(): void;
					public begin(): void;
					public end(param0: boolean): void;
					public implCloseChannel(): void;
				}
			}
		}
	}
}
