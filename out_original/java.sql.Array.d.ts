/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.ResultSet.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module sql {
		export class Array {
			public getArray(): java.lang.Object;
			public getArray(param0: number, param1: number): java.lang.Object;
			public getArray(param0: number, param1: number, param2: java.util.Map): java.lang.Object;
			public getArray(param0: java.util.Map): java.lang.Object;
			public getBaseType(): number;
			public getBaseTypeName(): string;
			public getResultSet(): java.sql.ResultSet;
			public getResultSet(param0: number, param1: number): java.sql.ResultSet;
			public getResultSet(param0: number, param1: number, param2: java.util.Map): java.sql.ResultSet;
			public getResultSet(param0: java.util.Map): java.sql.ResultSet;
			public free(): void;
		}
	}
}
