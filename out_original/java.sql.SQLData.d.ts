/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.sql.SQLInput.d.ts" />
/// <reference path="./java.sql.SQLOutput.d.ts" />

declare module java {
	export module sql {
		export class SQLData {
			public getSQLTypeName(): string;
			public readSQL(param0: java.sql.SQLInput, param1: string): void;
			public writeSQL(param0: java.sql.SQLOutput): void;
		}
	}
}
