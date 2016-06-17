/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.widget.TabHost.d.ts" />
/// <reference path="./android.widget.TabWidget.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class TabActivity {
			public constructor(param0: boolean);
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public constructor(param0: android.content.Context);
			public constructor();
			public setDefaultTab(param0: string): void;
			public setDefaultTab(param0: number): void;
			public onRestoreInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onRestoreInstanceState(param0: android.os.Bundle): void;
			public onPostCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onPostCreate(param0: android.os.Bundle): void;
			public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onSaveInstanceState(param0: android.os.Bundle): void;
			public onContentChanged(): void;
			public onChildTitleChanged(param0: android.app.Activity, param1: string): void;
			public getTabHost(): android.widget.TabHost;
			public getTabWidget(): android.widget.TabWidget;
		}
	}
}
