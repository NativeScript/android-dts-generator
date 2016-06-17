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
	export module support {
		export module v7 {
			export module app {
				export class AlertDialog {
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
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
					public setIcon(param0: number): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setIconAttribute(param0: number): void;
					public onCreate(param0: android.os.Bundle): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				}
				export module AlertDialog {
					export class Builder {
						public constructor();
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: number);
						public getContext(): android.content.Context;
						public setTitle(param0: number): android.support.v7.app.AlertDialog.Builder;
						public setTitle(param0: string): android.support.v7.app.AlertDialog.Builder;
						public setCustomTitle(param0: android.view.View): android.support.v7.app.AlertDialog.Builder;
						public setMessage(param0: number): android.support.v7.app.AlertDialog.Builder;
						public setMessage(param0: string): android.support.v7.app.AlertDialog.Builder;
						public setIcon(param0: number): android.support.v7.app.AlertDialog.Builder;
						public setIcon(param0: android.graphics.drawable.Drawable): android.support.v7.app.AlertDialog.Builder;
						public setIconAttribute(param0: number): android.support.v7.app.AlertDialog.Builder;
						public setPositiveButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setPositiveButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setNegativeButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setNegativeButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setNeutralButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setNeutralButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setCancelable(param0: boolean): android.support.v7.app.AlertDialog.Builder;
						public setOnCancelListener(param0: android.content.DialogInterface.OnCancelListener): android.support.v7.app.AlertDialog.Builder;
						public setOnDismissListener(param0: android.content.DialogInterface.OnDismissListener): android.support.v7.app.AlertDialog.Builder;
						public setOnKeyListener(param0: android.content.DialogInterface.OnKeyListener): android.support.v7.app.AlertDialog.Builder;
						public setItems(param0: number, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setItems(param0: native.Array<java.lang.CharSequence>, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setAdapter(param0: android.widget.ListAdapter, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setCursor(param0: android.database.Cursor, param1: android.content.DialogInterface.OnClickListener, param2: string): android.support.v7.app.AlertDialog.Builder;
						public setMultiChoiceItems(param0: number, param1: native.Array<boolean>, param2: android.content.DialogInterface.OnMultiChoiceClickListener): android.support.v7.app.AlertDialog.Builder;
						public setMultiChoiceItems(param0: native.Array<java.lang.CharSequence>, param1: native.Array<boolean>, param2: android.content.DialogInterface.OnMultiChoiceClickListener): android.support.v7.app.AlertDialog.Builder;
						public setMultiChoiceItems(param0: android.database.Cursor, param1: string, param2: string, param3: android.content.DialogInterface.OnMultiChoiceClickListener): android.support.v7.app.AlertDialog.Builder;
						public setSingleChoiceItems(param0: number, param1: number, param2: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setSingleChoiceItems(param0: android.database.Cursor, param1: number, param2: string, param3: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setSingleChoiceItems(param0: native.Array<java.lang.CharSequence>, param1: number, param2: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setSingleChoiceItems(param0: android.widget.ListAdapter, param1: number, param2: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): android.support.v7.app.AlertDialog.Builder;
						public setView(param0: number): android.support.v7.app.AlertDialog.Builder;
						public setView(param0: android.view.View): android.support.v7.app.AlertDialog.Builder;
						public setView(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): android.support.v7.app.AlertDialog.Builder;
						public setInverseBackgroundForced(param0: boolean): android.support.v7.app.AlertDialog.Builder;
						public setRecycleOnMeasureEnabled(param0: boolean): android.support.v7.app.AlertDialog.Builder;
						public create(): android.support.v7.app.AlertDialog;
						public show(): android.support.v7.app.AlertDialog;
					}
				}
			}
		}
	}
}
