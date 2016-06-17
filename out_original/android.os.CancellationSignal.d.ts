/// <reference path="./_helpers.d.ts" />

declare module android {
	export module os {
		export class CancellationSignal {
			public constructor();
			public isCanceled(): boolean;
			public throwIfCanceled(): void;
			public cancel(): void;
			public setOnCancelListener(param0: android.os.CancellationSignal.OnCancelListener): void;
		}
		export module CancellationSignal {
			export class OnCancelListener {
				public onCancel(): void;
			}
		}
	}
}
