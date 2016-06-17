/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class CancellationSignal {
					public constructor();
					public isCanceled(): boolean;
					public throwIfCanceled(): void;
					public cancel(): void;
					public setOnCancelListener(param0: android.support.v4.os.CancellationSignal.OnCancelListener): void;
					public getCancellationSignalObject(): java.lang.Object;
				}
				export module CancellationSignal {
					export class OnCancelListener {
						public onCancel(): void;
					}
				}
			}
		}
	}
}
