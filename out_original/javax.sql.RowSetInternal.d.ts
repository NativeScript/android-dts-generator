/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.Connection.d.ts" />
/// <reference path="./java.sql.ResultSet.d.ts" />
/// <reference path="./javax.sql.RowSetMetaData.d.ts" />

declare module javax {
	export module sql {
		export class RowSetInternal {
			public getConnection(): java.sql.Connection;
			public getOriginal(): java.sql.ResultSet;
			public getOriginalRow(): java.sql.ResultSet;
			public getParams(): native.Array<java.lang.Object>;
			public setMetaData(param0: javax.sql.RowSetMetaData): void;
		}
	}
}
