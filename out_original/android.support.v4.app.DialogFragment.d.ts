/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.FragmentManager.d.ts" />
/// <reference path="./android.support.v4.app.FragmentTransaction.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class DialogFragment {
					public constructor();
					public setStyle(param0: number, param1: number): void;
					public show(param0: android.support.v4.app.FragmentManager, param1: string): void;
					public show(param0: android.support.v4.app.FragmentTransaction, param1: string): number;
					public dismiss(): void;
					public dismissAllowingStateLoss(): void;
					public getDialog(): android.app.Dialog;
					public getTheme(): number;
					public setCancelable(param0: boolean): void;
					public isCancelable(): boolean;
					public setShowsDialog(param0: boolean): void;
					public getShowsDialog(): boolean;
					public onAttach(param0: android.content.Context): void;
					public onAttach(param0: android.app.Activity): void;
					public onDetach(): void;
					public onCreate(param0: android.os.Bundle): void;
					public getLayoutInflater(param0: android.os.Bundle): android.view.LayoutInflater;
					public setupDialog(param0: android.app.Dialog, param1: number): void;
					public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
					public onCancel(param0: android.content.DialogInterface): void;
					public onDismiss(param0: android.content.DialogInterface): void;
					public onActivityCreated(param0: android.os.Bundle): void;
					public onStart(): void;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public onStop(): void;
					public onDestroyView(): void;
					public static STYLE_NORMAL: number;
					public static STYLE_NO_TITLE: number;
					public static STYLE_NO_FRAME: number;
					public static STYLE_NO_INPUT: number;
				}
			}
		}
	}
}
