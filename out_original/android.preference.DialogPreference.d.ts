/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module preference {
		export class DialogPreference {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context);
			public setDialogTitle(param0: string): void;
			public setDialogTitle(param0: number): void;
			public getDialogTitle(): string;
			public setDialogMessage(param0: string): void;
			public setDialogMessage(param0: number): void;
			public getDialogMessage(): string;
			public setDialogIcon(param0: android.graphics.drawable.Drawable): void;
			public setDialogIcon(param0: number): void;
			public getDialogIcon(): android.graphics.drawable.Drawable;
			public setPositiveButtonText(param0: string): void;
			public setPositiveButtonText(param0: number): void;
			public getPositiveButtonText(): string;
			public setNegativeButtonText(param0: string): void;
			public setNegativeButtonText(param0: number): void;
			public getNegativeButtonText(): string;
			public setDialogLayoutResource(param0: number): void;
			public getDialogLayoutResource(): number;
			public onPrepareDialogBuilder(param0: android.app.AlertDialog.Builder): void;
			public onClick(): void;
			public showDialog(param0: android.os.Bundle): void;
			public onCreateDialogView(): android.view.View;
			public onBindDialogView(param0: android.view.View): void;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public onDismiss(param0: android.content.DialogInterface): void;
			public onDialogClosed(param0: boolean): void;
			public getDialog(): android.app.Dialog;
			public onActivityDestroy(): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
		}
	}
}
