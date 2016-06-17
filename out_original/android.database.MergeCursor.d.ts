/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />

declare module android {
	export module database {
		export class MergeCursor {
			public constructor();
			public constructor(param0: native.Array<android.database.Cursor>);
			public getCount(): number;
			public onMove(param0: number, param1: number): boolean;
			public getString(param0: number): string;
			public getShort(param0: number): number;
			public getInt(param0: number): number;
			public getLong(param0: number): number;
			public getFloat(param0: number): number;
			public getDouble(param0: number): number;
			public getType(param0: number): number;
			public isNull(param0: number): boolean;
			public getBlob(param0: number): native.Array<number>;
			public getColumnNames(): native.Array<string>;
			public deactivate(): void;
			public close(): void;
			public registerContentObserver(param0: android.database.ContentObserver): void;
			public unregisterContentObserver(param0: android.database.ContentObserver): void;
			public registerDataSetObserver(param0: android.database.DataSetObserver): void;
			public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
			public requery(): boolean;
		}
	}
}
