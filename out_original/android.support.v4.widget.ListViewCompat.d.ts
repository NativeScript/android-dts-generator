/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class ListViewCompat {
					public static scrollListBy(param0: android.widget.ListView, param1: number): void;
				}
			}
		}
	}
}
