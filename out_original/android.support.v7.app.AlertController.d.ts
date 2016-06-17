/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.support.v7.app.AppCompatDialog.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.Window.d.ts" />
/// <reference path="./android.widget.Button.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AlertController {
					public constructor();
					public constructor(param0: android.content.Context, param1: android.support.v7.app.AppCompatDialog, param2: android.view.Window);
					public installContent(): void;
					public setTitle(param0: string): void;
					public setCustomTitle(param0: android.view.View): void;
					public setMessage(param0: string): void;
					public setView(param0: number): void;
					public setView(param0: android.view.View): void;
					public setView(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public setButtonPanelLayoutHint(param0: number): void;
					public setButton(param0: number, param1: string, param2: android.content.DialogInterface.OnClickListener, param3: android.os.Message): void;
					public setIcon(param0: number): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public getIconAttributeResId(param0: number): number;
					public getListView(): android.widget.ListView;
					public getButton(param0: number): android.widget.Button;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				}
				export module AlertController {
					export class AlertParams {
						public constructor();
						public constructor(param0: android.content.Context);
						public apply(param0: android.support.v7.app.AlertController): void;
						public mContext: android.content.Context;
						public mInflater: android.view.LayoutInflater;
						public mIconId: number;
						public mIcon: android.graphics.drawable.Drawable;
						public mIconAttrId: number;
						public mTitle: string;
						public mCustomTitleView: android.view.View;
						public mMessage: string;
						public mPositiveButtonText: string;
						public mPositiveButtonListener: android.content.DialogInterface.OnClickListener;
						public mNegativeButtonText: string;
						public mNegativeButtonListener: android.content.DialogInterface.OnClickListener;
						public mNeutralButtonText: string;
						public mNeutralButtonListener: android.content.DialogInterface.OnClickListener;
						public mCancelable: boolean;
						public mOnCancelListener: android.content.DialogInterface.OnCancelListener;
						public mOnDismissListener: android.content.DialogInterface.OnDismissListener;
						public mOnKeyListener: android.content.DialogInterface.OnKeyListener;
						public mItems: native.Array<java.lang.CharSequence>;
						public mAdapter: android.widget.ListAdapter;
						public mOnClickListener: android.content.DialogInterface.OnClickListener;
						public mViewLayoutResId: number;
						public mView: android.view.View;
						public mViewSpacingLeft: number;
						public mViewSpacingTop: number;
						public mViewSpacingRight: number;
						public mViewSpacingBottom: number;
						public mViewSpacingSpecified: boolean;
						public mCheckedItems: native.Array<boolean>;
						public mIsMultiChoice: boolean;
						public mIsSingleChoice: boolean;
						public mCheckedItem: number;
						public mOnCheckboxClickListener: android.content.DialogInterface.OnMultiChoiceClickListener;
						public mCursor: android.database.Cursor;
						public mLabelColumn: string;
						public mIsCheckedColumn: string;
						public mForceInverseBackground: boolean;
						public mOnItemSelectedListener: android.widget.AdapterView.OnItemSelectedListener;
						public mOnPrepareListViewListener: android.support.v7.app.AlertController.AlertParams.OnPrepareListViewListener;
						public mRecycleOnMeasure: boolean;
					}
					export module AlertParams {
						export class OnPrepareListViewListener {
							public onPrepareListView(param0: android.widget.ListView): void;
						}
					}
					export class ButtonHandler {
						public constructor();
						public constructor(param0: android.os.Handler.Callback);
						public constructor(param0: android.os.Looper);
						public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
						public constructor(param0: android.content.DialogInterface);
						public handleMessage(param0: android.os.Message): void;
					}
					export class CheckedItemAdapter {
						public constructor(param0: android.content.Context, param1: number);
						public constructor(param0: android.content.Context, param1: number, param2: number);
						public constructor(param0: android.content.Context, param1: number, param2: native.Array<java.lang.Object>);
						public constructor(param0: android.content.Context, param1: number, param2: number, param3: native.Array<java.lang.Object>);
						public constructor(param0: android.content.Context, param1: number, param2: java.util.List);
						public constructor(param0: android.content.Context, param1: number, param2: number, param3: java.util.List);
						public constructor();
						public constructor(param0: android.content.Context, param1: number, param2: number, param3: native.Array<java.lang.CharSequence>);
						public hasStableIds(): boolean;
						public getItemId(param0: number): number;
					}
				}
			}
		}
	}
}
