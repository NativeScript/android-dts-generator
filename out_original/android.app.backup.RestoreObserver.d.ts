/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export module backup {
			export class RestoreObserver {
				public constructor();
				public restoreStarting(param0: number): void;
				public onUpdate(param0: number, param1: string): void;
				public restoreFinished(param0: number): void;
			}
		}
	}
}
