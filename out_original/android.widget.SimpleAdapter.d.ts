/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module widget {
		export class SimpleAdapter {
			public constructor();
			public constructor(param0: android.content.Context, param1: java.util.List, param2: number, param3: native.Array<string>, param4: native.Array<number>);
			public getCount(): number;
			public getItem(param0: number): java.lang.Object;
			public getItemId(param0: number): number;
			public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			public setDropDownViewResource(param0: number): void;
			public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
			public getDropDownViewTheme(): android.content.res.Resources.Theme;
			public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			public getViewBinder(): android.widget.SimpleAdapter.ViewBinder;
			public setViewBinder(param0: android.widget.SimpleAdapter.ViewBinder): void;
			public setViewImage(param0: android.widget.ImageView, param1: number): void;
			public setViewImage(param0: android.widget.ImageView, param1: string): void;
			public setViewText(param0: android.widget.TextView, param1: string): void;
			public getFilter(): android.widget.Filter;
		}
		export module SimpleAdapter {
			export class ViewBinder {
				public setViewValue(param0: android.view.View, param1: java.lang.Object, param2: string): boolean;
			}
		}
	}
}
