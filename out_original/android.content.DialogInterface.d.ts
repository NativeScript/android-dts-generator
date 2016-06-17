/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />

declare module android {
	export module content {
		export class DialogInterface {
			public cancel(): void;
			public dismiss(): void;
			public static BUTTON1: number;
			public static BUTTON2: number;
			public static BUTTON3: number;
			public static BUTTON_NEGATIVE: number;
			public static BUTTON_NEUTRAL: number;
			public static BUTTON_POSITIVE: number;
		}
		export module DialogInterface {
			export class OnCancelListener {
				public onCancel(param0: android.content.DialogInterface): void;
			}
			export class OnClickListener {
				public onClick(param0: android.content.DialogInterface, param1: number): void;
			}
			export class OnDismissListener {
				public onDismiss(param0: android.content.DialogInterface): void;
			}
			export class OnKeyListener {
				public onKey(param0: android.content.DialogInterface, param1: number, param2: android.view.KeyEvent): boolean;
			}
			export class OnMultiChoiceClickListener {
				public onClick(param0: android.content.DialogInterface, param1: number, param2: boolean): void;
			}
			export class OnShowListener {
				public onShow(param0: android.content.DialogInterface): void;
			}
		}
	}
}
