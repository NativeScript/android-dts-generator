/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class DecorContentParent {
					public setWindowCallback(param0: android.view.Window.Callback): void;
					public setWindowTitle(param0: string): void;
					public getTitle(): string;
					public initFeature(param0: number): void;
					public setUiOptions(param0: number): void;
					public hasIcon(): boolean;
					public hasLogo(): boolean;
					public setIcon(param0: number): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setLogo(param0: number): void;
					public canShowOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
					public isOverflowMenuShowPending(): boolean;
					public showOverflowMenu(): boolean;
					public hideOverflowMenu(): boolean;
					public setMenuPrepared(): void;
					public setMenu(param0: android.view.Menu, param1: android.support.v7.view.menu.MenuPresenter.Callback): void;
					public saveToolbarHierarchyState(param0: android.util.SparseArray): void;
					public restoreToolbarHierarchyState(param0: android.util.SparseArray): void;
					public dismissPopups(): void;
				}
			}
		}
	}
}
