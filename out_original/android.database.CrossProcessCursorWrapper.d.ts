/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />

declare module android {
	export module database {
		export class CrossProcessCursorWrapper {
			public constructor();
			public constructor(param0: android.database.Cursor);
			public fillWindow(param0: number, param1: android.database.CursorWindow): void;
			public getWindow(): android.database.CursorWindow;
			public onMove(param0: number, param1: number): boolean;
		}
	}
}
