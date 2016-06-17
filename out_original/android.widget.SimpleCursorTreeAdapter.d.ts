/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class SimpleCursorTreeAdapter {
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: number, param5: number);
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: number);
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number);
			public constructor(param0: android.database.Cursor, param1: android.content.Context);
			public constructor(param0: android.database.Cursor, param1: android.content.Context, param2: boolean);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: native.Array<string>, param5: native.Array<number>, param6: number, param7: number, param8: native.Array<string>, param9: native.Array<number>);
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: native.Array<string>, param5: native.Array<number>, param6: number, param7: native.Array<string>, param8: native.Array<number>);
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: native.Array<string>, param4: native.Array<number>, param5: number, param6: native.Array<string>, param7: native.Array<number>);
			public getViewBinder(): android.widget.SimpleCursorTreeAdapter.ViewBinder;
			public setViewBinder(param0: android.widget.SimpleCursorTreeAdapter.ViewBinder): void;
			public bindChildView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor, param3: boolean): void;
			public bindGroupView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor, param3: boolean): void;
			public setViewImage(param0: android.widget.ImageView, param1: string): void;
			public setViewText(param0: android.widget.TextView, param1: string): void;
		}
		export module SimpleCursorTreeAdapter {
			export class ViewBinder {
				public setViewValue(param0: android.view.View, param1: android.database.Cursor, param2: number): boolean;
			}
		}
	}
}
