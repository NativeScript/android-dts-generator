/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module database {
		export class MatrixCursor {
			public constructor();
			public constructor(param0: native.Array<string>, param1: number);
			public constructor(param0: native.Array<string>);
			public newRow(): android.database.MatrixCursor.RowBuilder;
			public addRow(param0: native.Array<java.lang.Object>): void;
			public addRow(param0: java.lang.Iterable): void;
			public getCount(): number;
			public getColumnNames(): native.Array<string>;
			public getString(param0: number): string;
			public getShort(param0: number): number;
			public getInt(param0: number): number;
			public getLong(param0: number): number;
			public getFloat(param0: number): number;
			public getDouble(param0: number): number;
			public getBlob(param0: number): native.Array<number>;
			public getType(param0: number): number;
			public isNull(param0: number): boolean;
		}
		export module MatrixCursor {
			export class RowBuilder {
				public add(param0: java.lang.Object): android.database.MatrixCursor.RowBuilder;
				public add(param0: string, param1: java.lang.Object): android.database.MatrixCursor.RowBuilder;
			}
		}
	}
}
