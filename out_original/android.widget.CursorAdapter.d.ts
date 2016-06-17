/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.FilterQueryProvider.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module widget {
		export class CursorAdapter {
			public constructor();
			public constructor(param0: android.content.Context, param1: android.database.Cursor);
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: boolean);
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number);
			public init(param0: android.content.Context, param1: android.database.Cursor, param2: boolean): void;
			public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
			public getDropDownViewTheme(): android.content.res.Resources.Theme;
			public getCursor(): android.database.Cursor;
			public getCount(): number;
			public getItem(param0: number): java.lang.Object;
			public getItemId(param0: number): number;
			public hasStableIds(): boolean;
			public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			public newView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;
			public newDropDownView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;
			public bindView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor): void;
			public changeCursor(param0: android.database.Cursor): void;
			public swapCursor(param0: android.database.Cursor): android.database.Cursor;
			public convertToString(param0: android.database.Cursor): string;
			public runQueryOnBackgroundThread(param0: string): android.database.Cursor;
			public getFilter(): android.widget.Filter;
			public getFilterQueryProvider(): android.widget.FilterQueryProvider;
			public setFilterQueryProvider(param0: android.widget.FilterQueryProvider): void;
			public onContentChanged(): void;
			public static FLAG_AUTO_REQUERY: number;
			public static FLAG_REGISTER_CONTENT_OBSERVER: number;
		}
	}
}
