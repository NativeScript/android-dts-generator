/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />

declare module android {
	export module database {
		export class CrossProcessCursor {
			public getWindow(): android.database.CursorWindow;
			public fillWindow(param0: number, param1: android.database.CursorWindow): void;
			public onMove(param0: number, param1: number): boolean;
		}
	}
}
