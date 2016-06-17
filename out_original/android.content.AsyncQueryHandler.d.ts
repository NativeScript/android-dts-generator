/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class AsyncQueryHandler {
			public constructor();
			public constructor(param0: android.os.Handler.Callback);
			public constructor(param0: android.os.Looper);
			public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
			public constructor(param0: android.content.ContentResolver);
			public createHandler(param0: android.os.Looper): android.os.Handler;
			public startQuery(param0: number, param1: java.lang.Object, param2: android.net.Uri, param3: native.Array<string>, param4: string, param5: native.Array<string>, param6: string): void;
			public cancelOperation(param0: number): void;
			public startInsert(param0: number, param1: java.lang.Object, param2: android.net.Uri, param3: android.content.ContentValues): void;
			public startUpdate(param0: number, param1: java.lang.Object, param2: android.net.Uri, param3: android.content.ContentValues, param4: string, param5: native.Array<string>): void;
			public startDelete(param0: number, param1: java.lang.Object, param2: android.net.Uri, param3: string, param4: native.Array<string>): void;
			public onQueryComplete(param0: number, param1: java.lang.Object, param2: android.database.Cursor): void;
			public onInsertComplete(param0: number, param1: java.lang.Object, param2: android.net.Uri): void;
			public onUpdateComplete(param0: number, param1: java.lang.Object, param2: number): void;
			public onDeleteComplete(param0: number, param1: java.lang.Object, param2: number): void;
			public handleMessage(param0: android.os.Message): void;
		}
		export module AsyncQueryHandler {
			export class WorkerArgs {
				public constructor();
				public cookie: java.lang.Object;
				public handler: android.os.Handler;
				public orderBy: string;
				public projection: native.Array<string>;
				public result: java.lang.Object;
				public selection: string;
				public selectionArgs: native.Array<string>;
				public uri: android.net.Uri;
				public values: android.content.ContentValues;
			}
			export class WorkerHandler {
				public constructor();
				public constructor(param0: android.os.Handler.Callback);
				public constructor(param0: android.os.Looper);
				public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
				public constructor(param0: android.content.AsyncQueryHandler, param1: android.os.Looper);
				public handleMessage(param0: android.os.Message): void;
			}
		}
	}
}
