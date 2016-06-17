/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />

declare module android {
	export module widget {
		export class ResourceCursorTreeAdapter {
			public constructor(param0: android.database.Cursor, param1: android.content.Context);
			public constructor(param0: android.database.Cursor, param1: android.content.Context, param2: boolean);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: number, param5: number);
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number, param4: number);
			public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number, param3: number);
			public newChildView(param0: android.content.Context, param1: android.database.Cursor, param2: boolean, param3: android.view.ViewGroup): android.view.View;
			public newGroupView(param0: android.content.Context, param1: android.database.Cursor, param2: boolean, param3: android.view.ViewGroup): android.view.View;
		}
	}
}
