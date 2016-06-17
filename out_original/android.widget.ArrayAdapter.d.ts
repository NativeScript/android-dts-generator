/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module widget {
		export class ArrayAdapter {
			public constructor();
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: number, param2: number);
			public constructor(param0: android.content.Context, param1: number, param2: native.Array<java.lang.Object>);
			public constructor(param0: android.content.Context, param1: number, param2: number, param3: native.Array<java.lang.Object>);
			public constructor(param0: android.content.Context, param1: number, param2: java.util.List);
			public constructor(param0: android.content.Context, param1: number, param2: number, param3: java.util.List);
			public add(param0: java.lang.Object): void;
			public addAll(param0: java.util.Collection): void;
			public addAll(param0: native.Array<java.lang.Object>): void;
			public insert(param0: java.lang.Object, param1: number): void;
			public remove(param0: java.lang.Object): void;
			public clear(): void;
			public sort(param0: java.util.Comparator): void;
			public notifyDataSetChanged(): void;
			public setNotifyOnChange(param0: boolean): void;
			public getContext(): android.content.Context;
			public getCount(): number;
			public getItem(param0: number): java.lang.Object;
			public getPosition(param0: java.lang.Object): number;
			public getItemId(param0: number): number;
			public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			public setDropDownViewResource(param0: number): void;
			public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
			public getDropDownViewTheme(): android.content.res.Resources.Theme;
			public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			public static createFromResource(param0: android.content.Context, param1: number, param2: number): android.widget.ArrayAdapter;
			public getFilter(): android.widget.Filter;
		}
	}
}
