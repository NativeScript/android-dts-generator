/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.sql.Connection.d.ts" />

declare module javax {
	export module sql {
		export class DataSource {
			public getConnection(): java.sql.Connection;
			public getConnection(param0: string, param1: string): java.sql.Connection;
		}
	}
}
