/// <reference path="./_helpers.d.ts" />

declare module android {
	export module view {
		export class InputQueue {
			public finalize(): void;
		}
		export module InputQueue {
			export class Callback {
				public onInputQueueCreated(param0: android.view.InputQueue): void;
				public onInputQueueDestroyed(param0: android.view.InputQueue): void;
			}
		}
	}
}
