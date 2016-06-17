/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatDialogFragment {
					public constructor();
					public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
					public setupDialog(param0: android.app.Dialog, param1: number): void;
				}
			}
		}
	}
}
