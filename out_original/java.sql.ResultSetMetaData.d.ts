/// <reference path="./_helpers.d.ts" />

declare module java {
	export module sql {
		export class ResultSetMetaData {
			public getCatalogName(param0: number): string;
			public getColumnClassName(param0: number): string;
			public getColumnCount(): number;
			public getColumnDisplaySize(param0: number): number;
			public getColumnLabel(param0: number): string;
			public getColumnName(param0: number): string;
			public getColumnType(param0: number): number;
			public getColumnTypeName(param0: number): string;
			public getPrecision(param0: number): number;
			public getScale(param0: number): number;
			public getSchemaName(param0: number): string;
			public getTableName(param0: number): string;
			public isAutoIncrement(param0: number): boolean;
			public isCaseSensitive(param0: number): boolean;
			public isCurrency(param0: number): boolean;
			public isDefinitelyWritable(param0: number): boolean;
			public isNullable(param0: number): number;
			public isReadOnly(param0: number): boolean;
			public isSearchable(param0: number): boolean;
			public isSigned(param0: number): boolean;
			public isWritable(param0: number): boolean;
			public static columnNoNulls: number;
			public static columnNullable: number;
			public static columnNullableUnknown: number;
		}
	}
}
