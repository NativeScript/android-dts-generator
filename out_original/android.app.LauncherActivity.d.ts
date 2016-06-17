/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.ResolveInfo.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module app {
		export class LauncherActivity {
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public constructor(param0: android.content.Context);
			public constructor();
			public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onCreate(param0: android.os.Bundle): void;
			public setTitle(param0: number): void;
			public setTitle(param0: string): void;
			public setTitle(param0: number): void;
			public onSetContentView(): void;
			public onListItemClick(param0: android.widget.ListView, param1: android.view.View, param2: number, param3: number): void;
			public intentForPosition(param0: number): android.content.Intent;
			public itemForPosition(param0: number): android.app.LauncherActivity.ListItem;
			public getTargetIntent(): android.content.Intent;
			public onQueryPackageManager(param0: android.content.Intent): java.util.List;
			public makeListItems(): java.util.List;
		}
		export module LauncherActivity {
			export class IconResizer {
				public constructor();
				public constructor(param0: android.app.LauncherActivity);
				public createIconThumbnail(param0: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
			}
			export class ListItem {
				public constructor();
				public className: string;
				public extras: android.os.Bundle;
				public icon: android.graphics.drawable.Drawable;
				public label: string;
				public packageName: string;
				public resolveInfo: android.content.pm.ResolveInfo;
			}
		}
	}
}
