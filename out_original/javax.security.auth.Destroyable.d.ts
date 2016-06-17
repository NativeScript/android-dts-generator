/// <reference path="./_helpers.d.ts" />

declare module javax {
	export module security {
		export module auth {
			export class Destroyable {
				public destroy(): void;
				public isDestroyed(): boolean;
			}
		}
	}
}
