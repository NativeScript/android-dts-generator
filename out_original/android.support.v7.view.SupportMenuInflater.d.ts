/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./android.view.SubMenu.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class SupportMenuInflater {
					public constructor();
					public constructor(param0: android.content.Context);
					public inflate(param0: number, param1: android.view.Menu): void;
				}
				export module SupportMenuInflater {
					export class InflatedOnMenuItemClickListener {
						public constructor();
						public constructor(param0: java.lang.Object, param1: string);
						public onMenuItemClick(param0: android.view.MenuItem): boolean;
					}
					export class MenuState {
						public constructor();
						public constructor(param0: android.support.v7.view.SupportMenuInflater, param1: android.view.Menu);
						public resetGroup(): void;
						public readGroup(param0: android.util.AttributeSet): void;
						public readItem(param0: android.util.AttributeSet): void;
						public addItem(): void;
						public addSubMenuItem(): android.view.SubMenu;
						public hasAddedItem(): boolean;
					}
				}
			}
		}
	}
}
