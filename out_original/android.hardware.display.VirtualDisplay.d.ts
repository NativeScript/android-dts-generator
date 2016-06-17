/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.Display.d.ts" />
/// <reference path="./android.view.Surface.d.ts" />

declare module android {
	export module hardware {
		export module display {
			export class VirtualDisplay {
				public getDisplay(): android.view.Display;
				public getSurface(): android.view.Surface;
				public setSurface(param0: android.view.Surface): void;
				public resize(param0: number, param1: number, param2: number): void;
				public release(): void;
				public toString(): string;
			}
			export module VirtualDisplay {
				export class Callback {
					public constructor();
					public onPaused(): void;
					public onResumed(): void;
					public onStopped(): void;
				}
			}
		}
	}
}
