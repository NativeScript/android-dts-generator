/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module content {
		export class ContentQueryMap {
			public constructor();
			public constructor(param0: android.database.Cursor, param1: string, param2: boolean, param3: android.os.Handler);
			public setKeepUpdated(param0: boolean): void;
			public getValues(param0: string): android.content.ContentValues;
			public requery(): void;
			public getRows(): java.util.Map;
			public close(): void;
			public finalize(): void;
		}
	}
}
