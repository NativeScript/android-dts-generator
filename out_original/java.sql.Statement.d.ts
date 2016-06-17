/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.sql.Connection.d.ts" />
/// <reference path="./java.sql.ResultSet.d.ts" />
/// <reference path="./java.sql.SQLWarning.d.ts" />

declare module java {
	export module sql {
		export class Statement {
			public addBatch(param0: string): void;
			public cancel(): void;
			public clearBatch(): void;
			public clearWarnings(): void;
			public close(): void;
			public execute(param0: string): boolean;
			public execute(param0: string, param1: number): boolean;
			public execute(param0: string, param1: native.Array<number>): boolean;
			public execute(param0: string, param1: native.Array<string>): boolean;
			public executeBatch(): native.Array<number>;
			public executeQuery(param0: string): java.sql.ResultSet;
			public executeUpdate(param0: string): number;
			public executeUpdate(param0: string, param1: number): number;
			public executeUpdate(param0: string, param1: native.Array<number>): number;
			public executeUpdate(param0: string, param1: native.Array<string>): number;
			public getConnection(): java.sql.Connection;
			public getFetchDirection(): number;
			public getFetchSize(): number;
			public getGeneratedKeys(): java.sql.ResultSet;
			public getMaxFieldSize(): number;
			public getMaxRows(): number;
			public getMoreResults(): boolean;
			public getMoreResults(param0: number): boolean;
			public getQueryTimeout(): number;
			public getResultSet(): java.sql.ResultSet;
			public getResultSetConcurrency(): number;
			public getResultSetHoldability(): number;
			public getResultSetType(): number;
			public getUpdateCount(): number;
			public getWarnings(): java.sql.SQLWarning;
			public setCursorName(param0: string): void;
			public setEscapeProcessing(param0: boolean): void;
			public setFetchDirection(param0: number): void;
			public setFetchSize(param0: number): void;
			public setMaxFieldSize(param0: number): void;
			public setMaxRows(param0: number): void;
			public setQueryTimeout(param0: number): void;
			public isClosed(): boolean;
			public setPoolable(param0: boolean): void;
			public isPoolable(): boolean;
			public static CLOSE_ALL_RESULTS: number;
			public static CLOSE_CURRENT_RESULT: number;
			public static EXECUTE_FAILED: number;
			public static KEEP_CURRENT_RESULT: number;
			public static NO_GENERATED_KEYS: number;
			public static RETURN_GENERATED_KEYS: number;
			public static SUCCESS_NO_INFO: number;
		}
	}
}
