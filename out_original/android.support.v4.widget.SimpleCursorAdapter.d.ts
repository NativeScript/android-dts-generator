/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class SimpleCursorAdapter {
					public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor);
					public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: boolean);
					public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: number);
					public constructor(param0: android.content.Context, param1: android.database.Cursor);
					public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: boolean);
					public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number);
					public constructor();
					public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: native.Array<string>, param4: native.Array<number>);
					public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: native.Array<string>, param4: native.Array<number>, param5: number);
					public bindView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor): void;
					public getViewBinder(): android.support.v4.widget.SimpleCursorAdapter.ViewBinder;
					public setViewBinder(param0: android.support.v4.widget.SimpleCursorAdapter.ViewBinder): void;
					public setViewImage(param0: android.widget.ImageView, param1: string): void;
					public setViewText(param0: android.widget.TextView, param1: string): void;
					public getStringConversionColumn(): number;
					public setStringConversionColumn(param0: number): void;
					public getCursorToStringConverter(): android.support.v4.widget.SimpleCursorAdapter.CursorToStringConverter;
					public setCursorToStringConverter(param0: android.support.v4.widget.SimpleCursorAdapter.CursorToStringConverter): void;
					public convertToString(param0: android.database.Cursor): string;
					public swapCursor(param0: android.database.Cursor): android.database.Cursor;
					public changeCursorAndColumns(param0: android.database.Cursor, param1: native.Array<string>, param2: native.Array<number>): void;
					public mFrom: native.Array<number>;
					public mTo: native.Array<number>;
				}
				export module SimpleCursorAdapter {
					export class CursorToStringConverter {
						public convertToString(param0: android.database.Cursor): string;
					}
					export class ViewBinder {
						public setViewValue(param0: android.view.View, param1: android.database.Cursor, param2: number): boolean;
					}
				}
			}
		}
	}
}
