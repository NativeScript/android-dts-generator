/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.AbsListView.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ListPopupWindow {
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public setAdapter(param0: android.widget.ListAdapter): void;
					public setPromptPosition(param0: number): void;
					public getPromptPosition(): number;
					public setModal(param0: boolean): void;
					public isModal(): boolean;
					public setForceIgnoreOutsideTouch(param0: boolean): void;
					public setDropDownAlwaysVisible(param0: boolean): void;
					public isDropDownAlwaysVisible(): boolean;
					public setSoftInputMode(param0: number): void;
					public getSoftInputMode(): number;
					public setListSelector(param0: android.graphics.drawable.Drawable): void;
					public getBackground(): android.graphics.drawable.Drawable;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setAnimationStyle(param0: number): void;
					public getAnimationStyle(): number;
					public getAnchorView(): android.view.View;
					public setAnchorView(param0: android.view.View): void;
					public getHorizontalOffset(): number;
					public setHorizontalOffset(param0: number): void;
					public getVerticalOffset(): number;
					public setVerticalOffset(param0: number): void;
					public setDropDownGravity(param0: number): void;
					public getWidth(): number;
					public setWidth(param0: number): void;
					public setContentWidth(param0: number): void;
					public getHeight(): number;
					public setHeight(param0: number): void;
					public setWindowLayoutType(param0: number): void;
					public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;
					public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): void;
					public setPromptView(param0: android.view.View): void;
					public postShow(): void;
					public show(): void;
					public dismiss(): void;
					public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
					public setInputMethodMode(param0: number): void;
					public getInputMethodMode(): number;
					public setSelection(param0: number): void;
					public clearListSelection(): void;
					public isShowing(): boolean;
					public isInputMethodNotNeeded(): boolean;
					public performItemClick(param0: number): boolean;
					public getSelectedItem(): java.lang.Object;
					public getSelectedItemPosition(): number;
					public getSelectedItemId(): number;
					public getSelectedView(): android.view.View;
					public getListView(): android.widget.ListView;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;
					public createDragToOpenListener(param0: android.view.View): android.view.View.OnTouchListener;
					public static POSITION_PROMPT_ABOVE: number;
					public static POSITION_PROMPT_BELOW: number;
					public static MATCH_PARENT: number;
					public static WRAP_CONTENT: number;
					public static INPUT_METHOD_FROM_FOCUSABLE: number;
					public static INPUT_METHOD_NEEDED: number;
					public static INPUT_METHOD_NOT_NEEDED: number;
				}
				export module ListPopupWindow {
					export class DropDownListView {
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public constructor();
						public constructor(param0: android.content.Context, param1: boolean);
						public onForwardedEvent(param0: android.view.MotionEvent, param1: number): boolean;
						public touchModeDrawsInPressedStateCompat(): boolean;
						public isInTouchMode(): boolean;
						public hasWindowFocus(): boolean;
						public isFocused(): boolean;
						public hasFocus(): boolean;
					}
					export class ForwardingListener {
						public constructor();
						public constructor(param0: android.view.View);
						public getPopup(): android.support.v7.widget.ListPopupWindow;
						public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
						public onForwardingStarted(): boolean;
						public onForwardingStopped(): boolean;
					}
					export module ForwardingListener {
						export class DisallowIntercept {
							public run(): void;
						}
						export class TriggerLongPress {
							public run(): void;
						}
					}
					export class ListSelectorHider {
						public run(): void;
					}
					export class PopupDataSetObserver {
						public onChanged(): void;
						public onInvalidated(): void;
					}
					export class PopupScrollListener {
						public onScroll(param0: android.widget.AbsListView, param1: number, param2: number, param3: number): void;
						public onScrollStateChanged(param0: android.widget.AbsListView, param1: number): void;
					}
					export class PopupTouchInterceptor {
						public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
					}
					export class ResizePopupRunnable {
						public run(): void;
					}
				}
			}
		}
	}
}
