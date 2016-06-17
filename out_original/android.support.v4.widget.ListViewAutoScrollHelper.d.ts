/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class ListViewAutoScrollHelper {
					public constructor(param0: android.view.View);
					public constructor();
					public constructor(param0: android.widget.ListView);
					public scrollTargetBy(param0: number, param1: number): void;
					public canTargetScrollHorizontally(param0: number): boolean;
					public canTargetScrollVertically(param0: number): boolean;
				}
			}
		}
	}
}
