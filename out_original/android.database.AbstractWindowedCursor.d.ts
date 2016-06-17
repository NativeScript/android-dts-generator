/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />

declare module android {
	export module database {
		export class AbstractWindowedCursor {
			public constructor();
			public getBlob(param0: number): native.Array<number>;
			public getString(param0: number): string;
			public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
			public getShort(param0: number): number;
			public getInt(param0: number): number;
			public getLong(param0: number): number;
			public getFloat(param0: number): number;
			public getDouble(param0: number): number;
			public isNull(param0: number): boolean;
			public isBlob(param0: number): boolean;
			public isString(param0: number): boolean;
			public isLong(param0: number): boolean;
			public isFloat(param0: number): boolean;
			public getType(param0: number): number;
			public checkPosition(): void;
			public getWindow(): android.database.CursorWindow;
			public setWindow(param0: android.database.CursorWindow): void;
			public hasWindow(): boolean;
			public mWindow: android.database.CursorWindow;
		}
	}
}
