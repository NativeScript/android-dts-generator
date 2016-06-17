/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.DialogInterface.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.support.v7.view.menu.MenuBuilder.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuDialogHelper {
						public constructor();
						public constructor(param0: android.support.v7.view.menu.MenuBuilder);
						public show(param0: android.os.IBinder): void;
						public onKey(param0: android.content.DialogInterface, param1: number, param2: android.view.KeyEvent): boolean;
						public setPresenterCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public dismiss(): void;
						public onDismiss(param0: android.content.DialogInterface): void;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
						public onClick(param0: android.content.DialogInterface, param1: number): void;
					}
				}
			}
		}
	}
}
