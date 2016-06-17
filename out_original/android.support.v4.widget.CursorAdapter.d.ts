/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.support.v4.widget.CursorFilter.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.Filter.d.ts" />
/// <reference path="./android.widget.FilterQueryProvider.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class CursorAdapter {
					public constructor();
					public constructor(param0: android.content.Context, param1: android.database.Cursor);
					public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: boolean);
					public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number);
					public init(param0: android.content.Context, param1: android.database.Cursor, param2: boolean): void;
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
					public mDataValid: boolean;
					public mAutoRequery: boolean;
					public mCursor: android.database.Cursor;
					public mContext: android.content.Context;
					public mRowIDColumn: number;
					public mChangeObserver: android.support.v4.widget.CursorAdapter.ChangeObserver;
					public mDataSetObserver: android.database.DataSetObserver;
					public mCursorFilter: android.support.v4.widget.CursorFilter;
					public mFilterQueryProvider: android.widget.FilterQueryProvider;
					public static FLAG_AUTO_REQUERY: number;
					public static FLAG_REGISTER_CONTENT_OBSERVER: number;
				}
				export module CursorAdapter {
					export class ChangeObserver {
						public constructor(param0: android.os.Handler);
						public constructor();
						public constructor(param0: android.support.v4.widget.CursorAdapter);
						public deliverSelfNotifications(): boolean;
						public onChange(param0: boolean, param1: android.net.Uri): void;
						public onChange(param0: boolean): void;
					}
					export class MyDataSetObserver {
						public onChanged(): void;
						public onInvalidated(): void;
					}
				}
			}
		}
	}
}
