/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class ShareActionProvider {
			public constructor();
			public constructor(param0: android.content.Context);
			public setOnShareTargetSelectedListener(param0: android.widget.ShareActionProvider.OnShareTargetSelectedListener): void;
			public onCreateActionView(param0: android.view.MenuItem): android.view.View;
			public onCreateActionView(): android.view.View;
			public hasSubMenu(): boolean;
			public onPrepareSubMenu(param0: android.view.SubMenu): void;
			public setShareHistoryFileName(param0: string): void;
			public setShareIntent(param0: android.content.Intent): void;
			public static DEFAULT_SHARE_HISTORY_FILE_NAME: string;
		}
		export module ShareActionProvider {
			export class OnShareTargetSelectedListener {
				public onShareTargetSelected(param0: android.widget.ShareActionProvider, param1: android.content.Intent): boolean;
			}
		}
	}
}
