/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module javax {
	export module sql {
		export class RowSetMetaData {
			public setAutoIncrement(param0: number, param1: boolean): void;
			public setCaseSensitive(param0: number, param1: boolean): void;
			public setCatalogName(param0: number, param1: string): void;
			public setColumnCount(param0: number): void;
			public setColumnDisplaySize(param0: number, param1: number): void;
			public setColumnLabel(param0: number, param1: string): void;
			public setColumnName(param0: number, param1: string): void;
			public setColumnType(param0: number, param1: number): void;
			public setColumnTypeName(param0: number, param1: string): void;
			public setCurrency(param0: number, param1: boolean): void;
			public setNullable(param0: number, param1: number): void;
			public setPrecision(param0: number, param1: number): void;
			public setScale(param0: number, param1: number): void;
			public setSchemaName(param0: number, param1: string): void;
			public setSearchable(param0: number, param1: boolean): void;
			public setSigned(param0: number, param1: boolean): void;
			public setTableName(param0: number, param1: string): void;
		}
	}
}
