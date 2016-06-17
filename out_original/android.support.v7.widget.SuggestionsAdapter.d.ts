/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.SearchableInfo.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.support.v7.widget.SearchView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.WeakHashMap.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class SuggestionsAdapter {
					public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor);
					public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: boolean);
					public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: number);
					public constructor(param0: android.content.Context, param1: android.database.Cursor);
					public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: boolean);
					public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number);
					public constructor();
					public constructor(param0: android.content.Context, param1: android.support.v7.widget.SearchView, param2: android.app.SearchableInfo, param3: java.util.WeakHashMap);
					public setQueryRefinement(param0: number): void;
					public getQueryRefinement(): number;
					public hasStableIds(): boolean;
					public runQueryOnBackgroundThread(param0: string): android.database.Cursor;
					public close(): void;
					public notifyDataSetChanged(): void;
					public notifyDataSetInvalidated(): void;
					public changeCursor(param0: android.database.Cursor): void;
					public newView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;
					public bindView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor): void;
					public onClick(param0: android.view.View): void;
					public convertToString(param0: android.database.Cursor): string;
					public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public static getColumnString(param0: android.database.Cursor, param1: string): string;
				}
				export module SuggestionsAdapter {
					export class ChildViewCache {
						public constructor();
						public constructor(param0: android.view.View);
						public mText1: android.widget.TextView;
						public mText2: android.widget.TextView;
						public mIcon1: android.widget.ImageView;
						public mIcon2: android.widget.ImageView;
						public mIconRefine: android.widget.ImageView;
					}
				}
			}
		}
	}
}
