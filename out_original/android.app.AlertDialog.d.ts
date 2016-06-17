/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.Button.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class AlertDialog {
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
			public constructor(param0: android.content.Context, param1: number);
			public getButton(param0: number): android.widget.Button;
			public getListView(): android.widget.ListView;
			public setTitle(param0: number): void;
			public setTitle(param0: string): void;
			public setCustomTitle(param0: android.view.View): void;
			public setMessage(param0: string): void;
			public setView(param0: android.view.View): void;
			public setView(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public setButton(param0: number, param1: string, param2: android.os.Message): void;
			public setButton(param0: number, param1: string, param2: android.content.DialogInterface.OnClickListener): void;
			public setButton(param0: string, param1: android.os.Message): void;
			public setButton2(param0: string, param1: android.os.Message): void;
			public setButton3(param0: string, param1: android.os.Message): void;
			public setButton(param0: string, param1: android.content.DialogInterface.OnClickListener): void;
			public setButton2(param0: string, param1: android.content.DialogInterface.OnClickListener): void;
			public setButton3(param0: string, param1: android.content.DialogInterface.OnClickListener): void;
			public setIcon(param0: number): void;
			public setIcon(param0: android.graphics.drawable.Drawable): void;
			public setIconAttribute(param0: number): void;
			public setInverseBackgroundForced(param0: boolean): void;
			public onCreate(param0: android.os.Bundle): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public static THEME_DEVICE_DEFAULT_DARK: number;
			public static THEME_DEVICE_DEFAULT_LIGHT: number;
			public static THEME_HOLO_DARK: number;
			public static THEME_HOLO_LIGHT: number;
			public static THEME_TRADITIONAL: number;
		}
		export module AlertDialog {
			export class Builder {
				public constructor();
				public constructor(param0: android.content.Context);
				public constructor(param0: android.content.Context, param1: number);
				public getContext(): android.content.Context;
				public setTitle(param0: number): android.app.AlertDialog.Builder;
				public setTitle(param0: string): android.app.AlertDialog.Builder;
				public setCustomTitle(param0: android.view.View): android.app.AlertDialog.Builder;
				public setMessage(param0: number): android.app.AlertDialog.Builder;
				public setMessage(param0: string): android.app.AlertDialog.Builder;
				public setIcon(param0: number): android.app.AlertDialog.Builder;
				public setIcon(param0: android.graphics.drawable.Drawable): android.app.AlertDialog.Builder;
				public setIconAttribute(param0: number): android.app.AlertDialog.Builder;
				public setPositiveButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setPositiveButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setNegativeButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setNegativeButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setNeutralButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setNeutralButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setCancelable(param0: boolean): android.app.AlertDialog.Builder;
				public setOnCancelListener(param0: android.content.DialogInterface.OnCancelListener): android.app.AlertDialog.Builder;
				public setOnDismissListener(param0: android.content.DialogInterface.OnDismissListener): android.app.AlertDialog.Builder;
				public setOnKeyListener(param0: android.content.DialogInterface.OnKeyListener): android.app.AlertDialog.Builder;
				public setItems(param0: number, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setItems(param0: native.Array<java.lang.CharSequence>, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setAdapter(param0: android.widget.ListAdapter, param1: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setCursor(param0: android.database.Cursor, param1: android.content.DialogInterface.OnClickListener, param2: string): android.app.AlertDialog.Builder;
				public setMultiChoiceItems(param0: number, param1: native.Array<boolean>, param2: android.content.DialogInterface.OnMultiChoiceClickListener): android.app.AlertDialog.Builder;
				public setMultiChoiceItems(param0: native.Array<java.lang.CharSequence>, param1: native.Array<boolean>, param2: android.content.DialogInterface.OnMultiChoiceClickListener): android.app.AlertDialog.Builder;
				public setMultiChoiceItems(param0: android.database.Cursor, param1: string, param2: string, param3: android.content.DialogInterface.OnMultiChoiceClickListener): android.app.AlertDialog.Builder;
				public setSingleChoiceItems(param0: number, param1: number, param2: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setSingleChoiceItems(param0: android.database.Cursor, param1: number, param2: string, param3: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setSingleChoiceItems(param0: native.Array<java.lang.CharSequence>, param1: number, param2: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setSingleChoiceItems(param0: android.widget.ListAdapter, param1: number, param2: android.content.DialogInterface.OnClickListener): android.app.AlertDialog.Builder;
				public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): android.app.AlertDialog.Builder;
				public setView(param0: number): android.app.AlertDialog.Builder;
				public setView(param0: android.view.View): android.app.AlertDialog.Builder;
				public setInverseBackgroundForced(param0: boolean): android.app.AlertDialog.Builder;
				public create(): android.app.AlertDialog;
				public show(): android.app.AlertDialog;
			}
		}
	}
}
