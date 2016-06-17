/// <reference path="./_helpers.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export module spi {
				export class AbstractSelectionKey {
					public constructor();
					public isValid(): boolean;
					public cancel(): void;
				}
			}
		}
	}
}
