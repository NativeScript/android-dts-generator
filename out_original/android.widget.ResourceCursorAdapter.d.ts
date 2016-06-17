/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module widget {
		export class ResourceCursorAdapter {
			public constructor(param0: android.content.Context, param1: android.database.Cursor);
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: boolean);
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number);
			public constructor();
			public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor);
			public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: boolean);
			public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: number);
			public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
			public newView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;
			public newDropDownView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;
			public setViewResource(param0: number): void;
			public setDropDownViewResource(param0: number): void;
		}
	}
}
